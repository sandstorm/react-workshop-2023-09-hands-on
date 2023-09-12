import './App.css'
import AppTitle from './components/AppTitle'
import StringList from './components/StringList'

function App() {
  return (
    <>
      {/* This is a comment */}
      <AppTitle title='Workshop 2023' subTitle='React + Typescript ❤️' />
      <StringList listOfStrings={['eins', 'zwei', 'drei']} />
    </>
  )
}

export default App
