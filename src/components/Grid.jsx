import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {

  const styles = {
    gap: (props.gap ?? 0) + 'px'
  }

  const col = "grid-col-" + props.col;
  const xlCol = props.smCol ? "grid-col-xl-" + props.xlCol : "";
  const mdCol = props.mdCol ? "grid-col-md-" + props.mdCol : "";
  const mdSmCol = props.mdCol ? "grid-col-md-smaller-" + props.mdSmCol : "";
  const smCol = props.smCol ? "grid-col-sm-" + props.smCol : "";

  return (
    <div className={`grid ${col} ${xlCol} ${mdCol} ${mdSmCol} ${smCol}`} style={styles}>
      {props.children}
    </div>
  )
}

Grid.propTypes = {
  col: PropTypes.number.isRequired,
  xlCol: PropTypes.number,
  mdCol: PropTypes.number,
  mdSmCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number
}

export default Grid