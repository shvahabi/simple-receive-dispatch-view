import org.scalajs.dom
import org.scalajs.dom.html.{Area, Input}
import org.scalajs.dom.raw.{HTMLElement, NodeList}
import org.scalajs.dom.{Document, Element, Node, document, html}

import scalajs.js.annotation.{JSExport, JSExportTopLevel}

object dummy {


  def main(args: Array[String]): Unit = {

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

  @JSExportTopLevel("propagatePersonSelection")
  def propagatePersonSelection(sourceInputElementId: String) = {
    val selected = document.getElementById(sourceInputElementId).asInstanceOf[html.Input].value.toString
    val fetchedPeople: Map[String, Person] = fetchPeople
    document.getElementById("goodsowner_nationalidno").asInstanceOf[html.Input].value = fetchedPeople(selected).nationalIDNo.toString
    document.getElementById("goodsowner_firstname").asInstanceOf[html.Input].value = fetchedPeople(selected).firstName.toString
    document.getElementById("goodsowner_lastname").asInstanceOf[html.Input].value = fetchedPeople(selected).surName.toString
  }

  @JSExportTopLevel("populateDataList")
  def populateDataList() = {
    for(person <- fetchPeople.values.toList) {
      document.getElementById("goodsowner_fname").appendChild(addOption(s"${person.firstName} " + s"${person.surName} " + s"${person.nationalIDNo}", s"${person.nationalIDNo}"))
      document.getElementById("goodsowner_lname").appendChild(addOption(s"${person.firstName} " + s"${person.surName} " + s"${person.nationalIDNo}", s"${person.nationalIDNo}"))
      document.getElementById("goodsowner_nidno").appendChild(addOption(s"${person.firstName} " + s"${person.surName} " + s"${person.nationalIDNo}", s"${person.nationalIDNo}"))
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