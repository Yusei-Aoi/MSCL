/*******************************************************************************
Copyright(c) 2015-2020 Parker Hannifin Corp. All rights reserved.

MIT Licensed. See the included LICENSE.txt for a copy of the full MIT License.
*******************************************************************************/
#include "stdafx.h"
#include "Resume.h"

namespace mscl
{
    ByteStream Resume::buildCommand()
    {
        //build and return the command bytes
        return GenericMipCommand::buildCommand(CMD_ID);
    }

    Resume::Response::Response(std::weak_ptr<ResponseCollector> collector):
        GenericMipCommand::Response(MipTypes::CMD_RESUME, collector, true, false, "Resume")
    {
    }
}