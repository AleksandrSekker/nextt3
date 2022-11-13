import React from 'react'

const FlipCardProducts = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <section>
      <div className="w-full h-full bg-transparent cursor-pointer group perspective">
        <div
          className={'relative grid grid-rows grid-cols preserve-3d  w-full h-full duration-1000 hover:my-rotate-y-180'}
        >
          <div
            className={'backface-hidden w-full h-full my-rotate-y-0 text-center'}
          >
            {children}
          </div>
          <div
            className={
              'my-rotate-y-180 backface-hidden w-full h-full absolute'
            }
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlipCardProducts
