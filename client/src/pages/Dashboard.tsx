import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle} from '@fortawesome/free-solid-svg-icons';
import Action from '../components/Action';
import { useAuthContext } from '../hooks/useAuthContext';

const Dashboard = ()=>{
    const arrowDown = <FontAwesomeIcon icon={faAngleDown} />
    const {user, loading} = useAuthContext();

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
        console.log(user.user.actions);
        const projectTitle = "Issue Tracker";
        const author = "John Doe";
        const color = "text-pastel-0"
        const description = [
                                "Project titled ", 
                                <strong className={color}>{projectTitle}</strong> ,
                                " created by ", 
                                <strong className={color}>{author}</strong>,
                            ]; //this value will be coming from a virtual from the backend. Think of how to assign colors
        return(
            <div className="flex flex-col gap-10 w-full h-fit">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((val)=> 
                <Action 
                    color={color}
                    body={user.user.actions.loggedIn.body}
                    strong={user.user.actions.loggedIn.strong}
                    timestamp={"3:02PM"}
                />)
                }
            </div>
        );
    }

    return (
       !loading && <div className="flex flex-col dashboard p-7 h-fit gap-y-12 overflow-y-auto">
            <DashboardHeader />
            <ActivityContainer />
        </div>
    );
}

export default Dashboard;

