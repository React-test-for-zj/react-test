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
        { name: 'zjj', id: 1 },
        { name: 'zxm', id: 2 }
      ]
    }
  }

  addItem = (value) => {
    this.setState({
      student: [...this.state.student, value]
    })
  }

  render() {
    return (
      <div>
        <Header name={`hello`}>world</Header>
        <Sections addName={this.addItem} />
        <Fotter students={this.state.student} />
        <Like />
      </div>
    )
  }
}