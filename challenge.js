document.addEventListener('DOMContentLoaded', () => {

  let counterInterval = setInterval(increaseCounter, 1000)

  function increaseCounter() {
    let counter = parseInt(document.querySelector('#counter').innerText)
    counter += 1
    document.querySelector('#counter').innerText = counter.toString()
  }

  let plusButton = document.getElementById('+')
  plusButton.addEventListener('click', increaseCounter)


  function decreaseCounter() {
    let counter = parseInt(document.querySelector('#counter').innerText)
    counter -= 1
    document.querySelector('#counter').innerText = counter.toString()
  }

  let minusButton = document.getElementById('-')
  minusButton.addEventListener('click', decreaseCounter)

  let clickCounter = 0
  let likeButton = document.getElementById('<3')
  likeButton.addEventListener('click', (function(e) {
    clickCounter += 1

    let likesUl = document.querySelector('.likes')
    let likesLi = document.createElement('li')
    console.log(likeLi)
    counter.text + "has been liked"
    likesUl
  }))

  function myStopFunction() {
    clearInterval(counterInterval)
  }

  function pauseCounter() {
    if (pauseButton.innerText === "pause") {
      pauseButton.innerText = "resume"
        myStopFunction()
      minusButton.disabled = true;
      plusButton.disabled = true;
      likeButton.disabled = true;
      submitButton.disabled = true;
    } else {
      pauseButton.innerText = "pause"
      counterInterval = setInterval(increaseCounter, 1000)
      minusButton.disabled = false;
      plusButton.disabled = false;
      likeButton.disabled = false;
      submitButton.disabled = false;
    }
  }

  let pauseButton = document.querySelector('#pause')
  pauseButton.addEventListener('click', pauseCounter)

  let submitButton = document.querySelector('#submit')
  // pauseButton.addEventListener('click', pauseCounter)
})
