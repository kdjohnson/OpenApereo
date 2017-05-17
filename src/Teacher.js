import React, { Component } from "react"
class Teacher extends Component {
  render() {
    if (this.props.teacher === null) {
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
          <div>
            <div style={{ backgroundColor: "#B3E5FC" }}>
              <p style={{ backgroundColor: "#03A9F4" }}>
                Teacher
              </p>
              <p style={{ padding: "1em" }}>{this.props.teacher.name}</p>
              <p style={{ padding: "1em" }}>{this.props.teacher.email}</p>
              <p style={{ padding: "1em" }}>{this.props.teacher.office}</p>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Teacher
