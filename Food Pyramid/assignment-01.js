
document.addEventListener("DOMContentLoaded", function() {
    
    var increaseButtons = document.querySelectorAll("#increase");
    var decreaseButtons = document.querySelectorAll("#decrease");

 
    increaseButtons.forEach(function(button) {
        button.addEventListener("click", function() {
 
            var numberElement = button.previousElementSibling;

            var value = parseInt(numberElement.textContent);
            value++;

            numberElement.textContent = value;
        });
    });


    decreaseButtons.forEach(function(button) {
        button.addEventListener("click", function() {

            var numberElement = button.previousElementSibling.previousElementSibling;
      
            var value = parseInt(numberElement.textContent);
            if (value > 0) {
                value--;
            }

            numberElement.textContent = value;
          
        });
    });
});