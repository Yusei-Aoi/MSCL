NDFramePage.OnPageTitleLoaded("File:MicroStrain/Inertial/ExposedInertialTypes.h","ExposedInertialTypes.h");NDSummary.OnSummaryLoaded("File:MicroStrain/Inertial/ExposedInertialTypes.h",[["C/C++","C"]],[["Classes","Class"],["Constants","Constant"],["Enums","Enumeration"],["Functions","Function"],["Groups","Group"],["Structs","Struct"],["Types","Type"],["Variables","Variable"]],[[1356,0,4,"Types","Types"],[1357,0,2,"VehicleModeType","VehicleModeType"],[1358,0,2,"GPSDynamicsMode","GPSDynamicsMode"],[1359,0,2,"AxisBitfieldValues","AxisBitfieldValues"],[1360,0,2,"GNSS_Source","GNSS_Source"],[1361,0,2,"GnssFixFlags","GnssFixFlags"],[1362,0,1,,"FIX_SBAS_CORRECTIONS"],[1363,0,1,,"FIX_DGNSS_CORRECTIONS"],[1364,0,2,"GnssFixType","GnssFixType"],[1365,0,1,,"FIXTYPE_3D"],[1366,0,1,,"FIXTYPE_2D"],[1367,0,1,,"FIXTYPE_TIMEONLY"],[1368,0,1,,"FIXTYPE_NONE"],[1369,0,1,,"FIXTYPE_INVALID"],[1370,0,2,"SpaceVehicleFlags","SpaceVehicleFlags"],[1371,0,1,,"SVFLAG_NAVIGATION"],[1372,0,1,,"SVFLAG_HEALTHY"],[1373,0,2,"DeviceSelector","DeviceSelector"],[1374,0,1,,"DEVICE_AHRS"],[1375,0,1,,"DEVICE_GPS"],[1376,0,2,"PowerState","PowerState"],[1377,0,1,,"ON_FULL_PERFORMANCE"],[1378,0,1,,"ON_LOW_POWER"],[1379,0,1,,"SLEEP"],[1380,0,1,,"OFF"],[1381,0,2,"StreamFormat","StreamFormat"],[1382,0,1,,"STANDARD_MIP"],[1383,0,1,,"WRAPPED_RAW"],[1384,0,2,"SensorState","SensorState"],[1385,0,1,,"SENSORSTATE_OFF"],[1386,0,1,,"SENSORSTATE_ON"],[1387,0,1,,"SENSORSTATE_UNKNOWN"],[1388,0,2,"AntennaState","AntennaState"],[1389,0,1,,"ANTENNASTATE_INIT"],[1390,0,1,,"ANTENNASTATE_SHORT"],[1391,0,1,,"ANTENNASTATE_OPEN"],[1392,0,1,,"ANTENNASTATE_GOOD"],[1393,0,1,,"ANTENNASTATE_UNKNOWN"],[1394,0,2,"AntennaPower","AntennaPower"],[1395,0,1,,"ANTENNAPOWER_OFF"],[1396,0,1,,"ANTENNAPOWER_ON"],[1397,0,1,,"ANTENNAPOWER_UNKNOWN"],[1398,0,2,"FilterState","FilterState"],[1399,0,1,,"FILTERSTATE_STARTUP"],[1400,0,1,,"FILTERSTATE_INIT"],[1401,0,1,,"FILTERSTATE_RUNNING_SLN_VALID"],[1402,0,1,,"FILTERSTATE_RUNNING_SLN_ERROR"],[1403,0,2,"FilterStatus_Running","FilterStatus_Running"],[1404,0,1,,"FILTERSTATUS_IMU_UNAVAILABLE"],[1405,0,1,,"FILTERSTATUS_GPS_UNAVAILABLE"],[1406,0,1,,"FILTERSTATUS_MATRIX_SINGULARITY_IN_CALC"],[1407,0,1,,"FILTERSTATUS_POS_COVARIANCE_HIGH_WARN"],[1408,0,1,,"FILTERSTATUS_VEL_COVARIANCE_HIGH_WARN"],[1409,0,1,,"FILTERSTATUS_ATT_COVARIANCE_HIGH_WARN"],[1410,0,1,,"FILTERSTATUS_NAN_IN_SOLUTION"],[1411,0,1,,"FILTERSTATUS_GYRO_BIAS_EST_HIGH_WARN"],[1412,0,1,,"FILTERSTATUS_ACCEL_BIAS_EST_HIGH_WARN"],[1413,0,1,,"FILTERSTATUS_GYRO_SCALE_FACTOR_EST_HIGH_WARN"],[1414,0,1,,"FILTERSTATUS_ACCEL_SCALE_FACTOR_EST_HIGH_WARN"],[1415,0,1,,"FILTERSTATUS_MAG_BIAS_EST_HIGH_WARN"],[1416,0,1,,"FILTERSTATUS_ANTENNA_OFFSET_CORRECTION_EST_HIGH_WARN"],[1417,0,1,,"FILTERSTATUS_HARD_IRON_OFFSET_EST_HIGH_WARN"],[1418,0,1,,"FILTERSTATUS_SOFT_IRON_CORRECTION_EST_HIGH_WARN"],[1419,0,2,"FilterStatus_Initialization","FilterStatus_Initialization"],[1420,0,1,,"FILTERSTATUS_ATT_NOT_INIT"],[1421,0,1,,"FILTERSTATUS_POS_VEL_NOT_INIT"],[1422,0,2,"DgnssBaseStatus","DgnssBaseStatus"],[1423,0,1,,"DGNSSBASE_UDRE_SCALE_FACTOR_1_00"],[1424,0,1,,"DGNSSBASE_UDRE_SCALE_FACTOR_0_75"],[1425,0,1,,"DGNSSBASE_UDRE_SCALE_FACTOR_0_50"],[1426,0,1,,"DGNSSBASE_UDRE_SCALE_FACTOR_0_30"],[1427,0,1,,"DGNSSBASE_UDRE_SCALE_FACTOR_0_20"],[1428,0,1,,"DGNSSBASE_UDRE_SCALE_FACTOR_0_10"],[1429,0,1,,"DGNSSBASE_REFERENCE_STATION_TRANSMISSION_NOT_MONITORED"],[1430,0,1,,"DGNSSBASE_REFERENCE_STATION_NOT_WORKING"],[1431,0,2,"HeadingSource","HeadingSource"],[1432,0,1,,"HEADINGSOURCE_NONE"],[1433,0,1,,"HEADINGSOURCE_INTERNAL_MAGNETOMETER"],[1434,0,1,,"HEADINGSOURCE_INTERNAL_GPS_VELOCITY_VECTOR"],[1435,0,1,,"HEADINGSOURCE_EXTERNAL_HEADING_UPDATE_CMD"],[1436,0,2,"HeadingUpdateEnableOption","HeadingUpdateEnableOption"],[1437,0,1,,"ENABLE_NONE"],[1438,0,1,,"ENABLE_INTERNAL_MAGNETOMETER"],[1439,0,1,,"ENABLE_INTERNAL_GNSS"],[1440,0,1,,"ENABLE_EXTERNAL_MESSAGES"],[1441,0,1,,"ENABLE_MAGNETOMETER_AND_GNSS"],[1442,0,1,,"ENABLE_GNSS_AND_EXTERNAL"],[1443,0,1,,"ENABLE_MAGNETOMETER_AND_EXTERNAL"],[1444,0,1,,"ENABLE_ALL"],[1445,0,2,"EstimationControlOption","EstimationControlOption"],[1446,0,1,,"ENABLE_GYRO_BIAS_ESTIMATION"],[1447,0,1,,"ENABLE_ACCEL_BIAS_ESTIMATION"],[1448,0,1,,"ENABLE_GYRO_SCALE_FACTOR_ESTIMATION"],[1449,0,1,,"ENABLE_ACCEL_SCALE_FACTOR_ESTIMATION"],[1450,0,1,,"ENABLE_GNSS_ANTENNA_OFFSET_ESTIMATION"],[1451,0,1,,"ENABLE_HARD_IRON_AUTO_CALIBRATION"],[1452,0,1,,"ENABLE_SOFT_IRON_AUTO_CALIBRATION"],[1453,0,2,"EstimationControlOption","EstimationControlOption(2)"],[1454,0,1,,"NONE"],[1455,0,1,,"WORLD_MAGNETIC_MODEL"],[1456,0,1,,"MANUAL"],[1457,0,2,"AdaptiveMeasurementMode","AdaptiveMeasurementMode"],[1458,0,2,"ConstellationId","ConstellationId"],[1459,0,6,"SatellitePRNs","SatellitePRNs"],[1460,0,6,"RTCMMessage","RTCMMessage"],[1461,0,0,"Matrix_3x3","Matrix_3x3"],[1462,0,4,"Functions","Matrix_3x3.Functions"],[1463,0,3,"Matrix_3x3","Matrix_3x3.Matrix_3x3"],[1464,0,3,"Matrix_3x3","Matrix_3x3.Matrix_3x3(2)"],[1465,0,3,"~Matrix_3x3","Matrix_3x3.~Matrix_3x3"],[1466,0,3,"set","Matrix_3x3.set"],[1467,0,3,"operator()","Matrix_3x3.operator"],[1468,0,3,"at","Matrix_3x3.at"],[1469,0,4,"Variables","Matrix_3x3.Variables"],[1470,0,7,"m_array","Matrix_3x3.m_array"],[1471,0,5,"GeometricVector","GeometricVector"],[1472,0,4,"Functions","GeometricVector.Functions"],[1473,0,3,"GeometricVector","GeometricVector.GeometricVector"],[1474,0,3,"GeometricVector","GeometricVector.GeometricVector(2)"],[1475,0,3,"~GeometricVector","GeometricVector.~GeometricVector"],[1476,0,4,"Variables","GeometricVector.Variables"],[1477,0,7,"x","GeometricVector.x"],[1478,0,7,"y","GeometricVector.y"],[1479,0,7,"z","GeometricVector.z"],[1480,0,5,"Position","Position"],[1481,0,4,"Functions","Position.Functions"],[1482,0,3,"Position","Position.Position"],[1483,0,3,"Position","Position.Position(2)"],[1484,0,3,"~Position","Position.~Position"],[1485,0,4,"Variables","Position.Variables"],[1486,0,7,"latitude","Position.latitude"],[1487,0,7,"longitude","Position.longitude"],[1488,0,7,"altitude","Position.altitude"],[1489,0,0,"TimeUpdate","TimeUpdate"],[1490,0,4,"Functions","TimeUpdate.Functions"],[1491,0,3,"TimeUpdate","TimeUpdate.TimeUpdate"],[1492,0,3,"~TimeUpdate","TimeUpdate.~TimeUpdate"],[1493,0,3,"timeOfWeek","TimeUpdate.timeOfWeek"],[1494,0,3,"weekNumber","TimeUpdate.weekNumber"],[1495,0,3,"timeAccuracy","TimeUpdate.timeAccuracy"],[1496,0,4,"Constants","TimeUpdate.Constants"],[1497,0,1,"timeOfWeek","TimeUpdate.timeOfWeek(2)"],[1498,0,1,"weekNumber","TimeUpdate.weekNumber(2)"],[1499,0,1,"timeAccuracy","TimeUpdate.timeAccuracy(2)"],[1500,0,5,"ZUPTSettingsData","ZUPTSettingsData"],[1501,0,4,"Functions","ZUPTSettingsData.Functions"],[1502,0,3,"ZUPTSettingsData","ZUPTSettingsData.ZUPTSettingsData"],[1503,0,4,"Variables","ZUPTSettingsData.Variables"],[1504,0,7,"enabled","ZUPTSettingsData.enabled"],[1505,0,7,"threshold","ZUPTSettingsData.threshold"],[1506,0,5,"FixedReferencePositionData","FixedReferencePositionData"],[1507,0,4,"Functions","FixedReferencePositionData.Functions"],[1508,0,3,"FixedReferencePositionData","FixedReferencePositionData.FixedReferencePositionData"],[1509,0,3,"FixedReferencePositionData","FixedReferencePositionData.FixedReferencePositionData(2)"],[1510,0,4,"Variables","FixedReferencePositionData.Variables"],[1511,0,7,"enable","FixedReferencePositionData.enable"],[1512,0,7,"referencePosition","FixedReferencePositionData.referencePosition"],[1513,0,5,"SBASSettingsData","SBASSettingsData"],[1514,0,4,"Variables","SBASSettingsData.Variables"],[1515,0,7,"enableSBAS","SBASSettingsData.enableSBAS"],[1516,0,7,"enableRanging","SBASSettingsData.enableRanging"],[1517,0,7,"enableCorrectionData","SBASSettingsData.enableCorrectionData"],[1518,0,7,"applyIntegrityInfo","SBASSettingsData.applyIntegrityInfo"],[1519,0,7,"SatellitePRNs","SBASSettingsData.SatellitePRNs"],[1520,0,5,"Constellation","Constellation"],[1521,0,4,"Variables","Constellation.Variables"],[1522,0,7,"constellationID","Constellation.constellationID"],[1523,0,7,"enabled","Constellation.enabled"],[1524,0,7,"reservedChannelCount","Constellation.reservedChannelCount"],[1525,0,7,"maxChannels","Constellation.maxChannels"],[1526,0,7,"enableL1SAIF","Constellation.enableL1SAIF"],[1527,0,5,"ConstellationSettingsData","ConstellationSettingsData"],[1528,0,4,"Variables","ConstellationSettingsData.Variables"],[1529,0,7,"maxChannelsAvailable","ConstellationSettingsData.maxChannelsAvailable"],[1530,0,7,"maxChannelsToUse","ConstellationSettingsData.maxChannelsToUse"],[1531,0,7,"constellations","ConstellationSettingsData.constellations"],[1532,0,5,"AdvancedLowPassFilterData","AdvancedLowPassFilterData"],[1533,0,4,"Types","AdvancedLowPassFilterData.Types"],[1534,0,2,"ManualFilterBandwidthConfig","AdvancedLowPassFilterData.ManualFilterBandwidthConfig"],[1535,0,4,"Functions","AdvancedLowPassFilterData.Functions"],[1536,0,3,"AdvancedLowPassFilterData","AdvancedLowPassFilterData.AdvancedLowPassFilterData"],[1537,0,3,"AdvancedLowPassFilterData","AdvancedLowPassFilterData.AdvancedLowPassFilterData(2)"],[1538,0,4,"Variables","AdvancedLowPassFilterData.Variables"],[1539,0,7,"dataDescriptor","AdvancedLowPassFilterData.dataDescriptor"],[1540,0,7,"manualFilterBandwidthConfig","AdvancedLowPassFilterData.manualFilterBandwidthConfig"],[1541,0,7,"applyLowPassFilter","AdvancedLowPassFilterData.applyLowPassFilter"],[1542,0,7,"cutoffFrequency","AdvancedLowPassFilterData.cutoffFrequency"],[1543,0,5,"ComplementaryFilterData","ComplementaryFilterData"],[1544,0,4,"Variables","ComplementaryFilterData.Variables"],[1545,0,7,"upCompensationEnabled","ComplementaryFilterData.upCompensationEnabled"],[1546,0,7,"upCompensationTimeInSeconds","ComplementaryFilterData.upCompensationTimeInSeconds"],[1547,0,7,"northCompensationEnabled","ComplementaryFilterData.northCompensationEnabled"],[1548,0,7,"northCompensationTimeInSeconds","ComplementaryFilterData.northCompensationTimeInSeconds"],[1549,0,5,"PpsPulseInfo","PpsPulseInfo"],[1550,0,4,"Variables","PpsPulseInfo.Variables"],[1551,0,7,"count","PpsPulseInfo.count"],[1552,0,7,"lastTimeinMS","PpsPulseInfo.lastTimeinMS"],[1553,0,5,"StreamInfo","StreamInfo"],[1554,0,4,"Variables","StreamInfo.Variables"],[1555,0,7,"enabled","StreamInfo.enabled"],[1556,0,7,"outgoingPacketsDropped","StreamInfo.outgoingPacketsDropped"],[1557,0,5,"DeviceMessageInfo","DeviceMessageInfo"],[1558,0,4,"Variables","DeviceMessageInfo.Variables"],[1559,0,7,"messageParsingErrors","DeviceMessageInfo.messageParsingErrors"],[1560,0,7,"messagesRead","DeviceMessageInfo.messagesRead"],[1561,0,7,"lastMessageReadinMS","DeviceMessageInfo.lastMessageReadinMS"],[1562,0,5,"PortInfo","PortInfo"],[1563,0,4,"Variables","PortInfo.Variables"],[1564,0,7,"bytesWritten","PortInfo.bytesWritten"],[1565,0,7,"bytesRead","PortInfo.bytesRead"],[1566,0,7,"overrunsOnWrite","PortInfo.overrunsOnWrite"],[1567,0,7,"overrunsOnRead","PortInfo.overrunsOnRead"],[1568,0,5,"TemperatureInfo","TemperatureInfo"],[1569,0,4,"Variables","TemperatureInfo.Variables"],[1570,0,7,"onBoardTemp","TemperatureInfo.onBoardTemp"],[1571,0,7,"lastReadInMS","TemperatureInfo.lastReadInMS"],[1572,0,7,"error","TemperatureInfo.error"],[1573,0,0,"DeviceStatusData","DeviceStatusData"],[1574,0,4,"Types","DeviceStatusData.Types"],[1575,0,2,"StatusSelector","DeviceStatusData.StatusSelector"],[1576,0,1,,"DeviceStatusData.BASIC_STATUS_STRUCTURE"],[1577,0,1,,"DeviceStatusData.DIAGNOSTIC_STATUS_STRUCTURE"],[1578,0,2,"SystemState","DeviceStatusData.SystemState"],[1579,0,4,"Variables","DeviceStatusData.Variables"],[1580,0,7,"model","DeviceStatusData.model"],[1581,0,7,"statusStructure","DeviceStatusData.statusStructure"],[1582,0,7,"systemTimerInMS","DeviceStatusData.systemTimerInMS"],[1583,0,4,"Functions","DeviceStatusData.Functions"],[1584,0,3,"systemState","DeviceStatusData.systemState"],[1585,0,3,"gnssPowerStateOn","DeviceStatusData.gnssPowerStateOn"],[1586,0,3,"gnss1PpsPulseInfo","DeviceStatusData.gnss1PpsPulseInfo"],[1587,0,3,"imuStreamInfo","DeviceStatusData.imuStreamInfo"],[1588,0,3,"gnssStreamInfo","DeviceStatusData.gnssStreamInfo"],[1589,0,3,"estimationFilterStreamInfo","DeviceStatusData.estimationFilterStreamInfo"],[1590,0,3,"imuMessageInfo","DeviceStatusData.imuMessageInfo"],[1591,0,3,"gnssMessageInfo","DeviceStatusData.gnssMessageInfo"],[1592,0,3,"comPortInfo","DeviceStatusData.comPortInfo"],[1593,0,3,"usbPortInfo","DeviceStatusData.usbPortInfo"],[1594,0,3,"hasMagnetometer","DeviceStatusData.hasMagnetometer"],[1595,0,3,"magnetometerInitializationFailed","DeviceStatusData.magnetometerInitializationFailed"],[1596,0,3,"hasPressure","DeviceStatusData.hasPressure"],[1597,0,3,"pressureInitializationFailed","DeviceStatusData.pressureInitializationFailed"],[1598,0,3,"gnssReceiverInitializationFailed","DeviceStatusData.gnssReceiverInitializationFailed"],[1599,0,3,"coldStartOnPowerOn","DeviceStatusData.coldStartOnPowerOn"],[1600,0,3,"temperatureInfo","DeviceStatusData.temperatureInfo"],[1601,0,3,"powerState","DeviceStatusData.powerState"],[1602,0,3,"gyroRange","DeviceStatusData.gyroRange"],[1603,0,3,"accelRange","DeviceStatusData.accelRange"],[1604,0,3,"checkValue","DeviceStatusData.checkValue"],[1605,0,3,"isSet","DeviceStatusData.isSet"],[1606,0,4,"Variables","DeviceStatusData.Variables(2)"],[1607,0,7,"m_systemState","DeviceStatusData.m_systemState"],[1608,0,7,"m_gnssPowerStateOn","DeviceStatusData.m_gnssPowerStateOn"],[1609,0,7,"m_gnss1PpsPulseInfo","DeviceStatusData.m_gnss1PpsPulseInfo"],[1610,0,7,"m_imuStreamInfo","DeviceStatusData.m_imuStreamInfo"],[1611,0,7,"m_gnssStreamInfo","DeviceStatusData.m_gnssStreamInfo"],[1612,0,7,"m_estimationFilterStreamInfo","DeviceStatusData.m_estimationFilterStreamInfo"],[1613,0,7,"m_imuMessageInfo","DeviceStatusData.m_imuMessageInfo"],[1614,0,7,"m_gnssMessageInfo","DeviceStatusData.m_gnssMessageInfo"],[1615,0,7,"m_comPortInfo","DeviceStatusData.m_comPortInfo"],[1616,0,7,"m_usbPortInfo","DeviceStatusData.m_usbPortInfo"],[1617,0,7,"m_hasMagnetometer","DeviceStatusData.m_hasMagnetometer"],[1618,0,7,"m_magnetometerInitializationFailed","DeviceStatusData.m_magnetometerInitializationFailed"],[1619,0,7,"m_hasPressure","DeviceStatusData.m_hasPressure"],[1620,0,7,"m_pressureInitializationFailed","DeviceStatusData.m_pressureInitializationFailed"],[1621,0,7,"m_gnssReceiverInitializationFailed","DeviceStatusData.m_gnssReceiverInitializationFailed"],[1622,0,7,"m_coldStartOnPowerOn","DeviceStatusData.m_coldStartOnPowerOn"],[1623,0,7,"m_temperatureInfo","DeviceStatusData.m_temperatureInfo"],[1624,0,7,"m_powerState","DeviceStatusData.m_powerState"],[1625,0,7,"m_gyroRange","DeviceStatusData.m_gyroRange"],[1626,0,7,"m_accelRange","DeviceStatusData.m_accelRange"],[1627,0,5,"ExternalGNSSUpdateData","ExternalGNSSUpdateData"],[1628,0,4,"Variables","ExternalGNSSUpdateData.Variables"],[1629,0,7,"gpsTimeOfWeek","ExternalGNSSUpdateData.gpsTimeOfWeek"],[1630,0,7,"gpsWeekNumber","ExternalGNSSUpdateData.gpsWeekNumber"],[1631,0,7,"lattitude","ExternalGNSSUpdateData.lattitude"],[1632,0,7,"longitude","ExternalGNSSUpdateData.longitude"],[1633,0,7,"altitudeAboveWGS84Ellipsoid","ExternalGNSSUpdateData.altitudeAboveWGS84Ellipsoid"],[1634,0,7,"northVelocity","ExternalGNSSUpdateData.northVelocity"],[1635,0,7,"eastVelocity","ExternalGNSSUpdateData.eastVelocity"],[1636,0,7,"downVelocity","ExternalGNSSUpdateData.downVelocity"],[1637,0,7,"northPositionUncertainty","ExternalGNSSUpdateData.northPositionUncertainty"],[1638,0,7,"eastPositionUncertainty","ExternalGNSSUpdateData.eastPositionUncertainty"],[1639,0,7,"downPositionUncertainty","ExternalGNSSUpdateData.downPositionUncertainty"],[1640,0,7,"northVelocityUncertainty","ExternalGNSSUpdateData.northVelocityUncertainty"],[1641,0,7,"eastVelocityUncertainty","ExternalGNSSUpdateData.eastVelocityUncertainty"],[1642,0,7,"downVelocityUncertainty","ExternalGNSSUpdateData.downVelocityUncertainty"],[1643,0,5,"HeadingUpdateOptions","HeadingUpdateOptions"],[1644,0,4,"Functions","HeadingUpdateOptions.Functions"],[1645,0,3,"<span class=\"Qualifier\">operator &lt;InertialTypes::</span>&#8203;HeadingUpdateEnableOption&gt;","HeadingUpdateOptions.operator<InertialTypes.HeadingUpdateEnableOption>"],[1646,0,3,"HeadingUpdateOptions","HeadingUpdateOptions.HeadingUpdateOptions"],[1647,0,3,"HeadingUpdateOptions","HeadingUpdateOptions.HeadingUpdateOptions(2)"],[1648,0,4,"Variables","HeadingUpdateOptions.Variables"],[1649,0,7,"useInternalMagnetometer","HeadingUpdateOptions.useInternalMagnetometer"],[1650,0,7,"useInternalGNSSVelocityVector","HeadingUpdateOptions.useInternalGNSSVelocityVector"],[1651,0,7,"useExternalHeadingMessages","HeadingUpdateOptions.useExternalHeadingMessages"],[1652,0,5,"TareAxisValues","TareAxisValues"],[1653,0,4,"Functions","TareAxisValues.Functions"],[1654,0,3,"<span class=\"Qualifier\">operator &lt;InertialTypes::</span>&#8203;HeadingUpdateEnableOption&gt;","TareAxisValues.operator<InertialTypes.HeadingUpdateEnableOption>"],[1655,0,3,"HeadingUpdateOptions","TareAxisValues.HeadingUpdateOptions"],[1656,0,4,"Variables","TareAxisValues.Variables"],[1657,0,7,"tareRollAxis","TareAxisValues.tareRollAxis"],[1658,0,7,"tarePitchAxis","TareAxisValues.tarePitchAxis"],[1659,0,7,"tareYawAxis","TareAxisValues.tareYawAxis"],[1660,0,5,"Geographic Source Options","Geographic_Source_Options"],[1661,0,4,"Functions","Geographic_Source_Options.Functions"],[1662,0,3,"GeographicSourceOptions","Geographic_Source_Options.GeographicSourceOptions"],[1663,0,3,"GeographicSourceOptions","Geographic_Source_Options.GeographicSourceOptions(2)"],[1664,0,4,"Variables","Geographic_Source_Options.Variables"],[1665,0,7,"source","Geographic_Source_Options.source"],[1666,0,7,"manual","Geographic_Source_Options.manual"],[1667,0,5,"EstimationControlOptions","EstimationControlOptions"],[1668,0,4,"Functions","EstimationControlOptions.Functions"],[1669,0,3,"<span class=\"Qualifier\">operator &lt;mscl::</span>&#8203;uint16&gt;","EstimationControlOptions.operator<mscl.uint16>"],[1670,0,3,"EstimationControlOptions","EstimationControlOptions.EstimationControlOptions"],[1671,0,3,"EstimationControlOptions","EstimationControlOptions.EstimationControlOptions(2)"],[1672,0,4,"Variables","EstimationControlOptions.Variables"],[1673,0,7,"enableGyroBiasEstimation","EstimationControlOptions.enableGyroBiasEstimation"],[1674,0,7,"enableAccelBiasEstimation","EstimationControlOptions.enableAccelBiasEstimation"],[1675,0,7,"enableGyroScaleFactorEstimation","EstimationControlOptions.enableGyroScaleFactorEstimation"],[1676,0,7,"enableAccelScaleFactorEstimation","EstimationControlOptions.enableAccelScaleFactorEstimation"],[1677,0,7,"enableGNSSAntennaOffsetEstimation","EstimationControlOptions.enableGNSSAntennaOffsetEstimation"],[1678,0,7,"enableHardIronAutoCalibration","EstimationControlOptions.enableHardIronAutoCalibration"],[1679,0,7,"enableSoftIronAutoCalibration","EstimationControlOptions.enableSoftIronAutoCalibration"],[1680,0,5,"HeadingData","HeadingData"],[1681,0,4,"Types","HeadingData.Types"],[1682,0,2,"HeadingType","HeadingData.HeadingType"],[1683,0,4,"Variables","HeadingData.Variables"],[1684,0,7,"headingAngle","HeadingData.headingAngle"],[1685,0,7,"headingAngleUncertainty","HeadingData.headingAngleUncertainty"],[1686,0,5,"AdaptiveMeasurementData","AdaptiveMeasurementData"],[1687,0,4,"Variables","AdaptiveMeasurementData.Variables"],[1688,0,7,"mode","AdaptiveMeasurementData.mode"],[1689,0,7,"lowPassFilterCutoff","AdaptiveMeasurementData.lowPassFilterCutoff"],[1690,0,7,"lowLimit","AdaptiveMeasurementData.lowLimit"],[1691,0,7,"highLimit","AdaptiveMeasurementData.highLimit"],[1692,0,7,"lowLimitUncertainty","AdaptiveMeasurementData.lowLimitUncertainty"],[1693,0,7,"highLimitUncertainty","AdaptiveMeasurementData.highLimitUncertainty"],[1694,0,7,"minUncertainty","AdaptiveMeasurementData.minUncertainty"],[1695,0,5,"SignalConditioningValues","SignalConditioningValues"],[1696,0,4,"Types","SignalConditioningValues.Types"],[1697,0,2,"DataConditioningFlags","SignalConditioningValues.DataConditioningFlags"],[1698,0,2,"MagPowerBandwidthSettings","SignalConditioningValues.MagPowerBandwidthSettings"],[1699,0,1,,"SignalConditioningValues.HIGH=0"],[1700,0,1,,"SignalConditioningValues.LOW=1"],[1701,0,4,"Variables","SignalConditioningValues.Variables"],[1702,0,7,"dataConditioningFlags","SignalConditioningValues.dataConditioningFlags"],[1703,0,7,"orientationCalcDecimation","SignalConditioningValues.orientationCalcDecimation"],[1704,0,7,"accelGyroFilterWidth","SignalConditioningValues.accelGyroFilterWidth"],[1705,0,7,"magFilterWidth","SignalConditioningValues.magFilterWidth"],[1706,0,7,"upCompensation","SignalConditioningValues.upCompensation"],[1707,0,7,"northCompensation","SignalConditioningValues.northCompensation"],[1708,0,7,"magBandwidthPower","SignalConditioningValues.magBandwidthPower"],[1709,0,4,"Functions","SignalConditioningValues.Functions"],[1710,0,3,"SignalConditioningValues","SignalConditioningValues.SignalConditioningValues"],[1711,0,3,"conditioningOptionOn","SignalConditioningValues.conditioningOptionOn"],[1712,0,3,"setConditioningOptionOn","SignalConditioningValues.setConditioningOptionOn"],[1713,0,3,"setConditioningOptionOff","SignalConditioningValues.setConditioningOptionOff"],[1714,0,5,"EnableDisableMeasurements","EnableDisableMeasurements"],[1715,0,4,"Types","EnableDisableMeasurements.Types"],[1716,0,2,"MeasurementOptions","EnableDisableMeasurements.MeasurementOptions"],[1717,0,4,"Functions","EnableDisableMeasurements.Functions"],[1718,0,3,"EnableDisableMeasurements","EnableDisableMeasurements.EnableDisableMeasurements"],[1719,0,3,"EnableDisableMeasurements","EnableDisableMeasurements.EnableDisableMeasurements(2)"],[1720,0,4,"Variables","EnableDisableMeasurements.Variables"],[1721,0,7,"measurementOptions","EnableDisableMeasurements.measurementOptions"],[1722,0,4,"Functions","EnableDisableMeasurements.Functions(2)"],[1723,0,3,"optionEnabled","EnableDisableMeasurements.optionEnabled"],[1724,0,3,"enableOption","EnableDisableMeasurements.enableOption"],[1725,0,3,"disableOption","EnableDisableMeasurements.disableOption"]]);