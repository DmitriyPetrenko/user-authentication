// Core
import React from "react";
import renderer from "react-test-renderer";

import ButtonLogout from "./index";

test("Button rendered correct", () => {
    const component = renderer.create(<ButtonLogout />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
