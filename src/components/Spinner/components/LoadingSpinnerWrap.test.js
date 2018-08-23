import React from "react";
 import { shallow } from "enzyme";

 import LoadingSpinnerWrap from "./LoadingSpinnerWrap";

 describe("LoadingSpinnerWrap", () => {
   it("matches snapshot", () => {
     const aLoadingSpinnerWrap = shallow(<LoadingSpinnerWrap/>);
     expect(aLoadingSpinnerWrap).toMatchSnapshot();
   });
 });