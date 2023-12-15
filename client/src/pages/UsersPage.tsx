import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserTie, faUserCog, faUserShield} from '@fortawesome/free-solid-svg-icons';

const UsersPage = (props:any)=>{
    const {data:users, loading} = useFetchData(`http://localhost:3001/users`);
    const userPortraitStyle = "text-[80px] text-primary";
    interface IUserPortraits {
        Administrator: JSX.Element,
        Project_Lead: JSX.Element,
        Developer: JSX.Element
    }

    interface IUser {
        id: string,
        email: string,
        first_name: string,
        last_name: string,
        role: keyof typeof userPortraits,
        date_created: string,
        url: string,
        fullName: string,
        roles: string[],
    }

    const userPortraits:IUserPortraits = {
        Administrator: <FontAwesomeIcon icon={faUserShield} className={userPortraitStyle}/>,
        Project_Lead: <FontAwesomeIcon icon={faUserTie} className={userPortraitStyle}/>,
        Developer: <FontAwesomeIcon icon={faUserCog} className={userPortraitStyle}/>,
    }

    return(
        !loading && <div className="p-7 w-full">
            <h1 className="font-primary text-5xl font-extrabold">All Accounts</h1>
            <div className="py-12 grid xl:grid-cols-five lg:grid-cols-4 md:grid-cols-3 lg:justify-between gap-y-20">
                {users.map((user:IUser)=>{
                    return <div className="text-center" key={user.id}>
                        <Link to={user.url}>
                            {userPortraits[user.role]}
                            <h1 className="text-2xl font-semibold">{user.fullName}</h1>
                            <p className="text-base font-semibold">{user.role.split('_').join(' ')}</p>
                        </Link>
                    </div>
                })}
            </div>
            
        </div>
    );
}

export default UsersPage;