import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { LoginPage } from "../LoginPage";
import { AllUsersPage } from "../AllUsersPage";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("LoginPage Component", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <LoginPage />
                </Provider>
            ).exists()
        ).toBe(true);
    });
}); 

describe("AllUsers Component", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <AllUsersPage />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});