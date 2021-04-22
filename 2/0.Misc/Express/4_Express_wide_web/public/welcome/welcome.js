$("body").css("background-color", "blue")


let pizza = 0;
$(document).on("click", (event) =>{
    pizza++;
    $("#pizza-oven").append(`<h1 id="${pizza}">o</h1>`);

    if(pizza > 5){
        const pizzaToRemove = pizza-5;
        $("#pizza-"+pizzaToRemove).remove();

        $("#pizza-counter").append('<h1>o</h1>')
    }
});

function a(){
    console.log("gwgrs");
}



