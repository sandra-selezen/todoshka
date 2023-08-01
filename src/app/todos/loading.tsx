"use client";

import React from 'react'
import { Oval } from 'react-loader-spinner'

const loading = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#00204a"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#005792"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  )
}

export default loading