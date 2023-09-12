type PageTitleProps = {
    title: string
    subTitle: string
}

const PageTitle = (props: PageTitleProps) => (
    <>
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
    </>
)

export default PageTitle
