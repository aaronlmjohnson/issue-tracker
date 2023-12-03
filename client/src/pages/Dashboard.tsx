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
        const colors = ["text-pastel-0", "text-pastel-1", "text-pastel-2", "text-pastel-3", "text-pastel-4", "text-pastel-5"]

        return(
            <div className="flex flex-col gap-10 w-full h-fit">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((val)=> 
                <Action 
                    color={colors[Math.floor(Math.random() * 6)]}
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

