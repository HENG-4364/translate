import Container from '@/components/Container'
import UserDetail from '@/components/UserDetail/UserDetail'
import ProductCard from '@/components/UserList/UsersList'
import React from 'react'
const UserDetailScreen = ({ id }: any) => {
    return (
        <Container>
            <div>{id}</div>
            <div className='pb-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-y-4 gap-x-4'>
                <UserDetail id={id}/>
            </div>
        </Container >
    )
}

export default UserDetailScreen
