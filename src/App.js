import React, { Component } from 'react'

import {
  Header,
  Sections,
  Fotter,
  Like
} from './main'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      student: [
        { name: 'zjj', id: 1, done: true },
      ]
    }
  }

  addItem = (value) => {
    this.setState({
      student: [...this.state.student, value]
    })
  }

  deleteItem = (id) => {
    const stu = this.state.student
    stu.splice(stu.findIndex(item => item.id === id), 1)
    this.setState({
      student: stu
    })
  }

  doneItem = (id) => {
    console.log('App')
    this.setState(prve => {
      return {
        student: prve.student.map(item => {
          if (item.id === id) {
            item.done = !item.done
          }
          return item
        })
      }
    })
  }
  render() {
    return (
      <div>
        <Header name={`hello`}>world</Header>
        <Sections addName={this.addItem} />
        <Fotter students={this.state.student} deleteItem={this.deleteItem} doneItem={this.doneItem} />
        <Like />
      </div>
    )
  }
}