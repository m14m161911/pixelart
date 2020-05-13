window.onload = () => {
    // set currentColor
    currentColor = 'black';
    // grab container with javaScript
    let container = document.querySelector('#container');
    
   // created wacky loop
//    for (let i = 0; i < 100; i++){
       // create div element with .createElement
       let div = document.createElement('div');
       // add class of sqr to created element
       div.classList.add('sqr');
       // use .appendChild to add div to container
       container.appendChild(div);
       // add event listener to div
       div.addEventListener('click', function(){
           // change div blackground color to black
           div.style.backgroundColor = currentColor;
   
   
       })
       let palletColor = 'coral';
       // select pallet with javaScript
       let pallet = document.querySelector('#pallet');
       // change color of pallet background with javaScript
       pallet.style.backgroundColor = palletColor;
       // add eventListner to pallet
       pallet.addEventListener('click', function(){
           currentColor = palletColor;
       })

//    }

}