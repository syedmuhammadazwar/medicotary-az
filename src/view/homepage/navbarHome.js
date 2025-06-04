import { MyButton } from "@/components/ui/myButtons"
import Image from "next/image"

export default function NavbarHome() {
  return (
    <div className="absolute top-0 left-0 pt-10 w-full bg-white px-10 mx-auto md:px-16">
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

        <div className="flex items-center gap-6">
          <MyButton
            name="Login"
            className="text-[#5028C6] bg-transparent font-bold text-lg px-18 py-4 hover:text-[#5E48E8]"
          />
          <MyButton
            name="Sign Up"
            className="text-white bg-[#5E48E8] border border-[#5E48E8] font-bold text-lg px-18 py-4 hover:bg-[#5028C6]"
          />
        </div>
      </div>
    </div>
  )
}
