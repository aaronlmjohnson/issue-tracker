import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

const Dashboard = ()=>{
    const arrowDown = <FontAwesomeIcon icon={faAngleDown} />

    return (
        <div className="dashboard ">
            <div>
                <h1>Recent Activity</h1>
                <button>
                    view all
                    {arrowDown}
                </button>
            </div>
            
        </div>
    );
}

export default Dashboard;

