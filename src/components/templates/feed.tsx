import Image from "next/future/image"
import { Post } from "../organisms/post"

export const Feed = () => {
  return (
    <div className="space-y-6 mt-6">
      {[1,2,3,4,5,6,7,8].map((id) => (
        <Post key={id} />
      ))}
    </div>
  )
}