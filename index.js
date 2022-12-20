

  
// // Define a function to change the color of the active navigation bar element
// function changeActiveNavElementColor() {

//     let currentHash = window.location.hash;

//     let navElements = document.querySelectorAll('.nav-link');
  
//     navElements.forEach(element => {

//       if (element.getAttribute('href').includes(currentHash)) {
//         element.style.color = 'rgb(84, 203, 242)';
//       } else {
//         element.style.color = 'white';
//       }
//     });
//   }
  
//   window.addEventListener('load', function() {  
//     changeActiveNavElementColor();
  
//     window.onhashchange = function() {
//         changeActiveNavElementColor()
//     }
    
//   });


  // function animateAlphabet (){
  //   const text = document.getElementById("app").innerText
  //   const newText = text.slice(1) + text[0]
  //   document.getElementById('app').innerHTML = newText
  //   setTimeout(animateAlphabet, 400)
  //   }
    
  //   animateAlphabet()
