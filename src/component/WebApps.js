import React from "react";
export class WebApps extends React.Component {
  render() {
    let icon = this.props.iconSrc ? (
      <img src={this.props.iconSrc} alt={this.props.title[0]} />
    ) : (
      <span> {this.props.title[0]}</span>
    );
    return (
      <div className="webapp">
        <div className="icon">{icon}</div>
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}
