import './App.css'
import AppTitle from './components/AppTitle'
import ComponentWithChildren from './components/ComponentWithChildren'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import StringList from './components/StringList'
import TodoList from './components/TodoList/TodoList'

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
      <Counter initialCount={23} />
      <CounterClass initialCount={0} step={5} />

      <TodoList />
    </>
  )
}

export default App
