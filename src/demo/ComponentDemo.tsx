import { useState } from "react";
import { InputField, DataTable } from "../components";
import type { Column } from "../types";

// Demo Component
const ComponentDemo = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  
  // Sample data for DataTable
  const userData = [
    { id: "1", name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: "2", name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: "3", name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Inactive' },
    { id: "4", name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Moderator', status: 'Active' },
    { id: "5", name: 'Tom Brown', email: 'tom@example.com', role: 'User', status: 'Active' },
  ];
  
  const columns: Column<typeof userData[0]>[] = [
    { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
    { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
    { key: 'role', title: 'Role', dataIndex: 'role', sortable: true },
    { 
      key: 'status', 
      title: 'Status', 
      dataIndex: 'status', 
      sortable: true,
      render: (status) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          status === 'Active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {status}
        </span>
      )
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">React UI Components</h1>
          <p className="text-gray-600">InputField and DataTable components with TypeScript</p>
        </div>
        
        {/* InputField Examples */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">InputField Component</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Basic Input</h3>
              <InputField
                label="Full Name"
                placeholder="Enter your full name"
                helperText="This will be displayed on your profile"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                showClear
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Password Input</h3>
              <InputField
                type="password"
                label="Password"
                placeholder="Enter your password"
                showPasswordToggle
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Error State</h3>
              <InputField
                label="Email"
                placeholder="Enter your email"
                errorMessage="Please enter a valid email address"
                invalid
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Loading State</h3>
              <InputField
                label="Search"
                placeholder="Searching..."
                loading
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Variants</h3>
              <div className="space-y-4">
                <InputField placeholder="Outlined (default)" variant="outlined" />
                <InputField placeholder="Filled variant" variant="filled" />
                <InputField placeholder="Ghost variant" variant="ghost" />
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Sizes</h3>
              <div className="space-y-4">
                <InputField placeholder="Small size" size="sm" />
                <InputField placeholder="Medium size (default)" size="md" />
                <InputField placeholder="Large size" size="lg" />
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">States</h3>
              <div className="space-y-4">
                <InputField placeholder="Normal state" />
                <InputField placeholder="Disabled state" disabled />
              </div>
            </div>
          </div>
        </div>
        
        {/* DataTable Example */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">DataTable Component</h2>
          
          {selectedUsers.length > 0 && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                {selectedUsers.length} row{selectedUsers.length === 1 ? '' : 's'} selected
              </p>
            </div>
          )}
          
          <DataTable
            data={userData}
            columns={columns}
            selectable
            onRowSelect={setSelectedUsers}
          />
          
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Examples</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Loading State</h4>
                <DataTable
                  data={[]}
                  columns={columns}
                  loading
                />
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Empty State</h4>
                <DataTable
                  data={[]}
                  columns={columns}
                  emptyMessage="No users found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDemo;