import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import ActionButton from "@/components/shared/ActionButton.vue";

describe("Action Button", () => {
  it("Testing dispaly Text using props", () => {
    render(ActionButton, {
      props: {
        displayText: "Click Me",
        type: "primary",
      },
    });

    const button = screen.getByRole("button", {
      name: /click me/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("button style check", () => {
    render(ActionButton, {
      props: {
        displayText: "Click Me",
        type: "primary",
      },
    });

    const button = screen.getByRole("button", {
      name: /click me/i,
    });
    expect(button).toHaveClass("primary");
  });
});
