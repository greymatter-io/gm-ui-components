import React from "react";
 import { shallow } from "enzyme";

 import LoadingMessage from "./LoadingMessage";

 describe("LoadingMessage", () => {
   it("matches snapshot", () => {
     const aLoadingMessage = shallow(<LoadingMessage/>);
     expect(aLoadingMessage).toMatchSnapshot();
   });
 });