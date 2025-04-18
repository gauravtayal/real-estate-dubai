import React from "react";

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = () => {
  const route = [
    // dashboard
    {
      id: 1,
      text: "Board",
      path: "/dashboard",
    },
    {
      id: 2,
      text: "insights",
      path: "/dashboard/insights",
    },
    {
      id: 3,
      text: "insights",
      path: "/dashboard/properties",
    },
    {
      id: 4,
      text: "create listing",
      path: "/dashboard/create-listing",
    },
    {
      id: 5,
      text: "Favorites",
      path: "/dashboard/favorites",
    },
    {
      id: 6,
      text: "Saved Searches",
      path: "/dashboard/saved-searches",
    },
    {
      id: 7,
      text: "invoices",
      path: "/dashboard/invoices",
    },
    {
      id: 8,
      text: "My Profile",
      path: "/dashboard/my-profile",
    },
  ];
  return <div>Dashboard</div>;
};
export default Dashboard;
