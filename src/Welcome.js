import './Welcome.css';
import React from 'react';
import {Helmet} from 'react-helmet';

function Welcome() {
  return (
    
    <>
    <div className="Welcome">
      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>
      Welcome to Word Duel!
    </div>
    <div>
      <NameForm />
    </div>

    
    </>
  );
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({ value: event.target.value }); 
  }
  handleSubmit(event) { 
    console.log(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>        
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Welcome;