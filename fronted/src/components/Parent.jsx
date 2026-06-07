// import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <Child name="prejith" age={18}
      marks={[80,57,67,32,65]}
      person={{name:"jithu", dept:["AIDS"]}}
      />
    </div>
  )
}
export default Parent