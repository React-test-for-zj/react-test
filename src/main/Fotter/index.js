import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FotterList from './FooterList'

export default class index extends Component {
  static propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired
    })).isRequired,
    deletteItem: PropTypes.func,
    doneItem: PropTypes.func
  }
  constructor() {
    super()
    this.state = {
      check: null,
      testBoolean: true
    }
  }

  testAdd = (bool) => {
    this.setState(prve => {
      return {
        testBoolean: bool
      }
    }, () => {
      console.log(this.state.testBoolean)
    })
  }
  // check = (e) => {
  //   this.props.students.map(item => {
  //     if (item.done) {
  //       this.setState({
  //         check: 'checked'
  //       })
  //     } else {
  //       this.setState({
  //         check: ''
  //       })
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.students.map(item => {
              return (
                <FotterList
                  key={item.id}
                  item={item}
                  deleteItem={this.props.deleteItem}
                  doneItem={this.props.doneItem}
                  thisB={this.state.testBoolean}
                  testAdd={this.testAdd}
                />)
            })
          }
        </ul>
      </div>
    )
  } S
}
