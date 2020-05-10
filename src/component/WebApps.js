import React from "react";
export class WebApps extends React.Component {
  onClick = () => {
    if (this.props.url) {
      window.open(this.props.url);
    }
  };
  render() {
    let icon = this.props.iconSrc ? (
      <img src={this.props.iconSrc} alt={this.props.title[0]} />
    ) : (
      <span> {this.props.title[0]}</span>
    );
    return (
      <div className="webapp" onClick={this.onClick}>
        <div className="icon">{icon}</div>
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}
