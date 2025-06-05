"use client"

import { useFormik } from "formik"
import * as yup from "yup"

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
      company: "",
      location: "",
      agreement: false,
    },
    onSubmit: (values) => {
      // Handle login logic here
      // console.log(values)
    },

    validationSchema: yup.object().shape({
      // username: yup.string().required().min(4).max(20),
      email: yup.string().required().email(),
      password: yup.string().required(),
      company: yup.string().required(),
      location: yup.string().required(),
      agreement: yup.bool().required(),
    }),
  })

  return (
    <>
      <div
        className="pt-12"
        style={{
          background: "linear-gradient(to left, #fff 52%, #EBE8FC 48%)",
        }}
      >
        <div className="container mx-auto px-5 flex items-center tracking-[-0.5px] gap-6 md:px-10">
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
        className="min-h-screen flex flex-col justify-start"
        style={{
          background: "linear-gradient(to left, #fff 52%, #EBE8FC 48%)",
        }}
      >
        <div className="flex items-center justify-center gap-60">
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
          <div className="mb-10 max-w-[480px] w-full">
            <h1 className="font-medium text-[64px] text-center mb-11">
              Welcome
            </h1>

            <div className="max-w-[480px]">
              <form onSubmit={formik.handleSubmit}>
                {/* Email */}
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

                {/* Password */}
                <div className="mb-6">
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

                {/* Company Name */}
                <div className="mb-6">
                  <label className="font-medium text-base" htmlFor="company">
                    Company Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Huma Medical Store"
                      className="w-full p-4 pr-12 border border-[#D6D8E7] rounded-md placeholder-[#D6D8E7] focus:outline-none"
                      onChange={formik.handleChange}
                      value={formik.values.company}
                    />
                  </div>
                </div>

                {/* Buisness location */}
                <div className="mb-6">
                  <label className="font-medium text-base" htmlFor="location">
                    Buisness location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="location"
                      name="business location"
                      placeholder="Delhi, NCR"
                      className="w-full p-4 pr-12 border border-[#D6D8E7] rounded-md placeholder-[#D6D8E7] focus:outline-none"
                      onChange={formik.handleChange}
                      value={formik.values.company}
                    />
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="mb-12 flex items-center">
                  <input
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    className="w-5 h-5 accent-[#5E48E8] mr-2"
                  />

                  <label htmlFor="agreement" className="text-base font-medium">
                    By signing up you agree to our&nbsp;
                    <a href="#" className="underline text-[#489be8]">
                      Privacy policy
                    </a>
                    &nbsp;and&nbsp;
                    <a href="#" className="underline text-[#489be8]">
                      T&amp;C
                    </a>
                  </label>
                </div>

                <div className="mt-4 text-nowrap flex flex-col items-center justify-between gap-4 mb-8">
                  <MyButton
                    name="Register"
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
                  Already a member?
                  <span className="text-[#489be8]">Log in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
