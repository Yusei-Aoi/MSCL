NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/NodeMemory_v2.h",{6845:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6845\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeMemory_v2</div></div></div><div class=\"TTSummary\">Provides easy access to the datalogging memory (v2) on a WirelessNode.</div></div>",6847:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6847\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">NodeMemory_v2(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">FlashInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">flashInfo,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">startAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a NodeMemory_v2 object.</div></div>",6855:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6855\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~NodeMemory_v2()</div><div class=\"TTSummary\">Destroys a NodeMemory_v2 object.</div></div>",6857:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6857\" class=\"NDPrototype NoParameterForm\">FlashInfo m_flashInfo</div><div class=\"TTSummary\">The FlashInfo of the Node.</div></div>",6858:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6858\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const uint32</span> m_startAddress</div><div class=\"TTSummary\">The flash address of the first log header.</div></div>",6859:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6859\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_lastAddress</div><div class=\"TTSummary\">The address of the last flash memory location.</div></div>",6860:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6860\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_downloadAddress</div><div class=\"TTSummary\">The flash address to use for the next download command.</div></div>",6861:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6861\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_previousDownloadAddress</div><div class=\"TTSummary\">The flash address of the previous download command.</div></div>",6862:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6862\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_readIndex</div><div class=\"TTSummary\">The index into the current data buffer to read from.</div></div>",6863:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6863\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_checksumIndex</div><div class=\"TTSummary\">The index of the first checksum byte in the current data buffer.</div></div>",6864:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6864\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_sweepSize</div><div class=\"TTSummary\">The size of a single sweep of data (used for smaller header parsing).</div></div>",6865:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6865\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_derivedSweepSize</div><div class=\"TTSummary\">The size of a single sweep of derived data (used for smaller header parsing).</div></div>",6866:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6866\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_isMathData</div><div class=\"TTSummary\">True if the current data being parsed is math data, false if it is raw data.</div></div>",6867:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6867\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_partialDownload</div><div class=\"TTSummary\">Flag used to know if a download of data has been started, but not fully completed.</div></div>",6868:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6868\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_doneDownloading</div><div class=\"TTSummary\">Flag to store whether we have downloaded all the data or not.</div></div>",6869:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6869\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_startedDownloading</div><div class=\"TTSummary\">true if we\'ve downloaded at least some data.</div></div>",6870:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6870\" class=\"NDPrototype NoParameterForm\">ByteStream m_nextData</div><div class=\"TTSummary\">ByteStream to hold the next valid block.</div></div>",6871:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6871\" class=\"NDPrototype NoParameterForm\">ByteStream m_extraData</div><div class=\"TTSummary\">ByteStream to hold extra bytes before being pushed into m_nextData.</div></div>",6873:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6873\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> nextBlockAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">currentAddress</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the address of the next block from the given address.</div></div>",6874:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6874\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> bytesLeftToDownload() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of bytes left to download based on the current download address.&nbsp; Note: this does not include bytes left to read in the current data buffer, just to download.</div></div>",6875:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6875\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> normalizeAddress()</div><div class=\"TTSummary\">Normalizes the download address so that it wraps around (circular buffer) in the case of overflowing the max memory.</div></div>",6876:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6876\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verifyBlock(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">buffer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">checksumPos,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">needMoreData&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Verifies that the buffer passed in contains a full, valid block.</div></div>",6877:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6877\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> fillBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">buffer</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Fills the given buffer with the next valid block, if found.</div></div>",6878:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6878\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> nextByte() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Reads the next byte from the datalogging data.</div></div>",6879:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6879\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> isNextByteNewHeader() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Checks if the next byte will be the start of a new header.&nbsp; Note: upon returning from this function, the read position will not have changed.</div></div>",6880:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6880\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint32</span> readIndex() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Returns the current read index for the data.</div></div>",6881:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6881\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> setAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">newAddress</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Sets the read address to the specified value.</div></div>",6882:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6882\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint32</span> bytesRemaining() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Calculates how many bytes are remaining in the Node\'s datalogging memory, based on the current byte position.</div></div>",6883:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6883\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual float</span> percentComplete() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Calculates the percentage complete based on the current byte position.</div></div>"});