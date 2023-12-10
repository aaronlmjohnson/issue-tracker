import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle} from '@fortawesome/free-solid-svg-icons';
import date from 'date-and-time';

const Activity = (props:any)=>{
    const {body, emphasisText, color, timestamp} = props;
    const dot = <FontAwesomeIcon icon={faCircle} size={"2xs"} className={color}/>

    //'ddd, MMM DD YYYY hh:mm A
    const activityParser = ()=>{
        const parsedBody = body;
        emphasisText.forEach((text:string)=>{
            parsedBody[parsedBody.indexOf('')] = <strong className={color} key={crypto.randomUUID()}>{text}</strong>
        });
        return <p>{parsedBody}</p>;
    }

    return(
        <div className="flex items-center justify-between grow">
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