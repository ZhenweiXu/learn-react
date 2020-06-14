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

function App() {
  return (
    <div>
      <Box1/>
      <Box2/>
    </div>
  )
}

function Box1() {
  return (
    <div className='parent'>
      <span className='red'>{number}</span>
      <button onClick={onClickButton1}>+</button>
      <button onClick={onClickButton2}>-</button>
    </div>
  )
}

function Box2() {
  return (
    <div className='parent'>
      <span className='red'>{number}</span>
      <button onClick={onClickButton1}>+</button>
      <button onClick={onClickButton2}>-</button>
    </div>
  )
}

function render() {
  ReactDOM.render(<App/>, document.querySelector('#root'))
}

