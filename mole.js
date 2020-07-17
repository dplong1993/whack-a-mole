// Write your JS here.
// window.addEventListener('DOMContentLoaded', () => {

//   setInterval(() => {
//     const moleHeads = document.querySelectorAll('.wgs__mole-head');
//     for (let moleHead of moleHeads) {
//       moleHead.classList.toggle('wgs__mole-head--hidden');
//     }
//   }, 1000);

// });

function popUpRandomMole () {
    let moles = document.querySelectorAll('.wgs__mole-head');
    if(moles.length > 0){
      let random = Math.floor(Math.random() * moles.length);
      let currentMole = moles.item(random);
      currentMole.classList.remove('wgs__mole-head--hidden');
      setTimeout(hideMole, 3000, currentMole);
    }
    else {
        alert("You win!");
    }
}

function hideMole (mole) {
    mole.classList.add('wgs__mole-head--hidden');
    let square = document.querySelector('.square');
    setTimeout(popUpRandomMole, 1000)
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(popUpRandomMole, 0);

    const moleHeads = document.querySelectorAll('.wgs__mole-head');
    for (let moleHead of moleHeads) {
      moleHead.addEventListener('click', (e) => {
        moleHead.classList.toggle('wgs__mole-head--hidden');
        moleHead.classList.add('wgs__mole-head--whacked');
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        const columnWidth = e.target.parentElement.parentElement.scrollWidth/4;
        const rowHeight = e.target.parentElement.parentElement.scrollHeight/2;
        const columnNum = e.target.parentElement.dataset.column;
        const rowNum = e.target.parentElement.dataset.row;
        console.log(columnWidth, columnNum, (columnNum)*columnWidth, e.clientX);
        square.style.position = "absolute";
        square.style.top = `${e.clientY-36-(rowNum * rowHeight)}px`;
        square.style.left = `${e.clientX-((columnNum)*columnWidth)}px`;
        e.target.parentElement.appendChild(square);
        setTimeout(() => {
          e.target.parentElement.removeChild(square);
        }, 400);
      });
    }
})
