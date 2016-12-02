
const React = require('react')
const { style, merge, select } = require('glamor')

const boxSizing = (type) => {
  return ({children}) => {
    const item = (
      <div {...merge(
        style({ boxSizing: type}),
        select(' *', { boxSizing: type}),
        select(' *:after', { boxSizing: type}),
        select(' *:before', { boxSizing: type})
      )}>
        {children}
      </div>
    )
    return item
  }
}

exports.boxSizing = boxSizing
exports.ContentBox = () => boxSizing('content-box')
exports.BorderBox = () => boxSizing('border-box')
exports.PaddingBox = () => boxSizing('padding-box')
