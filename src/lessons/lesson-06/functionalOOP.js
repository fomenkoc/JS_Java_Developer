function KitchenDevice() {
	var self = this;

	self.brandName = 'NoNameBrand';
	self.totalPrice = 20000;

	self.setBrandName = function(value) {
		self.brandName = value;
	}

	self.getBrandName = function() {
		return self.brandName;
	}

	self.setTotalPrice = function(value) {
		self.totalPrice = value;
	}

	self.getTotalPrice = function() {
		return self.totalPrice;
	}
}
//-------------------------------------------------------


function Teapot(volume) {
	KitchenDevice.call(this);

	var self = this;

	self.maxTemperature = 100;
	self.isTurnedOn = false;

	self.turnOn = function() {
		self.isTurnedOn = true;
	}

	self.turnOff = function() {
		self.isTurnedOn = false;
	}

	self.setMaxTemperature = function(value) {

		if (value < 0 || value > 100) {
			throw new Error('Invalid temperature data');
		}

		self.maxTemperature = value;
	}

	self.getMaxTemperature = function() {
		return self.maxTemperature;
	}

	self.isTurnedOnFn = function() {
		return self.isTurnedOn;
	}

}

var tefal = new Teapot(2400);

console.log(tefal.getBrandName());
console.log(tefal.getTotalPrice());

console.log(tefal.isTurnedOnFn());

tefal.turnOn();

console.log(tefal.isTurnedOnFn());

console.log(tefal.getMaxTemperature());
tefal.setMaxTemperature(20);

console.log(tefal.getMaxTemperature());
//tefal.setMaxTemperature(200);

tefal.turnOff()
console.log(tefal.isTurnedOnFn());