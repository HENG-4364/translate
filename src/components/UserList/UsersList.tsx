'use client'
import { Card } from 'flowbite-react';
import Link from 'next/link';
import React, { useState } from 'react'

type Props = {
    data: any[]
}

const UsersList = ({ data }: Props) => {
    const [count, setCount] = useState()
    return (
        <>


            {data?.map((user) => {
                return (
                    <>
                        <Link href={`/user/${user.id}`}>
                            <div key={user.id} className="card  bg-base-100 shadow-xl ">
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
                        </Link>
                    </>
                )
            })}

        </>
    )
}

export default UsersList
