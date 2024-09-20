'use client'
import { Carousel } from "flowbite-react";
export default function Slider() {
    return(
<div className="h-full ">
<Carousel slideInterval={6000} pauseOnHover>
  <img src="/images/Slider/slide1.jpg" alt="..." />
  <img src="/images/Slider/slide2.jpg" alt="..." />
  <img src="/images/Slider/slide3.jpg" alt="..." />
  <img src="/images/Slider/slide4.jpg" alt="..." />
  <img src="/images/Slider/slide5.jpg" alt="..." />
  <img src="/images/Slider/slide6.jpg" alt="..." />
  <img src="/images/Slider/slide7.jpg" alt="..." />
  <img src="/images/Slider/slide8.jpg" alt="..." />
</Carousel>
</div>
    )
}