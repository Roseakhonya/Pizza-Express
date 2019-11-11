$(document).ready(
    function(){
        $('#checkout').click(function(){
            var size = parseInt($("#size option:selected").val());
            var crust = parseInt($("#crust option:selected").val());
            var topping = parseInt($("#topping option:selected").val());
            var quantity = parseInt($("#quantity").val());
            var name = $("#fullname").val();
            var phone = $("#phone").val();
            var pick  = $("input[name='pick']:checked"). val()
        
            var total = quantity * (size + crust + topping);

            alert("Hello "   +   name  +  " your  order   costs "    +    total);
            //alert("Hello"  +  name  +  "your order costs" + total);
        }
            
        )
    }
)