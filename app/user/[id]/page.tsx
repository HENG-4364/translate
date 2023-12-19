import UserDetailScreen from '@/screen/UserDetail/UserDetailScreen'
import React from 'react'
interface Props {
    params: { id: number }
}
const Users = ({ params: { id } }: Props) => {
    return (
        <div>
            <UserDetailScreen id={id} />
        </div>
    )
}

export default Users
