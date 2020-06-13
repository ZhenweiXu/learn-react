// let result = document.querySelector('#result')
// let add = document.querySelector('#add')
// let minus = document.querySelector('#minus')

// add.addEventListener('click', function() {
//   let number =parseInt(result.innerText, 10)
//   number += 1
//   result.innerText = number
// })

// minus.addEventListener('click', function() {
//   let number =parseInt(result.innerText, 10)
//   number -= 1
//   result.innerText = number
// })

let number = 0
let onClickButton1 = () => {
  number += 1
  render()
}
let onClickButton2 = () => {
  number -= 1
  render()
}

render()

function render() {
  let span = React.createElement('span', { className: 'red' }, number)
  let button1 = React.createElement('button', { onClick: onClickButton1 }, '+')
  let button2 = React.createElement('button', { onClick: onClickButton2 }, '-')
  let div = React.createElement(
    'div', { className: 'parent' }, span, button1, button2
  )
  ReactDOM.render(div, document.querySelector('#root'))
}

