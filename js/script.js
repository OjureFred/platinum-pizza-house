//Basket to contain orders
var orderBasket = [];

// order object
function pizzaOrder(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.price = 0;
}
 
pizzaOrder.prototype.calculateCost = function(){
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
        wrap: true
    });

    //retrieve values from UI
    $("#orderButton").click(function (event) {
        event.preventDefault();
        var pizzaSize = $("input[name='pizzaSize']:checked").val();
        var pizzaTopping = $("#pizzaName").children("option:selected").val();
        var pizzaCrust = $("input[name='pizzaCrust']:checked").val();
        console.log(pizzaSize, pizzaTopping, pizzaCrust);
        var order = new pizzaOrder(pizzaSize, pizzaCrust, pizzaTopping);
        order.calculateCost();
        console.log(order);
        
        
    });

    //create order
    
    

    //show order cost
    

});
