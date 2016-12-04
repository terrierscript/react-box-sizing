import React from 'react'
import { style, merge, select } from 'glamor'

const BoxSizing = ({ children, value }) => {
  return (
    <div {...merge(
      style({ boxSizing: value}),
      select(' *', { boxSizing: value}),
      select(' *:after', { boxSizing: value}),
      select(' *:before', { boxSizing: value})
    )}>
      {children}
    </div>
  )
}

BoxSizing.propTypes = {
  children: React.PropTypes.node
}


export const BorderBox = (props) => <BoxSizing value='border-box' {...props} />
export const ContentBox = (props) => <BoxSizing value='content-box' {...props} />
export const PaddingBox = (props) => <BoxSizing value='padding-box' {...props} />
