import org.scalajs.dom
import dom.{Document, Element, Node, document, html}
import dummy.translateToEnglish
import org.scalajs.dom.html.{Area, Input}

import scalajs.js.annotation.JSExportTopLevel
import scalajs.js.annotation.JSExport
import org.scalajs.dom.ext._

import scala.scalajs.concurrent.JSExecutionContext.Implicits._
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.util.{Failure, Success}


object dummy {


  def main(args: Array[String]): Unit = {

  }

  @JSExportTopLevel("dummie")
  def dummie() = {
    val dummie1 = "1399/01/24"
    val dummie2 = "۱۳۹۰/۰۱/۲۴"
    document.getElementById("dummieelement1").innerHTML = translateToPersian(dummie1)
    document.getElementById("dummieelement2").innerHTML = translateToPersian(dummie2)
  }

  def fetchReceivingForm(formNumber: Int = 0): ReceivingForm = {
    /*
    ReceivingForm(
      Person("حامد", "اخوان","1234567890"),
      1234,
      Date("1390", "01", "03"),
      5,
      CarPlate(22, 12, "و", 123),
      "GEW-123",
      "سمنان",
      ItemsList(List(
        Item("خامه", 10, "کارتن", 1000, 50, 950),
        Item("بستنی", 10, "کارتن", 2000, 100, 1900),
        Item("کره", 10, "کارتن", 3000, 150, 2850),
        Item("شیر", 10, "کارتن", 4000, 200, 3800)
      )),
      "شرایط مساعد",
      Person("مصطفی","علینقی", "2345678901"),
      " "
    )
     */

    var receivingForm: Option[ReceivingForm] = None
    val url: String = s"http://localhost:8080/receivedispatch/receipts/${formNumber}"
    Ajax.get(url).onComplete {
      case Success(response) => {
        val json: String = response.responseText

        val formNo: Int = jsonDecomposer(json, "FormNo").toInt
        val ReceivedDate: Date = JSON.parse(jsonDecomposer(json,"ReceivedDate")).asInstanceOf[Date]
        val owner: Person = JSON.parse(jsonDecomposer(json, "GoodsOwner")).asInstanceOf[Person]
        val origin: String = jsonDecomposer(json,"Origin")
        val billOfLading: String = jsonDecomposer(json,"BillOfLadingNo")
        val partNo: Int = jsonDecomposer(json,"PartNo").toInt
        val truckNumber: CarPlate = JSON.parse(jsonDecomposer(json,"TruckNo")).asInstanceOf[CarPlate]
        val comments: String = jsonDecomposer(json,"Comments")
        val representative: Person = JSON.parse(jsonDecomposer(json,"Representative")).asInstanceOf[Person]
        val listOfItems: List[Item] = List(Item("", 0, "", 0, 0, 0))
          //JSON.parse(jsonDecomposer(json,"ItemsList")).toList.map(item: String => JSON.parse(item).asInstanceOf[Item])
        //JSON.parse(jsonDecomposer(json,"ItemsList")).toList.foreach(println())
        val itemsList: ItemsList = ItemsList(listOfItems)

        receivingForm = Some(ReceivingForm(owner, formNo, ReceivedDate, partNo, truckNumber, billOfLading, origin, itemsList, comments, representative))
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
    receivingForm.getOrElse(
      ReceivingForm(
        Person("", "",""),
        99999999,
        Date("", "", ""),
        0,
        CarPlate(0, 0, "x", 0),
        "",
        "",
        ItemsList(List(
          Item("", 0, "", 0, 0, 0)
        )),
        "فرمی با این شماره در سرور یافت نشد",
        Person("","", ""),
        "{ }"
      )
    )
  }

  def jsonDecomposer(json: String, key: String): String = {
    def valueIdentifier(key: String): String = {
      val pattern = (".*" + "\"" + key + "\"" + "\\s*:\\s*" + "(.?)"  + ".*").r
      val pattern(nextCharAfterKey): String = json
      nextCharAfterKey match {
        case "\"" => "String"
        case "{" => "Object"
        case "[" => "Array"
        case _ => "Digit"
      }
    }
    val digitExtractor: String = ".*" + "\"" + key + "\"" + "\\s*:\\s*" + "([0-9]*)" + ".*"
    val stringExtractor:String = ".*" + "\"" + key + "\"" + "\\s*:\\s*" + "(\"[.[^\"]]*\")" + ".*"
    val objectExtractor:String = ".*" + "\"" + key + "\"" + "\\s*:\\s*" + "([{][.[^[{][}]]]*[}])" + ".*"
    val arrayExtractor:String = ".*" + "\"" + key + "\"" + "\\s*:\\s*" + "(\\[[.[^\\[\\]]]*\\])" + ".*"

    val pattern = valueIdentifier(key) match {
      case "Digit" => digitExtractor.r
      case "Object" => objectExtractor.r
      case "String" => stringExtractor.r
      case "Array" => arrayExtractor.r
    }

    val pattern(result) = json
    result
  }

  def fetchDispatchingForm(formNumber: Int = 0): DispatchingForm = {

    /*
    DispatchingForm(
      Person("حامد", "اخوان","1234567890"),
      4321,
      Date("1390", "01", "03"),
      5,
      CarPlate(22, 12, "و", 123),
      Date("1390", "01", "05"),
      "GEW-123",
      Person("مصطفی", "کریمی", "0061234567"),
      ItemsList(List(
        Item("شیر", 10, "کارتن", 4000, 200, 3800),
        Item("کره", 10, "کارتن", 3000, 150, 2850),
        Item("بستنی", 10, "کارتن", 2000, 100, 1900),
        Item("خامه", 10, "کارتن", 1000, 50, 950)
      )),
      "شرایط مساعد",
      Person("مرتضی","علینقی", "2345678901"),
      " "
    )
    */


    var dispatchingForm: Option[DispatchingForm] = None
    val url: String = s"http://localhost:8080/receivedispatch/dispatches/${formNumber}"
    Ajax.get(url).onComplete {
      case Success(response) => {
        val json: String = response.responseText

        val formNo: Int = jsonDecomposer(json, "FormNo").toInt
        val dispatchedDate: Date = JSON.parse(jsonDecomposer(json,"DispatchedDate")).asInstanceOf[Date]
        val owner: Person = JSON.parse(jsonDecomposer(json, "GoodsOwner")).asInstanceOf[Person]
        val draftNumber: String = jsonDecomposer(json,"DraftNo")
        val partNo: Int = jsonDecomposer(json,"PartNo").toInt
        val truckNumber: CarPlate = JSON.parse(jsonDecomposer(json,"TruckNo")).asInstanceOf[CarPlate]
        val draftOwner: Person = JSON.parse(jsonDecomposer(json,"DraftOwner")).asInstanceOf[Person]
        val draftDate: Date = JSON.parse(jsonDecomposer(json,"DraftDate")).asInstanceOf[Date]
        val comments: String = jsonDecomposer(json,"Comments")
        val assignee: Person = JSON.parse(jsonDecomposer(json,"Assignee")).asInstanceOf[Person]
        val listOfItems: List[Item] = List(Item("", 0, "", 0, 0, 0))
          //JSON.parse(jsonDecomposer(json,"ItemsList")).toList.map(item => JSON.parse(item).asInstanceOf[Item])
        JSON.parse(jsonDecomposer(json,"ItemsList")).toList.foreach(println())
        val itemsList: ItemsList = ItemsList(listOfItems)

        dispatchingForm = Some(DispatchingForm(owner, formNo, dispatchedDate, partNo, truckNumber, draftDate, draftNumber, draftOwner, itemsList, comments, assignee))
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }

    dispatchingForm.getOrElse(
      DispatchingForm(
        Person("", "",""),
        99999999,
        Date("", "", ""),
        0,
        CarPlate(0, 0, "x", 0),
        Date("", "", ""),
        "",
        Person("", "", ""),
        ItemsList(List(
          Item("", 0, "", 0, 0, 0)
        )),
        "فرمی با این شماره در سرور یافت نشد",
        Person("","", ""),
        "{ }"
      )
    )
  }

  @JSExportTopLevel("populateReceivingFormOnLoad")
  def populateReceivingFormOnLoad() = {
    val fetchedForm: ReceivingForm = fetchReceivingForm()
    populateReceivingForm(fetchedForm)
  }

  @JSExportTopLevel("populateDispatchingFormOnLoad")
  def populateDispatchingFormOnLoad() = {
    val fetchedForm: DispatchingForm = fetchDispatchingForm()
    populateDispatchingForm(fetchedForm)
  }

  @JSExportTopLevel("submitReceivingForm")
  def submitReceivingForm() = {
    val url: String = "http://localhost:8080/receivedispatch/receipts"
    Ajax.post(url, receivingForm(document).inJsonString).onComplete {
      case Success(response) => println(response.statusText)
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
  }

  @JSExportTopLevel("submitDispatchingForm")
  def submitDispatchingForm() = {
    val url: String = "http://localhost:8080/receivedispatch/dispatches"
    Ajax.post(url, dispathingForm(document).inJsonString).onComplete {
      case Success(response) => println(response.statusText)
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
  }

  @JSExportTopLevel("populateReceivingTable")
  def populateReceivingTable(formNumber: Int) = {
    val selectedForm: ReceivingForm = fetchReceivingForm(formNumber)
    document.getElementById("formno").innerText = selectedForm.number.toString
    document.getElementById("receiveddate").innerText = selectedForm.date.concat
    document.getElementById("goods_owner").innerText = selectedForm.goodsOwner.toString
    document.getElementById("billofladingno").innerText = selectedForm.billOfLading
    document.getElementById("partno").innerText = selectedForm.partNumber.toString
    document.getElementById("origin").innerText = selectedForm.origin
    document.getElementById("truckno").innerText = selectedForm.truck.concat
    document.getElementById("comments").innerText = selectedForm.comments
    document.getElementById("representative").innerText = selectedForm.representative.toString

    val itemsArray = selectedForm.itemsList.items.toArray[Item]
    for(i <- 0 until itemsArray.length - 1) {
      val anyItem = itemsArray(i)
      document.getElementById(s"itemslist_description_${i}").innerText = anyItem.description
      document.getElementById(s"itemslist_quantity_${i}").innerText = anyItem.quantity.toString
      document.getElementById(s"itemslist_unitofmeasurement_${i}").innerText = anyItem.unitOfMeasurement
      document.getElementById(s"itemslist_grossweight_${i}").innerText = anyItem.grossWeight.toString
      document.getElementById(s"itemslist_packageweight_${i}").innerText = anyItem.packageWeight.toString
      document.getElementById(s"itemslist_netweight_${i}").innerText = anyItem.netWeight.toString
    }
  }

  @JSExportTopLevel("populateDispatchingTable")
  def populateDispatchingTable(formNumber: Int) = {
    val selectedForm: DispatchingForm = fetchDispatchingForm(formNumber)
    document.getElementById("formno").innerText = selectedForm.number.toString
    document.getElementById("dispatcheddate").innerText = selectedForm.date.concat
    document.getElementById("goods_owner").innerText = selectedForm.goodsOwner.toString
    document.getElementById("draftdate").innerText = selectedForm.draftDate.concat
    document.getElementById("draftno").innerText = selectedForm.draftNumber
    document.getElementById("draftowner").innerText = selectedForm.draftOwner.toString
    document.getElementById("partno").innerText = selectedForm.partNumber.toString
    document.getElementById("truckno").innerText = selectedForm.truck.concat
    document.getElementById("comments").innerText = selectedForm.comments
    document.getElementById("assignee").innerText = selectedForm.assignee.toString

    val itemsArray = selectedForm.itemsList.items.toArray[Item]
    for(i <- 0 until itemsArray.length - 1) {
      val anyItem = itemsArray(i)
      document.getElementById(s"itemslist_description_${i}").innerText = anyItem.description
      document.getElementById(s"itemslist_quantity_${i}").innerText = anyItem.quantity.toString
      document.getElementById(s"itemslist_unitofmeasurement_${i}").innerText = anyItem.unitOfMeasurement
      document.getElementById(s"itemslist_grossweight_${i}").innerText = anyItem.grossWeight.toString
      document.getElementById(s"itemslist_packageweight_${i}").innerText = anyItem.packageWeight.toString
      document.getElementById(s"itemslist_netweight_${i}").innerText = anyItem.netWeight.toString
    }
  }



  def populateDispatchingForm(dispatchingForm: DispatchingForm): Unit = {
    document.getElementById("formno").asInstanceOf[html.Input].value = dispatchingForm.number.toString

    document.getElementById("dispatcheddate").asInstanceOf[html.Input].value = dispatchingForm.date.year + "/" + dispatchingForm.date.month + "/" + dispatchingForm.date.day
    document.getElementById("goodsowner_firstname").asInstanceOf[html.Input].value = dispatchingForm.goodsOwner.firstName
    document.getElementById("goodsowner_lastname").asInstanceOf[html.Input].value = dispatchingForm.goodsOwner.surName
    document.getElementById("goodsowner_nationalidno").asInstanceOf[html.Input].value = dispatchingForm.goodsOwner.nationalIDNo
    document.getElementById("draftno").asInstanceOf[html.Input].value = dispatchingForm.draftNumber
    document.getElementById("draftowner_firstname").asInstanceOf[html.Input].value = dispatchingForm.draftOwner.firstName
    document.getElementById("draftowner_lastname").asInstanceOf[html.Input].value = dispatchingForm.draftOwner.surName
    document.getElementById("draftowner_nationalidno").asInstanceOf[html.Input].value = dispatchingForm.draftOwner.nationalIDNo
    document.getElementById("draftdate").asInstanceOf[html.Input].value = dispatchingForm.draftDate.year + "/" + dispatchingForm.draftDate.month + "/" + dispatchingForm.draftDate.day
    document.getElementById("partno").asInstanceOf[html.Input].value = dispatchingForm.partNumber.toString
    document.getElementById("truckno_state").asInstanceOf[html.Input].value = dispatchingForm.truck.state.toString
    document.getElementById("truckno_random").asInstanceOf[html.Input].value = dispatchingForm.truck.random.toString
    document.getElementById("truckno_area").asInstanceOf[html.Input].value = dispatchingForm.truck.area
    document.getElementById("truckno_serial").asInstanceOf[html.Input].value = dispatchingForm.truck.serial.toString

    def inquireNumberOfRows: Int = document.getElementById("itemslist").childElementCount

    for(anyItem <- dispatchingForm.itemsList.items) {
      addNewRowToItemsList
      document.getElementById(s"rownumber_${inquireNumberOfRows}").innerHTML = inquireNumberOfRows.toString
      document.getElementById(s"itemslist_description_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.description
      document.getElementById(s"itemslist_quantity_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.quantity.toString
      document.getElementById(s"itemslist_unitofmeasurement_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.unitOfMeasurement
      document.getElementById(s"itemslist_grossweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.grossWeight.toString
      document.getElementById(s"itemslist_packageweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.packageWeight.toString
      document.getElementById(s"itemslist_netweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.netWeight.toString
    }
    document.getElementById("comments").asInstanceOf[html.Input].value = dispatchingForm.comments
    document.getElementById("assignee_firstname").asInstanceOf[html.Input].value = dispatchingForm.assignee.firstName
    document.getElementById("assignee_lastname").asInstanceOf[html.Input].value = dispatchingForm.assignee.surName
    document.getElementById("assignee_nationalidno").asInstanceOf[html.Input].value = dispatchingForm.assignee.nationalIDNo
  }

  def populateReceivingForm(receivingForm: ReceivingForm): Unit = {
    document.getElementById("formno").asInstanceOf[html.Input].value = receivingForm.number.toString
    document.getElementById("receiveddate").asInstanceOf[html.Input].value = receivingForm.date.year + "/" + receivingForm.date.month + "/" + receivingForm.date.day
    document.getElementById("goodsowner_firstname").asInstanceOf[html.Input].value = receivingForm.goodsOwner.firstName
    document.getElementById("goodsowner_lastname").asInstanceOf[html.Input].value = receivingForm.goodsOwner.surName
    document.getElementById("goodsowner_nationalidno").asInstanceOf[html.Input].value = receivingForm.goodsOwner.nationalIDNo
    document.getElementById("billofladingno").asInstanceOf[html.Input].value = receivingForm.billOfLading
    document.getElementById("partno").asInstanceOf[html.Input].value = receivingForm.partNumber.toString
    document.getElementById("origin").asInstanceOf[html.Input].value = receivingForm.origin
    document.getElementById("truckno_state").asInstanceOf[html.Input].value = receivingForm.truck.state.toString
    document.getElementById("truckno_random").asInstanceOf[html.Input].value = receivingForm.truck.random.toString
    document.getElementById("truckno_area").asInstanceOf[html.Input].value = receivingForm.truck.area
    document.getElementById("truckno_serial").asInstanceOf[html.Input].value = receivingForm.truck.serial.toString

    def inquireNumberOfRows: Int = document.getElementById("itemslist").childElementCount

    for(anyItem <- receivingForm.itemsList.items) {
      addNewRowToItemsList
      document.getElementById(s"rownumber_${inquireNumberOfRows}").innerHTML = inquireNumberOfRows.toString
      document.getElementById(s"itemslist_description_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.description
      document.getElementById(s"itemslist_quantity_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.quantity.toString
      document.getElementById(s"itemslist_unitofmeasurement_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.unitOfMeasurement
      document.getElementById(s"itemslist_grossweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.grossWeight.toString
      document.getElementById(s"itemslist_packageweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.packageWeight.toString
      document.getElementById(s"itemslist_netweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.netWeight.toString
    }
    document.getElementById("comments").asInstanceOf[html.Input].value = receivingForm.comments
    document.getElementById("representative_firstname").asInstanceOf[html.Input].value = receivingForm.representative.firstName
    document.getElementById("representative_lastname").asInstanceOf[html.Input].value = receivingForm.representative.surName
    document.getElementById("representative_nationalidno").asInstanceOf[html.Input].value = receivingForm.representative.nationalIDNo
  }

  def fetchPeople: Map[String, Person] = {

    Map("0123456789" -> Person("شاهد", "وهابی", "0123456789"), "1234567890" -> Person("حامد", "اخوان", "1234567890"))
		/*
    var result: List[Person] = Nil

    val url = "http://localhost:8080/receivedispatch/people"
    def getData = Ajax.get(url).map(_.responseText).map(JSON.parse(_)).map(_.asInstanceOf[Seq[Person]])
      getData.onComplete {
        case Success(v) => result = v.toList
        case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
      }
    val fetchedPeople: Map[String, Person] = result.map(x => (x.nationalIDNo, x)).toMap
    fetchedPeople
*/
  }

  def addOption(textNode: String, value: String): Node = {
    val newOption = document.createElement("option")
    newOption.innerHTML = textNode
    newOption.setAttribute("value", value)
    newOption
  }

  @JSExportTopLevel("propagatePersonArticleSelection")
  def propagatePersonArticleSelection(personList: String, article: String) = {
    val selected: String = document.getElementById(personList + "_" + article).asInstanceOf[html.Input].value
    val fetchedPeople: Map[String, Person] = fetchPeople
    if (fetchedPeople contains selected) {
      document.getElementById(s"${personList}_nationalidno").asInstanceOf[html.Input].value = translateToPersian(fetchedPeople(selected).nationalIDNo)
      document.getElementById(s"${personList}_firstname").asInstanceOf[html.Input].value = fetchedPeople(selected).firstName
      document.getElementById(s"${personList}_lastname").asInstanceOf[html.Input].value = fetchedPeople(selected).surName
    }
  }

  @JSExportTopLevel("populateDataList")
  def populateDataList() = {
    for(person <- fetchPeople.values.toList) {
      document.getElementById("fname").appendChild(addOption(s"${person.firstName} " + s"${person.surName} " + s"${translateToPersian(person.nationalIDNo)}", s"${person.nationalIDNo}"))
      document.getElementById("lname").appendChild(addOption(s"${person.firstName} " + s"${person.surName} " + s"${translateToPersian(person.nationalIDNo)}", s"${person.nationalIDNo}"))
      document.getElementById("nidno").appendChild(addOption(s"${person.firstName} " + s"${person.surName} " + s"${translateToPersian(person.nationalIDNo)}", s"${person.nationalIDNo}"))
    }
  }

  @JSExportTopLevel("addNewRowToItemsList")
  def addNewRowToItemsList() = {
    val itemsList = document.getElementById("itemslist")
    val rowsCount = itemsList.childElementCount
    itemsList.appendChild(newRow(rowsCount + 1))
  }

  @JSExportTopLevel("removeRowFromItemsList")
  def removeRowFromItemsList(Row: Int) = {
    val itemsList = document.getElementById("itemslist")
    itemsList.removeChild(document.getElementById(s"items_${Row}"))
    val rowsCount = itemsList.childElementCount

    for (item <- Row + 1 to rowsCount + 1) {
      document.getElementById(s"items_${item}").setAttribute("id", s"items_${item - 1}")
      document.getElementById(s"rowremovebutton_${item}").setAttribute("onclick", s"removeRowFromItemsList(${item - 1})")
      document.getElementById(s"rowremovebutton_${item}").setAttribute("id", s"rowremovebutton_${item - 1}")
      document.getElementById(s"rownumber_${item}").innerHTML = translateToPersian((item - 1).toString)
      document.getElementById(s"rownumber_${item}").setAttribute("id", s"rownumber_${item - 1}")
      document.getElementById(s"itemslist_description_${item}").setAttribute("id", s"itemslist_description_${item - 1}")
      document.getElementById(s"itemslist_quantity_${item}").setAttribute("id", s"itemslist_quantity_${item - 1}")
      document.getElementById(s"itemslist_unitofmeasurement_${item}").setAttribute("id", s"itemslist_unitofmeasurement_${item - 1}")
      document.getElementById(s"itemslist_grossweight_${item}").setAttribute("id", s"itemslist_grossweight_${item - 1}")
      document.getElementById(s"itemslist_packageweight_${item}").setAttribute("id", s"itemslist_packageweight_${item - 1}")
      document.getElementById(s"itemslist_netweight_${item}").setAttribute("id", s"itemslist_netweight_${item - 1}")
    }
    updateSummary
  }

  @JSExportTopLevel("updateSummary")
  def updateSummary() = {

    document.getElementById("qty_sum").innerHTML = "۰"
    document.getElementById("unit_sum").innerHTML = "-"
    document.getElementById("gw_sum").innerHTML = "۰"
    document.getElementById("pw_sum").innerHTML = "۰"
    document.getElementById("nw_sum").innerHTML = "۰"
    val rowsCount = document.getElementById("itemslist").childElementCount

    //document.getElementById("unit_sum").innerHTML = document.getElementById("itemslist_unitofmeasurement_1").asInstanceOf[html.Input].value.toString

    //document.getElementById("unit_sum").innerHTML = document.getElementById("itemslist_unitofmeasurement_1").asInstanceOf[html.Input].valueAsNumber.toInt.toString

    document.getElementById("unit_sum").innerHTML = document.getElementById("itemslist_unitofmeasurement_1").asInstanceOf[html.Input].value.toString


    for (item <- 1 to rowsCount) {

      if (document.getElementById(s"itemslist_unitofmeasurement_${item}").asInstanceOf[html.Input].value.toString == document.getElementById("unit_sum").innerHTML.toString) {
        val qtySum: Double = translateToEnglish(document.getElementById("qty_sum").innerHTML).toDouble
        val qty: Double = translateToEnglish(document.getElementById(s"itemslist_quantity_${item}").asInstanceOf[Input].valueAsNumber.toString).toDouble
        document.getElementById("qty_sum").innerHTML = translateToPersian((qtySum + qty).toString)
      }
      else {
        document.getElementById("qty_sum").innerHTML = "-"
        document.getElementById("unit_sum").innerHTML = "-"
      }

      document.getElementById("unit_sum").innerHTML = document.getElementById(s"itemslist_unitofmeasurement_${item}").asInstanceOf[html.Input].value.toString
      val gwSum: Double = translateToEnglish(document.getElementById("gw_sum").innerHTML).toDouble
      val pwSum: Double = translateToEnglish(document.getElementById("pw_sum").innerHTML).toDouble
      val nwSum: Double = translateToEnglish(document.getElementById("nw_sum").innerHTML).toDouble
      val gw: Double = translateToEnglish(document.getElementById(s"itemslist_grossweight_${item}").asInstanceOf[Input].valueAsNumber.toString).toDouble
      val pw: Double = translateToEnglish(document.getElementById(s"itemslist_packageweight_${item}").asInstanceOf[Input].valueAsNumber.toString).toDouble
      val nw: Double = translateToEnglish(document.getElementById(s"itemslist_netweight_${item}").asInstanceOf[Input].valueAsNumber.toString).toDouble
      document.getElementById("gw_sum").innerHTML = translateToPersian((gwSum + gw).toString)
      document.getElementById("pw_sum").innerHTML = translateToPersian((pwSum + pw).toString)
      document.getElementById("nw_sum").innerHTML = translateToPersian((nwSum + nw).toString)
    }



  }

  def newRow(RowNumber: Int) :Node = {
    val newItems = document.createElement("div")
    newItems.classList.add("row")
    newItems.setAttribute("id", s"items_${RowNumber}")
    newItems.innerHTML =
      s"""
         |<div class="col-1">
         |  <div class="row">
         |    <button class="btn btn-outline-danger col-6 rounded-0" type="button" onclick="removeRowFromItemsList(${RowNumber})" id="rowremovebutton_${RowNumber}">--</button>
         |    <span class="form-control col-6 rounded-0" id="rownumber_${RowNumber}">${translateToPersian(RowNumber.toString)}</span>
         |  </div>
         |</div>
         |<input type="text" class="form-control col-3 rounded-0" placeholder="عنوان کالا" id="itemslist_description_${RowNumber}" onchange="updateSummary()">
         |<input type="number" class="form-control col-1 rounded-0" min="0" id="itemslist_quantity_${RowNumber}" min="0" step="any" value="0" onchange="updateSummary()">
         |<input type="text" class="form-control col-1 rounded-0" placeholder="-" id="itemslist_unitofmeasurement_${RowNumber}" onchange="updateSummary()">
         |<input type="number" class="form-control col-2 rounded-0" id="itemslist_grossweight_${RowNumber}" min="0" step="any" value="0" onchange="updateSummary()">
         |<input type="number" class="form-control col-2 rounded-0" id="itemslist_packageweight_${RowNumber}" min="0" step="any" value="0" onchange="updateSummary()">
         |<input type="number" class="form-control col-2 rounded-0" id="itemslist_netweight_${RowNumber}" min="0" step="any" value="0" onchange="updateSummary()">
         |""".stripMargin
    newItems
  }



  case class Person(firstName: String, surName: String, nationalIDNo: String) {
    def toJsonString: String =
      s"""{
        |"FirstName": "${firstName}",
        |"SurName": "${surName}",
        |"NationalIDNo": "${nationalIDNo}"
        |}""".stripMargin
  }
  case class CarPlate(state: Int, serial: Int, area: String, random: Int) {
    def concat: String = serial.toString + area.toString + random.toString + state.toString
    def toJsonString: String =
      s"""{
        |"State": ${state},
        |"Serial": ${serial},
        |"Area": "${area}",
        |"Random": ${random}
        |}""".stripMargin
  }
  case class Date(year: String, month: String, day: String) {
    def concat: String = year + "/" + month + "/" + day
    def toJsonString: String =
      s"""{
        |"Year": ${year.replaceFirst("^0+(?!$)", "")},
        |"Month": ${month.replaceFirst("^0+(?!$)", "")},
        |"Day": ${day.replaceFirst("^0+(?!$)", "")}
        |}""".stripMargin
  }
  case class Item(description: String, quantity: Int, unitOfMeasurement: String, grossWeight: Double, packageWeight: Double, netWeight: Double) {
    def toJsonString: String =
      s"""{
        |"Description": "${description}",
        |"Quantity": ${quantity},
        |"UnitOfMeasurement": "${unitOfMeasurement}",
        |"GrossWeight": ${grossWeight},
        |"PackageWeight": ${packageWeight},
        |"NetWeight": ${netWeight}
        |}""".stripMargin
  }
  case class ItemsList(items: List[Item]) {
    def toJsonString: String =
      s"""[
        |${items.map(x => x.toJsonString).reduceLeft((y: String, z: String) => y + ", " + z).toString}
        |]""".stripMargin
  }


  def translateToPersian(unknown: String): String = {
    val persianDigits: Map[Char, Char] = Map(
      '٫' -> '٫',
      '.' -> '٫',
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
      '٫' -> '.',
      '.' -> '.',
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

  def person(firstName: Element, surName: Element, nationalIDNo: Element): Person =
    Person(firstName.asInstanceOf[html.Input].value, surName.asInstanceOf[html.Input].value, translateToEnglish(nationalIDNo.asInstanceOf[html.Input].value))

  def person(json: String): Person =
    Person(jsonDecomposer(json, "FirstName"), jsonDecomposer(json, "SurName"), jsonDecomposer(json, "NationalIDNo"))

  def carPlate(state: Element, serial: Element, area: Element, random: Element): CarPlate =
    CarPlate(translateToEnglish(state.asInstanceOf[html.Input].valueAsNumber.toString).toInt, translateToEnglish(serial.asInstanceOf[html.Input].valueAsNumber.toString).toInt, area.asInstanceOf[html.Input].value, translateToEnglish(random.asInstanceOf[html.Input].valueAsNumber.toString).toInt)

  def date(dateElement: Element): Date = {
    val date: String = translateToEnglish(dateElement.asInstanceOf[html.Input].value)
    Date(date.split("/")(0), date.split("/")(1), date.split("/")(2))
  }

  def item(description: Element, quantity: Element, unitOfMeasurement: Element, grossWeight: Element, packageWeight: Element, netWeight: Element): Item =
    Item(description.asInstanceOf[html.Input].value, translateToEnglish(quantity.asInstanceOf[html.Input].valueAsNumber.toString).toInt, unitOfMeasurement.asInstanceOf[html.Input].value , translateToEnglish(grossWeight.asInstanceOf[html.Input].valueAsNumber.toString).toDouble , translateToEnglish(packageWeight.asInstanceOf[html.Input].valueAsNumber.toString).toDouble , translateToEnglish(netWeight.asInstanceOf[html.Input].valueAsNumber.toString).toDouble)

  case class ReceivingForm(goodsOwner: Person, number: Int, date: Date, partNumber: Int, truck: CarPlate, billOfLading: String, origin: String, itemsList: ItemsList, comments: String, representative: Person, inJsonString: String = "{}")
  case class DispatchingForm(goodsOwner: Person, number: Int, date: Date, partNumber: Int, truck: CarPlate, draftDate: Date, draftNumber: String, draftOwner: Person, itemsList: ItemsList, comments: String, assignee: Person, inJsonString: String = "{}")

  def dispathingForm(document: Document): DispatchingForm = {
    //‫todo: بازنویسی کل این بخش از طریق try و catch و some و getorelse و استفاده از static type checking برای form validation
    val owner: Person = person(document.getElementById("goodsowner_firstname"), document.getElementById("goodsowner_lastname"), document.getElementById("goodsowner_nationalidno"))
    val formNo: Int = translateToEnglish(document.getElementById("formno").asInstanceOf[html.Input].valueAsNumber.toInt.toString).toInt
    val dispatchedDate: Date = date(document.getElementById("dispatcheddate"))
    val partNo: Int = translateToEnglish(document.getElementById("partno").asInstanceOf[html.Input].valueAsNumber.toInt.toString).toInt

    val draftDate: Date = date(document.getElementById("draftdate"))
    val draftNumber: String = document.getElementById("draftno").asInstanceOf[html.Input].value
    val draftOwner: Person = person(document.getElementById("draftowner_firstname"), document.getElementById("draftowner_lastname"), document.getElementById("draftowner_nationalidno"))

    val truckNumber: CarPlate = carPlate(document.getElementById("truckno_state"), document.getElementById("truckno_serial"), document.getElementById("truckno_area"), document.getElementById("truckno_random"))

    val rowsCount: Int = document.getElementById("itemslist").childElementCount
    val listOfItems: List[Item] =
      List.range[Int](1, rowsCount + 1).map(i => item(document.getElementById(s"itemslist_description_${i}"), document.getElementById(s"itemslist_quantity_${i}"), document.getElementById(s"itemslist_unitofmeasurement_${i}"), document.getElementById(s"itemslist_grossweight_${i}"), document.getElementById(s"itemslist_packageweight_${i}"), document.getElementById(s"itemslist_netweight_${i}")))
    val itemsList: ItemsList = ItemsList(listOfItems)

    val comments: String = document.getElementById("comments").asInstanceOf[html.TextArea].value
    val assignee: Person = person(document.getElementById("assignee_firstname"), document.getElementById("assignee_lastname"), document.getElementById("assignee_nationalidno"))
    val documentToJsonString: String =
      s"""{
         |"FormNo": ${formNo},
         |"DispatchedDate": ${dispatchedDate.toJsonString},
         |"GoodsOwner": ${owner.toJsonString},
         |"DraftNo": \"${draftNumber}\",
         |"PartNo": ${partNo},
         |"TruckNo": ${truckNumber.toJsonString},
         |"DraftOwner": ${draftOwner.toJsonString},
         |"DraftDate": ${draftDate.toJsonString},
         |"ItemsList": ${itemsList.toJsonString},
         |"Comments": \"${comments}\",
         |"Assignee": ${assignee.toJsonString}
         |}""".stripMargin

    DispatchingForm(owner, formNo, dispatchedDate, partNo, truckNumber, draftDate, draftNumber, draftOwner, itemsList, comments, assignee, documentToJsonString)
  }

  def receivingForm(document: Document): ReceivingForm = {
    //‫todo: بازنویسی کل این بخش از طریق try و catch و some و getorelse و استفاده از static type checking برای form validation
    val owner: Person = person(document.getElementById("goodsowner_firstname"), document.getElementById("goodsowner_lastname"), document.getElementById("goodsowner_nationalidno"))
    val formNo: Int = translateToEnglish(document.getElementById("formno").asInstanceOf[html.Input].valueAsNumber.toInt.toString).toInt
    val receivedDate: Date = date(document.getElementById("receiveddate"))
    val partNo: Int = translateToEnglish(document.getElementById("partno").asInstanceOf[html.Input].valueAsNumber.toInt.toString).toInt

    val billOfLadingNumber: String = document.getElementById("billofladingno").asInstanceOf[html.Input].value
    val origin: String = document.getElementById("origin").asInstanceOf[html.Input].value

    val truckNumber: CarPlate = carPlate(document.getElementById("truckno_state"), document.getElementById("truckno_serial"), document.getElementById("truckno_area"), document.getElementById("truckno_random"))

    val rowsCount: Int = document.getElementById("itemslist").childElementCount
    val listOfItems: List[Item] =
      List.range[Int](1, rowsCount + 1).map(i => item(document.getElementById(s"itemslist_description_${i}"), document.getElementById(s"itemslist_quantity_${i}"), document.getElementById(s"itemslist_unitofmeasurement_${i}"), document.getElementById(s"itemslist_grossweight_${i}"), document.getElementById(s"itemslist_packageweight_${i}"), document.getElementById(s"itemslist_netweight_${i}")))
    val itemsList: ItemsList = ItemsList(listOfItems)

    val comments: String = document.getElementById("comments").asInstanceOf[html.TextArea].value
    val representative: Person = person(document.getElementById("representative_firstname"), document.getElementById("representative_lastname"), document.getElementById("representative_nationalidno"))
    val documentToJsonString: String =
      s"""{
         |"FormNo": ${formNo},
         |"ReceivedDate": ${receivedDate.toJsonString},
         |"GoodsOwner": ${owner.toJsonString},
         |"BillOfLadingNo": \"${billOfLadingNumber}\",
         |"PartNo": ${partNo},
         |"Origin": \"${origin}\",
         |"TruckNo": ${truckNumber.toJsonString},
         |"ItemsList": ${itemsList.toJsonString},
         |"Comments": \"${comments}\",
         |"Representative": ${representative.toJsonString}
         |}""".stripMargin

    ReceivingForm(owner, formNo, receivedDate, partNo, truckNumber, billOfLadingNumber, origin, itemsList, comments, representative, documentToJsonString)
  }

}
