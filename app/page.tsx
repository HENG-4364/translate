
import HomeScreen from '@/screen/Home/HomeScreen'
import Image from 'next/image'
import { useState } from 'react';
interface User {
  id: number;
  name: string;
  username: string;
  email: string;

}
export default async function HomePage() {


  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store"
  });
  const users: User[] = await res.json();
  return (
    <>
      <HomeScreen data={users} />
    </>
  )
}
