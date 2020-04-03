import { shallow } from "enzyme";
import React from "react";
import FavouriteTab from "../components/FavouriteTab";

jest.mock("react-redux", () => ({
  useSelector: () => ({
    data: []
  }),
  useDispatch: () => jest.fn()
}));


describe("Favourite Tab", () => {
  it('Negative case: App shows "No favourite has been selected"', () => {
    const app = shallow( <FavouriteTab />);
    expect(app.find("p").text()).toEqual("No favourite has been selected");
  });
})