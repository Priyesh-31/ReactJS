import React, { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Priyesh-31")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 p-4 bg-gray-600 text-white text-3xl'>Github Followers: {data.followers}
    <img className='rounded-full w-20 h-20 m-auto mt-4' src={data.avatar_url} alt="gitprofile picture" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/Priyesh-31")
    return res.json()
}