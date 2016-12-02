import React, {
  Component,
  PropTypes
} from 'react'
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div className='appContainer'>
        <Helmet
          title='react-redux-rrsr-boilerplate'
          meta={[
            {'name': 'description', 'content': 'React Redux RRSR Boilerplate'}
          ]} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App
