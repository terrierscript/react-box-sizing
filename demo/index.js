import React from 'react'
import ReactDom from 'react-dom'
import BoxSizing from '../lib/'
import { BorderBox, ContentBox, PaddingBox } from '../src/'
import singletonDom from 'singleton-dom'


const InnerItem = () => (
  <div style={{width: "50%", border: "5px solid #E18728",             textAlign: "center"}}>
    Parent div with 50% width.
      <div style={{
        width: "90%",
        textAlign: "center",
        padding: "20%",
        border: "4px solid black",
        margin: "0.5em auto"
      }}>
        Child div with 90% width, 4px black border, and 20% padding
      </div>
  </div>
)

const CssEmulate = ({type}) => {
  const css = `
  .component-item {
    box-sizing: ${type};
  }
  .component-item *,
  .component-item *:before,
  .component-item *:after {
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

const Radio = (props) => {
  return (
    <div>
      <RadioSelect value={"border-box"} {...props} >
        {"<BorderBox /> (box-sizing: border-box)"}
      </RadioSelect>
      <RadioSelect value={"content-box"} {...props} >
        {"<ContentBox /> (box-sizing: content-box)"}
      </RadioSelect>
      <RadioSelect value={"padding-box"} {...props} >
        {"<PaddingBox /> (box-sizing: padding-box) (Firefox only!)"}
      </RadioSelect>
    </div>
  )
}

const DemoBox = ({type, component: Component}) => {
  const name = `<${Component.name}>`
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
      <Component>
        <InnerItem />
      </Component>

      <h3>CSS</h3>
      <CssEmulate type={type} />
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
      <DemoBox type="border-box" component={BorderBox} />
      <DemoBox type="content-box" component={ContentBox} />
      <DemoBox type="padding-box" component={PaddingBox} />
    </div>
  }
}

ReactDom.render(<Demo />, singletonDom('example') )