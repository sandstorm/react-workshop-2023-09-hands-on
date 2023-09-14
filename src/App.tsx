import { Outlet } from 'react-router-dom'
import './App.css'
import AppTitle from './components/AppTitle'

function App() {
    return (
        <>
            <header>
                <AppTitle
                    title="Workshop 2023"
                    subTitle="React + Typescript ❤️"
                />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default App
