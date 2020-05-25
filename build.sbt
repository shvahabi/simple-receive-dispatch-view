

ThisBuild / scalaVersion     := "2.13.1"
ThisBuild / version          := "0.13.0"
ThisBuild / organization     := "com.bsp"
ThisBuild / organizationName := "bsp"

lazy val root = (project in file("."))
  .settings(
    name := "Simple Receive Dispatch"
  )

libraryDependencies += "org.scalatest" %% "scalatest" % "3.0.8"

libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "1.0.0"

enablePlugins(ScalaJSPlugin)
// This is an application with a main method
scalaJSUseMainModuleInitializer := true

jsEnv := new org.scalajs.jsenv.jsdomnodejs.JSDOMNodeJSEnv()

libraryDependencies += "com.lihaoyi" %%% "utest" % "0.7.4" % "test"
testFrameworks += new TestFramework("utest.runner.Framework")