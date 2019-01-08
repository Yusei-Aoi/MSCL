NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/ExposedInertialTypes.h",{1265:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enum for the different data descriptors.</div></div>",1266:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Dictates whether GNSS source is internal or external.</div></div>",1267:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The GNSS Fix Types with the GPS Fix Information field</div></div>",1273:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Sensor States with the GPS Hardware Status field</div></div>",1277:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Antenna States with the GPS Hardware Status field</div></div>",1283:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Antenna Powers with the GPS Hardware Status field</div></div>",1287:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Filter States with the NAV Filter Status field</div></div>",1292:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Binary flags that give information with the NAV Filter Status field. Each bit must be checked accordingly.</div></div>",1302:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The Heading Sources with the Heading Update Source State field</div></div>",1307:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent the different available options and combinations for the Heading Update Control command (0x0D, 0x18)</div></div>",1316:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent the different available options and combinations for the Estimation Control command (0x0D, 0x14)</div></div>",1324:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent the source options for Declination (0x0D, 0x43), Inclination (0x0D, 0x4C), and Magnitude Source (0x0D, 0x4D)</div></div>",1328:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent the different available options and combinations for the Adaptive Measurement commands (0x0D, 0x44-0x46)</div></div>",1329:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent the different available constellation IDs for GNSS constellation settings</div></div>",1330:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of uint16 PRN#s for satellites.</div></div>",1331:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A string composing the RTCM message.</div></div>",1332:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1332\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Matrix_3x3</div></div></div><div class=\"TTSummary\">Defines a 3 by 3 matrix.</div></div>",1334:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1334\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Matrix_3x3(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i00,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i01,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i02,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i10,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i11,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i12,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i20,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i21,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">i22</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Matrix object.</div></div>",1335:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1335\" class=\"NDPrototype NoParameterForm\">Matrix_3x3()</div><div class=\"TTSummary\">Creates a zero-filled Matrix object.</div></div>",1336:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1336\" class=\"NDPrototype NoParameterForm\">~Matrix_3x3()</div><div class=\"TTSummary\">Destroys a Matrix_3x3 object.</div></div>",1337:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1337\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void set</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">col,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets matrix index to passed in float value.</div></div>",1338:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1338\" class=\"NDPrototype NoParameterForm\">#ifndef SWIG <span class=\"SHKeyword\">float operator</span>() (<span class=\"SHKeyword\">uint8</span> row, <span class=\"SHKeyword\">uint8</span> col) <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets value at matrix index (row, col).</div></div>",1339:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1339\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> at(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">row,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">col</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets value at matrix index (row, col).</div></div>",1341:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1341\" class=\"NDPrototype NoParameterForm\">std::array&lt; std::array&lt;<span class=\"SHKeyword\">float</span>, <span class=\"SHNumber\">3</span>&gt;, <span class=\"SHNumber\">3</span> &gt; m_array</div><div class=\"TTSummary\">A 3 by 3 array.</div></div>",1342:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Defines a 3 dimensional, spatial vector.</div></div>",1344:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1344\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GeometricVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">x_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">y_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">z_init</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GeometricVector object.</div></div>",1345:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1345\" class=\"NDPrototype NoParameterForm\">GeometricVector()</div><div class=\"TTSummary\">Creates a zero-filled GeometricVector object.</div></div>",1346:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1346\" class=\"NDPrototype NoParameterForm\">~GeometricVector()</div><div class=\"TTSummary\">Destroys a TimeUpdate object.</div></div>",1348:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1348\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> x</div><div class=\"TTSummary\">the vector\'s x coordinate.</div></div>",1349:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1349\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> y</div><div class=\"TTSummary\">the vector\'s y coordinate.</div></div>",1350:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1350\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> z</div><div class=\"TTSummary\">the vector\'s z coordinate.</div></div>",1351:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Defines a latitude, longitude, and altitude.</div></div>",1353:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1353\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Position(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">lat_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">long_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">alt_init</td></tr></table></td><td class=\"PAfterParameters\">): latitude(lat_init), longitude(long_init), altitude(alt_init)</td></tr></table></div><div class=\"TTSummary\">Creates a Position object.</div></div>",1354:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1354\" class=\"NDPrototype NoParameterForm\">Position() : latitude(<span class=\"SHNumber\">0</span>), longitude(<span class=\"SHNumber\">0</span>), altitude(<span class=\"SHNumber\">0</span>)</div><div class=\"TTSummary\">Creates a zero-filled Position object.</div></div>",1355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1355\" class=\"NDPrototype NoParameterForm\">~Position()</div><div class=\"TTSummary\">Destroys a TimeUpdate object.</div></div>",1357:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1357\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> latitude</div></div>",1358:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1358\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> longitude</div></div>",1359:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1359\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> altitude</div></div>",1360:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1360\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeUpdate</div></div></div><div class=\"TTSummary\">Contains time data for the GNSS_AssistTimeUpdate class.</div></div>",1362:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1362\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeUpdate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName\">timeOfWeek,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">weekNumber,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">timeAccuracy&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeUpdate object.</div></div>",1363:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1363\" class=\"NDPrototype NoParameterForm\">~TimeUpdate()</div><div class=\"TTSummary\">Destroys a TimeUpdate object.</div></div>",1364:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1364\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> timeOfWeek() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">time into a given week in seconds.</div></div>",1365:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1365\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> weekNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">the week number.</div></div>",1366:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1366\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> timeAccuracy() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">accuracy in seconds.</div></div>",1368:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">time into a given week in seconds.</div></div>",1369:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">the week number.</div></div>",1370:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">accuracy in seconds.</div></div>",1371:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the AngularRateZUPTControl and VelocityZUPTControl classes.</div></div>",1373:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1373\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ZUPTSettingsData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">threshold</td></tr></table></td><td class=\"PAfterParameters\">) : enabled(enable), threshold(threshold)</td></tr></table></div><div class=\"TTSummary\">Creates a ZUPTSettingsData object.</div></div>",1375:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1375\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enabled</div></div>",1376:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1376\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> threshold</div></div>",1377:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for Set Reference Position command.</div></div>",1379:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1379\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">FixedReferencePositionData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">pEnable,</td></tr><tr><td class=\"PType first\">Position&nbsp;</td><td class=\"PName last\">pReference</td></tr></table></td><td class=\"PAfterParameters\">) : enable(pEnable), referencePosition(pReference)</td></tr></table></div><div class=\"TTSummary\">Creates a FixedReferencePositionData object.</div></div>",1380:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1380\" class=\"NDPrototype NoParameterForm\">FixedReferencePositionData() : enable(<span class=\"SHKeyword\">false</span>), referencePosition(Position())</div><div class=\"TTSummary\">Creates a FixedReferencePositionData object.</div></div>",1382:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1382\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enable</div></div>",1383:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1383\" class=\"NDPrototype NoParameterForm\">Position referencePosition</div></div>",1384:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the SBASSettings class.</div></div>",1386:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1386\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enableSBAS</div></div>",1387:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1387\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enableRanging</div></div>",1388:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1388\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enableCorrectionData</div></div>",1389:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1389\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> applyIntegrityInfo</div></div>",1390:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1390\" class=\"NDPrototype NoParameterForm\">SatellitePRNs satellitePRNs</div><div class=\"TTSummary\">The SatellitePRNs for all included satellites.</div></div>",1391:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the satellite constellation data used in the ConstellationSettingsData class.</div></div>",1393:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1393\" class=\"NDPrototype NoParameterForm\">InertialTypes::ConstellationId constellationID</div></div>",1394:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1394\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enabled</div></div>",1395:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1395\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> reservedChannelCount</div><div class=\"TTSummary\">The number of reserved channels.&nbsp; (Must be &lt;= 32)</div></div>",1396:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1396\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> maxChannels</div><div class=\"TTSummary\">The maximum number of tracking channels.</div></div>",1397:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1397\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enableL1SAIF</div><div class=\"TTSummary\">enables L1AIF for constellation QZSS</div></div>",1398:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the InertialNode::setConstellationSettings API call.</div></div>",1400:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1400\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> maxChannelsAvailable</div></div>",1401:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1401\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> maxChannelsToUse</div></div>",1402:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1402\" class=\"NDPrototype NoParameterForm\">Constellations constellations</div></div>",1403:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data for the InertialNode::setAdvancedLowPassFilterSettings API call.</div></div>",1405:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enum for the different data descriptors.</div></div>",1407:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1407\" class=\"NDPrototype NoParameterForm\">AdvancedLowPassFilterData() : dataDescriptor(mscl::MipTypes::ChannelField::CH_FIELD_SENSOR_SCALED_ACCEL_VEC), manualFilterBandwidthConfig(SET_TO_HALF_REPORTING_RATE), applyLowPassFilter(<span class=\"SHKeyword\">true</span>), cutoffFrequency(<span class=\"SHNumber\">0</span>)</div></div>",1408:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1408\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AdvancedLowPassFilterData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">mscl::MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">descriptor</td></tr></table></td><td class=\"PAfterParameters\">) : dataDescriptor(descriptor), manualFilterBandwidthConfig(SET_TO_HALF_REPORTING_RATE), applyLowPassFilter(<span class=\"SHKeyword\">true</span>), cutoffFrequency(<span class=\"SHNumber\">0</span>)</td></tr></table></div></div>",1410:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1410\" class=\"NDPrototype NoParameterForm\">mscl::MipTypes::ChannelField dataDescriptor</div><div class=\"TTSummary\">the data descriptor these settings apply to</div></div>",1411:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1411\" class=\"NDPrototype NoParameterForm\">ManualFilterBandwidthConfig manualFilterBandwidthConfig</div><div class=\"TTSummary\">The ManualFilterBandwidthConfig to use.</div></div>",1412:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1412\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> applyLowPassFilter</div><div class=\"TTSummary\">applies low-pass filter if set to true.</div></div>",1413:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1413\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> cutoffFrequency</div><div class=\"TTSummary\">Sets the cutoff frequency, only if manualFilterBandwidthConfig == USER_SPECIFIED_CUTOFF_FREQ</div></div>",1414:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data needed by the InertialNode::setComplementaryFilterSettings class.</div></div>",1416:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1416\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> upCompensationEnabled</div><div class=\"TTSummary\">determines whether or not the up compensation is enabled.</div></div>",1417:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1417\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> upCompensationTimeInSeconds</div><div class=\"TTSummary\">Sets the compensation time (in seconds) for the up compensation.</div></div>",1418:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1418\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> northCompensationEnabled</div><div class=\"TTSummary\">determines whether or not the north compensation is enabled.</div></div>",1419:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1419\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> northCompensationTimeInSeconds</div><div class=\"TTSummary\">Sets the compensation time (in seconds) for the north compensation.</div></div>",1420:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data needed by the InertialNode::getBasicDeviceStatus method.</div></div>",1422:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1422\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> systemState</div></div>",1423:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1423\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> systemTimerInMS</div></div>",1424:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1424\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> gnssPowerStateOn</div></div>",1425:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1425\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> numberof1PPSPulses</div></div>",1426:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1426\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> last1PPSInMS</div></div>",1427:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1427\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> imuStreamIsEnabled</div></div>",1428:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1428\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> gnssStreamIsEnabled</div></div>",1429:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1429\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> estimationFilterStreamIsEnabled</div></div>",1430:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1430\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> outgoingIMUDroppedPacketCount</div></div>",1431:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1431\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> outgoingGnssDroppedPacketCount</div></div>",1432:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1432\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> outgoingEstimationFilterDroppedPacketCount</div></div>",1433:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1433\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> numOfBytesWrittenToComPort</div></div>",1434:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1434\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> numOfBytesWrittenFromComPort</div></div>",1435:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1435\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> numOfOverrunsOnWriteToComPort</div></div>",1436:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1436\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> numOfIMUParsingErrors</div></div>",1437:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1437\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalIMUMessagesRead</div></div>",1438:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1438\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> lastIMUMessageReadInMS</div></div>",1439:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1439\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> numOfGnssParsingErrors</div></div>",1440:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1440\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalGnssMessagesRead</div></div>",1441:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1441\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> lastGnssMessageReadInMS</div></div>",1442:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the data needed by the InertialNode::sendExternalGNSSUpdate method.</div></div>",1444:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1444\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> gpsTimeOfWeek</div></div>",1445:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1445\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> gpsWeekNumber</div></div>",1446:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1446\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> lattitude</div></div>",1447:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1447\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> longitude</div></div>",1448:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1448\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> altitudeAboveWGS84Ellipsoid</div></div>",1449:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1449\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> northVelocity</div></div>",1450:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1450\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> eastVelocity</div></div>",1451:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1451\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> downVelocity</div></div>",1452:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1452\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> northPositionUncertainty</div></div>",1453:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1453\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> eastPositionUncertainty</div></div>",1454:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1454\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> downPositionUncertainty</div></div>",1455:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1455\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> northVelocityUncertainty</div></div>",1456:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1456\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> eastVelocityUncertainty</div></div>",1457:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1457\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> downVelocityUncertainty</div></div>",1458:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains the possible sources of aiding heading updates to the Kalman filter.&nbsp; Some, all, or none of the options can be set as heading aids.</div></div>",1460:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Converts this class to a &lt;InertialTypes::HeadingUpdateEnableOption&gt;.</div></div>",1461:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1461\" class=\"NDPrototype NoParameterForm\">HeadingUpdateOptions() : useInternalMagnetometer(<span class=\"SHKeyword\">false</span>), useInternalGNSSVelocityVector(<span class=\"SHKeyword\">false</span>), useExternalHeadingMessages(<span class=\"SHKeyword\">false</span>)</div></div>",1462:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1462\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">HeadingUpdateOptions(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> InertialTypes::</td><td class=\"PType\">HeadingUpdateEnableOption&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">headingUpdateOption</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Updates this class from a &lt;InertialTypes::HeadingUpdateEnableOption&gt; according to the Communications Protocol.</div></div>",1464:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1464\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useInternalMagnetometer</div></div>",1465:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1465\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useInternalGNSSVelocityVector</div></div>",1466:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1466\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useExternalHeadingMessages</div></div>",1467:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Holds the Geographic Source Option and the fixed value if manual is selected.&nbsp; Determines the sources for Declination, Inclination, and Magnitude.</div></div>",1469:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1469\" class=\"NDPrototype NoParameterForm\">GeographicSourceOptions() : source(InertialTypes::GeographicSourceOption::NONE), manual(<span class=\"SHNumber\">0.0</span>)</div></div>",1470:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1470\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GeographicSourceOptions(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> InertialTypes::</td><td class=\"PType\">GeographicSourceOption&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sourceValue,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">fixedValue</td></tr></table></td><td class=\"PAfterParameters\">) : source(sourceValue), manual(fixedValue)</td></tr></table></div><div class=\"TTSummary\">constructs this class from a GeographicSourceOption and a float.</div></div>",1472:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1472\" class=\"NDPrototype NoParameterForm\">InertialTypes::GeographicSourceOption source</div></div>",1473:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1473\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> manual</div></div>",1474:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Controls which parameters are estimated by the Kalman Filter.&nbsp; Some, all, or none of the options can be set as estimation controls.</div></div>",1476:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Converts this class to a &lt;mscl::uint16&gt;.</div></div>",1477:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1477\" class=\"NDPrototype NoParameterForm\">EstimationControlOptions() : enableGyroBiasEstimation(<span class=\"SHKeyword\">false</span>), enableAccelBiasEstimation(<span class=\"SHKeyword\">false</span>), enableGyroScaleFactorEstimation(<span class=\"SHKeyword\">false</span>), enableAccelScaleFactorEstimation(<span class=\"SHKeyword\">false</span>), enableGNSSAntennaOffsetEstimation(<span class=\"SHKeyword\">false</span>), enableHardIronAutoCalibration(<span class=\"SHKeyword\">false</span>), enableSoftIronAutoCalibration(<span class=\"SHKeyword\">false</span>)</div></div>",1478:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1478\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EstimationControlOptions(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> mscl::</td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">estimationControlData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">constructs this class from a &lt;mscl::uint16&gt; estimation control according to the Communications Protocol.</div></div>",1480:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1480\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enableGyroBiasEstimation</div></div>",1481:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1481\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enableAccelBiasEstimation</div></div>",1482:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1482\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enableGyroScaleFactorEstimation</div></div>",1483:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1483\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enableAccelScaleFactorEstimation</div></div>",1484:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1484\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enableGNSSAntennaOffsetEstimation</div></div>",1485:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1485\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enableHardIronAutoCalibration</div></div>",1486:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1486\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enableSoftIronAutoCalibration</div></div>",1489:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Dictates whether heading is relative to true north or magnetic north.</div></div>",1491:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1491\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> headingAngle</div></div>",1492:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1492\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> headingAngleUncertainty</div></div>",1495:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1495\" class=\"NDPrototype NoParameterForm\">InertialTypes::AdaptiveMeasurementMode mode</div></div>",1496:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1496\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> lowPassFilterCutoff</div></div>",1497:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1497\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> lowLimit</div></div>",1498:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1498\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> highLimit</div></div>",1499:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1499\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> lowLimitUncertainty</div></div>",1500:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1500\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> highLimitUncertainty</div></div>",1501:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1501\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> minUncertainty</div></div>"});