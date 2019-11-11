$(document).ready(function() {
  $("#checkout").click(function() {
    var size = parseInt($("#size option:selected").val());
    var crust = parseInt($("#crust option:selected").val());
    var topping = parseInt($("#topping option:selected").val());
    var quantity = parseInt($("#quantity").val());
    var name = $("#fullname").val();
    var phone = $("#phone").val();
    var pick = $("input[name='pick']:checked").val();
    var deliveryCost = parseInt($("#cost").val());

    var total = quantity * (size + crust + topping);
      alert("Hello " + name + " your  order   costs " + total +
      " and your delivery cost is " +
      deliveryCost);
      //alert("Hello"  +  name  +  "your order costs" + total);
      if (pick === 2) {
        var totalCost = quantity * (size + crust + topping);
        alert(
          "Hello " +
            name +
            " your  order   costs " +
            totalCost +
            " and your delivery cost is " +
            deliveryCost
        );
    }
  });
});
