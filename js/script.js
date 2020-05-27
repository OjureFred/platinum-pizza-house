//Basket to contain orders
var orderBasket = [];
var basketTotal = 0;

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
        
        //create order
        var order = new pizzaOrder(pizzaSize, pizzaCrust, pizzaTopping);
        order.calculateCost();
        basketTotal += order.price;
        //show order
        
        var orderString = "Topping: " + order.topping + "; Size: " + order.size + "; Crust: " + order.crust + "; Price: " + order.price + "/="
        var basketSum = "Basket Total: " + basketTotal;
        
        document.getElementById('orderList').innerHTML = orderString;
        document.getElementById('basketTotal').innerHTML = basketSum;
        orderBasket.push(orderString);
        //print out shopping basket
        
        document.getElementById('basketContents').innerHTML = " ";

        for (var i = 0; i < orderBasket.length; i++) {
            orderLi = "<li>" + orderBasket[i] + "</li>";
            document.getElementById('basketContents').innerHTML += orderLi;
        }
            
    });
    //Code for inhouse option
    $("#inhouseDelivery").click(function (event) {
        event.preventDefault();
        alert("Thank you for patronizing Platinum Pizza. Your order will be delivered to your table within 15 minutes");
        //Clear global variables
        orderBasket = [];
        basketTotal = 0;
        //Clear form
        document.getElementById('orderList').innerHTML = " ";
        document.getElementById('basketTotal').innerHTML = " ";
        document.getElementById('basketContents').innerHTML = " ";
    });

    $("#homeDelivery").click(function (event) {
        event.preventDefault();
        //show the pop up form
        document.getElementById("myForm").style.display = "block";
        //Clear global variables
        orderBasket = [];
        basketTotal = 0;
        //Clear form
        document.getElementById('orderList').innerHTML = " ";
        document.getElementById('basketTotal').innerHTML = " ";
        document.getElementById('basketContents').innerHTML = " ";
    });

    $("#printButton").click(function (event) {
        event.preventDefault();
        alert("Thank you for patronizing Platinum Pizza. Your order will be delivered to your house in 1 hour");

    });

});
