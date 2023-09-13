import { useEffect, useState } from 'react'
import './App.css'
import AppTitle from './components/AppTitle'
import ComponentWithChildren from './components/ComponentWithChildren'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import StringList from './components/StringList'

function App() {
  const [step, setStep] = useState<number | undefined>(undefined)

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setStep(5)
    }, 2000)

    return () => clearTimeout(timeOutId)
  }, [])

  return (
    <>
      {/* This is a comment */}
      <AppTitle title='Workshop 2023' subTitle='React + Typescript ❤️' />
      <StringList listOfStrings={['eins', 'zwei', 'drei']} />
      <ComponentWithChildren>
        <p>I'm a child</p>
      </ComponentWithChildren>
      <ComponentWithChildren children={'I am a child too'} />
      <Counter initialCount={23} step={step} />
      <CounterClass initialCount={1} step={step} />
    </>
  )
}

export default App
