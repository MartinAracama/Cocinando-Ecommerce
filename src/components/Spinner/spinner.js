import React from 'react'
import { Watch } from 'react-loader-spinner'

export const Spinner = () => {
  return (
    <div>
        <Watch
            height="90"
            width="90"
            radius="45"
            color="#921708"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>
  )
}



