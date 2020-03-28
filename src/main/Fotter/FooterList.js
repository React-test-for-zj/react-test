import React, { Component } from 'react'
const nope = () => { }
export default class FooterList extends Component {
  constructor() {
    super()
    this.state = {}
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(this.props)

    // console.log(nextProps, nextState)
    // console.log(this.props, nextState)
    return true
  }
  itemId = (e) => {
    // this.props.deleteItem(e.target.dataset.letter)
    const { deleteItem = nope, item } = this.props
    deleteItem(item.id)
  }
  checked = (e) => {
    console.log(this.props)
    console.log(this.props.item)
    const { doneItem = nope, item, thisB, testAdd } = this.props
    testAdd(!thisB)
    doneItem(item.id)
  }



  render() {
    // console.log('fotterlist')
    const { item } = this.props
    return (
      <li>
        <span>{item.name}</span>
        {/* <button data-letter={this.props.item.id} onClick={this.itemId}>删除</button> */}
        <button onClick={this.itemId}>删除</button>
        <input type='checkbox' checked={item.done} onChange={this.checked} /><span>{item.done ? '已完成' : '未完成'}</span>
      </li>
    )
  }
}
