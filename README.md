# React UI Components Assignment

This project implements **two reusable UI components** (`InputField` and `DataTable`) using **React + TypeScript + Tailwind CSS**.  
The components are demonstrated using **Storybook** and tested with **Vitest + Testing Library**.  

---

## 🚀 Features

### ✅ InputField Component
- Variants: **outlined, filled, ghost**
- Sizes: **small, medium, large**
- States: **normal, disabled, error, loading**
- Features:
  - Clear button (`X`)
  - Password visibility toggle
  - Animated focus/hover states
  - Helper text and error messages
  - Optional rotating gradient border animation on focus/loading

### ✅ DataTable Component
- Displays tabular data with customizable columns
- Features:
  - **Sorting** (ascending/descending)
  - **Row selection** (single and multiple)
  - **Empty state**
  - **Loading state**
- Responsive and styled with Tailwind CSS
- Accessibility friendly (`aria-*` attributes)

---

## 📂 Project Structure

src/
│── components/
│   ├── InputField/
│   │   ├── InputField.tsx          # Component code
│   │   ├── InputField.stories.tsx  # Storybook stories
│   │   ├── InputField.test.tsx     # Unit tests
│   │   └── index.ts
│   │
│   ├── DataTable/
│   │   ├── DataTable.tsx           # Component code
│   │   ├── DataTable.stories.tsx   # Storybook stories
│   │   ├── DataTable.test.tsx      # Unit tests
│   │   └── index.ts
│   │
│   └── index.ts                    # Export all components
│
│── demo/
│   └── ComponentDemo.tsx           # Demo page for both components
│
│── utils/
│   └── tableUtils.ts               # Sorting helpers
│
│── types/
│   └── index.ts                    # Shared types/interfaces

---

## 🛠️ Tech Stack
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Storybook 9**
- **Vitest + React Testing Library**
- **Lucide Icons**

---

## 🖥️ Getting Started

### 1️⃣ Clone the repository
git clone https://github.com/coder-gaurav69/UI-Components.git
cd <your-repo>

### 2️⃣ Install dependencies
npm install

### 3️⃣ Run the development server
npm run dev
App will be available at: http://localhost:5173

### 4️⃣ Run Storybook
npm run storybook
Storybook will be available at: http://localhost:6006

### 5️⃣ Run Tests
npm run test
Runs all unit tests with Vitest.

---

## 🌐 Deployment

### Storybook Preview
Storybook is deployed using **Vercel** (or Chromatic):  
👉 [Storybook Link](https://ui-components-ruddy.vercel.app)

---

## ✅ Submission Checklist (as per assignment PDF)
- [x] InputField component with all variants, sizes, states
- [x] DataTable component with sorting, row selection, empty/loading states
- [x] Storybook stories for both components
- [x] Unit tests with Vitest + Testing Library
- [x] Demo page showing both components
- [x] Deployed Storybook Preview (Vercel/Chromatic)
- [x] GitHub Repository with full source code

---

## 📖 How to Use the Components

#### Example: InputField
<InputField
  label="Full Name"
  placeholder="Enter your full name"
  helperText="This will be displayed on your profile"
  errorMessage=""
  variant="outlined"
  size="md"
  value=""
  onChange={(e) => console.log(e.target.value)}
/>


---

#### Example: DataTable
<DataTable 
  columns={[
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
  ]}
  data={[
    { id: "1", name: "John Doe", email: "john@example.com" },
    { id: "2", name: "Jane Doe", email: "jane@example.com" },
  ]}
/>


