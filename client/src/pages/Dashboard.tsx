import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle} from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../hooks/useAuthContext';
import ActivityFeed from '../components/ActivityFeed';

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

    return (
       loading  ? <>Loading</> : <div className="flex flex-col dashboard p-7 h-fit gap-y-12 overflow-y-auto w-full">
            <DashboardHeader />
            <ActivityFeed />
        </div>
    );
}

export default Dashboard;

