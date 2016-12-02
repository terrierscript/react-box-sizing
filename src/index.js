
const React = require('react')
const { style, merge, select } = require('glamor')

const boxSizing = (type) => {
  return class BoxSizing extends React.Component {
    static propTypes = {
      children: React.PropTypes.node.isRequired
    }
    render () {
      const {children} = this.props
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
  }
}

exports.boxSizing = boxSizing
exports.ContentBox = boxSizing('content-box')
exports.BorderBox = boxSizing('border-box')
exports.PaddingBox = boxSizing('padding-box')
