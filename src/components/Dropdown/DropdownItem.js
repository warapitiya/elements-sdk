import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon'

const DropdownItem = ({ url, label, type, selected, selectedName }) => {
  switch (type) {
    case 'divider':
      return (
        <li className="divider-container" role="separator" data-item="divider">
          <hr className="dropdown-divider" />
        </li>
      );
      break;
    case 'link':
      return (
        <li role="presentation" data-item={label}>
          <a href={url} role="menuitem" tabIndex="-1">{label}</a>
        </li>
      );
      break;
    case 'button':
      return (
        <li role="presentation" data-item={label}>
          <button role="menuitem" tabIndex="-1">
            <span style={{visibility: selected ? 'visible' : 'hidden'}}>
              <Icon name="check-sm-18">{selectedName}</Icon>
            </span>
            <span className="icon-padding">{label}</span>
          </button>
        </li>
      );
      break;
    default:
      break;
  }
};

DropdownItem.propTypes = {
  label: PropTypes.string,
  divider: PropTypes.bool
};

export default DropdownItem;
