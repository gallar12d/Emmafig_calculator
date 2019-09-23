import React, { Component } from "react";
import PropTypes from "prop-types";

import PeticionAcordeon from "./PeticionAcordeon";

class AccordionPet extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired
  };

  constructor(props) {
    super(props);

    const openSections = {};

    this.state = { openSections };
  }

  onClick = label => {
    const {
      state: { openSections }
    } = this;

    const isOpen = !!openSections[label];

    this.setState({
      openSections: {
        [label]: !isOpen
      }
    });
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections }
    } = this;

    return (
      <div style={{ border: "1px solid #0a999a" }}>
        {children.map(child => (
          <PeticionAcordeon
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </PeticionAcordeon>
        ))}
      </div>
    );
  }
}

export default AccordionPet;
