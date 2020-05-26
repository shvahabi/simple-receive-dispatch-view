import org.scalajs.dom
import dom.{Document, Element, Node, document, html}
import dummy.{ReceivingForm, receivingForm, translateToPersian}
import org.scalajs.dom.html.{Input, TextArea}
import org.scalajs.dom.raw.Attr

import scala.scalajs.js
import scala.scalajs.js.Dynamic
import scala.scalajs.js.annotation.{JSGlobal, JSGlobalScope}
//import argonaut._, Argonaut._

import scalajs.js.annotation.JSExportTopLevel
import org.scalajs.dom.ext._

import scala.concurrent.Future
import scala.scalajs.js

//import scala.concurrent.Future
import scala.scalajs.concurrent.JSExecutionContext.Implicits._
//import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.util.{Failure, Success}
import js.Dynamic.global



object dummy {

  def main(args: Array[String]): Unit = {
  }

  @JSExportTopLevel("editReceivingForm")
  def editReceivingForm(): Unit = {
    val updatingForm = document.getElementById("formno").asInstanceOf[html.Input].valueAsNumber.toInt
    dom.window.open("ReceivingUpdate.html?formNo=" + updatingForm, "_self", "", true)
  }

  @JSExportTopLevel("editDispatchingForm")
  def editDispatchingForm(): Unit = {
    val updatingForm = document.getElementById("formno").asInstanceOf[html.Input].valueAsNumber.toInt
    dom.window.open("DispatchingUpdate.html?formNo=" + updatingForm, "_self", "", true)
  }

  def uriParameterExtractor(uri: String): Map[String, String] =
    js.URIUtils.decodeURIComponent(uri).tail.split("&").toList.map(x => (x.split("=").head, x.split("=").tail.head)).toMap

  @JSExportTopLevel("populateReceivingFormOnLoad")
  def populateReceivingFormOnLoad(): Unit = {
    val a: String = uriParameterExtractor(dom.window.location.search)("formNo")
    val url: String = s"http://localhost:8080/receivedispatch/receipts/${a}"
    Ajax.get(url) onComplete {
      case Success(value) => {
        val jsonEncodedForm: js.Dynamic = JSON.parse(value.responseText)
        val receivingForm: ReceivingForm = receivingFormFromJson(jsonEncodedForm)
        populateReceivingForm(receivingForm)
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
  }


  def populateDispatchingTable(fetchedForm: DispatchingForm) = {
    document.getElementById("formno").innerText = translateToPersian(fetchedForm.number.toString)
    document.getElementById("dispatcheddate").innerText = translateToPersian(fetchedForm.date.concat)
    document.getElementById("goods_owner").innerText = fetchedForm.goodsOwner.firstName + " " + fetchedForm.goodsOwner.surName
    document.getElementById("draftdate").innerText = translateToPersian(fetchedForm.draftDate.concat)
    document.getElementById("draftno").innerText = fetchedForm.draftNumber
    document.getElementById("draftowner").innerText = fetchedForm.draftOwner.firstName + " " + fetchedForm.draftOwner.surName
    document.getElementById("partno").innerText = translateToPersian(fetchedForm.partNumber.toString)
    document.getElementById("truckno").innerText = fetchedForm.truck.concat
    document.getElementById("comments").innerText = "توضیحات: " + fetchedForm.comments
    document.getElementById("assignee").innerText = fetchedForm.assignee.firstName + " " + fetchedForm.assignee.surName

    itemsListPopulation(fetchedForm.itemsList)

    document.getElementById("deletebutton").removeAttribute("disabled")
    document.getElementById("editbutton").removeAttribute("disabled")
    document.getElementById("printbutton").removeAttribute("disabled")
  }


  def itemsListPopulation(itemsList: ItemsList): Unit = {
    for(i <- 1 to 5) {
      document.getElementById(s"itemslist_description_${i}").innerText = " "
      document.getElementById(s"itemslist_quantity_${i}").innerText = " "
      document.getElementById(s"itemslist_unitofmeasurement_${i}").innerText = " "
      document.getElementById(s"itemslist_grossweight_${i}").innerText = " "
      document.getElementById(s"itemslist_packageweight_${i}").innerText = " "
      document.getElementById(s"itemslist_netweight_${i}").innerText = " "
    }
    val itemsArray: Array[Item] = itemsList.items.toArray[Item]
    for(i <- 1 to itemsArray.length) {
      val anyItem = itemsArray(i - 1)
      document.getElementById(s"itemslist_description_${i}").innerText = anyItem.description
      document.getElementById(s"itemslist_quantity_${i}").innerText = translateToPersian(anyItem.quantity.toString)
      document.getElementById(s"itemslist_unitofmeasurement_${i}").innerText = anyItem.unitOfMeasurement
      document.getElementById(s"itemslist_grossweight_${i}").innerText = translateToPersian(anyItem.grossWeight.toString)
      document.getElementById(s"itemslist_packageweight_${i}").innerText = translateToPersian(anyItem.packageWeight.toString)
      document.getElementById(s"itemslist_netweight_${i}").innerText = translateToPersian(anyItem.netWeight.toString)
    }

    document.getElementById("itemslist_quantity_sum").innerText = " "
    document.getElementById("itemslist_unitofmeasurement_sum").innerText = " "
    document.getElementById("itemslist_grossweight_sum").innerText = "۰"
    document.getElementById("itemslist_packageweight_sum").innerText = "۰"
    document.getElementById("itemslist_netweight_sum").innerText = "۰"

    document.getElementById("itemslist_quantity_sum").innerText = translateToPersian(itemsList.quantity.getOrElse("-").toString)
    document.getElementById("itemslist_unitofmeasurement_sum").innerText = itemsList.unitOfMeasurement.getOrElse("-")
    document.getElementById("itemslist_grossweight_sum").innerText = translateToPersian(itemsList.grossWeight.toString)
    document.getElementById("itemslist_packageweight_sum").innerText = translateToPersian(itemsList.packageWeight.toString)
    document.getElementById("itemslist_netweight_sum").innerText = translateToPersian(itemsList.netWeight.toString)
  }


  def populateReceivingTable(fetchedForm: ReceivingForm): Unit = {
    document.getElementById("paperno").innerText = translateToPersian(fetchedForm.number.toString)
    document.getElementById("receiveddate").innerText = translateToPersian(fetchedForm.date.concat)
    document.getElementById("goods_owner").innerText = fetchedForm.goodsOwner.firstName + " " + fetchedForm.goodsOwner.surName
    document.getElementById("billofladingno").innerText = fetchedForm.billOfLading
    document.getElementById("origin").innerText = fetchedForm.origin
    document.getElementById("partno").innerText = translateToPersian(fetchedForm.partNumber.toString)
    document.getElementById("truckno").innerText = fetchedForm.truck.concat
    document.getElementById("comments").innerText = "توضیحات: " + fetchedForm.comments
    document.getElementById("representative").innerText = fetchedForm.representative.firstName + " " + fetchedForm.representative.surName

    itemsListPopulation(fetchedForm.itemsList)

    document.getElementById("deletebutton").removeAttribute("disabled")
    document.getElementById("editbutton").removeAttribute("disabled")
    document.getElementById("printbutton").removeAttribute("disabled")
  }


  def populateDispatchingForm(dispatchingForm: DispatchingForm): Unit = {
    document.getElementById("formno").asInstanceOf[html.Input].value = dispatchingForm.number.toString
    document.getElementById("dispatcheddate").asInstanceOf[html.Input].value = translateToPersian(dispatchingForm.date.concat)
    document.getElementById("goodsowner_firstname").asInstanceOf[html.Input].value = dispatchingForm.goodsOwner.firstName
    document.getElementById("goodsowner_lastname").asInstanceOf[html.Input].value = dispatchingForm.goodsOwner.surName
    document.getElementById("goodsowner_nationalidno").asInstanceOf[html.Input].value = translateToPersian(dispatchingForm.goodsOwner.nationalIDNo)
    document.getElementById("draftno").asInstanceOf[html.Input].value = dispatchingForm.draftNumber
    document.getElementById("draftowner_firstname").asInstanceOf[html.Input].value = dispatchingForm.draftOwner.firstName
    document.getElementById("draftowner_lastname").asInstanceOf[html.Input].value = dispatchingForm.draftOwner.surName
    document.getElementById("draftowner_nationalidno").asInstanceOf[html.Input].value = translateToPersian(dispatchingForm.draftOwner.nationalIDNo)
    document.getElementById("draftdate").asInstanceOf[html.Input].value = translateToPersian(dispatchingForm.draftDate.concat)
    document.getElementById("partno").asInstanceOf[html.Input].value = dispatchingForm.partNumber.toString
    document.getElementById("truckno_state").asInstanceOf[html.Input].value = dispatchingForm.truck.state.toString
    document.getElementById("truckno_random").asInstanceOf[html.Input].value = dispatchingForm.truck.random.toString
    document.getElementById("truckno_area").asInstanceOf[html.Input].value = dispatchingForm.truck.area
    document.getElementById("truckno_serial").asInstanceOf[html.Input].value = dispatchingForm.truck.serial.toString

    def inquireNumberOfRows: Int = document.getElementById("itemslist").childElementCount

    for(anyItem <- dispatchingForm.itemsList.items) {
      addNewRowToItemsList
      document.getElementById(s"rownumber_${inquireNumberOfRows}").innerHTML = translateToPersian(inquireNumberOfRows.toString)
      document.getElementById(s"itemslist_description_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.description
      document.getElementById(s"itemslist_quantity_${inquireNumberOfRows}").asInstanceOf[html.Input].value = translateToPersian(anyItem.quantity.toString)
      document.getElementById(s"itemslist_unitofmeasurement_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.unitOfMeasurement
      document.getElementById(s"itemslist_grossweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = translateToPersian(anyItem.grossWeight.toString)
      document.getElementById(s"itemslist_packageweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = translateToPersian(anyItem.packageWeight.toString)
      document.getElementById(s"itemslist_netweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = translateToPersian(anyItem.netWeight.toString)
    }
    document.getElementById("comments").asInstanceOf[html.Input].value = dispatchingForm.comments
    document.getElementById("assignee_firstname").asInstanceOf[html.Input].value = dispatchingForm.assignee.firstName
    document.getElementById("assignee_lastname").asInstanceOf[html.Input].value = dispatchingForm.assignee.surName
    document.getElementById("assignee_nationalidno").asInstanceOf[html.Input].value = translateToPersian(dispatchingForm.assignee.nationalIDNo)
    updateSummary()
  }



  /*
  @JSExportTopLevel("checker")
  def checker() = {
  Globals.updatingForm = 19
}

   */

  def populateReceivingForm(receivingForm: ReceivingForm): Unit = {
     //receivingForm.number.toString.toInt
    document.getElementById("formno").asInstanceOf[html.Input].value = receivingForm.number.toString
    document.getElementById("receiveddate").asInstanceOf[html.Input].value = translateToPersian(receivingForm.date.concat)
    document.getElementById("goodsowner_firstname").asInstanceOf[html.Input].value = receivingForm.goodsOwner.firstName
    document.getElementById("goodsowner_lastname").asInstanceOf[html.Input].value = receivingForm.goodsOwner.surName
    document.getElementById("goodsowner_nationalidno").asInstanceOf[html.Input].value = translateToPersian(receivingForm.goodsOwner.nationalIDNo)
    document.getElementById("billofladingno").asInstanceOf[html.Input].value = receivingForm.billOfLading
    document.getElementById("origin").asInstanceOf[html.Input].value = receivingForm.origin
    document.getElementById("partno").asInstanceOf[html.Input].value = receivingForm.partNumber.toString
    document.getElementById("truckno_state").asInstanceOf[html.Input].value = receivingForm.truck.state.toString
    document.getElementById("truckno_random").asInstanceOf[html.Input].value = receivingForm.truck.random.toString
    document.getElementById("truckno_area").asInstanceOf[html.Input].value = receivingForm.truck.area
    document.getElementById("truckno_serial").asInstanceOf[html.Input].value = receivingForm.truck.serial.toString

    def inquireNumberOfRows: Int = document.getElementById("itemslist").childElementCount

    for(anyItem <- receivingForm.itemsList.items) {
      addNewRowToItemsList
      document.getElementById(s"rownumber_${inquireNumberOfRows}").innerHTML = translateToPersian(inquireNumberOfRows.toString)
      document.getElementById(s"itemslist_description_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.description
      document.getElementById(s"itemslist_quantity_${inquireNumberOfRows}").asInstanceOf[html.Input].value = translateToPersian(anyItem.quantity.toString)
      document.getElementById(s"itemslist_unitofmeasurement_${inquireNumberOfRows}").asInstanceOf[html.Input].value = anyItem.unitOfMeasurement
      document.getElementById(s"itemslist_grossweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = translateToPersian(anyItem.grossWeight.toString)
      document.getElementById(s"itemslist_packageweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = translateToPersian(anyItem.packageWeight.toString)
      document.getElementById(s"itemslist_netweight_${inquireNumberOfRows}").asInstanceOf[html.Input].value = translateToPersian(anyItem.netWeight.toString)
    }
    document.getElementById("comments").asInstanceOf[html.Input].value = receivingForm.comments
    document.getElementById("representative_firstname").asInstanceOf[html.Input].value = receivingForm.representative.firstName
    document.getElementById("representative_lastname").asInstanceOf[html.Input].value = receivingForm.representative.surName
    document.getElementById("representative_nationalidno").asInstanceOf[html.Input].value = translateToPersian(receivingForm.representative.nationalIDNo)
    updateSummary()
  }

  def dispatchingFormFromJson(jsonEncodedForm: js.Dynamic): DispatchingForm = {
    val formNo: Int = jsonEncodedForm.FormNo.asInstanceOf[Int]
    val partNo: Int = jsonEncodedForm.PartNo.asInstanceOf[Int]
    val DispatchedDate: Date = Date(jsonEncodedForm.DispatchedDate.Year.asInstanceOf[Int].toString, jsonEncodedForm.DispatchedDate.Month.asInstanceOf[Int].toString, jsonEncodedForm.DispatchedDate.Day.asInstanceOf[Int].toString)
    val truckNumber: CarPlate = CarPlate(jsonEncodedForm.TruckNo.State.asInstanceOf[Int], jsonEncodedForm.TruckNo.Serial.asInstanceOf[Int],jsonEncodedForm.TruckNo.Area.asInstanceOf[String], jsonEncodedForm.TruckNo.Random.asInstanceOf[Int])
    val comments: String = jsonEncodedForm.Comments.asInstanceOf[String]
    val owner: Person = Person(jsonEncodedForm.GoodsOwner.FirstName.toString, jsonEncodedForm.GoodsOwner.SurName.toString, jsonEncodedForm.GoodsOwner.NationalIDNo.toString)

    val draftDate: Date = Date(jsonEncodedForm.DraftDate.Year.asInstanceOf[Int].toString, jsonEncodedForm.DraftDate.Month.asInstanceOf[Int].toString, jsonEncodedForm.DraftDate.Day.asInstanceOf[Int].toString)
    val draftOwner: Person = Person(jsonEncodedForm.DraftOwner.FirstName.toString, jsonEncodedForm.DraftOwner.SurName.toString, jsonEncodedForm.DraftOwner.NationalIDNo.toString)
    val draftNumber: String = jsonEncodedForm.DraftNo.asInstanceOf[String]
    val assignee: Person = Person(jsonEncodedForm.Assignee.FirstName.toString, jsonEncodedForm.Assignee.SurName.toString, jsonEncodedForm.Assignee.NationalIDNo.toString)

    val listOfItems: List[Item] = jsonEncodedForm.ItemsList.asInstanceOf[js.Array[js.Dynamic]].toList.map(x => Item(x.Description.asInstanceOf[String], x.Quantity.asInstanceOf[Int], x.UnitOfMeasurement.asInstanceOf[String], x.GrossWeight.asInstanceOf[Double], x.PackageWeight.asInstanceOf[Double], x.NetWeight.asInstanceOf[Double]))
    val itemsList: ItemsList = ItemsList(listOfItems)

    DispatchingForm(owner, formNo, DispatchedDate, partNo, truckNumber, draftDate, draftNumber, draftOwner, itemsList, comments, assignee)
  }

  def receivingFormFromJson(jsonEncodedForm: js.Dynamic): ReceivingForm = {
    val formNo: Int = jsonEncodedForm.FormNo.asInstanceOf[Int]
    val partNo: Int = jsonEncodedForm.PartNo.asInstanceOf[Int]
    val ReceivedDate: Date = Date(jsonEncodedForm.ReceivedDate.Year.asInstanceOf[Int].toString, jsonEncodedForm.ReceivedDate.Month.asInstanceOf[Int].toString, jsonEncodedForm.ReceivedDate.Day.asInstanceOf[Int].toString)
    val truckNumber: CarPlate = CarPlate(jsonEncodedForm.TruckNo.State.asInstanceOf[Int], jsonEncodedForm.TruckNo.Serial.asInstanceOf[Int],jsonEncodedForm.TruckNo.Area.asInstanceOf[String], jsonEncodedForm.TruckNo.Random.asInstanceOf[Int])
    val comments: String = jsonEncodedForm.Comments.asInstanceOf[String]
    val owner: Person = Person(jsonEncodedForm.GoodsOwner.FirstName.toString, jsonEncodedForm.GoodsOwner.SurName.toString, jsonEncodedForm.GoodsOwner.NationalIDNo.toString)

    val origin: String = jsonEncodedForm.Origin.asInstanceOf[String]
    val billOfLading: String = jsonEncodedForm.BillOfLadingNo.asInstanceOf[String]
    val representative: Person = Person(jsonEncodedForm.Representative.FirstName.toString, jsonEncodedForm.Representative.SurName.toString, jsonEncodedForm.Representative.NationalIDNo.toString)


    val listOfItems: List[Item] = jsonEncodedForm.ItemsList.asInstanceOf[js.Array[js.Dynamic]].toList.map(x => Item(x.Description.asInstanceOf[String], x.Quantity.asInstanceOf[Int], x.UnitOfMeasurement.asInstanceOf[String], x.GrossWeight.asInstanceOf[Double], x.PackageWeight.asInstanceOf[Double], x.NetWeight.asInstanceOf[Double]))
    val itemsList: ItemsList = ItemsList(listOfItems)

    ReceivingForm(owner, formNo, ReceivedDate, partNo, truckNumber, billOfLading, origin, itemsList, comments, representative)
  }

  @JSExportTopLevel("deleteReceivingForm")
  def deleteReceivingForm(): Unit = {
    val toBeDeletedFormNumber: Int = document.getElementById("formno").asInstanceOf[html.Input].valueAsNumber.toInt
    val url: String = s"http://localhost:8080/receivedispatch/receipts/${toBeDeletedFormNumber}"
    Ajax.delete(url) onComplete {
      case Success(value) => {
        dom.window.alert(
          "فرم ورود شماره" +
            " " +
            s"${translateToPersian(toBeDeletedFormNumber.toString)}" +
            " " +
            "با موفقیت حذف گردید."
          )
        dom.window.open("ReceivingTable.html", "_self", "", true)
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
  }

  @JSExportTopLevel("deleteDispatchingForm")
  def deleteDispatchingForm(): Unit = {
    val toBeDeletedFormNumber: Int = document.getElementById("formno").asInstanceOf[html.Input].valueAsNumber.toInt
    val url: String = s"http://localhost:8080/receivedispatch/dispatches/${toBeDeletedFormNumber}"
    Ajax.delete(url) onComplete {
      case Success(value) => {
        dom.window.alert(
          "فرم خروج شماره" +
            " " +
            s"${translateToPersian(toBeDeletedFormNumber.toString)}" +
            " " +
            "با موفقیت حذف گردید."
        )
        dom.window.open("DispatchingTable.html", "_self", "", true)
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)    }
  }

  def doNothing = {}

  @JSExportTopLevel("fetchReceivingForm")
  def fetchReceivingForm(): Unit = {

    val toBeFetchedFormNumber: Int = document.getElementById("formno").asInstanceOf[html.Input].valueAsNumber.toInt
    Ajax.get(s"http://localhost:8080/receivedispatch/receipts") onComplete {
      case Success(value) => {
        val existingFormNumbers: List[Int] = JSON.parse(value.responseText).asInstanceOf[js.Array[Int]].toList
        if (existingFormNumbers contains toBeFetchedFormNumber) {
          val url: String = s"http://localhost:8080/receivedispatch/receipts/${toBeFetchedFormNumber}"
          Ajax.get(url) onComplete {
            case Success(value) => {
              val jsonEncodedForm: js.Dynamic = JSON.parse(value.responseText)
              val receivingForm: ReceivingForm = receivingFormFromJson(jsonEncodedForm)
              populateReceivingTable(receivingForm)
            }
            case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
          }
        }
        else {
          dom.window.alert(
            "فرم ورود با شماره" +
              " " +
              s"${translateToPersian(toBeFetchedFormNumber.toString)}" +
              " " +
              "در سیستم ثبت نشده است."
          )
          dom.window.open("ReceivingTable.html", "_self", "", true)
        }
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
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





  @JSExportTopLevel("fetchDispatchingForm")
  def fetchDispatchingForm(): Unit = {

    val toBeFetchedFormNumber: Int = document.getElementById("formno").asInstanceOf[html.Input].valueAsNumber.toInt
    Ajax.get(s"http://localhost:8080/receivedispatch/dispatches") onComplete {
      case Success(value) => {
        val existingFormNumbers: List[Int] = JSON.parse(value.responseText).asInstanceOf[js.Array[Int]].toList
        if (existingFormNumbers contains toBeFetchedFormNumber) {
          val url: String = s"http://localhost:8080/receivedispatch/dispatches/${toBeFetchedFormNumber}"
          Ajax.get(url) onComplete {
            case Success(value) => {
              val jsonEncodedForm: js.Dynamic = JSON.parse(value.responseText)
              val dispatchingForm: DispatchingForm = dispatchingFormFromJson(jsonEncodedForm)
              populateDispatchingTable(dispatchingForm)
            }
            case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
          }
        }
        else {
          dom.window.alert(
            "فرم خروج با شماره" +
              " " +
              s"${translateToPersian(toBeFetchedFormNumber.toString)}" +
              " " +
              "در سیستم ثبت نشده است."
          )
          dom.window.open("DispatchingTable.html", "_self", "", true)
        }
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
  }


  @JSExportTopLevel("populateDispatchingFormOnLoad")
  def populateDispatchingFormOnLoad(): Unit = {
    val a: String = uriParameterExtractor(dom.window.location.search)("formNo")
    val url: String = s"http://localhost:8080/receivedispatch/dispatches/${a}"
    Ajax.get(url) onComplete {
      case Success(value) => {
        val jsonEncodedForm: js.Dynamic = JSON.parse(value.responseText)
        val dispatchingForm: DispatchingForm = dispatchingFormFromJson(jsonEncodedForm)
        populateDispatchingForm(dispatchingForm)
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
  }

  @JSExportTopLevel("submitReceivingForm")
  def submitReceivingForm(): Unit = {
    val url: String = "http://localhost:8080/receivedispatch/receipts"
    val doc: ReceivingForm = receivingForm(document)
    Ajax.post(url, doc.inJsonString) onComplete {
      case Success(response) => {
        dom.window.alert(
          "فرم ورود کالا به شماره" +
            " " +
            s"${translateToPersian(doc.number.toString)}" +
            " " +
          "با موفقیت ثبت گردید."
        )
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
  }

  @JSExportTopLevel("updateReceivingForm")
  def updateReceivingForm(): Unit = {
    val doc: ReceivingForm = receivingForm(document)
    val url: String = s"http://localhost:8080/receivedispatch/receipts/${doc.number}"
    Ajax.put(url, doc.inJsonString) onComplete {
      case Success(response) => {
        dom.window.alert(
          "فرم ورود کالا به شماره" +
            " " +
            s"${translateToPersian(doc.number.toString)}" +
            " " +
            "با موفقیت اصلاح گردید."
        )
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
  }

  @JSExportTopLevel("submitDispatchingForm")
  def submitDispatchingForm(): Unit = {
    val url: String = "http://localhost:8080/receivedispatch/dispatches"
    val doc: DispatchingForm = dispathingForm(document)
    Ajax.post(url, doc.inJsonString) onComplete {
      case Success(response) => {
        dom.window.alert(
          "فرم خروج کالا به شماره" +
            " " +
            s"${translateToPersian(doc.number.toString)}" +
            " " +
            "با موفقیت ثبت گردید."
        )
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
  }

  @JSExportTopLevel("updateDispatchingForm")
  def updateDispatchingForm(): Unit = {
    val doc: DispatchingForm = dispathingForm(document)
    val url: String = s"http://localhost:8080/receivedispatch/dispatches/${doc.number}"
    Ajax.put(url, doc.inJsonString) onComplete {
      case Success(response) => {
        dom.window.alert(
          "فرم خروج کالا به شماره" +
            " " +
            s"${translateToPersian(doc.number.toString)}" +
            " " +
            "با موفقیت اصلاح گردید."
        )
      }
      case Failure(e) => dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + e)
    }
  }



  @JSExportTopLevel("fetchPeople")
  def fetchPeople() {
    val url = "http://localhost:8080/receivedispatch/people"
    Ajax.get(url) onComplete {
      case Success(value) =>
        populateDataList(JSON.parse(value.responseText).asInstanceOf[js.Array[js.Dynamic]].toList.map(x => Person(x.FirstName.toString, x.SurName.toString, x.NationalIDNo.toString)).map(x => (x.nationalIDNo -> x)).toMap)
      case Failure(error) =>
        dom.window.alert(":خطا در اجرای درخواست با صدور کد" + "\n" + error)
    }
  }

  def populateDataList(fetchedPeople: Map[String, Person]) = {
    for(person <- fetchedPeople.values.toList) {
      document.getElementById("fname").appendChild(addOption(person.firstName, person.surName, person.nationalIDNo))
      document.getElementById("lname").appendChild(addOption(person.firstName, person.surName, person.nationalIDNo))
      document.getElementById("nidno").appendChild(addOption(person.firstName, person.surName, person.nationalIDNo))
    }
  }

  def addOption(firstName: String, surName: String, nationalIDNo: String): Node = {
    val newOption = document.createElement("option")
    newOption.innerHTML = firstName + " " +  surName + " " + translateToPersian(nationalIDNo)
    newOption.setAttribute("value", nationalIDNo)
    newOption.setAttribute("firstName", firstName)
    newOption.setAttribute("surName", surName)
    newOption.setAttribute("nationalIDNo", nationalIDNo)
    newOption
  }

  @JSExportTopLevel("propagatePersonArticleSelection")
  def propagatePersonArticleSelection(personList: String, article: String) = {
    def person(attributer: Element): Person = Person(attributer.getAttribute("firstName"), attributer.getAttribute("surName"), attributer.getAttribute("nationalIDNo"))
    val fetchedPeople: Map[String, Person] = document.getElementById("fname").children.toList.map(x => (person(x).nationalIDNo, person(x))).toMap
    val selected: String = document.getElementById(personList + "_" + article).asInstanceOf[html.Input].value
    if (fetchedPeople contains selected) {
      document.getElementById(s"${personList}_nationalidno").asInstanceOf[html.Input].value = translateToPersian(fetchedPeople(selected).nationalIDNo)
      document.getElementById(s"${personList}_firstname").asInstanceOf[html.Input].value = fetchedPeople(selected).firstName
      document.getElementById(s"${personList}_lastname").asInstanceOf[html.Input].value = fetchedPeople(selected).surName
    }
  }

  @JSExportTopLevel("addNewRowToItemsList")
  def addNewRowToItemsList() = {
    val itemsList = document.getElementById("itemslist")
    val rowsCount = itemsList.childElementCount
    itemsList.appendChild(newRow(rowsCount + 1))
    updateSummary
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
    updateSummary()
  }

  @JSExportTopLevel("updateSummary")
  def updateSummary(): Unit = {
    document.getElementById("qty_sum").innerHTML = "_"
    document.getElementById("unit_sum").innerHTML = "-"
    document.getElementById("gw_sum").innerHTML = "۰"
    document.getElementById("pw_sum").innerHTML = "۰"
    document.getElementById("nw_sum").innerHTML = "۰"

    val rowsCount = document.getElementById("itemslist").childElementCount
    val unitOfMeasurement: List[String] = (for (item <- 1 to rowsCount) yield document.getElementById(s"itemslist_unitofmeasurement_${item}").asInstanceOf[html.Input].value).toList
    val quantity: List[Double] =  (for (item <- 1 to rowsCount) yield translateToEnglish(document.getElementById(s"itemslist_quantity_${item}").asInstanceOf[html.Input].value).toDouble).toList
    val consistentUnitOfMeasurement: Boolean = (unitOfMeasurement zip List.fill(rowsCount)(unitOfMeasurement.head)).map(x => x._1 == x._2).reduceLeft(_ && _)
    if (consistentUnitOfMeasurement) {
      document.getElementById("qty_sum").innerHTML = translateToPersian(quantity.sum.toString)
      document.getElementById("unit_sum").innerHTML = unitOfMeasurement.head
    }
    else {
      document.getElementById("qty_sum").innerHTML = "-"
      document.getElementById("unit_sum").innerHTML = "-"
    }

    for (item <- 1 to rowsCount) {
      val gwSum: Double = translateToEnglish(document.getElementById("gw_sum").innerHTML).toDouble
      val pwSum: Double = translateToEnglish(document.getElementById("pw_sum").innerHTML).toDouble
      val nwSum: Double = translateToEnglish(document.getElementById("nw_sum").innerHTML).toDouble
      val gw: Double = translateToEnglish(document.getElementById(s"itemslist_grossweight_${item}").asInstanceOf[Input].valueAsNumber.toString).toDouble
      val pw: Double = translateToEnglish(document.getElementById(s"itemslist_packageweight_${item}").asInstanceOf[Input].valueAsNumber.toString).toDouble
      val nw: Double = translateToEnglish(document.getElementById(s"itemslist_netweight_${item}").asInstanceOf[Input].valueAsNumber.toString).toDouble
      document.getElementById("gw_sum").innerHTML = translateToPersian("%.3f".format(gwSum + gw))
      document.getElementById("pw_sum").innerHTML = translateToPersian("%.3f".format(pwSum + pw))
      document.getElementById("nw_sum").innerHTML = translateToPersian("%.3f".format(nwSum + nw))
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

  def translatePlateArea(abbreviation: String): String = {
    val dictionary: Map[String, String] = Map(
    "a" -> "الف",
    "b" -> "ب",
    "p" -> "پ",
    "t" -> "ت",
    "th" -> "ث",
    "j" -> "ج",
    "d" -> "د",
    "z" -> "ز",
    "zh" -> "ژ",
    "s" -> "س",
    "sh" -> "ش",
    "ss" -> "ص",
    "tt" -> "ط",
    "e" -> "ع",
    "f" -> "ف",
    "q" -> "ق",
    "k" -> "ک",
    "g" -> "گ",
    "l" -> "ل",
    "m" -> "م",
    "n" -> "ن",
    "v" -> "و",
    "h" -> "ه",
    "y" -> "ی",
    "dd" -> "D",
    "sss" -> "S"
    )
    dictionary(abbreviation)
  }

  case class CarPlate(state: Int, serial: Int, area: String, random: Int) {
    def concat: String = "\u202D" + translateToPersian(serial.toString) + "\u202C" + "\u202E" + translatePlateArea(area) + "\u202C" + "\u202D" + translateToPersian(random.toString) + " " + "\u202D" + translateToPersian(state.toString)
    def toJsonString: String =
      s"""{
        |"State": ${state},
        |"Serial": ${serial},
        |"Area": "${area}",
        |"Random": ${random}
        |}""".stripMargin
  }
  case class Date(year: String, month: String, day: String) {
    def concat: String = ("0000" + year)      .takeRight(4) + "/" + ("00" + month).takeRight(2) + "/" + ("00" + day).takeRight(2)
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

    private val units: List[String] = items.map(_.unitOfMeasurement)
    private val consistentUnitOfMeasurement: Boolean = (units zip List.fill(units.length)(units.head)).map(x => x._1 == x._2).reduceLeft(_ && _)
    val unitOfMeasurement: Option[String] = if (consistentUnitOfMeasurement) Some(units.head) else None
    val quantity: Option[Int] = if (consistentUnitOfMeasurement) Some(items.map(_.quantity).sum) else None
    val grossWeight: Double = "%.3f".format(items.map(_.grossWeight).sum).toDouble
    val netWeight: Double = "%.3f".format(items.map(_.netWeight).sum).toDouble
    val packageWeight: Double = "%.3f".format(items.map(_.packageWeight).sum).toDouble
  }


  def translateToPersian(unknown: String): String = {
    val persianDigits: Map[Char, Char] = Map(
      '-' -> '-',
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
      '-' -> '-',
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
    //‫todo: بازنویسی کل این بخش از طریق try و catch و some و getorelse و استفاده از static type checking برای form validation همچنین غیر فعال کردن دکمه‌ی ثبت فرم
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
