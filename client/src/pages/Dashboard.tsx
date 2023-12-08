import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle} from '@fortawesome/free-solid-svg-icons';
import Action from '../components/Action';
import { useAuthContext } from '../hooks/useAuthContext';
import { useFetchData } from '../hooks/useFetchData';

const Dashboard = ()=>{
    const arrowDown = <FontAwesomeIcon icon={faAngleDown} />
    const {user, loading} = useAuthContext();
    const {data:activities, loading:activitiesLoading} = useFetchData("http://localhost:3001/activities");

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

    interface activity {
        body:String,
        createdAt: String,
        emphasisText: String[],
        updatedAt:String,
        id:String
    }

    const ActivityContainer = ()=>{
        const colors = ["text-pastel-0", "text-pastel-1", "text-pastel-2", "text-pastel-3", "text-pastel-4", "text-pastel-5"]
        return(
            <div className="flex flex-col gap-10 w-full h-fit">
                {activities.map((activity:activity)=> 
                <Action 
                    color={colors[Math.floor(Math.random() * 6)]}
                    body={activity.body}
                    strong={activity.emphasisText}
                    timestamp={activity.createdAt}
                />)
                }
            </div>
        );
    }

    return (
       !loading && !activitiesLoading && <div className="flex flex-col dashboard p-7 h-fit gap-y-12 overflow-y-auto">
            <DashboardHeader />
            <ActivityContainer />
        </div>
    );
}

export default Dashboard;

