interface IPageTemplateProps {
    title: string
    content: JSX.Element
}

const PageTemplate = (props:IPageTemplateProps)=>{
    const {title , content} = props;

    return (
        <div className="flex flex-col dashboard p-7 h-fit gap-y-12 overflow-y-auto w-full">
            <h1 className="font-primary text-5xl font-extrabold">Recent Activity</h1>

        </div>
    );
}

export default PageTemplate;

