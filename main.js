let number1 = 0
let number2 = 0
let onClickButton1 = () => {
  number1 += 1
  render()
}
let onClickButton2 = () => {
  number1 -= 1
  render()
}

let onClickButton3 = () => {
  number2 += 2
  render()
}

let onClickButton4 = () => {
  number2 -= 2
  render()
}

render()

function App() {
  return (
    <div>
      <Box1 name="加一"/>
      <Box2 name="加二"/>
    </div>
  )
}

function Box1(obj) {
  return (
    <div className='parent'>
      我的name是{obj.name}
      <hr/>
      <span className='red'>{number1}</span>
      <button onClick={onClickButton1}>+1</button>
      <button onClick={onClickButton2}>-1</button>
    </div>
  )
}

function Box2(obj) {
  return (
    <div className='parent'>
      我的name是{obj.name}
      <hr/>
      <span className='red'>{number2}</span>
      <button onClick={onClickButton3}>+2</button>
      <button onClick={onClickButton4}>-2</button>
    </div>
  )
}

function render() {
  ReactDOM.render(<App/>, document.querySelector('#root'))
}

