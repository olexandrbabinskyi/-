let costOfBtc = 20345;
document.querySelector('.button').addEventListener('click', ()=>{
  let data = document.querySelector('.input').value / costOfBtc;
  document.querySelector('.result').innerHTML = data ;
})
