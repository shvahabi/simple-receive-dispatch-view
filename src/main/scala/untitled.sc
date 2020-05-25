/*
val key: String = "\"BillOfLadingNo\""
val nonObjectExtractorPattern = s"\\s*${key}\\s*:\\s*(.*),".r
val nonObjectExtractorPattern(nonObjectValue) = "\"BillOfLadingNo\": \"GE-12-1398-S\","


val key: String = "\"BillOfLadingNo\""
val objectExtractorPattern = s"[{]\\s*${key}\\s*:\\s*(.*)\\s*[}]".r
val objectExtractorPattern(objectValue) = "{\"BillOfLadingNo\": [\"GE-12-1398-S\"]}"


 */

/* GOOD
val pattern = ("([\\s.]*\"" + key + "\"\\s*:\\s*[0-9]*[\\s.]*)").r

val test: String = "\"FormNo\": 1234"
val a = 14

val pattern(result) = test

 */


val key: String = "FormNo"
//val digitExtractor: String = ".*\\s*(\"" + key + "\")\\s*:\\s*([0-9]*)\\s*[,|}].*"
//val stringExtractor = "\\s*[\\Q]BillOfLadingNo[\\E]\\s*:\\s*[\\Q](.*)[\\E]\\s*[,|}]".r
//val objectExtractor = "[\\{](.*)[\\}]".r
//val arrayExtractor = "[\\[](.*)[\\]]".r



//val pattern = digitExtractor.r
//val pattern = ("\\s*[{]*[\\s.]*" + "(\"" + key + "\"" + "\\s*:\\s*[0-9]*)*[\\s.]*[}]\\s*").r
val digitExtractor = ".*" + "\"" + key + "\"" + "\\s*:\\s*([0-9]*)" + ".*"
val stringExtractor = ".*" + "\"" + key + "\"" + "\\s*:\\s*" + "(\"[.[^\"]]*\")" + ".*"
val objectExtractor = ".*" + "\"" + key + "\"" + "\\s*:\\s*" + "([{][.[^[{][}]]]*[}])" + ".*"
val arrayExtractor = ".*" + "\"" + key + "\"" + "\\s*:\\s*" + "(\\[[.[^\\[\\]]]*\\])" + ".*"
val valueIdentifier = ".*" + "\"" + key + "\"" + "\\s*:\\s*" + "(.?)"  + ".*"
val test: String = "{  \"FormNo\": 1234,  \"ReceivedDate\": {    \"Year\": 2020,    \"Month\": 2,    \"Day\": 18  },  \"GoodsOwner\": {    \"FirstName\": \"Shahed\",    \"SurName\": \"Vahabi\",    \"NationalIDNo\": \"0061234567\"  },  \"BillOfLadingNo\": \"GE-12-1398-S\",  \"PartNo\": 5,  \"Origin\": \"Bandar Abbas\",  \"TruckNo\": {    \"State\": 10,    \"Serial\": 22,    \"Area\": \"y\",    \"Random\": 792  },  \"ItemsList\": [    {      \"Description\": \"cream\",      \"Quantity\": 2,      \"UnitOfMeasurement\": \"box\",      \"GrossWeight\": 100.123456,      \"PackageWeight\": 2.234567,      \"NetWeight\": 98.345678    },    {      \"Description\": \"ice cream\",      \"Quantity\": 3,      \"UnitOfMeasurement\": \"pieces\",      \"GrossWeight\": 150.9011,      \"PackageWeight\": 1.5,      \"NetWeight\": 149.4467    },    {      \"Description\": \"milk\",      \"Quantity\": 2,      \"UnitOfMeasurement\": \"Gallon\",      \"GrossWeight\": 55,      \"PackageWeight\": 2,      \"NetWeight\": 53    }  ],  \"Comments\": \"All in good conditions\",  \"Representative\": {    \"FirstName\": \"Hamed\",    \"SurName\": \"Akhavan\",    \"NationalIDNo\": \"4569519058\"  }}"
//val test = "\"Origin\": \"Bandar Abbas\","
//pattern.findFirstIn(test)
val a = 10

val pattern = digitExtractor.r



val pattern(result) = test






