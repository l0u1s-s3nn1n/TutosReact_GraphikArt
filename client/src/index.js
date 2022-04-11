import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

function WelcomeFunc ({name, children}) {
  return <div>
    <h1>Hello {name}</h1>
    <p> {children} </p>
  </div>
}

class Welcome extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render () {
    return <div>
      <h1> Hello {this.props.name}</h1>
      <p>{this.props.children}</p>
    </div>
  }

}

class Clock extends React.Component {

  constructor (props) {
    super(props)
    this.state = {date: new Date()}
    this.timer = null
  }
  

  componentDidMount () {
    this.timer = window.setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount () {
    window.clearInterval(this.timer)
  }

  tick () {
    this.setState({date: new Date()})
  }

  render () {
    return <div>
      Time is {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
    </div>
  }

}

class Incrementer extends React.Component {

  constructor(props){
    super(props)
    this.state = {n: props.start}
    this.timer = null
  }

  componentDidMount () {
    window.setInterval(this.increment.bind(this), 1000)
  }

  componentWillUnmount () {
    window.clearInterval(this.timer)
  }

  increment () {
    this.setState((state, props) => ({n: state.n + 1}))
  }

  render ( ) {
    return <div>Valeur : {this.state.n}</div>
  }

}

Incrementer.defaultProps = {
  start: 0,
  step: 1
}

function Home () {
  return <div>
    <Welcome name="Joe" />
    <Welcome name="Jack" />
    <Clock/>
    <Incrementer start={10}/>
    <Incrementer start={100} step={10}/>
  </div>
}

ReactDOM.render(<Home/>, document.querySelector('#root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
