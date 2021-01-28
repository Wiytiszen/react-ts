import * as React from 'react'

type BebidasGridProps = {
  children: React.ReactNode
}

export const BebidasGrid = ({children}:BebidasGridProps) => {
  
  return (
    <div>
      {children}
    </div>
  )
}