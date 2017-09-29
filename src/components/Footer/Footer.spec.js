import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import Footer from "./Footer";
import { Wrapper, LongLogo, Copyright, Social } from "./Footer";
import { FONT_GROUP_MAIN_TEXT } from "../../style/fonts/fontVariables";
import "jest-styled-components";

let FooterTree, Logo, SocialIcon, CopyrightLink;

beforeAll(() => {
  FooterTree = renderer.create(<Footer />).toJSON();
  Logo = renderer.create(<LongLogo />).toJSON();
  SocialIcon = renderer.create(<Social />).toJSON();
  CopyrightLink = renderer.create(<Copyright />).toJSON();
});

describe("<Footer> Snapshot", () => {
  test("it renders correctly", () => {
    expect(FooterTree).toMatchSnapshot();
  });
});

const hover = { modifier: ":hover" };

describe("<Footer> elements", () => {
  test("<Logo> has rule to transition to color on hover", () => {
    expect(Logo).toHaveStyleRule("opacity", "1", hover);
    expect(Logo).toHaveStyleRule("transition", "all 0.2s ease", hover);
    expect(Logo).toHaveStyleRule("filter", "grayscale(0%)", hover);
  });

  test("<Social> imgs have rule to transition opacity on hover", () => {
    expect(SocialIcon).toHaveStyleRule("opacity", "1", hover);
  });

  test("<Copyright> is using the correct font-family", () => {
    expect(CopyrightLink).toHaveStyleRule("font-family", FONT_GROUP_MAIN_TEXT);
  });
});
