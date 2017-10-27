

window.onload = function () {
	initCanvas();
	
}

const originalSnakeLength = 4; // including the head
const UP = 100;
const DOWN = 101;
const LEFT = 102;
const RIGHT = 103;
const originalSnakeDirection = RIGHT;
const blockSize = {
	x: 10,
	y: 10
};

var blockNum = {
	x: undefined,
	y: undefined
}

function initCanvas() {

	// To calculate screen's width & height considering the scroll bar,
	// clientWidth is fake returned the first time.
	// so had better calculate for 2 times.
	// InnerWidth is window's width including the scroll bar,
	// and clientWidth not including,
	// but when elements are being generated,
	// there are no scroll bars exist,
	// so when first time generating,
	// these 2 width are equal.
	var canvas = document.getElementById("game_area");
	var div = document.getElementById("main");

	// 1st
	canvas.setAttribute(
		"height", 
		window.innerHeight
	);

	canvas.setAttribute(
		"width", 
		window.innerWidth
	);

	var scrollBar = {
		y: window.innerHeight - div.clientHeight,
		x: window.innerWidth - div.clientWidth
	};
	// 2nd
	canvas.setAttribute(
		"height", 
		window.innerHeight - scrollBar.y
	);

	canvas.setAttribute(
		"width", 
		window.innerWidth - scrollBar.x
	);


	rasterize(window.innerWidth - scrollBar.x, window.innerHeight - scrollBar.y);
}

function rasterize(width, height) {
	blockNum.x = parseInt(parseInt(width) / blockSize.x);
	blockNum.y = parseInt(parseInt(height) / blockSize.y);
	return {
		x: blockNum.x,
		y: blockNum.y
	}
}

function posToCanvasStartCoordinate(pos) {
	return {
		x: pos.x * blockSize,
		y: pos.y * blockSize
	}
}

function Snake(dom) {
	// object pointer
	var _this = this;
	// variable
	this.dom = dom;
	this.ctx = dom.getContext("2d");
	this.length = originalSnakeLength;
	this.direction = originalSnakeDirection;
	// method
}