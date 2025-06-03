import { Button } from "@/components/ui/button"
import { FaCheck } from "react-icons/fa6"

export default function HomePage() {
  return (
    <div className="flex">
      {/* <Button name="Button" check={false} className="primary text-white" /> */}

      <Button leftIcon={<FaCheck />}>Primary</Button>
    </div>
  )
}
