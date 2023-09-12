import { ReactNode } from "react"

type ComponentWithChildrenProps = {
    children: ReactNode
}

const ComponentWithChildren = (props: ComponentWithChildrenProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default ComponentWithChildren
