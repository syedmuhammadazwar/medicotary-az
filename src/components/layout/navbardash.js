import Image from "next/image"
import { IoIosNotificationsOutline } from "react-icons/io"

export default function NavbarDashboard({ className }) {
  return (
    <div
      className={`${className} w-full bg-white px-6 py-2 mx-auto border-b-2 border-[rgba(214,216,231,1)]`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Image
            src="/icon.png"
            alt="main icon"
            width={60}
            height={60}
            className="object-cover w-[56px] h-[50px]"
          />

          <h1 className="font-bold tracking-[-0.5px] text-4xl">Medicotary</h1>
        </div>

        <div className="flex items-center gap-4">
          <h4 className="font-bold text-2xl tracking-[0.75px] mr-2">
            Huma Medical Store
          </h4>

          <span>
            <IoIosNotificationsOutline
              size={24}
              className="text-[rgba(94,72,232,1)]"
            />
          </span>

          <div className="">
            <Image
              src="/avatar.png"
              alt="avatar"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
