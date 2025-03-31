"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, CreditCard, FileText, Home, LifeBuoy, PieChart, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Investments",
    icon: PieChart,
    href: "/dashboard/investments",
  },
  {
    title: "Insurance",
    icon: Users,
    href: "/dashboard/insurance",
  },
  {
    title: "Transactions",
    icon: CreditCard,
    href: "/dashboard/transactions",
  },
  {
    title: "Reports",
    icon: BarChart3,
    href: "/dashboard/reports",
  },
  {
    title: "Documents",
    icon: FileText,
    href: "/dashboard/documents",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
  {
    title: "Help & Support",
    icon: LifeBuoy,
    href: "/dashboard/support",
  },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden border-r bg-muted/40 md:block md:w-64 lg:w-72">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-lg font-bold">Infinity Gains</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-64px)]">
        <div className="px-3 py-4">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                size="sm"
                className={cn("w-full justify-start", pathname === item.href && "bg-muted")}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}

