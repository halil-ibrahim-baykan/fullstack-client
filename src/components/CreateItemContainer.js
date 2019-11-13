import React from "react";
import { connect } from "react-redux";
import { createItem } from "../actions";
import CreateItem from "./CreateItem";

class CreateItemContainer extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    url: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.createItem(this.state);

    this.setState({
      title: "",
      description: "",
      price: "",
      url: ""
    });
  };

  render() {
    return (
      <CreateItem
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { createItem })(CreateItemContainer);
