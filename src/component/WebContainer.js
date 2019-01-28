import React from "react";
import { WebApps } from "./WebApps";
export class WebContainer extends React.Component {
  render() {
    let apps = this.props.apps.map(q => {
      return <WebApps title={q.title} iconSrc={q.iconSrc} key={q.title} />;
    });
    return (
      <div className="card">
        <div className="card-header">Web Apps</div>
        <div className="card-body d-flex flex-row flex-wrap">{apps}</div>
      </div>
    );
  }
}
