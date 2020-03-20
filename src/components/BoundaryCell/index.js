import React from 'react';
import PropTypes from 'prop-types';

const BoundaryCell = (props) => {

  const drapOver = () => {
    props.onDragOver(props.index);
  }

  return (
    <li onDragOver={drapOver}>
      { props.children }
    </li>
  )

}

BoundaryCell.propTypes = {
  onDragOver: PropTypes.func
}

export default BoundaryCell;