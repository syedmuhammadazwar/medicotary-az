const LightPrimary = ({ name = "", className = "" }) => {
  return (
    <span
      className={`${className} text-base px-15 py-4 bg-[#5E48E8] rounded-lg cursor-pointer`}
    >
      {name}
    </span>
  )
}

const Primary = ({ name = "", className = "" }) => {
  return (
    <div
      className={`${className} text-base px-15 py-4 bg-[#5028C6] rounded-lg cursor-pointer`}
    >
      {name}
    </div>
  )
}

const DisabledPrimary = ({ name = "", className = "" }) => {
  return (
    <div
      className={`${className} text-base px-15 py-4 bg-[#5E48E880] rounded-lg cursor-not-allowed`}
    >
      {name}
    </div>
  )
}

export { LightPrimary, Primary, DisabledPrimary }
