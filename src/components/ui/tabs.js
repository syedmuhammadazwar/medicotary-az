const ActiveTab = () => {
  return (
    <div class="flex flex-col items-center">
      <h1 class="text-base">Tab Active</h1>
      <div class="w-full h-1 bg-[#5E48E8] mt-1"></div>
    </div>
  )
}

const InActiveTab = () => {
  return <span class="text-base text-[#B5B5B5]">Tab Active</span>
}

export { ActiveTab, InActiveTab }
