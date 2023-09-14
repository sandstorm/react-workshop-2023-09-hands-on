import { NavLink } from 'react-router-dom'
import './AppTitle.css'

type PageTitleProps = {
    title: string
    subTitle: string
}

const PageTitle = (props: PageTitleProps) => (
    <>
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
        <nav>
            <li>
                <NavLink to="/">Todos</NavLink>
            </li>
            <li>
                <NavLink to="counter">Counter</NavLink>
            </li>
        </nav>
    </>
)

export default PageTitle
