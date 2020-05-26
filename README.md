# View for Simple Receive Dispatch

## Introduction
This repository is the View module in an MVC architecture; a collection of Html/CSS/JS, prepared to work with two other repositories, naming:
- Controller module: https://github.com/shvahabi/simple-receive-dispatch-controller
- Model module: https://github.com/shvahabi/simple-receive-dispatch-model

## Dependencies
[Sbt](https://www.scala-sbt.org/), the interactive build tool, is required to build and run this repository.

## Instructions
By following this step by step instructions, you will compile neccessary JavaScripts from provided ScalaJS :
- $ `git clone https://github.com/shvahabi/simple-receive-dispatch-view.git`
- $ `cd simple-receive-dispatch-view/`
- $ `sbt`
- > on `sbt:Receive Dispatch View>` prompt type `fastOptJS`
- if the other two modules are up and running, you can now do the 4 CRUD actions on Receiving/Dispatching forms over http REST server listening to `localhost:8080` 

## Release Notes
Version 0.40.0 the stable successor, with only several bugfixes, to what showcased through Skype on April 21st 2020 to Inception team members.
