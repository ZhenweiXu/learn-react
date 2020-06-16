var money = {
  amount: 1000000
}

var fnLists = {}
var eventHub = {
  trigger(eventName, data) {
    let fnList = fnLists[eventName]
    if(!fnList) { return }
    for(let i = 0; i < fnList.length; i++) {
      fnList[i](data)
    }
  },
  on(eventName, fn) {
    if(!fnLists[eventName]) {
      fnLists[eventName] = []
    }
    fnLists[eventName].push(fn)
  }
}

class App extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div className="root">
        <div>App</div>
        <BigPapa/>
        <YoungPapa/>
      </div>
    )
  }
}

class BigPapa extends React.Component{
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render() {
    return (
      <div className="papa"> 大爸爸 {this.state.money.amount}
        <Son1/>
        <Son2/>
      </div>
    )
  }
}
class YoungPapa extends React.Component{
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render() {
    return (
      <div className="papa"> 二爸爸 {this.state.money.amount}
        <Son3/>
        <Son4/>
      </div>
    )
  }
  
}
class Son1 extends React.Component{
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render() {
    return (
    <div className="son">儿子1 {this.state.money.amount}</div>
    )
  }
}
class Son2 extends React.Component{
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  cost() {
    money.amount -= 100
    this.setState({
      money: money
    })
    eventHub.trigger('我消费了', 100)
  }
  render() {
    return (
    <div className="son">儿子2 {this.state.money.amount}
      <button onClick={()=>this.cost()}>消费</button>
    </div>
    )
  }
}
class Son3 extends React.Component{
  constructor() {
    super()
    this.state = {
      money: money
    }
    eventHub.on('我消费了', () => {
      this.setState({
        money: money
      })
    })
  }
  render() {
    return (
    <div className="son">儿子3 {this.state.money.amount}</div>
    )
  }
}
class Son4 extends React.Component{
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render() {
    return (
    <div className="son">儿子4 {this.state.money.amount}</div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))


