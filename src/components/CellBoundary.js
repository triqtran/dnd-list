import React from 'react';
import PropTypes from 'prop-types';

const CellBoundary = (props) => {

  const drapOver = () => {
    props.onDragOver(props.index);
  }

  return (
    <li onDragOver={drapOver}>
      { props.children }
    </li>
  )

}

CellBoundary.propTypes = {
  onDragOver: PropTypes.func
}

export default CellBoundary;