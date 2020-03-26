import React, { Component } from 'react'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      islike: false
    }
  }
  // isliked = () => {
  //   this.setState({
  //     islike: !this.state.islike
  //   })
  // }
  // isliked = () => {
  //   this.setState((prve) => {
  //     console.log(prve)
  //     return {
  //       islike: !prve.islike
  //     }
  //   })
  // }
  isliked = () => {
    this.setState(prev => {
      return {
        islike: !prev.islike
      }
    }, () => {
      console.log(this.state.islike)
    })
  }
  render() {
    return (
      <div>
        <span onClick={this.isliked}>
          {
            this.state.islike ? `🧡 喜欢` : `🤎 不喜欢`
          }
        </span>
      </div>
    )
  }
}