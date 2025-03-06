'use client';
import Link from 'next/link'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Component1 from './components/component1';
import Component2 from './components/component2';
import Component3 from './components/component3';
import Component4 from './components/component4';
import Component5 from './components/component5';
import Component6 from './components/component6';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


export default function Page() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    return (
        <>
            <div className='flex pt-2 rounded-2xl mx-3'>
                <Sidebar />
                <main className='rounded-2xl px-2' style={{ background: "#F3F4F7" }}>
                    <div className="grid grid-flow-col grid-cols-12 gap-4">
                        <div className="col-span-8 rounded-2xl">
                            <div className="grid grid-flow-row h-screen py-5">
                                <div className='rounded-2xl' style={{ background: "#FEFFFE" }}>
                                    <div className='header flex justify-between p-5'>
                                        <span className='text-3xl font-bold'>Dashboard</span>
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                                    Last Year
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </MenuButton>
                                            </div>

                                            <MenuItems
                                                transition
                                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                            >
                                                <div className="py-1">
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                        >
                                                            Account settings
                                                        </a>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                        >
                                                            Support
                                                        </a>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                        >
                                                            License
                                                        </a>
                                                    </MenuItem>
                                                    <form action="#" method="POST">
                                                        <MenuItem>
                                                            <button
                                                                type="submit"
                                                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                            >
                                                                Sign out
                                                            </button>
                                                        </MenuItem>
                                                    </form>
                                                </div>
                                            </MenuItems>
                                        </Menu>
                                    </div>
                                    <div className='cardsection'>
                                        <Component1 />
                                    </div>
                                    <div className='chart'>
                                        <div className='rounded-2xl  flex justify-between p-5'>
                                            <span className="font-bold text-xl">Comparison</span>
                                            <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                                    6 Months
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </MenuButton>
                                            </div>

                                            <MenuItems
                                                transition
                                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                            >
                                                <div className="py-1">
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                        >
                                                            Account settings
                                                        </a>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                        >
                                                            Support
                                                        </a>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                        >
                                                            License
                                                        </a>
                                                    </MenuItem>
                                                    <form action="#" method="POST">
                                                        <MenuItem>
                                                            <button
                                                                type="submit"
                                                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                            >
                                                                Sign out
                                                            </button>
                                                        </MenuItem>
                                                    </form>
                                                </div>
                                            </MenuItems>
                                        </Menu>
                                        </div>
                                    </div>
                                    <Component2 />
                                    <div className='rounded-2xl flex justify-between mx-5 px-5'>
                                        <span className="font-bold text-xl">Top Products</span>
                                        <span className="border rounded-full px-5">Full results</span>
                                    </div>
                                    <Component6 />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="grid grid-flow-row h-screen gap-3 py-5">
                                <div className="rounded-2xl shadow" style={{ background: "#FEFFFE" }}>
                                    <Component3 />
                                </div>
                                <div className="rounded-2xl shadow" style={{ background: "#FEFFFE" }}>
                                    <Component4 />
                                </div>
                                <div className="rounded-2xl shadow" style={{ background: "#FEFFFE" }}>
                                    <Component5 />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}