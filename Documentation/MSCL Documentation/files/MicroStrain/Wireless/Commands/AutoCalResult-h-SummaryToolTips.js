NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/AutoCalResult.h",{2934:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2934\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult</div></div></div><div class=\"TTSummary\">Abstract base class for AutoCal result classes.</div></div>",2936:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2936\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag completionFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalCompletionFlag of the AutoCal operation result.</div></div>",2937:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2937\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes sent in the successful response packet.</div></div>",2939:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2939\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag m_completionFlag</div><div class=\"TTSummary\">The WirelessTypes::AutoCalCompletionFlag of the AutoCal operation.</div></div>",2940:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2940\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult_shmLink</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shmLink command.</div></div>",2942:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2942\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh1</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",2943:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2943\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh2</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",2944:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2944\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh3</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",2945:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2945\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh1</div><div class=\"TTSummary\">The offset applied for the channel 1 strain sensor.</div></div>",2946:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2946\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh2</div><div class=\"TTSummary\">The offset applied for the channel 2 strain sensor.</div></div>",2947:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2947\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh3</div><div class=\"TTSummary\">The offset applied for the channel 3 strain sensor.</div></div>",2948:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2948\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_temperature</div><div class=\"TTSummary\">The temperature at the time of calibration.</div></div>",2950:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2950\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",2951:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2951\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",2952:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2952\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",2953:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2953\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 1 strain sensor.</div></div>",2954:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2954\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 2 strain sensor.</div></div>",2955:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2955\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for the channel 3 strain sensor.</div></div>",2956:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2956\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> temperature() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the temperature (in ?C) at the time of the calibration.</div></div>",2957:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2957\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>",2958:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2958\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCalResult_shmLink201</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shmLink201 command.</div></div>",2960:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2960\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh1</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",2961:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2961\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh2</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",2962:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2962\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlagCh3</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",2963:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2963\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh1</div><div class=\"TTSummary\">The slope applied for channel 1.</div></div>",2964:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2964\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh1</div><div class=\"TTSummary\">The offset applied for channel 1.</div></div>",2965:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2965\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh2</div><div class=\"TTSummary\">The slope applied for channel 2.</div></div>",2966:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2966\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh2</div><div class=\"TTSummary\">The offset applied for channel 2.</div></div>",2967:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2967\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slopeCh3</div><div class=\"TTSummary\">The slope applied for channel 3.</div></div>",2968:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2968\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offsetCh3</div><div class=\"TTSummary\">The offset applied for channel 3.</div></div>",2969:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2969\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_temperature</div><div class=\"TTSummary\">The temperature at the time of calibration.</div></div>",2971:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2971\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 1 strain sensor.</div></div>",2972:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2972\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 2 strain sensor.</div></div>",2973:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2973\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlagCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the channel 3 strain sensor.</div></div>",2974:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2974\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 1.</div></div>",2975:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2975\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 1.</div></div>",2976:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2976\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 2.</div></div>",2977:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2977\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 2.</div></div>",2978:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2978\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slopeCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope applied for channel 3.</div></div>",2979:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2979\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offsetCh3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset applied for channel 3.</div></div>",2980:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2980\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> temperature() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the temperature (in ?C) at the time of the calibration.</div></div>",2981:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2981\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>",2982:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2982\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoShuntCalResult</div></div></div><div class=\"TTSummary\">Holds the result information from an autoCal_shunt command.</div></div>",2984:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2984\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag m_errorFlag</div><div class=\"TTSummary\">The WirelessTypes::AutoCalErrorFlag for the shunt calibration.</div></div>",2985:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2985\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_slope</div><div class=\"TTSummary\">The slope result of the shunt calibration.</div></div>",2986:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2986\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_offset</div><div class=\"TTSummary\">The offset result of the shunt calibration</div></div>",2987:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2987\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMedian</div><div class=\"TTSummary\">The median of the baseline data sampled during the shunt calibration.</div></div>",2988:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2988\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMin</div><div class=\"TTSummary\">The minimum of the baseline data sampled during the shunt calibration.</div></div>",2989:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2989\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_baseMax</div><div class=\"TTSummary\">The maximum of the baseline data sampled during the shunt calibration.</div></div>",2990:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2990\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMedian</div><div class=\"TTSummary\">The median of the shunted data sampled during the shunt calibration.</div></div>",2991:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2991\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMin</div><div class=\"TTSummary\">The minimum of the shunted data sampled during the shunt calibration.</div></div>",2992:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2992\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_shuntMax</div><div class=\"TTSummary\">The maximum of the shunted data sampled during the shunt calibration.</div></div>",2994:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2994\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalErrorFlag errorFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalErrorFlag for the shunt calibration.</div></div>",2995:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2995\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> slope() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the slope result of the shunt calibration.&nbsp; Note: This value was not applied to the Node. You will need to manually apply if desired.</div></div>",2996:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2996\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> offset() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the offset result of the shunt calibration.&nbsp; Note: This value was not applied to the Node. You will need to manually apply if desired.</div></div>",2997:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2997\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> baseMedian() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the median of the baseline data sampled during the shunt calibration.</div></div>",2998:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2998\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">autoCalInfo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Parses the auto cal info bytes for the shm-link.</div></div>"});