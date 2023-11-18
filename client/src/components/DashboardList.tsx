const DashboardList = ()=>{
    return(
        <div className="flex flex-col gap-16 bg-white border text-primary h-max w-fit justify-self-center py-12 px-10 border border-4 rounded-2xl border-primary">
            <h1 className="text-2xl font-extrabold font-primary text-center">
                Accounts Created
            </h1>
            <ul className="flex flex-col gap-y-14">
                <li>Username created on 11/17/2023</li>
                <li>Username created on 11/17/2023</li>
                <li>Username created on 11/17/2023</li>
                <li>Username created on 11/17/2023</li>
            </ul>
            <button className="font-secondary text-xl bg-primary text-white font-bold px-4 py-5 rounded-2xl">All Accounts</button>
        </div>
    )
}

export default DashboardList;