import React, { Component } from "react"
import "./App.css"
import Student from "./Student"
import { getData } from "./fetchData"
import Teacher from "./Teacher"

class Class extends Component {
  constructor() {
    super()
    this.state = {
      teacher: null,
      students: null
    }
  }

  componentDidMount() {
    getData("http://localhost:8081/api/teacher")
      .then(data => {
        this.setState({ teacher: data.teacher })
      })
      .catch(err => {
        console.error(err)
      })

    getData("http://localhost:8081/api/student")
      .then(data => {
        this.setState({ students: data.student })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        <Teacher teacher={this.state.teacher} />
        <Student students={this.state.students} />
      </div>
    )
  }
}

export default Class
