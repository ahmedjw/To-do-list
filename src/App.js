import { style } from "@mui/system";
import axios from "axios";
import React from "react";
let Users = [];
const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card {...profile} />
    ))}
  </div>
);

class Form extends React.Component {
  state = { username: "" };
  InputRef = React.createRef();
  handleSubmit = (Event) => {
    Event.preventDefault();
    this.setState({ username: this.InputRef.current.value });
    /****************************************************************************** */
    let User = {};
    User = axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((response) => console.log(response))
      .then((response) => console.log(typeof response));
    Users.push(User);
    console.log(Users);
  };

  handleChange = (E) => {
    console.log("a");
  };
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>Git hub Cards App</div>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            value={this.state.username}
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
            type="text"
            ref={this.InputRef}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
class Card extends React.Component {
  state = {
    profiles: testData,
  };
  render() {
    const profile = this.props;
    return (
      <div>
        <div className="github-profile " style={{ margin: "5px" }}>
          <img src={profile.avatar_url} style={{ width: "75px" }} />
          <div className="info" style={{ display: "inline-block" }}>
            <div className="name">{profile.name}</div>
            <div className="company">{profile.company}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={testData} />
      </div>
    );
  }
}
