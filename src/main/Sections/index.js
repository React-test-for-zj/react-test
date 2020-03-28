import React, { Component, createRef } from 'react'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      id: '',
      done: false
    }
    this.inputDom = createRef()

  }

  handleChange = (e) => { // 把 input 的 value 存入 state
    // console.log(e)
    // console.log(e.target)
    this.setState({
      name: e.currentTarget.value
    })
  }
  addSub = () => {// 通过父组件传递的方法传递参数
    if (this.state.name) {
      this.props.addName({
        name: this.state.name,
        id: Math.random(),
        done: this.state.done
      })
      this.setState({
        name: ''
      }, () => { // 第二个参数这里可以获取最新的 state 的值
        this.inputDom.current.focus()
      })
    }
  }

  handleKeyCode = (e) => {
    // console.log(e)
    // console.log(e.nativeEvent.keyCode)
    if (e.keyCode === 13) { // 回车键提交input
      this.addSub()
    }
  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={this.handleChange} onKeyDown={this.handleKeyCode} ref={this.inputDom} />
        <button onClick={this.addSub}>提交</button>
      </div>
    )
  }
}
