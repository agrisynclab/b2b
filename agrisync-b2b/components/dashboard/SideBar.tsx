"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Inbox,
  FileText,
  GitBranch,
  Bell,
  Users,
  BookOpen,
  LayoutGrid,
  PieChart,
  Settings,
  ChevronDown,
} from "lucide-react";

// ─────────────────────────────────────────────
// NAV ITEMS — to add a new page:
//   1. Add an entry here
//   2. Create the folder + page.tsx in /app/dashboard/
//   That's it. The sidebar updates automatically.
// ─────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Inbox",     icon: Inbox,      href: "/dashboard/inbox"     },
  { label: "Content",   icon: FileText,   href: "/dashboard"           },
  { label: "Journeys",  icon: GitBranch,  href: "/dashboard/journeys"  },
  { label: "Reminders", icon: Bell,       href: "/dashboard/reminders" },
  { label: "People",    icon: Users,      href: "/dashboard/people"    },
  { label: "Playbooks", icon: BookOpen,   href: "/dashboard/playbooks" },
  { label: "Apps",      icon: LayoutGrid, href: "/dashboard/apps"      },
  { label: "Insights",  icon: PieChart,   href: "/dashboard/insights"  },
  { label: "Settings",  icon: Settings,   href: "/dashboard/settings"  },
];

export function Sidebar() {
  // ─────────────────────────────────────────────
  // usePathname() returns the current URL path.
  // e.g. if you're on /dashboard/insights it returns
  // "/dashboard/insights"
  // We use this to know which nav item to highlight.
  // ─────────────────────────────────────────────
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-56 flex-shrink-0 flex-col border-r border-gray-100 bg-white">

      {/* ── ACCOUNT HEADER ── */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-4">
        {/* Orange avatar circle */}
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
          a
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-gray-900">
            angazacenter_9049
          </p>
          <p className="text-[11px] text-gray-400">Virtual number</p>
        </div>

        <ChevronDown className="h-4 w-4 flex-shrink-0 text-gray-400" />
      </div>

      {/* ── NAVIGATION ── */}
      <nav className="flex-1 overflow-y-auto px-2 py-3">
        <ul className="space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;

            // ─────────────────────────────────────────────
            // ACTIVE STATE LOGIC:
            // We compare the current URL (pathname) to each
            // nav item's href to decide which one to highlight.
            //
            // Special case for Content (/dashboard) — we only
            // highlight it when we're EXACTLY on /dashboard,
            // not on /dashboard/anything-else.
            // ─────────────────────────────────────────────
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                {/*
                  Link from next/link — this is what makes
                  navigation work without a full page reload.
                  It's like <a> but smarter — it prefetches
                  the next page so navigation feels instant.
                */}
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 rounded-lg px-3 py-2.5
                    text-[14px] font-medium transition-colors duration-150
                    ${isActive
                      ? "bg-violet-100 text-violet-700"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                    }
                  `}
                >
                  <Icon
                    className={`h-[18px] w-[18px] flex-shrink-0 stroke-[1.5] ${
                      isActive ? "text-violet-600" : "text-gray-400"
                    }`}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}