class App extends React.Component{
  constructor() {
    super()
    this.state = {
      result1: 0,
      result2: 0
    }
    this.t0 = new Date()
  }
  success1 = (str) => {
    console.log('乌龟跑完了')
    let r1 = new Date() - this.t0
    this.setState({
      result1: r1
    })
    console.log(str)
  }
  success2 = (str) => {
    console.log('兔子跑完了')
    let r2 = new Date() - this.t0
    this.setState({
      result2: r2
    })
    console.log(str)
  }
  render() {
    return (
      <div>
        <div className='header'>
          <Time1 result={this.state.result1}/>
          <Time2 result={this.state.result2}/>        
        </div>
        <Playground success1={this.success1.bind(this)}
                    success2={this.success2.bind(this)}/>
      </div>
    )
  }
}


function Time1(props) {
  return (
    <div className='time'>
      <h2>🐢用时</h2>
      <div>{props.result} ms</div>      
    </div>
  )
}

function Time2(props) {
  return (
    <div className='time'>
      <h2>🐰用时</h2>
      <div>{props.result} ms</div>      
    </div>
  )
}

function Playground(props) {
  const { success1, success2 } = props
  return (
    <div className='playground'>
      <Track1 success={props.success1}/>
      <Track2 success={props.success2}/>
    </div>
  )
}

class Track1 extends React.Component {
  constructor() {
    super()
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timerId = setInterval(() => {
      n += 10
      this.setState({
        style: {
          transform: `translateX(${n}%`
        }
      })
      if(n >= 100) {
        window.clearInterval(timerId)
        this.props.success('小龟龟跑完了')
      }
    }, 1000)    
  }
  render() {
    return (
      <div className='player'>
        <div style={this.state.style}>🐢</div>
        <div className='track'></div>      
      </div>
    )
  }
}

class Track2 extends React.Component{
  constructor() {
    super()
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timerId = setInterval(() => {
      n += 20
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if(n >= 100) {
        window.clearInterval(timerId)
        this.props.success('小兔兔跑完了')
      }
    }, 1000)
  }
  render() {
    return (
      <div className='player'>
        <div style={this.state.style}>🐰</div>
        <div className='track'></div>      
      </div>
    )
  }
}



ReactDOM.render(<App/>, document.querySelector('#root'))