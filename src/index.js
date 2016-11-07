import React, { PropTypes } from 'react'
import { style, merge, select} from 'glamor'

const BoxSizing = ({type = 'border-box', children}) => {
  return <div {...merge(
    style({ boxSizing: type}),
    select(' *', { boxSizing: type}),
    select(' *:after', { boxSizing: type}),
    select(' *:before', { boxSizing: type})
  )}>
    {children}
  </div>
}

BoxSizing.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default BoxSizing