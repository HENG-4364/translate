import React from 'react'
interface User {
    id: number;
    name: string;
    username: string;
    email: string;

}
const UserDetail = async ({ id }: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cache: "no-store"
    });
    const user: User = await res.json();
    return (
        <>
            <div className="card  bg-base-100 shadow-xl ">
                <figure><img src="https://www.seekpng.com/png/small/264-2648061_1992-sh-sieben-zwerge-s01e01-mother-placeholder-team.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {user.username}
                        <div className="badge badge-secondary"></div>
                    </h2>
                    <p>{user.email}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetail
