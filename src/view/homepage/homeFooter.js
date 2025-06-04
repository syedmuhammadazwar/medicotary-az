import { PiRocketLaunch } from "react-icons/pi"

import { MyButton } from "@/components/ui/myButtons"

export default function HomeFooter() {
  return (
    <div className="flex flex-col items-center bg-[#0E0E2C] px-10 mx-auto md:px-20">
      <p className="font-normal text-base mt-15 text-gray-300 mb-5">
        Are you ready?
      </p>

      <p className="font-normal text-[32px] text-white mb-15">
        Let’s get started
      </p>

      <span className="mb-16">
        <MyButton
          name="Get started"
          rightIcon={<PiRocketLaunch size={24} />}
          className="flex items-center gap-2 text-white bg-[#5E48E8] justify-center px-18 py-4"
        />
      </span>

      <p className="text-gray-300 tracking-[-0.2px] mb-14">
        Copyright © 2020. medical. All rights reserved.
      </p>
    </div>
  )
}
