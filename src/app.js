import React from "react";
import "./style/design.scss";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Counter from "./components/counter/counter.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
