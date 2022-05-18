import { useState } from 'react'

interface FunctionalComponentProps {
  title: string
  subTitle?: string
}

const FunctionalComponent = ({ title, subTitle }: FunctionalComponentProps) => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState<null | string>(null)

  return (
    <div>
      <button onClick={() => setName('Stefano')}>CLICK ME</button>
      <h2>{title}</h2>
      <h4>{subTitle?.toLowerCase()}</h4>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}

export default FunctionalComponent
