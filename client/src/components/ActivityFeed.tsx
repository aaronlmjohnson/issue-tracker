import { useFetchData } from "../hooks/useFetchData";
import ContentLoading from "../pages/ContentLoading";
import Activity from "./Activity";

interface IActivity {
    body:String,
    createdAt: String,
    emphasisText: String[],
    updatedAt:String,
    _id:String
}

const ActivityFeed = ()=>{
    const {data:activities, loading:activitiesLoading} = useFetchData("/activities");

    const colors = ["text-shade-0", "text-shade-1", "text-shade-2", "text-shade-3", "text-shade-4"]
    return(
        activitiesLoading ?
        <ContentLoading backgroundColor='bg-white' /> :
         <div className="flex flex-col gap-10 h-fit">
            <h1 className="font-primary text-5xl font-extrabold">Recent Activity</h1>

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

export default ActivityFeed;