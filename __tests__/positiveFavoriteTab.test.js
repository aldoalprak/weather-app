import { shallow } from "enzyme";
import React from "react";
import FavouriteTab from "../components/FavouriteTab";

jest.mock("react-redux", () => ({
  useSelector: () => ({
    data: ["Jakarta"]
  }),
  useDispatch: () => jest.fn()
}));


describe("Favourite Tab", () => {
  it('Positive case: App shows "Button based on the favourite array"', () => {
    const app = shallow( <FavouriteTab />);
    expect(app.find("h3").text()).toEqual("Jakarta");
  });
})