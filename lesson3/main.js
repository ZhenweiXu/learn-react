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
// 管家
// 想花钱先告诉管家
var housekeeper = {
  init() {
    eventHub.on('我想花钱了', (data) => {
      money.amount -= data
      render()
    })
  }
}
housekeeper.init()

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render() {
    return (
      <div className="root">
        <div>App</div>
        <BigPapa money={this.state.money}/>
        <YoungPapa money={this.state.money}/>
      </div>
    )
  }
}

class BigPapa extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div className="papa"> 大爸爸 {this.props.money.amount}
        <Son1 money={this.props.money}/>
        <Son2 money={this.props.money}/>
      </div>
    )
  }
}
class YoungPapa extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div className="papa"> 二爸爸 {this.props.money.amount}
        <Son3 money={this.props.money}/>
        <Son4 money={this.props.money}/>
      </div>
    )
  }
  
}
class Son1 extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div className="son">儿子1 {this.props.money.amount}</div>
    )
  }
}
class Son2 extends React.Component{
  constructor() {
    super()
  }
  cost() {
    eventHub.trigger('我想花钱了', 100)
  }
  render() {
    return (
      <div className="son">儿子2 {this.props.money.amount}
        <button onClick={()=>this.cost()}>消费</button>
      </div>
    )
  }
}
class Son3 extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div className="son">儿子3 {this.props.money.amount}</div>
    )
  }
}
class Son4 extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div className="son">儿子4 {this.props.money.amount}</div>
    )
  }
}
function render() {
  ReactDOM.render(<App/>, document.querySelector('#root'))
}

render()


