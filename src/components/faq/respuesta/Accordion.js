import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SectionAcordeon from './SectionAcordeon';

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);

    const openSections = {};

    this.state = { openSections };
  }

  onClick = label => {
    const {
      state: { openSections },
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
      state: { openSections },
    } = this;

    return (
      <div style={{ border: '1px solid #0a999a' }}>
        {children.map(child => (
          < SectionAcordeon 
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </ SectionAcordeon >
        ))}
      </div>
    );
  }
}

export default Accordion;