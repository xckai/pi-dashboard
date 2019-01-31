import React from "react";
export class AddAppBtn extends React.Component {
  onclick() {}
  render() {
    return (
      <div className="webapp">
        <div className="icon">
          <img src="../asserts/add.svg" />
        </div>
        <div className="title">增加新的配置</div>
      </div>
    );
  }
}
