import { render, screen } from "@testing-library/react";
import DataTable from "./DataTable";
import type { Column } from "../../types";

interface User { id:string; name: string; email: string; }

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

const data: User[] = [{ id: "1", name: "Alice", email: "alice@example.com" }];

test("renders table headers", () => {
  render(<DataTable data={data} columns={columns} />);
  (expect(screen.getByText("Name")) as any).toBeInTheDocument();
  (expect(screen.getByText("Email")) as any).toBeInTheDocument();
});

test("renders row data", () => {
  render(<DataTable data={data} columns={columns} />);
  (expect(screen.getByText("Alice")) as any).toBeInTheDocument();
});
