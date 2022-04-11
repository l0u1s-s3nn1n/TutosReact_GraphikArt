import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
/*

****VERSION TEXTAREA****

class Home extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          name: 'Joe'
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
      this.setState({
          name: e.target.value
      })
  }

  render () {
      return <div>
          <label htmlFor="name">Mon nom</label>
          <textarea id="name" name="name" value={this.state.name} onChange={this.handleChange}></textarea>
      </div>
  }

}

ReactDOM.render(<Home/>, document.querySelector('#root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


****CHOIX MULTIPLE****
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
class Home extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          name: ['demo2', 'demo1']
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
      this.setState({
          name: Array.from(e.target.selectedOptions).map(o => o.value) 
      })
  }

  render () {
      return <div>
        {JSON.stringify(this.state.name)}
          {this.state.name}
          <label htmlFor="name">Mon nom</label>
          <select value={this.state.name} onChange={this.handleChange} multiple>
            <option value="demo1"></option>
            <option value="demo2"></option>
            <option value="demo2"></option>
          </select>
      </div>
  }

}

ReactDOM.render(<Home/>, document.querySelector('#root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

****CHECKBOX****
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
class Home extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          checked: false
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
      this.setState({
          name: Array.from(e.target.selectedOptions).map(o => o.value) 
      })
  }

  render () {
      return <div>
        {JSON.stringify(this.state.name)}
          {this.state.name}
          <label htmlFor="name">Mon nom</label>
          <input type="checkbox" checked={this.state.checked} onChange={this.state.handleChange}/>
          
          {this.state.checked ? <div>Une message affiché si on coche la checkbox</div> : null} 
      </div>
  }

}

ReactDOM.render(<Home/>, document.querySelector('#root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


*/