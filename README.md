# View for Simple Receive Dispatch

## Introduction
This repository is the View module in an MVC architecture; a collection of Html/CSS/JS, prepared to work with two other repositories, naming:
- [Controller](https://github.com/shvahabi/simple-receive-dispatch-controller) module
- [Model](https://github.com/shvahabi/simple-receive-dispatch-model) module

## Dependencies
[Sbt](https://www.scala-sbt.org/), the interactive build tool, is required to build and run this repository.

## Instructions
Assuming you already set up a REST server per **Instructions** of Controller module mentioned above; by following this step-by-step instructions, you will compile neccessary JavaScripts from provided ScalaJS codebase:
- $ `git clone https://github.com/shvahabi/simple-receive-dispatch-view.git`
- $ `cd simple-receive-dispatch-view/`
- $ `sbt`
- on `sbt` prompt type `fastOptJS`
- open `index.html` by your browser (currently only tested on firefox and chrome) 

If the other two modules are up and running, you can now do the 4 CRUD actions on Receiving/Dispatching forms over http REST server listening to `localhost:8080`.

## Release Notes
Version 0.40.1 the stable successor, with only several bugfixes and 1 hotfix, to what showcased through Skype on April 21st 2020 to Inception team members.
