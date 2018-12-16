import React from "react";
import renderer from "react-test-renderer";
import Counter from "components/counter/counter.js";
import Header from "components/header/header.js";
// import Footer from "components/footer/footer.js";

describe("<Counter />", () => {
  it("header does render to the DOM", () => {
    let app = shallow(<Header />);
    expect(app.find("h1").exists()).toBeTruthy();
  });
  it("span count prove of life", () => {
    let app = shallow(<Counter />);
    expect(app.find("span.count").exists()).toBeTruthy();
  });
  it("changes state on Decrement click", () => {
    let app = mount(<Counter />);
    let aTag = app.find("a.down.clicker");
    aTag.simulate("click");
    expect(app.state("count")).toBe(-1);
    expect(app.find("a.down.clicker").text()).toBe("-");
  });
  it("changes state on Increment click", () => {
    let app = mount(<Counter />);
    let aTag = app.find("a.up.clicker");
    aTag.simulate("click");
    expect(app.state("count")).toBe(1);
    expect(app.find("a.up.clicker").text()).toBe("+");
  });
});
