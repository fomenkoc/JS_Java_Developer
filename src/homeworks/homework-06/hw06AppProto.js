"use strict";

function Robot(){
	
	this.workMsg = "Я Robot – я просто працюю";
}

Robot.prototype.work = function(){
	console.log(this.workMsg);
}

function CoffeeRobot(){
	
	this.workMsg = "Я CoffeeRobot – я варю каву";
}

CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = Robot;

function RobotDancer(){

	this.workMsg = "Я RobotDancer – я просто танцюю";
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = Robot;

function RobotCoocker(){

	Robot.call(this);
	this.workMsg = "Я RobotCoocker – я просто готую";
}

RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = Robot;

let robot = new Robot();
robot.work();

let coffeeRobot = new CoffeeRobot();
coffeeRobot.work();

let robotCook = new RobotCoocker();
robotCook.work();

let robotDancer = new RobotDancer();
robotDancer.work();
console.log();

console.log("for loop:");

let array = [robot, coffeeRobot, robotCook, robotDancer];

for (let i = 0; i < array.length; i++){
	array[i].work();
}