const React = require('react')
const { style, merge, select } = require('glamor')

const BoxSizing = ({ children, type }) => {
  return (
    <div {...merge(
      style({ boxSizing: type}),
      select(' *', { boxSizing: type}),
      select(' *:after', { boxSizing: type}),
      select(' *:before', { boxSizing: type})
    )}>
      {children}
    </div>
  )
}

BoxSizing.propTypes = {
  children: React.PropTypes.node
}

module.exports = BoxSizing