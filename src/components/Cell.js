import React from "react";
import PropTypes from 'prop-types';

const Cell = (props) => {

  const dragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    props.onDragStart(props.color);
  }

  const dragEnd = e => {
    // console.log('Drop element:', e.target);
    props.onDragEnd();
  }

  const cellProps = {
    className: 'drag',
    draggable: true,
    onDragStart: dragStart,
    onDragEnd: dragEnd,
    style: { backgroundColor: props.color }
  }

  return <div {...cellProps} />

}

Cell.propTypes = {
  color:       PropTypes.string,
  onDragStart: PropTypes.func,
  onDragEnd:   PropTypes.func,
}

export default Cell;