import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdPayment,
} from "react-icons/md";
import SignUp from "views/auth/SignUp";
import ForgotPassword from "views/auth/ForgotPassword";
 import PaymentPage from "views/admin/payment/page/PaymentPage";
// import PaymentDetailPage from "views/admin/payment/page/PaymentDetailPage";
 import DynamicTimetable from "views/admin/Grades/DynamicTimetable";
 import PerformanceInsights from "views/admin/Dashboard/PerformanceInsights";
// import DashboardOverview from "views/admin/Overview/DashboardOverview";
 import MyCourses from "views/admin/MyCourses/MyCourses";
// import PaymentMethod from "views/admin/Payments/PaymentMethod";
 import AttendanceTable from "views/admin/Attendance/AttendanceTable";
 import AttendanceSummary from "views/admin/Attendance/page/AttendanceSummary";
 //import  CoursePage  from "views/admin/Courses/CoursePage";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
   {
     name: "Dashboard",
     layout: "/admin",
     path: "Dashboard",
     icon: <MdHome className="h-6 w-6" />,
     component: <PerformanceInsights />,
   },
   {
     name: "MyCourses",
     layout: "/admin",
     path: "MyCourses",
     icon: <MdHome className="h-6 w-6" />,
     component: <MyCourses />,
   },
  // {
    // name: "Courses",
     //layout: "/admin",
     //path: "Courses",
     //icon: <MdHome className="h-6 w-6" />,
     //component: <CoursePage />,
   //},

  // {
  //   name: "Overview",
  //   layout: "/admin",
  //   path: "Overview",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <DashboardOverview />,
  // },

  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignUp />,
  },

   {
     name: "payment",
     layout: "/admin",
     path: "payment",
     icon: <MdPayment className="h-6 w-6" />,
     component: <PaymentPage />,
     children: [
      {
        name: "Payment Details",
        path: "details",
        component: <PaymentDetailPage />,
      },
      {
        name: "Step 1",
        path: "step1",
        component: <PaymentStep1 />,
      },
      {
        name: "Step 2",
        path: "step2",
        component: <PaymentStep2 />,
      },
      {
        name: "Step 3",
        path: "step3",
        component: <PaymentStep3 />,
      },
      {
        name: "Step 4",
        path: "step4",
        component: <PaymentStep4 />,
      },
      {
        name: "Step 5",
        path: "step5",
        component: <PaymentStep5 />,
      },
    ]
   },
   {
     name: "Grades",
     layout: "/admin",
     path: "Grades",
     icon: <MdPayment className="h-6 w-6" />,
     component: <DynamicTimetable />,
  },
  // {
  //   name: "payment",
  //   layout: "/admin",
  //   path: "payment-detail /:id",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <PaymentDetailPage />,
  // },

  // {
  //   name: "payment",
  //   layout: "/admin",
  //   path: "payment-method",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <PaymentMethod />,
  // },

   {
     name: "Attendance",
     layout: "/admin",
     path: "Attendance",
     icon: <MdLock className="h-6 w-6" />,
     component: <AttendanceTable />,
   },

   {
     name: "Attendance",
     layout: "/admin",
     path: "Attendance",
     icon: <MdLock className="h-6 w-6" />,
     component: <AttendanceSummary />,
   },

  {
    name: "Forgot",
    layout: "/auth",
    path: "forgot-password",
    icon: <MdLock className="h-6 w-6" />,
    component: <ForgotPassword />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
];
export default routes;
