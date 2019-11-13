import React from "react";
import { getItems } from "../actions";
import { connect } from "react-redux";
import List from "./List";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return <List items={this.props.items} seller={this.props.seller} />;
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    seller: state.seller
  };
}

const mapDispatchToProps = { getItems };

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
