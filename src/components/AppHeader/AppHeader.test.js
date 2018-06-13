import React from "react";
import { MemoryRouter, Route } from "react-router";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

// utils
import { getFabricServer } from "../../utils/head";
import mockState from "json/mockReduxState";
import { renderWithIntl, mountWithIntl } from "utils/i18nTesting";

// components
import Header from "./AppHeader";

// styled-components
import HeaderWrapper from "./components/HeaderWrapper";

const store = configureMockStore()(mockState);

const aHeader = (
  <Provider store={store}>
    <MemoryRouter initialEntries={["/Down"]}>
      <Route render={props => <Header {...props} />} />
    </MemoryRouter>
  </Provider>
);

// mock getFabricServer
jest.mock("../../utils/head");

describe("Header component", () => {
  let aHeaderWithIntl;

  beforeEach(() => {
    aHeaderWithIntl = mountWithIntl(aHeader);
  });

  test("matches snapshot with instance view tabs", () => {
    aHeaderWithIntl = renderWithIntl(aHeader);
    expect(aHeaderWithIntl).toMatchSnapshot();
  });

  test("matches snapshot with fabric view tabs", () => {
    // set a return value for getFabricServer() util func so that Header renders <UseSDS /> and remount
    getFabricServer.mockImplementation(() => "http://localhost:1337");
    aHeaderWithIntl = renderWithIntl(aHeader);
    expect(aHeaderWithIntl).toMatchSnapshot();
  });

  test("renders subcomponents", () => {
    expect(aHeaderWithIntl.find(HeaderWrapper)).toHaveLength(1);
    expect(aHeaderWithIntl.find("HeaderToolbar")).toHaveLength(1);
    expect(aHeaderWithIntl.find("HeaderBanner")).toHaveLength(1);
  });

  test("passes the correct title to HeaderBanner", () => {
    expect(aHeaderWithIntl.find("HeaderBanner").props().title).toBe("Down");
  });

  test("passes the pathname to HeaderToolbar", () => {
    expect(aHeaderWithIntl.find("HeaderToolbar").props().pathname).toBe(
      "/Down"
    );
  });
});
