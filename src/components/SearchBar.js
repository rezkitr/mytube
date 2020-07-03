import React, { Component } from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchTerm: value });
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <Paper elevation={4} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search" onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
