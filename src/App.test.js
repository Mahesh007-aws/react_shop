import {renderWithRouter, screen} from "./test-utils";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App TestSuite Testting", () => {
  beforeEach(() => {
    renderWithRouter(<App />, {route: "/"});
  });

  it("must have a navigation", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("verifing the header About the Applicationn", () => {
    let heading = screen.queryAllByRole("heading", {level: 1});
    expect(heading[0]).toBeInTheDocument();
  });

  it("Should have a heading with details of About page", () => {
    userEvent.click(screen.getByText("About"));
    expect(screen.getAllByRole("heading", {level: 1})).toHaveLength(2);
  });

  // it("rendering heading to match text", () => {
  //   expect(
  //     screen
  //       .getByText("This Application is About Online website Named Frutopia")
  //       .toBeInTheDocument()
  //   );
  // });
  it("should have A image logo in navbar", () => {
    let logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });

  it("should have Routes Home,Products,chart,Login LInks to be present", () => {
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText(/Chart/i)).toBeInTheDocument();
  });

  it("should have 6 nav links before Login", () => {
    expect(screen.queryAllByRole("link")).toHaveLength(6);
  });
  it("should get the 3rd link text of a nav bar", () => {
    let list = screen.queryAllByRole("listitem");
    expect(list[1]).toHaveTextContent(/Chart/i);
  });
});
