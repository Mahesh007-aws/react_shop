import {renderWithRouter, screen} from "../utilities/test-utils";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("Register page Testing With FORMIK and REDUX", () => {
  beforeEach(() => {
    renderWithRouter(<App />, {route: "/createAccount"});
    // userEvent.click(screen.getByRole("link", {name: "Create Account"}));
  });
  it("Should Have Main  heading as create u r account and visible", () => {
    expect(
      screen.getByRole("heading", {level: 1, name: "Create u r Account Here"})
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {level: 1, name: "Create u r Account Here"})
    ).toHaveTextContent("Create u r Account Here");
  });

  it("Should Have a block heading as register form and visible", () => {
    expect(
      screen.getByRole("heading", {level: 2, name: "Register Form"})
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {level: 2, name: "Register Form"})
    ).toHaveTextContent("Register Form");
  });

  it("Should Have labels with h5 heading", () => {
    expect(screen.getAllByRole("heading", {level: 5})).toHaveLength(8);
  });

  it("should have a submit button ", () => {
    expect(screen.getByRole("button", {name: "submit"})).toBeInTheDocument();
  });
  test("shoould have 7 textbox for entering details", () => {
    expect(screen.getAllByRole("textbox")).toHaveLength(5);
    expect(screen.getAllByPlaceholderText("Enter password")).toHaveLength(1);
    expect(screen.getAllByPlaceholderText("Re-Enter password")).toHaveLength(1);
  });
  test("Register Form has an input field label text as Address Details", () => {
    expect(screen.getByText("Address Details")).toBeInTheDocument();
  });
  test("Allows to type in Last name input field", () => {
    const lnameField = screen.getByPlaceholderText("Enter Lastname");
    userEvent.type(lnameField, "maheshlee");
    expect(screen.getByDisplayValue("maheshlee")).toBeInTheDocument();
  });
  test("Allows to type in first name input field ", () => {
    const lnameField = screen.getByPlaceholderText("Enter first username");
    userEvent.type(lnameField, "nasa");
    expect(screen.getByDisplayValue("nasa")).toBeInTheDocument();
  });

  it("should have a EDIT button visible on submiting the form ", () => {
    let submit = screen.getByRole("button", {name: "submit"});
    userEvent.click(submit);
    expect(screen.getByRole("button", {name: "EDIT"})).toBeVisible();
  });
});
