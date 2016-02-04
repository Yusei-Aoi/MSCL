/*******************************************************************************
Copyright(c) 2015-2016 LORD Corporation. All rights reserved.

MIT Licensed. See the included LICENSE.txt for a copy of the full MIT License.
*******************************************************************************/
#include "stdafx.h"
#include "WriteEeprom.h"
#include "mscl/MicroStrain/ByteStream.h"
#include "mscl/MicroStrain/Wireless/Packets/WirelessPacket.h"

namespace mscl
{
    ByteStream WriteEeprom::buildCommand(NodeAddress nodeAddress, uint16 eepromAddress, uint16 valueToWrite)
    {
        //build the command ByteStream
        ByteStream cmd;
        cmd.append_uint8(0xAA);                //Start of Packet
        cmd.append_uint8(0x05);                //Delivery Stop Flag
        cmd.append_uint8(0x00);                //App Data Type
        cmd.append_uint16(nodeAddress);        //Node address    (2 bytes)
        cmd.append_uint8(0x06);                //Payload length
        cmd.append_uint16(COMMAND_ID);        //Command ID    (2 bytes)
        cmd.append_uint16(eepromAddress);    //EEPROM Address (2 bytes)
        cmd.append_uint16(valueToWrite);    //EEPROM Address (2 bytes)

        //calculate the checsum of bytes 2-12
        uint16 checksum = cmd.calculateSimpleChecksum(1, 11);

        cmd.append_uint16(checksum);        //Checksum        (2 bytes)

        return cmd;
    }

    WriteEeprom::Response::Response(NodeAddress nodeAddress, std::weak_ptr<ResponseCollector> collector):
        ResponsePattern(collector),
        m_nodeAddress(nodeAddress)
    {
    }

    bool WriteEeprom::Response::match(const WirelessPacket& packet)
    {
        WirelessPacket::Payload payload = packet.payload();

        //check the main bytes of the packet
        if( packet.deliveryStopFlags().toByte() != 0x00 ||    //delivery stop flag
            packet.type() != 0x00 ||                        //app data type
            packet.nodeAddress() != m_nodeAddress ||        //node address
            payload.size() != 0x02                            //payload length
            )            
        {
            //failed to match some of the bytes
            return false;
        }

        //get the eeprom value from the response
        uint16 commandId = payload.read_uint16(0);

        //make sure the command ID is correct
        if(commandId != COMMAND_ID)
        {
            //failed to match the COMMAND ID
            return false;
        }

        //if we made it here, the packet matches the response pattern

        //set the result
        m_success = true;

        //we have fully matched the response
        m_fullyMatched = true;

        //notify that the response was matched
        m_matchCondition.notify();

        return true;
    }
}