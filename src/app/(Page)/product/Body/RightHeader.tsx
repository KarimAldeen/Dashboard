'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Input } from 'reactstrap'


const RightHeader = () => {
  const route = useRouter() 

  
  return (
  <div className='RightHeader'>
    <div className="search-filter">
      <Input
        type="number"
        // value={value}
        placeholder={"placeholder"}
        onChange={(e:any) => route.push(`/product?postId=${e.target.value}`)}

      />
    </div>
  </div>
  )
}

export default RightHeader