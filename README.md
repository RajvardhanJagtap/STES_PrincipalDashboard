# Principal Dashboard - STES

A professional, scalable principal dashboard built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
│
├── app/
│   ├── layout.tsx        → Root layout with metadata
│   ├── page.tsx          → Main landing/dashboard page
│   ├── academic/          → Academic affairs
│   ├── grade-submissions/ → Grade submissions
│   ├── summary-sheets/    → Summary sheets
│   ├── curriculum/        → Curriculum
│   ├── service-requests/  → Service requests
│   └── reports/           → Reports
│
├── components/
│   ├── ui/               → Reusable UI components
│   │   ├── WelcomeSection.tsx
│   │   ├── StatCard.tsx
│   │   ├── NewRegisteredStudents.tsx
│   │   ├── FinancialStatus.tsx
│   │   ├── RecentGradeSubmissions.tsx
│   │   └── CollegePerformanceBySchools.tsx
│   ├── common/           → Shared layout components
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   └── providers/         → App-wide providers
│       └── AcademicProviderWrapper.tsx
│
├── layouts/
│   └── MainLayout.tsx    → Main layout wrapper with Header
│
├── assets/
│   ├── images/           → Image assets (to be added)
│   └── icons/            → Icon/SVG assets (to be added)
│
├── contexts/
│   └── AcademicContext.tsx

├── data/
│   ├── principalUser.ts
│   └── principalDashboard.mock.ts
│
├── styles/
│   └── globals.css       → Global Tailwind styles
│
├── types/
│   └── index.ts          → TypeScript interfaces and types
│
└── utils/
    └── helpers.ts
```

## 🎨 Features Implemented

### Header Component ✅

- **Logo Section**: Dashboard branding
- **Notifications**: Bell icon with badge counter
- **Academic Context**: Academic year + semester selectors
- **User Profile**: Name and avatar with initials

### UI Components ✅

- **Avatar**: Customizable size, shows initials or image
- **Dashboard cards & tables**: KPI cards and table-style summaries

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## 🎯 Design Principles

- ✨ Clean, professional UI matching Figma designs
- 🎨 Consistent visual hierarchy and spacing
- 🖱️ Smooth hover effects and transitions
- 📱 Responsive for laptop and desktop screens
- ♿ Accessible and user-friendly interactions

## 📝 Next Steps

Suggested additions for the principal dashboard:

- Expand module pages (Academic Affairs, Grade Submissions, Summary Sheets, Curriculum, Service Requests, Reports)
- Integrations/APIs for real institutional data (replace mocks)
- Authentication and role-based access

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

Private project for STES Principal Dashboard.
