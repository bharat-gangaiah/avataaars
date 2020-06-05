import * as React from 'react'

import GraphicShirt from './GraphicShirt'
import { ClotheOption, Selector } from '../../options'

export default class Clothes extends React.Component {
  render () {
    return (
      <Selector option={ClotheOption} defaultOption={GraphicShirt}>
        <GraphicShirt />
      </Selector>
    )
  }
}
