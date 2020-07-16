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
    let moles = document.querySelectorAll('.wgs__mole-head:not(.wgs__mole-head--whacked)');
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
    setTimeout(popUpRandomMole, 1000)
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(popUpRandomMole, 0);

    const moleHeads = document.querySelectorAll('.wgs__mole-head');
    for (let moleHead of moleHeads) {
      moleHead.addEventListener('click', () => {
        moleHead.classList.toggle('wgs__mole-head--hidden');
        moleHead.classList.add('wgs__mole-head--whacked');
      });
    }
})
