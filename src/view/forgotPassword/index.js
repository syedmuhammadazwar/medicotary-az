import { MyButton } from "@/components/ui/myButtons"
import Image from "next/image"

export default function ForgotPassword() {
  return (
    <>
      <div
        className="pt-12 px-12 flex items-center justify-end tracking-[-0.5px] gap-6"
        style={{
          background: "linear-gradient(to right, #fff 52%, #EBE8FC 48%)",
        }}
      >
        <Image
          src="/icon.png"
          alt="main icon"
          width={60}
          height={60}
          className="object-cover w-[56px] h-[50px]"
        />

        <h1 className="font-bold text-4xl">Medicotary</h1>
      </div>

      <div
        className="pt-12 px-12 min-h-screen flex flex-col justify-center"
        style={{
          background: "linear-gradient(to right, #fff 52%, #EBE8FC 48%)",
        }}
      >
        <div className="flex items-center justify-center gap-20">
          {/* ForgotPassword */}
          <div className="mb-10 max-w-[592px]">
            <h1 className="font-medium text-[64px]">Forgot your Password?</h1>

            <p className="font-bold text-[#8C8CA1] text-2xl tracking-[0.75px] mb-10">
              Don’t worry, we are here to help you out. <br /> Enter your Email
              address below and we will mail you the instructions to reset your
              password.
            </p>

            <div className="max-w-[480px]">
              <div className="mb-12">
                <label className="font-medium text-base" htmlFor="email">
                  E-mail
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="jhon.doe@gmail.com"
                  className="w-full p-4 border border-[#D6D8E7] rounded-md placeholder-[#D6D8E7] focus:outline-none"
                />
              </div>

              <div className="mt-4 text-nowrap flex items-center justify-between">
                <MyButton
                  name="Send Email"
                  className="text-white bg-[#5E48E8] border border-[#5E48E8] font-bold text-lg px-16 py-3 hover:bg-[#5028C6]"
                />

                <MyButton
                  name="Cancel"
                  className="text-[#5028C6] font-bold text-lg px-20 py-3 border border-[#5028C6] hover:bg-[#5028C6]"
                />
              </div>
            </div>
          </div>

          {/* Girl Section */}
          <div className="pt-16">
            <Image
              src="/Signup.png"
              alt="main icon"
              width={532}
              height={367}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  )
}
