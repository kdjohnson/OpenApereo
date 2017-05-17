import React, { Component } from "react"
class Student extends Component {
  render() {
    if (this.props.students === null) {
      return <div />
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <div style={{ backgroundColor: "#B3E5FC" }}>
            <p style={{ backgroundColor: "#03A9F4", marginTop: "0" }}>
              Student
            </p>
            <p style={{ padding: "1em" }}>{this.props.students.name}</p>
            <p style={{ padding: "1em" }}>{this.props.students.email}</p>
          </div>
        </div>
      )
    }
  }
}

export default Student
