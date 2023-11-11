import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const ContentLoading = (props:any)=>{

    const gear = <FontAwesomeIcon icon={faGear} className={`my-auto text-9xl text-white`} spin/>

    return(
        <div className={`bg-primary flex w-full h-screen justify-center align-center `}>
            {gear}
        </div>
    )
}

export default ContentLoading