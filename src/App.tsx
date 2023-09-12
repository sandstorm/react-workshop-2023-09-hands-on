import './App.css'
import AppTitle from './components/AppTitle'
import ComponentWithChildren from './components/ComponentWithChildren'
import Counter from './components/Counter'
import StringList from './components/StringList'

function App() {
  return (
    <>
      {/* This is a comment */}
      <AppTitle title='Workshop 2023' subTitle='React + Typescript ❤️' />
      <StringList listOfStrings={['eins', 'zwei', 'drei']} />
      <ComponentWithChildren>
        <p>I'm a child</p>
      </ComponentWithChildren>
      <ComponentWithChildren children={'I am a child too'} />
      <Counter initialCount={23} step={5} />
    </>
  )
}

export default App
