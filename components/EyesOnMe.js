const React = require('react')

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.good = this.good.bind(this)
    this.blur = this.blur.bind(this)
  }

  good() {
    console.log("Good!")
  }

  blur() {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button onFocus={this.good} onBlur={this.blur}></button>
    )
  }
}

module.exports = EyesOnMe
