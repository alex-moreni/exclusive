"use client"

import { useEffect, useState } from "react"

const images = [
  "/banner-home-1.png",
  "/banner-home-2.png",
  "/banner-home-3.png",
]

const SlideImage = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-image")
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btns.forEach((btn) => {
          btn.classList.remove("bg-red-500")
          btn.classList.add("bg-gray-500")
        })
        btn.classList.remove("bg-gray-500")
        btn.classList.add("bg-red-500")

        btns.forEach((btn, index) => {
          if (btn.classList.contains("bg-red-500")) {
            setIndex(index)
          }
        })
      })
    })
  }, [])

  return (
    <div className="relative flex items-center justify-center">
      <img
        src={images[index]}
        alt=""
        className="h-[200px] object-contain sm:h-[300px] md:h-[350px] lg:h-[400px]"
      />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-2">
          <button className="btn-image rounded-full bg-red-500 p-2"></button>
          <button className="btn-image rounded-full bg-gray-500 p-2"></button>
          <button className="btn-image rounded-full bg-gray-500 p-2"></button>
        </div>
      </div>
    </div>
  )
}

export default SlideImage
