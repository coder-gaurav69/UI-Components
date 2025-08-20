import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import type { InputFieldProps } from "./InputField";

const meta: Meta<InputFieldProps> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    variant: { control: "select", options: ["outlined", "filled", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<InputFieldProps>;

export const Default: Story = { args: { label: "Email", placeholder: "Enter your email" } };
export const Error: Story = { args: { label: "Email", errorMessage: "Invalid email", invalid: true } };
export const Password: Story = { args: { label: "Password", type: "password", showPasswordToggle: true } };
export const Loading: Story = { args: { label: "Search", placeholder: "Searching...", loading: true } };
