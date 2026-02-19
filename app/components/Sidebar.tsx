"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Analytics", href: "/analytics" },
  { label: "Notifications", href: "/notifications" },
  { label: "User Management", href: "/user-management" },
  { label: "Report Management", href: "/report-management" },
  { label: "Worker Risk View", href: "/worker-risk-view" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy & Policy", href: "/privacy" },
  { label: "Profile", href: "/profile" },
  { label: "Logout", href: "/logout" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">🛡️</div>
        <div>
          <div className="sidebar-user">Steve Hard</div>
          <div className="sidebar-role">Admin</div>
        </div>
      </div>
      <div className="sidebar-section">Main</div>
      <nav className="sidebar-nav">
        {routes.slice(0, 3).map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={`sidebar-link ${isActive ? "active" : ""}`}
            >
              <span className="sidebar-dot" />
              {route.label}
            </Link>
          );
        })}
      </nav>
      <div className="sidebar-section">Core</div>
      <nav className="sidebar-nav">
        {routes.slice(3, 7).map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={`sidebar-link ${isActive ? "active" : ""}`}
            >
              <span className="sidebar-dot" />
              {route.label}
            </Link>
          );
        })}
      </nav>
      <div className="sidebar-section">Personal</div>
      <nav className="sidebar-nav">
        {routes.slice(7).map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={`sidebar-link ${isActive ? "active" : ""}`}
            >
              <span className="sidebar-dot" />
              {route.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
