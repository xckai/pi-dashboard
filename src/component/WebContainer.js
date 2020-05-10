import React from "react";
import { WebApps } from "./WebApps";
import { AddAppBtn } from "./AddAppBtn";
export class WebContainer extends React.Component {
  render() {
    let apps = [{ title: "软件中心" }].map(q => {
      return <WebApps title={q.title} iconSrc={q.iconSrc} key={q.title} url={q.url}/>;
    });
    return (
      <div className="card">
        <div className="card-header">Apps</div>
        <div className="card-body d-flex flex-row flex-wrap">
          {apps}
          {/* <AddAppBtn /> */}
        </div>
      </div>
    );
  }
}
