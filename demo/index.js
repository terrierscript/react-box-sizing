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

const BorderBoxDemo = () => (
  <div>
    <BorderBox>
      <InnerItem />
    </BorderBox>
  </div>
)

const ContentBoxDemo = () => (
  <div>
    <ContentBox>
      <InnerItem />
    </ContentBox>
  </div>
)

const PaddingBoxDemo = () => (
  <div>
    <PaddingBox>
      <InnerItem />
    </PaddingBox>
  </div>
)

const componentMap = {
  "border-box": BorderBoxDemo,
  "content-box": ContentBoxDemo,
  "padding-box": PaddingBoxDemo
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

const Result = ({component}) => {
  const style = {
    border: "1px solid #ccc",
    padding: 20,
    borderRadius: 8
  }

  return <div style={style}>
    {component}
  </div>
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
      <h3>box-sizing value</h3>
      <Radio type={type} onChange={ (e) => {
        this.setState({ type: e.target.value })
      }} />
      <h3>Result</h3>
      <Result component={ componentMap[type]() } />
      <h3>CSS</h3>
      <CssEmulate type={type} />
    </div>
  }
}

ReactDom.render(<Demo />, singletonDom('example') )