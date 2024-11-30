import { useLoaderData } from 'react-router-dom';

const AllUsers = () => {
    const allUsersData = useLoaderData()
    return (
        <div className='max-w-[1440px] mx-auto md:p-10 p-5'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Last login</th>
                            <th>ID created</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsersData.map((user, idx) => <tr key={user._id}>
                                <td>{idx + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user?.photoURL}
                                                    alt={user?.name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {user?.lastLoginDate}
                                </td>
                                <td>{user?.accountCreatedDate}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;