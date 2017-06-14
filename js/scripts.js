function Phone(brand, price, color) {
	this.brand= brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	  console.log("The phone brand is " + this.brand + " , color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
iPhone6S.printInfo();

var Samsung_Galaxy_S6 = new Phone("Samsung Galaxy S6", 1800, "black");
Samsung_Galaxy_S6.printInfo();

var OnePlus_One = new Phone("OnePlus One", 1200, "white");
OnePlus_One.printInfo();