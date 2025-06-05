"use client"

// import { usePathname } from "next/navigation"
import { useState } from "react"
import NavbarDashboard from "./navbardash"
import SidebarDashboard from "./sidebardash"

export default function RootLayout({ children }) {
  // const pathname = usePathname()
  // const isDashboard = pathname.startsWith("/dashboard")

  const [isAuth, setIsAuth] = useState(true)

  return (
    <html lang="en">
      <body>
        {/* Dashboard layout */}
        {isAuth && (
          <div className="flex flex-col min-h-screen">
            <NavbarDashboard className="" />
            <div className="flex flex-1">
              <SidebarDashboard />
              <div className="flex-1">{children}</div>
            </div>
          </div>
        )}

        {/* Public layout */}
        {!isAuth && <>{children}</>}
      </body>
    </html>
  )
}
