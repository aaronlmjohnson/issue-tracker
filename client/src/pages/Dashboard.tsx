import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle} from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../hooks/useAuthContext';
import ActivityFeed from '../components/ActivityFeed';

const Dashboard = ()=>{
    const arrowDown = <FontAwesomeIcon icon={faAngleDown} />
    const {user, loading} = useAuthContext();

    return (
       <div className="flex flex-col dashboard p-7 h-fit gap-y-12 overflow-y-auto w-full">
            <ActivityFeed />
        </div>
    );
}

export default Dashboard;

