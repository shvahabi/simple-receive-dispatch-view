package com.bsp.receivedispatch.view

import utest._

import scala.scalajs.js

import org.scalajs.dom
import org.scalajs.dom.document
import org.scalajs.dom.ext._

object ReceiveDispatchUITest {
  ReceiveDispatchUI.appendPar(document.body, "Hello World!!!!")

  def tests = Tests {
    test("HelloWorld") {
      assert(document.querySelectorAll("p").count(_.textContent == "Hello World!!!") == 1)
    }
  }
}
