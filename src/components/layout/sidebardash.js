"use client"

import { FiPlus } from "react-icons/fi"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { MyButton } from "@/components/ui/myButtons"

import {
  Billing_Icon,
  Dashboard_Icon,
  Delivery_Icon,
  Products_Icon,
  Vendors_Icon,
} from "@/components/shared/icons"

export default function SidebarDashboard() {
  const pathname = usePathname()

  const icons = [
    {
      name: "Dashboard",
      icon: <Dashboard_Icon size={24} />,
      route: "/dashboard",
    },
    {
      name: "Products",
      icon: <Products_Icon size={24} />,
      route: "/products",
    },
    {
      name: "Billing",
      icon: <Billing_Icon size={24} />,
      route: "/billing",
    },
    {
      name: "Vendors",
      icon: <Vendors_Icon size={24} />,
      route: "/vendors",
    },
    {
      name: "Delivery",
      icon: <Delivery_Icon size={24} />,
      route: "/delivery",
    },
  ]

  return (
    <div className="border-r-2 border-[rgba(214,216,231,1)] w-[275px] px-6 flex flex-col justify-between">
      {/* Quick add */}
      <div className="flex flex-col items-center mt-11">
        <MyButton
          name="Quick add"
          className="font-medium text-base tracking-[2%] w-full py-4 bg-[#5E48E8] text-white"
          leftIcon={<FiPlus size={24} className="text-white" />}
        />

        <div className="w-full flex flex-col items-center mt-11 gap-6">
          {icons.map((item, i) => {
            const isActive = pathname === item.route
            const textColor = isActive ? "text-[#5E48E8]" : "text-[#8C8CA1]"
            const bgColor = isActive ? "bg-[#EBE8FC]" : "bg-transparent"

            return (
              <Link href={item.route} key={i} className="w-full">
                <MyButton
                  name={item.name}
                  className={`pl-2 font-medium text-lg tracking-[2%] w-full py-3 ${bgColor} ${textColor} flex items-center justify-start gap-8`}
                  leftIcon={<span className={textColor}>{item.icon}</span>}
                />
              </Link>
            )
          })}
        </div>
      </div>

      {/* Have some questions */}
      <div className="rounded-xl py-6 bg-[rgba(235,232,252,1)] flex flex-col items-center mb-14">
        <h4 className="font-bold text-2xl tracking-[0.75px] text-center mb-2.5">
          Have some questions?
        </h4>

        <MyButton
          name="look at the faqs"
          className="bg-[#5E48E8] text-white px-7 py-4"
        />
      </div>
    </div>
  )
}
