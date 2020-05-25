function pizzaOrder(size, name, crust, topping) {
    this.size = size;
    this.name = name;
    this.crust = crust;
    this.topping = topping;
    this.price = 0;
}
 
pizzaOrder.prototype.calculateCost = funtion(){
    //calculate based on size
    if (this.size == "small") {
        this.price = 600;
    }
    if (this.size == "medium") {
        this.price == 800;
    }
    if (this.size == "large") {
        this.price == 1000;
    }
    //calculate based on crust
    if (this.crust == "crispy") {
        this.price += 80;
    }
    if (this.crust == "stuffed") {
        this.price += 100;
    }
    if (this.crust == "gluten-free") {
        this.price += 110;
    }
};

$(document).ready(function (e) {

    //Carousel interval setup
    $('.carousel').carousel({
        interval: 6000,
        keyboard: true,
        pause: hover,
        wrap: true
    });

});
