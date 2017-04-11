import React from 'react'
import PropTypes from "prop-types"
import { css } from 'glamor'

const BoxSizing = ({ children, value }) => {
  return (
    <div { ...css({
      boxSizing: value,
      '& *': { boxSizing: value },
      '& *:after': { boxSizing: value},
      '& *:before': { boxSizing: value}
    }) }>
      {children}
    </div>
  )
}

BoxSizing.propTypes = {
  children: PropTypes.node
}


export const BorderBox = (props) => <BoxSizing value='border-box' {...props} />
export const ContentBox = (props) => <BoxSizing value='content-box' {...props} />
export const PaddingBox = (props) => <BoxSizing value='padding-box' {...props} />
