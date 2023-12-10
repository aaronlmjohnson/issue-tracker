import { useFetchData } from "../hooks/useFetchData";
import Activity from "./Activity";

interface IActivity {
    body:String,
    createdAt: String,
    emphasisText: String[],
    updatedAt:String,
    _id:String
}

const ActivityContainer = ()=>{
    const {data:activities, loading:activitiesLoading} = useFetchData("http://localhost:3001/activities");

    const colors = ["text-shade-0", "text-shade-1", "text-shade-2", "text-shade-3", "text-shade-4"]
    return(
        !activitiesLoading && <div className="flex flex-col gap-10 w-fit h-fit">
            {activities.map((activity:IActivity)=> 
            <Activity 
                color={colors[Math.floor(Math.random() * colors.length)]}
                body={activity.body}
                emphasisText={activity.emphasisText}
                timestamp={activity.createdAt}
                key={activity._id}
            />)
            }
        </div>
    );
}

export default ActivityContainer;