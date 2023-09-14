import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TodoList from './components/TodoList/TodoList.tsx'
import Counter from './components/Counter.tsx'

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                index: true,
                element: <TodoList />,
            },
            {
                path: 'counter',
                element: <Counter initialCount={23} />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
