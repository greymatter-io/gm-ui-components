import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import Footer from "./Footer";
import "jest-styled-components";

const tree = renderer.create(<Footer />).toJSON();

describe("<Footer />", () => {
  test("it renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});

