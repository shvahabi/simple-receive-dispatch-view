package com.bsp.receivedispatch.view

import org.scalajs.dom
import org.scalajs.dom.document

import scala.scalajs.js.annotation.JSExportTopLevel

object ReceiveDispatchUI {

  def main(args: Array[String]): Unit = {
    println("I'm ready!")
  }

  @JSExportTopLevel("appendPar")
  def appendPar(targetNode: dom.Node, text: String): Unit = {
    val parNode = document.createElement("p")
    parNode.textContent = text
    targetNode.appendChild(parNode)
  }

  @JSExportTopLevel("addClickedMessage")
  def addClickedMessage(): Unit = {
    appendPar(document.body, "You clicked the button!")
  }

  @JSExportTopLevel("consoleEmulator")
  def consoleEmulator(name: String): Unit = {
    println("Hello " + name)
  }
}