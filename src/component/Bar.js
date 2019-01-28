import React from "react";

class Bar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">
          {this.props.title || "Pi-Dashboard"}
        </span>
      </nav>
    );
  }
}

export default Bar;
