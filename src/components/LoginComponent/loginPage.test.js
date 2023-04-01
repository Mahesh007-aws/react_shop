import {renderWithRouter, screen} from "../utilities/test-utils";
import userEvent from "@testing-library/user-event";

import App from "../../App";

describe("AddProduct Page Testing With FORMIK and REDUX", () => {
  beforeEach(() => {
    renderWithRouter(<App />, {route: "/login"});
    userEvent.click(screen.getByRole("link", {name: "Login"}));
  });

  it("Should Have Main h3 heading as Login and visible", () => {
    expect(screen.getByRole("heading", {level: 3})).toBeInTheDocument();
    expect(screen.getByRole("heading", {level: 3})).toHaveTextContent("Login");
  });
  test("shoould have a username textbox for entering details", () => {
    expect(screen.getAllByRole("textbox")).toHaveLength(1);
  });
  test("shoould have a checkbox for entering details", () => {
    expect(screen.queryByRole("checkbox")).toBeInTheDocument();
  });
  test("shoould have a submit button to Login", () => {
    expect(screen.queryByRole("button", {name: "Login"})).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Login"})).toHaveTextContent(
      "Login"
    );
  });
  it("should have a link to register user details page", () => {
    expect(
      screen.getByText(/Click here to Create Account/i)
    ).toBeInTheDocument();
  });
  it("Checking the register page link working", () => {
    let link = screen.getByText(/Click here to Create Account/i);
    userEvent.click(link);
    expect(screen.getByText(/Create u r Account Here/i)).toHaveTextContent(
      "Create u r Account Here"
    );
  });

  test("Allows to type in username input field", () => {
    const usernameInputField = screen.getByPlaceholderText(
      "enter your username"
    );
    userEvent.type(usernameInputField, "Sachinversa");
    expect(screen.getByDisplayValue("Sachinversa")).toBeInTheDocument();
  });
  test("Allows to type in password input field", () => {
    const passwordField = screen.getByPlaceholderText("enter your password");
    userEvent.type(passwordField, "Sachin");
    expect(screen.getByDisplayValue("Sachin")).toBeInTheDocument();
  });
  test("Allows to type in name input field", () => {
    const checkField = screen.getByRole("checkbox");
    userEvent.click(checkField);
    expect(checkField).toBeTruthy();
  });
  test("shoould have a submit button to Login and clickable", () => {
    const login = screen.queryByRole("button", {name: "Login"});
    userEvent.click(login);
  });
});
