import React from 'react'
import ReactDom from 'react-dom'
import BoxSizing from '../lib/'
import { BorderBox, ContentBox, PaddingBox } from '../src/'
import singletonDom from 'singleton-dom'


const InnerItem = () => {
  const parent = {
    width: "50%",
    border: "5px solid #E18728",
    float: "left",
    textAlign: "center"
  }

  const child = {
    width: "90%",
    textAlign: "center",
    padding: "20%",
    border: "4px solid black",
    margin: "0.5em auto"
  }
  const twins = {
    width: "50%",
    padding: "1em",
    border: "4px solid black",
    float: "left"
  }
  return (
    <div>
      <div style={parent}>
        Parent div with 50% width.
        <div style={child}>
          Child div with 90% width, 4px black border, and 20% padding
        </div>
        <div style={twins}>
          <p>Child div with 50% width, 4px black border, and 1em padding</p>
        </div>
        <div style={twins}>
          <p>Child div with 50% width, 4px black border, and 1em padding</p>
        </div>
      </div>
      <div style={{clear: "both"}} />
    </div>
  )
}

const CssEmulate = ({name, type}) => {
  const css = `
  // This is Dummy CSS
  ${name} {
    box-sizing: ${type};
  }
  ${name} *,
  ${name} *:before,
  ${name} *:after {
    box-sizing: inherit;
  }
  `
  const style = {
    border: "1px solid #ccc",
    background: "#d9d9d9",
    borderRadius: 8
  }
  return <pre style={style}>
    <code>
      {css}
    </code>
  </pre>
}

const RadioSelect = ({type, value, children, onChange}) => (
  <div>
    <label style={{padding: "0.2em", fontWeight: "bold"}}>
      <input
        type="radio"
        value={value}
        checked={type === value}
        onChange={onChange}/>
      {children}
    </label>
  </div>
)

const DemoBox = ({type, memo = "", component: Component}) => {
  const name = `<${Component.name}> ${memo}`
  const style = {
    border: "1px solid #ccc",
    padding: 20,
    margin: 20,
    borderRadius: 8
  }

  return (
    <div style={style}>
      <h2>{name}</h2>
      <h3>Result</h3>

      <h4>Sample View</h4>
      <Component>
        <InnerItem />
      </Component>

      <h3>Injected Style</h3>
      <CssEmulate type={type} name={name}/>
    </div>
  )
}

class Demo extends React.Component{
  constructor(){
    super()
    this.state = {
      type: "border-box"
    }
  }
  render(){
    const { type } = this.state
    return <div>
      <h1>react-box-sizing</h1>
      <div><a href="https://github.com/inuscript/react-box-sizing">Source Code (github)</a></div>

      <div>
        This example is based on this page : <a target="_blank" href="https://css-tricks.com/box-sizing/">Box Sizing | CSS Tricks</a> .
      </div>

      <DemoBox type="border-box" component={BorderBox} />
      <DemoBox type="content-box" component={ContentBox} />
      <DemoBox type="padding-box" component={PaddingBox} memo={"(Firefox only)"} />
    </div>
  }
}

ReactDom.render(<Demo />, singletonDom('example') )