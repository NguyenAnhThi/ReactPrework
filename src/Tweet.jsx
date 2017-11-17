import React, { Component } from "react";
import { Card, CardActions, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import moment from "moment";
import Avatar from "material-ui/Avatar";

import avatar1 from "./avatars/avatar1.svg";
import avatar2 from "./avatars/avatar2.svg";
import avatar3 from "./avatars/avatar3.svg";
import avatar4 from "./avatars/avatar4.svg";
import avatar5 from "./avatars/avatar5.svg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

class Tweet extends Component {
  render() {
    let tweet = this.props.tweet;

    return (
      <div style={styles.container}>
        <Card style={{ width: 600 }}>
          <CardText style={styles.text}> <q>{tweet.text}</q>  </CardText>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <CardText
              style={{
                display: "flex",
                alignItems: "center",
                width: 200
              }}
            >
              <Avatar
                src={avatars[tweet.avatarNo - 1]}
                size={40}
                style={{ backgroundColor: "#fff" }}
              />
              <div style={{ marginLeft: 10 }}>
                {moment(
                  tweet.createdAt + "-05:00",
                  "YYYY-MM-DD hh:mm:ssZ"
                ).fromNow()}
              </div>
            </CardText>
            <div>
              <FlatButton
                href="#"
                onClick={() => this.props.handleLike(tweet)}
                primary={true}
              >
                {tweet.liked ? "Unlike" : "Like"}
              </FlatButton>
              <FlatButton
                href="#"
                onClick={() => this.props.handleDelete(tweet)}
                label="Delete"
                secondary={true}
              />
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Tweet;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: "#1565c0"
  }
};
