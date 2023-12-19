import Container from '@/components/Container'
import UsersList from '@/components/UserList/UsersList'
import React from 'react'
type Props = {
  data: any[];
}
const HomeScreen = ({ data }: Props) => {
  return (
    <>
      <Container>
        <div className='pb-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-4'>
          <UsersList data={data} />
        </div>
      </Container >
    </>
  )
}

export default HomeScreen
