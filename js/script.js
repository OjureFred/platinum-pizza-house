function pizzaOrder(size, name, crust, topping) {
    this.size = size;
    this.name = name;
    this.crust = crust;
    this.topping = topping;
    this.price = 0;
}
 
pizzaOrder.prototype.calculateCost = funtion(){
    
}

$(document).ready(function (e) {

    //Carousel interval setup
    $('.carousel').carousel({
        interval: 6000,
        keyboard: true,
        pause: hover,
        wrap: true
    });

});
