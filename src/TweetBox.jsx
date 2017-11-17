import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      charsRemaining: 140
    };
  }

  handelChange(text) {
    this.setState({
      text: text,
      charsRemaining: 140 - text.length
    });
    // this.refs.inputTweet.value = "";
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            floatingLabelText={this.props.promt}
            onChange={e => this.handelChange(e.target.value)}
            id="test"
          />
          <RaisedButton
            label="Tweet"
            disabled={this.state.charsRemaining < 0}
            primary={true}
            onClick={() => this.props.onTweet(this.state.text)}
            style={{ marginLeft: 5, height: 30 }}
          />
        </div>

        <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default App;
