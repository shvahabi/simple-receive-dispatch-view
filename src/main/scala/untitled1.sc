
def translateToPersian(unknown: String): String = {
  val persianDigits: Map[Char, Char] = Map(
    '/' -> '/',
    '1' -> '۱',
    '2' -> '۲',
    '3' -> '۳',
    '4' -> '۴',
    '5' -> '۵',
    '6' -> '۶',
    '7' -> '۷',
    '8' -> '۸',
    '9' -> '۹',
    '0' -> '۰',
    '۱' -> '۱',
    '۲' -> '۲',
    '۳' -> '۳',
    '۴' -> '۴',
    '۵' -> '۵',
    '۶' -> '۶',
    '۷' -> '۷',
    '۸' -> '۸',
    '۹' -> '۹',
    '۰' -> '۰'
  )
  unknown.map(persianDigits(_))
}

def translateToEnglish(unknown: String): String = {
  val englishDigits: Map[Char, Char] = Map(
    '/' -> '/',
    '1' -> '1',
    '2' -> '2',
    '3' -> '3',
    '4' -> '4',
    '5' -> '5',
    '6' -> '6',
    '7' -> '7',
    '8' -> '8',
    '9' -> '9',
    '0' -> '0',
    '۱' -> '1',
    '۲' -> '2',
    '۳' -> '3',
    '۴' -> '4',
    '۵' -> '5',
    '۶' -> '6',
    '۷' -> '7',
    '۸' -> '8',
    '۹' -> '9',
    '۰' -> '0'
  )
  unknown.map(englishDigits(_))
}



val dummie1 = "1399/01/24"
val dummie2 = "۱۳۹۰/۰۱/۲۴"
translateToPersian(dummie1)
translateToPersian(dummie2)


