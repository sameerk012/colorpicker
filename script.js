console.log("js file is ready to use");

// sheet.style.backgroundColor = "#000000";

// let colorContainer = document.getElementById('color-container');

// let colorsCODE = colorContainer.children;

// for (var i = 0; i < colorsCODE.length; i++)
// {
//     console.log(colorsCODE[i].textContent);

// }


// function changecolor(){
//     let sheet = document.getElementById("selected-color");

// }


// function changecolor(element){
//     let sheet = document.getElementById('selected-color');
    
//     console.log(className);
// }

function changecolor(element) {
    var colorcode = element.innerText;

    var sheet = document.getElementById("selected-color");

    sheet.style.backgroundColor = colorcode;

    
    // alert('Class name: ' + colorcode);
    // You can perform any other action here
  }