import type { FunctionComponent, ReactElement } from 'react'

type Props = {
  features: {
    icon: ReactElement
    heading: string
    p: string
  }[]
}

const Features: FunctionComponent<Props> = ({ features }) => {
  return (
    <section
      className="py-24 md:pb-32 bg-coolGray-50"
      style={{backgroundImage: "url('/img/pattern-light-big.svg')", backgroundPosition: "center"}}
    >
      <div className="container px-4 mx-auto">
        <div className="md:max-w-4xl mb-12 mx-auto text-center">
          <span
            className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm"
          >
            Features
          </span>
          <h2 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
            A modern open source code editor in Rust
          </h2>
          <p className="text-lg md:text-xl text-coolGray-500 font-medium">
            Native GUI and Rust powered performance, we as developers know what you need for an essential tool like a code editor. Write code with joy in Lapce.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {features.map(({ icon, heading, p }, index) => <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
              <div
                className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg"
              >
                {icon}
              </div>
              <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">{heading}</h3>
              <p className="text-coolGray-500 font-medium">{p}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>
  )
}

export default Features
