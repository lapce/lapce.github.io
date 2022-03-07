import Image from 'next/image'

import useDownload from 'hooks/useDownload'
import Nav from './Nav'

import type { FunctionComponent } from 'react'

import screenshot from 'public/img/screenshot.png'

const Hero: FunctionComponent = () => {
  const [downloadText, downloadLink] = useDownload()

  return (
    <section
      className="relative bg-coolGray-50 overflow-hidden"
      style={{backgroundImage: "linear-gradient(to right top, #4264af, #4f70ba, #5b7dc4, #688acf, #7597d9, #6ca0e0, #63a9e6, #5ab2eb, #2eb9e7, #00bfdd, #00c3cd, #10c6ba)"}}
    >
      <Nav />
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-2/5 px-4 mb-16 md:mb-0">
              <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-white text-center">Lightning-fast and Powerful Code Editor</h1>
              <p className="mb-8 text-md text-white font-medium text-center">Open source. Quick from launch to every keystroke, and batteries included.</p>
              <div className="flex flex-wrap justify-center w-full md:w-auto py-1 md:py-0 center">
                <a
                  className="py-5 px-7 w-72 text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm"
                  href={downloadLink}
                >
                  Download for {downloadText}
                </a>
              </div>
              <div className="flex flex-wrap justify-center w-full md:w-auto py-1 md:py-0 center">
                <a
                  id="download"
                  className="mt-3 w-60 text-sm leading-4 text-coolGray-900 font-medium text-center  hover:underline shadow-sm"
                  href="#downloads"
                >
                  Other platforms and formats
                </a>
              </div>
            </div>
            <div className="w-full md:w-3/5 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <Image
                  className="rounded-7xl"
                  height={526}
                  width={762}
                  src={screenshot}
                  alt="Lapce Screenshot"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
