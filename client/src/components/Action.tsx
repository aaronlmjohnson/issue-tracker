import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle} from '@fortawesome/free-solid-svg-icons';

const Action = (props:any)=>{
    const {body, strong, color, timestamp} = props;
    const dot = <FontAwesomeIcon icon={faCircle} size={"2xs"} className={color}/>
    let strongI = 0;
    
    const actionParser = ()=>{
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
                {actionParser()}
            </div>
            
            <div>
                {timestamp}
            </div>
            
        </div>
    )
}

export default Action;