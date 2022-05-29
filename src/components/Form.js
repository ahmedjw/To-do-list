import React from "react";
const handelChange = (event) => {
  event.preventDefault();
  console.log(event.target.value);
};
export default class Form extends React.Component {
  state = {
    userName: "",
  };

  render() {
    return (
      <form onSubmit={handelChange}>
        <input
          type="text"
          required
          onChange={(event) =>
            this.setState({ userName: this.event.target.value })
          }
        />
        <button>Add</button>
      </form>
    );
  }
}
