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
              <div>
                <label htmlFor="name">Nom</label>
              </div>
      </div>
  }

}

ReactDOM.render(<Home/>, document.querySelector('#root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
