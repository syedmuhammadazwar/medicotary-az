"use client"

import DashBoard from "@/view/dashboard"
import HomePage from "@/view/homepage"
import { useState } from "react"
import Navbar from "./navbar"
import Sidebar from "./sidebar"

export default function Layout({ children }) {
  const [login, setLogin] = useState(true)

  return (
    <div>
      {login ? (
        <HomePage>{children}</HomePage>
      ) : (
        <>
          <Navbar />

          <div className="flex">
            <Sidebar />
            <DashBoard>{children}</DashBoard>
          </div>
        </>
      )}
    </div>
  )
}
