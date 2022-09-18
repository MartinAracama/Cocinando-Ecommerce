import React from 'react'
import { Watch } from 'react-loader-spinner'

export const Spinner = () => {
  return (
    <div>
        <Watch
            height="60"
            width="60"
            radius="48"
            color="#921708"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>
  )
}



