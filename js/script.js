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
    if (this.size === "small") {
        this.price = 600;
    } else if (this.size === "medium") {
        this.price = 800;
    } else if (this.size === "large") {
        this.price = 1000;
    }

    //calculate based on crust
    if (this.crust == "crispy") {
        this.price += 80;
    }
    else if (this.crust == "stuffed") {
        this.price += 100;
    }
    else if (this.crust == "gluten-free") {
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
        //create order
        var order = new pizzaOrder(pizzaSize, pizzaCrust, pizzaTopping);
        order.calculateCost();
        //show order
        console.log(order);
        var orderString = "<strong> Topping: " + order.topping + "; Size: " + order.size + "; Crust: " + order.crust + "; Price: " + order.price + "/=</strong>"
        console.log(orderString)
        document.getElementById('orderList').innerHTML = orderString;
        orderBasket.push(order);
        console.log(orderBasket);
     
        
    });

    
    

});
