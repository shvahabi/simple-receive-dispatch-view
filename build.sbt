enablePlugins(ScalaJSPlugin)

name := "Receive Dispatch View"
scalaVersion := "2.13.1" // or any other Scala version >= 2.11.12

// This is an application with a main method
scalaJSUseMainModuleInitializer := true

libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "1.0.0"

libraryDependencies += "io.argonaut" %% "argonaut" % "6.2.5"
