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
      square.style.backgroundColor = randomHexString();
      square.style.opacity += 0.5;
      });
    }
  }

}

const randomHexString = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};


function removeBoxes(){
    const container = document.querySelector("#container");
    const numChildren = container.children.length;


    for (let i = 0; i < numChildren; i++) {
        const child = container.querySelector('div'); //New Children need to be selected before removing.
        container.removeChild(child); // Removes row of the grid.
    }
}


const shakeButton = document.querySelector('#shake');
shakeButton.addEventListener('click', () =>{
  removeBoxes();
});


const newButton = document.querySelector('#new');
newButton.addEventListener('click', () =>{
  let num = prompt('Number of squares per side.');
  while (num > 100) {
    num = prompt('Number of squares per side < 100.');
  }
    createBoxes(num);
});

createBoxes(16);