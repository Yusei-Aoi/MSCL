NDSummary.OnToolTipsLoaded("CClass:BaseStationFeatures",{4282:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4282\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a BaseStation.</div></div>",4284:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4284\" class=\"NDPrototype NoParameterForm\">BaseStationInfo m_baseInfo</div><div class=\"TTSummary\">The BaseStationInfo object containing basic information retrieved from eeprom about the BaseStation.</div></div>",4286:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4286\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationFeatures(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationFeatures object.</div></div>",4287:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4287\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::unique_ptr&lt;BaseStationFeatures&gt; create(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds and returns a BaseStationFeatures pointer based on the given parameters.</div></div>",4288:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4288\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> supportsTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::TransmitPower is supported by this BaseStation.</div></div>",4289:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4289\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> supportsCommunicationProtocol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">protocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::CommProtocol is supported by this BaseStation.</div></div>",4290:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4290\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsButtons() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports Button configuration.</div></div>",4291:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4291\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsAnalogPairing() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports Analog Pairing configuration.</div></div>",4292:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4292\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsBeaconStatus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the beaconStatus command.</div></div>",4293:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4293\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsRfSweepMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports RF Sweep Mode.&nbsp; Note: This checks if the standard RF sweep mode across the BaseStation\'s supported operating frequencies is supported.&nbsp; Use supportsCustomRfSweepMode to check if customizing the frequencies to be scanned is supported.</div></div>",4294:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4294\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsCustomRfSweepMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the Custom RF Sweep Mode (providing custom frequency ranges).</div></div>",4295:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4295\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> buttonCount() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of buttons that are supported.</div></div>",4296:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4296\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> analogPortCount() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of analog ports that are supported.</div></div>",4297:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4297\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::TransmitPowers transmitPowers(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::TransmitPowers that are supported by this BaseStation, for the specified WirelessTypes::CommProtocol.&nbsp; Note: This list is dependent on the WirelessTypes::RegionCode of the device. If this changes, this function should be called again.</div></div>",4298:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4298\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::CommProtocols commProtocols() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of WirelessTypes::CommProtocols that are supported by this BaseStation.</div></div>",4299:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4299\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::TransmitPower maxTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">RegionCode&nbsp;</td><td class=\"PName last\">region,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum WirelessTypes::TransmitPower that is supported for the given parameters.</div></div>",4300:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4300\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::TransmitPower minTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">RegionCode&nbsp;</td><td class=\"PName last\">region,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the minimum WirelessTypes::TransmitPower that is supported for the given parameters.</div></div>",4301:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4301\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsNewTransmitPowers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the new transmit powers (true), or the old ones (false).</div></div>",4302:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4302\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsEepromCommitViaRadioReset() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if eeprom changes can be committed by only cycling the radio, instead of cycling power.</div></div>",4303:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4303\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsEeprom1024AndAbove() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the Node supports reading eeprom location 1024 and above.</div></div>"});