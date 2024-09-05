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
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleButtonClick = (btnIndex: any) => {
    setIndex(btnIndex)
  }

  return (
    <div className="relative flex items-center justify-center">
      <img
        src={images[index]}
        alt=""
        className="h-[200px] object-contain sm:h-[300px] md:h-[350px] lg:h-[400px]"
      />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-2">
          {images.map((_, btnIndex) => (
            <button
              key={btnIndex}
              className={`btn-image rounded-full p-2 ${index === btnIndex ? "bg-red-500" : "bg-gray-500"}`}
              onClick={() => handleButtonClick(btnIndex)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlideImage
