const container = document.querySelector('#container');



function createBoxes(numBox) {
  for (let i = 0; i < numBox; i++) {
    const row = container.appendChild(document.createElement('div'));
    for (let j = 0; j < numBox; j++) {
      const square = document.createElement('div');
      square.className = 'box';
      row.appendChild(square);

       // Add a mouseover event listener
square.addEventListener('mouseover', () => {
    // Change the button's background color
    square.style.backgroundColor = 'blue';
  });
  
    }
  }

 
  
  // Add a mouseout event listener
  container.addEventListener('mouseout', () => {
      // Change the button's background color back to its original color
      container.style.backgroundColor = '';
    });

}


createBoxes(16);

