import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { shallowClone } from "testUtils";

// Make testing functions available in all test files without importing
global.shallow = shallowClone;
global.mount = mount;

Enzyme.configure({ adapter: new Adapter() });
