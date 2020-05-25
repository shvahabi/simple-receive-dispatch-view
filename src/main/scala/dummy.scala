import org.scalajs.dom
import org.scalajs.dom.html.{Area, Input}
import org.scalajs.dom.raw.{HTMLElement, NodeList}
import org.scalajs.dom.{Document, Element, Node, document, html}

import scalajs.js.annotation.{JSExport, JSExportTopLevel}

object dummy {


  def main(args: Array[String]): Unit = {

  }

  def fetchReceivingForm: ReceivingForm = {
    ReceivingForm(
      Person("حامد", "اخوان","1234567890"),
      1234,
      Date(1390, 1, 3),
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
  }

  def fetchDispatchingForm: DispatchingForm = {
    DispatchingForm(
      Person("حامد", "اخوان","1234567890"),
      4321,
      Date(1390, 1, 3),
      5,
      CarPlate(22, 12, "و", 123),
      Date(1390, 1, 5),
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
  }

  @JSExportTopLevel("populateReceivingFormOnLoad")
  def populateReceivingFormOnLoad() = {
    val fetchedForm: ReceivingForm = fetchReceivingForm
    populateReceivingForm(fetchedForm)
  }

  @JSExportTopLevel("populateDispatchingFormOnLoad")
  def populateDispatchingFormOnLoad() = {
    val fetchedForm: DispatchingForm = fetchDispatchingForm
    populateDispatchingForm(fetchedForm)
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
      document.getElementById(s"${personList}_nationalidno").asInstanceOf[html.Input].value = fetchedPeople(selected).nationalIDNo.toString
      document.getElementById(s"${personList}_firstname").asInstanceOf[html.Input].value = fetchedPeople(selected).firstName.toString
      document.getElementById(s"${personList}_lastname").asInstanceOf[html.Input].value = fetchedPeople(selected).surName.toString
    }
  }

  @JSExportTopLevel("populateDataList")
  def populateDataList() = {
    for(person <- fetchPeople.values.toList) {
      document.getElementById("fname").appendChild(addOption(s"${person.firstName} " + s"${person.surName} " + s"${person.nationalIDNo}", s"${person.nationalIDNo}"))
      document.getElementById("lname").appendChild(addOption(s"${person.firstName} " + s"${person.surName} " + s"${person.nationalIDNo}", s"${person.nationalIDNo}"))
      document.getElementById("nidno").appendChild(addOption(s"${person.firstName} " + s"${person.surName} " + s"${person.nationalIDNo}", s"${person.nationalIDNo}"))
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
      document.getElementById(s"rownumber_${item}").innerHTML = (item - 1).toString
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
    document.getElementById("qty_sum").innerHTML = 0.toString
    document.getElementById("unit_sum").innerHTML = "-"
    document.getElementById("gw_sum").innerHTML = 0.toString
    document.getElementById("pw_sum").innerHTML = 0.toString
    document.getElementById("nw_sum").innerHTML = 0.toString
    val rowsCount = document.getElementById("itemslist").childElementCount

    //document.getElementById("unit_sum").innerHTML = document.getElementById("itemslist_unitofmeasurement_1").asInstanceOf[html.Input].value.toString

    //document.getElementById("unit_sum").innerHTML = document.getElementById("itemslist_unitofmeasurement_1").asInstanceOf[html.Input].valueAsNumber.toInt.toString

    document.getElementById("unit_sum").innerHTML = document.getElementById(s"itemslist_unitofmeasurement_1").asInstanceOf[html.Input].value.toString

    for (item <- 1 to rowsCount) {


      if (document.getElementById(s"itemslist_unitofmeasurement_${item}").asInstanceOf[html.Input].value.toString == document.getElementById("unit_sum").innerHTML.toString)
        document.getElementById("qty_sum").innerHTML = (document.getElementById("qty_sum").innerHTML.toString.toDouble + document.getElementById(s"itemslist_quantity_${item}").asInstanceOf[html.Input].valueAsNumber).toString
      else {
        document.getElementById("qty_sum").innerHTML = "-"
        document.getElementById("unit_sum").innerHTML = "-"
      }
      document.getElementById("unit_sum").innerHTML = document.getElementById(s"itemslist_unitofmeasurement_${item}").asInstanceOf[html.Input].value.toString
      document.getElementById("gw_sum").innerHTML = (document.getElementById("gw_sum").innerHTML.toString.toDouble + document.getElementById(s"itemslist_grossweight_${item}").asInstanceOf[html.Input].valueAsNumber).toString
      document.getElementById("pw_sum").innerHTML = (document.getElementById("pw_sum").innerHTML.toString.toDouble + document.getElementById(s"itemslist_packageweight_${item}").asInstanceOf[html.Input].valueAsNumber).toString
      document.getElementById("nw_sum").innerHTML = (document.getElementById("nw_sum").innerHTML.toString.toDouble + document.getElementById(s"itemslist_netweight_${item}").asInstanceOf[html.Input].valueAsNumber).toString
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
         |    <span class="form-control col-6 rounded-0" id="rownumber_${RowNumber}">${RowNumber}</span>
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
      s"""
        |{
        |"FirstName": "${firstName}",
        |"SurName": "${surName}",
        |"NationalIDNo": "${nationalIDNo}"
        |}
        |""".stripMargin
  }
  case class CarPlate(state: Int, serial: Int, area: String, random: Int) {
    def concat: String = serial.toString + area.toString + random.toString + state.toString
    def toJsonString: String =
      s"""
        |{
        |"State": ${state},
        |"Serial": ${serial},
        |"Area": "${area}",
        |"Random": ${random}
        |}
        |""".stripMargin
  }
  case class Date(year: Int, month: Int, day: Int) {
    def concat: Int = (year.toString + month.toString + day.toString).toInt
    def toJsonString: String =
      s"""
        |{
        |"Year": ${year},
        |"Month": ${month},
        |"Day": ${day}
        |}
        |""".stripMargin
  }
  case class Item(description: String, quantity: Int, unitOfMeasurement: String, grossWeight: Double, packageWeight: Double, netWeight: Double) {
    def toJsonString: String =
      s"""
        |{
        |"Description": "${description}",
        |"Quantity": ${quantity},
        |"UnitOfMeasurement": "${unitOfMeasurement}",
        |"GrossWeight": ${grossWeight},
        |"PackageWeight": ${packageWeight},
        |"NetWeight": ${netWeight}
        |}
        |""".stripMargin
  }
  case class ItemsList(items: List[Item]) {
    def toJsonString: String =
      s"""
        |[
        |${items.map(x => x.toJsonString).reduceLeft((y: String, z: String) => y + ", " + z).toString}
        |]
        |""".stripMargin
  }


  def person(firstName: Element, surName: Element, nationalIDNo: Element): Person =
    Person(firstName.asInstanceOf[html.Input].value.toString, surName.asInstanceOf[html.Input].value.toString, nationalIDNo.asInstanceOf[html.Input].value.toString)

  def carPlate(state: Element, serial: Element, area: Element, random: Element): CarPlate =
    CarPlate(state.asInstanceOf[html.Input].valueAsNumber.toInt, serial.asInstanceOf[html.Input].valueAsNumber.toInt, area.asInstanceOf[html.Input].value.toString, random.asInstanceOf[html.Input].valueAsNumber.toInt)

  def date(year: Element, month: Element, day: Element): Date =
    Date(year.asInstanceOf[html.Input].valueAsNumber.toInt, month.asInstanceOf[html.Input].valueAsNumber.toInt, day.asInstanceOf[html.Input].valueAsNumber.toInt)

  def item(description: Element, quantity: Element, unitOfMeasurement: Element, grossWeight: Element, packageWeight: Element, netWeight: Element): Item =
    Item(description.asInstanceOf[html.Input].value.toString, quantity.asInstanceOf[html.Input].valueAsNumber.toInt, unitOfMeasurement.asInstanceOf[html.Input].value.toString , grossWeight.asInstanceOf[html.Input].valueAsNumber.toDouble , packageWeight.asInstanceOf[html.Input].valueAsNumber.toDouble , netWeight.asInstanceOf[html.Input].valueAsNumber.toDouble)

  //def itemsList()

  case class ReceivingForm(goodsOwner: Person, number: Int, date: Date, partNumber: Int, truck: CarPlate, billOfLading: String, origin: String, itemsList: ItemsList, comments: String, representative: Person, inJsonString: String)
  case class DispatchingForm(goodsOwner: Person, number: Int, date: Date, partNumber: Int, truck: CarPlate, draftDate: Date, draftNumber: String, draftOwner: Person, itemsList: ItemsList, comments: String, assignee: Person, inJsonString: String)

  def receivingForm(document: Document): ReceivingForm = {
    val formNo = document.getElementById("formno").asInstanceOf[html.Input].valueAsNumber.toInt
    val partNo = document.getElementById("partno").asInstanceOf[html.Input].valueAsNumber.toInt
    val billOfLadingNumber = document.getElementById("billofladingno").asInstanceOf[html.Input].value.toString
    val origin = document.getElementById("origin").asInstanceOf[html.Input].value.toString

    val rowsCount = document.getElementById("itemslist").childElementCount
    var listOfItems: List[Item] =
      List.range[Int](1, rowsCount).map(i => item(document.getElementById(s"itemslist_description_${i}"), document.getElementById(s"itemslist_quantity_${i}"), document.getElementById(s"itemslist_unitofmeasurement_${i}"), document.getElementById(s"itemslist_grossweight_${i}"), document.getElementById(s"itemslist_packageweight_${i}"), document.getElementById(s"itemslist_netweight_${i}")))


    val itemsList = ItemsList(listOfItems)
    val comments = document.getElementById("comments").asInstanceOf[Area].nodeValue.toString
    val owner = person(document.getElementById("goodsowner_firstname"), document.getElementById("goodsowner_lastname"), document.getElementById("goodsowner_nationalidno"))
    val receivedDate = date(document.getElementById("receiveddate_year"), document.getElementById("receiveddate_month"), document.getElementById("receiveddate_day"))
    val truckNumber = carPlate(document.getElementById("truckno_state"), document.getElementById("truckno_serial"), document.getElementById("truckno_area"), document.getElementById("truckno_random"))
    val representative = person(document.getElementById("representative_firstname"), document.getElementById("representative_lastname"), document.getElementById("representative_nationalidno"))
    val documentToJsonString =
      s"""
         |{
         |"FormNo": ${formNo},
         |"ReceivedDate": ${receivedDate.toJsonString},
         |"GoodsOwner": ${owner.toJsonString},
         |"BillOfLadingNo": ${billOfLadingNumber},
         |"PartNo": ${partNo},
         |"Origin": ${origin},
         |"TruckNo": ${truckNumber.toJsonString},
         |"ItemsList": ${itemsList.toJsonString},
         |"Comments": ${comments},
         |"Representative": ${representative.toJsonString}
         |}
         |""".stripMargin

    ReceivingForm(owner, formNo, receivedDate, partNo, truckNumber, billOfLadingNumber, origin, itemsList, comments, representative, documentToJsonString)
  }

  /*
  person(document),
  number: Int, date: Date, partNumber: Int, truck: CarPlate, billOfLading: String, origin: String, itemsList: ItemsList, comments: String, representative: Person, inJsonString: String)
   */
}