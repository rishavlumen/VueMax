//import { describe, it, expect } from "vitest"; set globally so no need
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("Displays Company Name", () => {
    render(MainNav);
    //screen.debug(); -- gives us html representation in dom created by render
    const companyName = screen.getByText("Andromeda");
    expect(companyName).toBeInTheDocument();
  });

  it("Testing Nav Bar items", () => {
    render(MainNav);
    const htmlElements = screen.getAllByRole("listitem");
    const htmlElementText = htmlElements.map((item) => item.textContent);
    expect(htmlElementText).toEqual([
      "Teams",
      "Locations",
      "Life At Andromeda",
      "How We Hire",
      "Students",
      "Jobs",
    ]);
  });
});

describe("When user logged In", () => {
  it("displays user profile picture", async () => {
    render(MainNav);

    let profileImage = screen.queryByRole("img", {
      name: /user profile image/i,
    });

    expect(profileImage).not.toBeInTheDocument();

    let loginButton = screen.queryByRole("button", {
      name: /sign in/i,
    });

    await userEvent.click(loginButton);

    profileImage = screen.queryByRole("img", {
      name: /user profile image/i,
    });

    expect(profileImage).toBeInTheDocument();

    await userEvent.click(profileImage);

    loginButton = screen.queryByRole("button", {
      name: /sign in/i,
    });

    expect(loginButton).toBeInTheDocument();
  });
});
