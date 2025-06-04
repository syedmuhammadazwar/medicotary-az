"use client"

import { useFormik } from "formik"
import { FaGoogle } from "react-icons/fa"
import { IoEyeOffOutline } from "react-icons/io5"

import { MyButton } from "@/components/ui/myButtons"
import Image from "next/image"
import Link from "next/link"

export default function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // Handle login logic here
      // console.log(values)
    },
  })

  return (
    <>
      <div
        className="pt-12 px-12"
        style={{
          background: "linear-gradient(to left, #fff 52%, #EBE8FC 48%)",
        }}
      >
        <div className="container mx-auto px-5 flex items-center justify-end tracking-[-0.5px] gap-6 md:px-10">
          <Image
            src="/icon.png"
            alt="main icon"
            width={60}
            height={60}
            className="object-cover w-[56px] h-[50px]"
          />

          <h1 className="font-bold text-4xl">Medicotary</h1>
        </div>
      </div>

      <div
        className="pt-12 px-12 min-h-screen flex flex-col justify-center"
        style={{
          background: "linear-gradient(to left, #fff 52%, #EBE8FC 48%)",
        }}
      >
        <div className="flex items-center justify-center gap-40">
          {/* Girl Section */}
          <div className="">
            <Image
              src="/register.png"
              alt="main icon"
              width={453}
              height={426}
              className="object-cover"
            />
          </div>

          {/* ForgotPassword */}
          <div className="mb-10 max-w-[592px]">
            <h1 className="font-medium text-[64px] mb-11">Welcome</h1>

            <div className="max-w-[480px]">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-6">
                  <label className="font-medium text-base" htmlFor="email">
                    E-mail
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jhon.doe@gmail.com"
                    className="w-full p-4 bg-transparent border border-[#D6D8E7] rounded-md placeholder-[#D6D8E7] placeholder:bg-transparent"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>

                <div className="mb-2">
                  <label className="font-medium text-base" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      className="w-full p-4 pr-12 border border-[#D6D8E7] rounded-md placeholder-[#D6D8E7] focus:outline-none"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-[#8C8CA1]">
                      <IoEyeOffOutline size={24} />
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <Link href="#">forgot password ?</Link>
                </div>

                <div className="mt-4 text-nowrap flex flex-col items-center justify-between gap-4 mb-8">
                  <MyButton
                    name="Login"
                    className="text-white w-full bg-[#5E48E8] border border-[#5E48E8] font-bold text-lg px-16 py-3 hover:bg-[#5028C6]"
                    type="submit"
                  />

                  <MyButton
                    name="Continue with Google"
                    leftIcon={<FaGoogle className="text-[#8C8CA1]" size={24} />}
                    className="text-[#8C8CA1] w-full font-bold text-lg px-20 py-3 border border-[#8C8CA1] hover:bg-[#5028C6]"
                  />
                </div>
              </form>

              <div className="font-medium text-lg">
                <Link href="#">
                  New here? <span className="text-[#489be8]">Register</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
