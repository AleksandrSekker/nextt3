import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { incrementByAmount } from '../../store/counter/counterSlice'

const ReduxExample = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p>{count}</p>
      <button onClick={() => dispatch(incrementByAmount(3))}>button</button>
    </div>)
}

export default ReduxExample
