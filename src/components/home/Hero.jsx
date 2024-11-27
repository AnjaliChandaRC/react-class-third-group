import React, { useState } from 'react'
import Props from '../Props'
import { CARDS_DATA } from '../common/Helper'

const Hero = () => {

  const [value, setValue] = useState(0)


  return (
    <div>

      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Click Me</button>

      <Props text="Text" className="" />

      {CARDS_DATA.map((obj, index) => (
        <div key={index}>
          <h2>{obj.heading}</h2>
          <p>{obj.para}</p>
        </div>
        // {
        //   obj.content.map((val, i) => (
        //     <div>
        //       <p>{val.list}</p>
        //     </div>
        //   ))
        // }
      ))}

    </div>
  )
}

export default Hero