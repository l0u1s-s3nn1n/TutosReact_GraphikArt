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
      this.state = {n: props.start, timer: null}
      this.toggle = this.toggle.bind(this)
      this.reset = this.reset.bind(this)
  
  
    }
  
    componentDidMount () {
      this.play()
    }
  
    componentWillUnmount () {
      window.clearInterval(this.state.timer)
    }
  
    increment () {
      this.setState((state, props) => ({n: state.n + props.step}))
    }
  
    pause () {
      window.clearInterval(this.state.timer)
      this.setState({
        timer: null
      })
    }
    
    play () {
      window.clearInterval(this.state.timer)
      this.setState({
        timer: window.setInterval(this.increment.bind(this), 1000)
    
      })
    }
  
    toggle () {
      return this.state.timer ? this.pause() : this.play()
    }
  
    label () {
      return this.state.timer ? 'Pause' : 'Lecture'
    }
  
    reset () {
      this.pause()
      this.play()
      this.setState((state, props) => ({n: props.start}))
    }
  
    render ( ) {
      console.log('reset')
      return <div>
        Valeur : {this.state.n}
          <button onClick={this.toggle}>{this.label()}</button>
          <button onClick={this.reset}>reset</button>
  
      </div>
      
    }
  
  }
  
  Incrementer.defaultProps = {
    start: 0,
    step: 1
  }
  
  class ManualIncrementer extends React.Component {
  
    constructor (props) {
      super(props)
      this.state = {n: 0}
    }
  
    increment (e) {
      e.preventDefault()
      this.setState((state, props) => ({n: state.n + 1}))
  }
  
  render () {
  
    return <div> Valeur : {this.state.n} 
    <a href="http://www.hellolouis.fr" onClick={this.increment.bind(this)}>Incrémenter</a>
  
    </div>
  }
  
  
  }
  
  function Home () {
    return <div>
      <Welcome name="Joe" />
      <Welcome name="Jack" />
      <Clock/>
      <Incrementer start={10}/>
      <Incrementer start={100} step={10}/>
      <ManualIncrementer/>
    </div>
  }
  