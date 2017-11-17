import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import moment from "moment";
import coderSchoolLogo from "./CoderSchoolLogo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          id: "2u9d6p",
          text: "Hello React World!",
          liked: true,
          avatarNo: 5,
          createdAt: "2017-11-17 10:00:00"
        },
        {
          id: "tzy28b",
          text: "CoderSchool is the best!",
          liked: false,
          avatarNo: 4,
          createdAt: "2017-11-17 11:00:00"
        }
      ]
    };
  }

  handleTweet(tweetText) {
    let tweetObj = {
      id: Math.random()
        .toString(36)
        .substring(7),
      text: tweetText,
      liked: false,
      avatarNo: Math.floor(Math.random() * 5) + 1,
      createdAt: moment().format("YYYY-MM-DD hh:mm:ss")
    };
    this.setState({
      tweets: [tweetObj].concat(this.state.tweets)
    });
    document.getElementById("test").value = "";
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map(t => {
      if (t.id === tweet.id) {
        return {
          ...t,
          liked: !t.liked
        };
      }
      return t;
    });

    this.setState({
      tweets
    });
  }

  handleDelete(tweet) {
    let tweets = this.state.tweets.filter(t => {
      return t.id !== tweet.id;
    });

    this.setState({
      tweets
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div>
                <img src={coderSchoolLogo} />
              </div>
            </div>

            <h1 className="App-title">
              {" "}
              Welcome to Coder School React Prework!
            </h1>
          </header>

          <div>
            <TweetBox
              promt="What's on your mind?"
              onTweet={this.handleTweet.bind(this)}
            />
          </div>
          <br />
          <div>
            {this.state.tweets.map(tweet => (
              <Tweet
                key={tweet.id}
                tweet={tweet}
                handleLike={this.handleLike.bind(this)}
                handleDelete={this.handleDelete.bind(this)}
                className="Tweet"
              />
            ))}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
