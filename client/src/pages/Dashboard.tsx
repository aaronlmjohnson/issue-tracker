import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle} from '@fortawesome/free-solid-svg-icons';

const Dashboard = ()=>{
    const arrowDown = <FontAwesomeIcon icon={faAngleDown} />

    const DashboardHeader = ()=>{
        return(
            <div className="flex justify-between">
                <h1 className="font-primary text-5xl font-extrabold">Recent Activity</h1>
                <button className="flex font-secondary items-center text-non-focus gap-2.5">
                    view all
                    {arrowDown}
                </button>
            </div>
        )
    }

    const ActivityContainer = ()=>{
        //<MyComponent text={["This is ", <strong>not</strong>,  "working."]} />
        const projectTitle = "Issue Tracker";
        const author = "John Doe";
        const color = "text-pastel-0"
        const description = [
                                "Project titled ", 
                                <strong className={color}>{projectTitle}</strong> ,
                                " created by ", 
                                <strong className={color}>{author}</strong>
                            ]; //this value will be coming from a virtual from the backend. Think of how to assign colors
        return(
            <div className=" w-full h-full">
                <Activity 
                    color={color}
                    description={description}
                    timestamp={"3:02PM"}
                />
            </div>
        );
    }

    const Activity= (props:any)=>{
        const {description, timestamp, color} = props;
        const dot = <FontAwesomeIcon icon={faCircle} size={"2xs"} className={color}/>

        return(
            <div className="flex items-center gap-2.5">
                {dot}
                <p className="w-full text-xl">{description}</p>
                <p className="text-non-focus text-xs">{timestamp}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col dashboard p-7 h-full gap-y-12">
            <DashboardHeader />
            <ActivityContainer />
        </div>
    );
}

export default Dashboard;

