"use client"
import { useState, useEffect } from 'react'

export default  function Page() {
    const [isMobile, setIsMobile] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    useEffect(() => {
setIsMobile(window.matchMedia("(max-width: 600px)").matches);
setIsChecked(true)
    }, [])

  return (
    <main className="h-full ">
       { isChecked && <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeUCCa_QHjT1IE4VQfH5aQDgfQfRSWDVoZVRcz15Y2jX0zi-g/viewform?embedded=true" width={isMobile ? "380" :"640"} height="1200">Loading…</iframe>
}
    </main>
  );
}