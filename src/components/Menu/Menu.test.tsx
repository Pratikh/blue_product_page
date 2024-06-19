import { render, screen } from "@testing-library/react";
import { UserContext } from "../../context/UserInfo";
import { Menu } from "./Menu";

describe("Menu", () => {
  it("should show the UserIcon", () => {
    render(<Menu />);
    expect(screen.getByTestId("usericon")).toBeInTheDocument();
  });

  it("User info loading check", () => {
    render(
      <UserContext.Provider
        value={{
          isLoading: true,
          error: "",
        }}
      >
        <Menu />
      </UserContext.Provider>
    );
    expect(screen.getByTestId("usericon-spinner")).toBeInTheDocument();
  });

  it("Check for links and logo", () => {
    render(<Menu />);
    expect(screen.getByTestId("company-logo")).toBeInTheDocument();
    expect(screen.getByText("Product")).toHaveAttribute(
      "href",
      "/en/US/product"
    );
    expect(screen.getByText("About")).toHaveAttribute("href", "/en/US/about");
  });
});
