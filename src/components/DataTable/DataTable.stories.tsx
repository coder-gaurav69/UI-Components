import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";
import type { Column } from "../../types";

// Update User interface to use string for id to match DataTable expectation
interface User {
  id: string; // Changed from number to string
  name: string;
  email: string;
  role: string;
  status: string;
}

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "role", title: "Role", dataIndex: "role", sortable: true },
  { key: "status", title: "Status", dataIndex: "status" },
];

// Update data to use string IDs
const data: User[] = [
  { id: "1", name: "Alice", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: "2", name: "Bob", email: "bob@example.com", role: "User", status: "Inactive" },
];

export const Default: Story = {
  args: { data, columns, selectable: true }, // Added selectable prop
};

export const Loading: Story = {
  args: { data: [], columns, loading: true },
};

export const Empty: Story = {
  args: { data: [], columns },
};

// Optional: Add a story to test selection with callback
export const WithSelection: Story = {
  args: {
    data,
    columns,
    selectable: true,
    onRowSelect: (selectedRowIds) => console.log("Selected IDs:", selectedRowIds),
  },
};