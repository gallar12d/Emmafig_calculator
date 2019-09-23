import React, { Component } from "react";
import PropTypes from "prop-types";

class PeticionAcordeon extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label }
    } = this;

    return (
      <div
        style={{
          background: isOpen ? " #FCFAFA" : "  #FCFAFA",
          border: "1px solid  #0a999a",
          padding: "20px 0px"
        }}
      >
        <div onClick={onClick} style={{ cursor: "pointer" }}>
          {label}
          <div style={{ float: "right" }} />
        </div>
        {isOpen && (
          <div
            style={{
              background: "#EBE3E3",
              border: "1px solid  #0a999a",
              padding: "10px 10px"
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default PeticionAcordeon;
