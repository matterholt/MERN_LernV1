import React, { Component } from "react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const username = { user: this.state.username };
    console.log(username);
    this.setState({
      username: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={e => {
                this.setState({ username: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Create User"
            />
          </div>
        </form>
      </div>
    );
  }
}
