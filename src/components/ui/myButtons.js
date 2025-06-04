import { FaCheck } from "react-icons/fa6"

const MyButton = ({
  name = "",
  className = "",
  leftIcon = null,
  rightIcon = null,
}) => {
  return (
    <button className={`${className} rounded-lg cursor-pointer`}>
      {leftIcon && <span>{leftIcon}</span>}

      <span>{name}</span>

      {rightIcon && <span>{rightIcon}</span>}
    </button>
  )
}

export { MyButton }

// const LightPrimaryCheck = ({ name = "", className = "" }) => {
//   return (
//     <span
//       className={`${className} text-base px-15 py-4 bg-[#5E48E8] rounded-lg cursor-pointer flex items-center gap-2`}
//     >
//       <span>
//         <FaCheck />
//       </span>

//       <span>{name}</span>
//     </span>
//   )
// }

// const Primary = ({ name = "", className = "" }) => {
//   return (
//     <div
//       className={`${className} text-base px-15 py-4 bg-[#5028C6] rounded-lg cursor-pointer`}
//     >
//       {name}
//     </div>
//   )
// }

// const PrimaryCheck = ({ name = "", className = "" }) => {
//   return (
//     <span
//       className={`${className} text-base px-15 py-4 bg-[#5028C6] rounded-lg cursor-pointer flex items-center gap-2`}
//     >
//       <span>
//         <FaCheck />
//       </span>

//       <span>{name}</span>
//     </span>
//   )
// }

// const DisabledPrimary = ({ name = "", className = "" }) => {
//   return (
//     <div
//       className={`${className} text-base px-15 py-4 bg-[#AEA3F3] rounded-lg cursor-not-allowed`}
//     >
//       {name}
//     </div>
//   )
// }

// const DisabledPrimaryCheck = ({ name = "", className = "" }) => {
//   return (
//     <span
//       className={`${className} text-base px-15 py-4 bg-[#AEA3F3] rounded-lg cursor-pointer flex items-center gap-2`}
//     >
//       <span>
//         <FaCheck />
//       </span>

//       <span>{name}</span>
//     </span>
//   )
// }

// const LightAlternate = ({ name = "", className = "" }) => {
//   return (
//     <span
//       className={`${className} text-[#5E48E8] text-base px-15 py-4 border border-[#5E48E8] rounded-lg cursor-pointer`}
//     >
//       {name}
//     </span>
//   )
// }

// const LightAlternateCheck = ({ name = "", className = "" }) => {
//   return (
//     <span
//       className={`${className} text-[#5E48E8] text-base px-15 py-4 border border-[#5E48E8] rounded-lg cursor-pointer flex items-center gap-2`}
//     >
//       <span>
//         <FaCheck />
//       </span>

//       <span>{name}</span>
//     </span>
//   )
// }

// const Alternate = ({ name = "", className = "" }) => {
//   return (
//     <div
//       className={`${className} text-[#5028C6] text-base px-15 py-4 border border-[#5028C6] rounded-lg cursor-pointer`}
//     >
//       {name}
//     </div>
//   )
// }

// const AlternateCheck = ({ name = "", className = "" }) => {
//   return (
//     <span
//       className={`${className} text-[#5028C6] text-base px-15 py-4 border border-[#5028C6] rounded-lg cursor-pointer flex items-center gap-2`}
//     >
//       <span>
//         <FaCheck />
//       </span>

//       <span>{name}</span>
//     </span>
//   )
// }

// const DisabledAlternate = ({ name = "", className = "" }) => {
//   return (
//     <div
//       className={`${className} text-[#AEA3F3] text-base px-15 py-4 border border-[#AEA3F3] rounded-lg cursor-not-allowed`}
//     >
//       {name}
//     </div>
//   )
// }

// const DisabledAlternateCheck = ({ name = "", className = "" }) => {
//   return (
//     <span
//       className={`${className} text-[#AEA3F3] text-base px-15 py-4 border border-[#AEA3F3] rounded-lg cursor-pointer flex items-center gap-2`}
//     >
//       <span>
//         <FaCheck />
//       </span>

//       <span>{name}</span>
//     </span>
//   )
// }
