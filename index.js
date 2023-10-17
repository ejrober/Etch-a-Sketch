const container = document.querySelector('#container');



function createBoxes(numBox) { // Function to create a grid of boxes
  for (let i = 0; i < numBox; i++) { // iterate to the number of boxes given
    const row = container.appendChild(document.createElement('div')); 
    for (let j = 0; j < numBox; j++) {
      const square = document.createElement('div'); // Create the elements that will make up the grid.
      square.className = 'box';
      row.appendChild(square); // append divs to the container to create a row

      // Add a mouseover event listener
      square.addEventListener('mouseover', () => {
      // Change the button's background color
      square.style.backgroundColor = 'blue';
      });


    }
  }

 
  
  

}


createBoxes(16);

