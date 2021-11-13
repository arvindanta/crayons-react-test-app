import React from 'react'
import { Route } from 'react-router-dom'
import {ProgressLoaderController} from "@freshworks/crayons-1/react"
class FancyRoute extends React.Component {
    loaderRoot: any;
    constructor(props: any) {
    super(props)
    this.loaderRoot = ProgressLoaderController({});
    }
  componentWillMount () {
    
    this.loaderRoot.start()
  }

  componentDidMount () {
      setTimeout(()=>{
        this.loaderRoot.done()
      },5000)
    
  }

  render () {
    return (
      <Route {...this.props} />
    )
  }
}

export default FancyRoute