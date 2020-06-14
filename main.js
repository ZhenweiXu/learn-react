// 1.使用h代替createElement
// 2.减少变量
let h = React.createElement
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

// function render() {
//   ReactDOM.render(
//     h('div', { className: 'parent' },
//       h('span', { className: 'red' }, number),
//       h('button', { onClick: onClickButton1 }, '+'),
//       h('button', { onClick: onClickButton2 }, '-')
//     ), document.querySelector('#root'))
// }

function render() {
  ReactDOM.render(
    <div className='parent'>
      <span className='red'>{number}</span>
      <button onClick={onClickButton1}>+</button>
      <button onClick={onClickButton2}>-</button>
    </div>,
    document.querySelector('#root'))
}

