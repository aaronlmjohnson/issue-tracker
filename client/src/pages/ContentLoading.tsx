import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    backgroundColor: "bg-primary" | "bg-white"
}

const ContentLoading = (props:IProps)=>{
    const {backgroundColor} = props;
    const gear = <FontAwesomeIcon icon={faGear} className={`my-auto text-9xl ${backgroundColor === "bg-primary" ? 'text-white' : 'text-primary'}`} spin/>
    
    return(
        <div className={`${backgroundColor} flex w-full h-full justify-center align-center `}>
            {gear}
        </div>
    )
}

export default ContentLoading