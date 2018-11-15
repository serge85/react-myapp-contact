import React, { Component } from "react";
import { Textfield } from "react-mdl";

class ContactSearchField extends Component {

  render() {
    return (
      <Textfield
        onChange={this.props.searchContact}
        label="Search contacts"
        style={{ width: "75%" }}
        name="txtFieldSearch"
        ref={ ref => this.txtFieldSearch = ref}
      />
    );
  }
}

export default ContactSearchField;
