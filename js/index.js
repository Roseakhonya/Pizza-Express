
var size = ["Small", "Medium", "Large"];
    var crust = [
    "Cheese-Stuffed Crust",
    "Pizza Bagels",
    "Neapolitan Crust",
    "NY Style Pizza"
    ];
    var toppings = ["Pepperoni", "Onions", "Mushroom", "Extra cheese"];

function checkoutonClick (){
    
    if (this.size == "small") {
    document.getElementById("Size").value;
    } else if (this.size == "medium") {
    document.getElementById("Size").value;
    } else document.getElementById("Size").value;

    alert("hello, you picked" + this.size() );
    
    if (this.crust == "Pepperoni") {
      document.getElementById("crust").value;
     }
     else if (this.crust == "Onions") {
     document.getElementById("crust").value;
     }
     else if (this.crust == "Mushroom") {
         document.getElementById("crust").value;
     }
     else
       document.getElementById("crust").value;
}