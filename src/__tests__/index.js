import React from 'react'
import assert from 'assert'
import renderer from 'react-test-renderer'
import { BorderBox, ContentBox, PaddingBox } from '../'
import { styleSheet } from 'glamor'

describe('snapshot', () => {
  it('BorderBox', () => {
    const tree = renderer.create(
      <BorderBox><div>This is Test</div></BorderBox>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ContentBox', () => {
    const tree = renderer.create(
      <ContentBox><div>This is Test</div></ContentBox>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('PaddingBox', () => {
    const tree = renderer.create(
      <ContentBox><div>This is Test</div></ContentBox>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})