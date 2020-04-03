import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import TestApp from "../pages/testJest";

describe("With Enzyme", () => {
  it('App shows "Hello, World!"', () => {
    const app = shallow(<TestApp />);
    expect(app.find("div").text()).toEqual("Hello, World!");
  });
});

describe("With Snapshot Testing", () => {
  it('App shows "Hello, World!"', () => {
    const component = renderer.create(<TestApp />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});