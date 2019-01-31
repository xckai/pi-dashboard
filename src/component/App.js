import React from "react";
import Bar from "./Bar";
import { WebContainer } from "./WebContainer";
import style from "./APP.less";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./MainPage";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apps: [{ title: "Test" }] };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Bar title="Rasperry Pi - Dashboard" />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
