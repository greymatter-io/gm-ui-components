import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import AppFooter from "./AppFooter.js";

describe("A Footer container", () => {
  it("should render", () => {
    const anAppFooter = renderer.create(<AppFooter />).toJSON();
    expect(anAppFooter).toMatchSnapshot();
  });
});

describe("useExternalLinks is true", () => {
  const anAppFooter = shallow(<AppFooter useExternalLinks={true} />);

  it("useExternalLinks boolean prop is true", () => {
    expect(anAppFooter.prop.useExternalLinks).toBeTruthy;
  });

  it("disables logo link", () => {
    const footerHtml = anAppFooter.find("LongLogo").html();
    expect(footerHtml.includes("href")).toBeTruthy;
    expect(footerHtml.includes("rel")).toBeTruthy;
    expect(footerHtml.includes("target")).toBeTruthy;
  });

  it("hides social links", () => {
    expect(anAppFooter.find("Links")).toBeTruthy;
  });
});

describe("useExternalLinks is false", () => {
  const anAppFooter = shallow(<AppFooter useExternalLinks={false} />);

  it("useExternalLinks boolean prop is false", () => {
    expect(anAppFooter.prop.useExternalLinks).toBeFalsy;
  });

  it("disables logo link", () => {
    const footerHtml = anAppFooter.find("LongLogo").html();
    expect(footerHtml.includes("href")).toBeFalsy;
    expect(footerHtml.includes("rel")).toBeFalsy;
    expect(footerHtml.includes("target")).toBeFalsy;
  });

  it("hides social links", () => {
    expect(anAppFooter.find("Links")).toBeFalsy;
  });
});
