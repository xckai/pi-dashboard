import React from "react";
import Bar from "./Bar";
import { WebContainer } from "./WebContainer";
import style from "./APP.less";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apps: [{ title: "Test" }] };
  }
  render() {
    return (
      <div>
        <Bar title="Rasperry Pi - Dashboard" />
        <WebContainer apps={this.state.apps} />
      </div>
    );
  }
}
export default App;
