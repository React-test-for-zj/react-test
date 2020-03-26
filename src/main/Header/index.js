import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        {this.props.name}{this.props.children}
      </div>
    )
  }
}
