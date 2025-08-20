import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "./InputField";

test("renders input with label", () => {
  render(<InputField label="Username" placeholder="Enter username" />);
  (expect(screen.getByLabelText("Username")) as any).toBeInTheDocument();
});

test("shows error message when invalid", () => {
  render(<InputField label="Email" errorMessage="Invalid email" invalid />);
  (expect(screen.getByText("Invalid email")) as any).toBeInTheDocument();
});

test("clear button clears input", async () => {
  const user = userEvent.setup();
  render(<InputField label="Name" showClear value="John" onChange={() => {}} />);
  const button = screen.getByRole("button", { name: /clear input/i });
  await user.click(button);
  expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe("");
});
