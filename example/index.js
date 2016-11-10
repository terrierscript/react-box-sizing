// https://css-tricks.com/box-sizing/
import React from 'react'
import ReactDom from 'react-dom'
import BoxSizing from '../lib/'
import singletonDom from 'singleton-dom'

const Example = ({type}) => {
  return (
    <BoxSizing type={type}>
      <div style={{width: "50%", border: "5px solid #E18728"}}>
        Parent div with 50% width.
          <div style={{
            width: "90%",
            padding: "20%",
            border: "4px solid black",
            margin: "0.5em auto"
          }}>
            Child div with 90% width, 4px black border, and 20% padding
          </div>
      </div>
    </BoxSizing>
  )
}

ReactDom.render(
  <div>
    <Example />
    <Example type={"content-box"} />
    <Example type={"padding-box"} />
  </div>,
  singletonDom('example')
)