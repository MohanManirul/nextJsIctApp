'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Menu = () => {
    let currentPath = usePathname() ;

    return (

        <>
            <h2>{currentPath}</h2>
            <Link href={"/"}  className='list'>Home</Link>
            <Link href={"/mission"} className='list'>Mission</Link>
            <Link href={"/vission"}  className='list'>Vission</Link>
            <Link href={"/profile"}  className='list'>Profile</Link>
        </>
    );
};

export default Menu;