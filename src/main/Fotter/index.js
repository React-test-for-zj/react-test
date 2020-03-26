import React, { Component } from 'react'

export default class index extends Component {

  render() {

    return (
      <div>
        {
          this.props.students.map(item => {
            return <div key={item.id}>{item.name}</div>
          })
        }
      </div>
    )
  }
}
