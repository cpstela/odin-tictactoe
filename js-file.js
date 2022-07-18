document.querySelectorAll('.flip-card').forEach(item => {
    item.addEventListener('click', event => {
      item.querySelector('div.flip-card-inner').style.cssText = 'transform: rotateY(180deg)';
    })
  })


//Gameboard module

const gameboard  = (() => {
  let arGameboard = ['x','o','x','o','x','x','o','x','o']
  return {
    arGameboard,
  };
})();

//Player, seran factories

//Game module