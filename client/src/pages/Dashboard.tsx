import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle} from '@fortawesome/free-solid-svg-icons';

const Dashboard = ()=>{
    const arrowDown = <FontAwesomeIcon icon={faAngleDown} />
    const dot = <FontAwesomeIcon icon={faCircle} size={"2xs"}/>

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
        return(
            <div className=" w-full h-full">
                <Activity 
                    description={"Project titled Issue Tracker created by John Doe"}
                    timestamp={"3:02PM"}
                />
            </div>
        );
    }

    const Activity= (props:any)=>{
        const {description, timestamp} = props;
        return(
            <div className="flex items-center gap-2.5">
                {dot}
                <p className="w-full text-xl">{description}</p>
                <p>{timestamp}</p>
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

