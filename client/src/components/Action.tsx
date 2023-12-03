import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircle} from '@fortawesome/free-solid-svg-icons';

/*
    data ex:
     signedIn:{
        strong:[
            "Aaron Johnson",
            "3:02 pm"
        ]
        body:["# has signed in at #"]
     }


*/

// take the body and split at character #
//['', 'has signed in at, '']
//map through body array 
//if '' then get the index and set its value to that of what is in the strong array
// bodyArr.map((segment, i)=>{
//  if(!segment) return <strong> strong[i] <strong>
//})

const Action = (props:any)=>{
    const {body, strong, color} = props;
    const dot = <FontAwesomeIcon icon={faCircle} size={"2xs"} className={color}/>
    let strongI = 0;
    
    const actionParser = ()=>{
        return body.split('#').map((segment:string)=>{
            console.log(segment);
            let newSegment = '';
            if(segment){
                newSegment = segment;
            } else{
                newSegment = strong[strongI];
                console.log("in:",newSegment);
                strongI++;
            }
           return newSegment
        });
    }

    return(
        <div className="flex items-center gap-2.5">
            {dot}
            {actionParser()}
            {/* <p className="w-full text-xl">{description}</p>
            <p className="text-non-focus text-xs">{timestamp}</p> */}
        </div>
    )
}

export default Action;