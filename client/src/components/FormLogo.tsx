import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

const FormLogo = ()=>{
    const Logo = <FontAwesomeIcon icon={faBug} className="rotate-45 text-primary" size="xl"/>

    return( 
        <div className="h-12 w-auto flex justify-center center-content">
            <div className="flex center-content justify-content w-fit h-fit my-auto">
                {Logo}
            </div>
            <h1 className="font-primary font-extrabold text-4xl text-primary my-auto">
                Tracker
            </h1>
        </div>
    )
}

export default FormLogo;