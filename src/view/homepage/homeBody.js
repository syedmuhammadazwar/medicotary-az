import { PiRocketLaunch } from "react-icons/pi"
import { MyButton } from "@/components/ui/myButtons"
import Image from "next/image"

export default function HomeBody() {
  return (
    <div
      className="py-70 bg-white px-10 mx-auto md:px-16"
      style={{
        backgroundImage: 'url("/u_heart-medical.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundColor: "white",
      }}
    >
      <div className="flex items-center justify-center">
        <div className="max-w-[740px]">
          <h1 className="font-bold text-[64px] leading-18 mb-9">
            Pharmacists can now focus on customers
          </h1>

          <p className="text-4xl mb-16">
            Empowering pharmacists with the new age technology which solves all
            thier inventory related issues
          </p>

          <span className="">
            <MyButton
              name="Get started"
              rightIcon={<PiRocketLaunch size={24} />}
              className="flex items-center gap-2 text-white bg-[#5E48E8] justify-center px-18 py-4"
            />
          </span>
        </div>

        <span className="max-w-[600px] max-h-[500px]">
          <Image
            src="/doc.png"
            alt="main icon"
            width={1200}
            height={1000}
            className="object-cover aspect-[6/5] "
          />
        </span>
      </div>
    </div>
  )
}
