const React = require('react')
const BoxSizing = require('./boxSizing')

const BorderBox = (props) => <BoxSizing type='border-box' {...props} />
const ContentBox = (props) => <BoxSizing type='content-box' {...props} />
const PaddingBox = (props) => <BoxSizing type='padding-box' {...props} />

exports.BorderBox = BorderBox
exports.ContentBox = ContentBox
exports.PaddingBox = PaddingBox