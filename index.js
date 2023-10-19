////const container = document.querySelector('#container');
//const row = container.appendChild(document.createElement('div'));


const createBoxes = (numBox) => { // Function to create a grid of boxes
  const container = document.querySelector('#container');
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

function removeBoxes(numBox){
    const container = document.querySelector("#container");
    for (let i = 0; i < numBox; i++) {
        const child = container.querySelector('div'); //New Children need to be selected before removing.
        container.removeChild(child); // Removes row of the grid.
    }
}


const resetButton = document.createElement('button');
resetButton.textContent = 'Reset!';
document.body.appendChild(resetButton);
resetButton.addEventListener('click', () =>{
    let num = prompt('Number to be cubed.');
    removeBoxes(num);
});

const createButton = document.createElement('button');
createButton.textContent = 'Create new grid!';
document.body.appendChild(createButton);
createButton.addEventListener('click', () =>{
    //const container = document.createElement('#containter');
    //let num = prompt('Number to be cubed.');
    let num = prompt('Number to be cubed.');
    createBoxes(num);
});
createBoxes(16);
