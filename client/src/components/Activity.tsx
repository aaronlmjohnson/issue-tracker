import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle} from '@fortawesome/free-solid-svg-icons';
import date from 'date-and-time';

const Activity = (props:any)=>{
    const {body, strong, color, timestamp} = props;
    const dot = <FontAwesomeIcon icon={faCircle} size={"2xs"} className={color}/>
    let strongI = 0;
    //'ddd, MMM DD YYYY hh:mm A
    const activityParser = ()=>{
        const parsed = body.split('#').map((segment:string)=>{
            let newSegment = null;
            if(segment){
                newSegment = segment;
            } else{
                newSegment = <strong className={color}>{strong[strongI]}</strong>;
                strongI++;
            }
           return newSegment
        });
        return parsed;
    }

    return(
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
                {dot}
                {activityParser()}
            </div>
            
            <div className="text-non-focus">
                {date.format(new Date(timestamp), 'ddd, MMM DD YY hh:mm A')} 
            </div>
            
        </div>
    )
}

export default Activity;