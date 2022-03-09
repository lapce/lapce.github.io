import Image from 'next/image'
import type { FunctionComponent } from 'react'

type DownloadProps = {
  img: {
    src: string
    alt: string
  }
  files: {
    name: string
    label: string
    href: string
  }[]
}

const Download: FunctionComponent<DownloadProps> = ({ img, files }) => {
  return (
    <div className="w-full md:w-1/3 px-8">
      <div className="flex justify-center my-10">
        <Image height={64} width={64} src={img.src} alt={img.alt} priority />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {files.map(({ name, label, href }, index) => <a key={index} href={href} className="flex justify-center items-center rounded bg-blue-500 hover:bg-blue-700 hover:shadow text-white px-6 py-2">
          {name}
          <span className="ml-4 p-1 bg-white rounded text-blue-500 font-medium">{label}</span>
        </a>)}
      </div>
    </div>
  )
}

const Downloads: FunctionComponent<{ downloads: DownloadProps[]; latest?: string }> = ({ downloads, latest }) => {
  return (
    <section id="downloads" className="bg-coolGray-50 py-16 space-y-8 text-center">
      {latest && <span
        className="inline-block py-px px-2 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm"
      >
        Latest: {latest}
      </span>}
      <h2 className="text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
        Latest downloads
      </h2>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap text-sm">
          {downloads.map((download, index) => <Download key={index} {...download } />)}
        </div>
      </div>
    </section>
  )
}

export default Downloads
