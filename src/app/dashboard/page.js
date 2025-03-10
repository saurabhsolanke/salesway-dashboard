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


export default function Page() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    return (
        <>
            <div className=''>
                <div className='flex pt-2 rounded-2xl mx-3'>
                    <Sidebar />
                    <main className='rounded-2xl px-2' style={{ background: "#F3F4F7" }}>
                        <div className="grid grid-flow-col grid-cols-12 gap-4">
                            <div className="col-span-8 rounded-2xl">
                                <div className="grid grid-flow-row h-screen py-3">
                                    <div className='rounded-2xl shadow' style={{ background: "#FEFFFE" }}>
                                        <div className='header flex justify-between p-5'>
                                            <span className='text-3xl font-bold'>Dashboard</span>
                                            <div className="relative inline-block text-left">
                                                <select className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                                    <option>Last Year</option>
                                                    <option>Account settings</option>
                                                    <option>Support</option>
                                                    <option>License</option>
                                                    <option>Sign out</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='cardsection'>
                                            <Component1 />
                                        </div>
                                        <div className='chart'>
                                            <div className='rounded-2xl  flex justify-between p-5'>
                                                <span className="font-bold text-xl">Comparison</span>
                                                <div className="relative inline-block text-left">
                                                    <select className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                                        <option>6 Months</option>
                                                        <option>Account settings</option>
                                                        <option>Support</option>
                                                        <option>License</option>
                                                        <option>Sign out</option>
                                                    </select>
                                                </div>
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
                                <div className="grid grid-flow-row h-screen gap-3 py-3">
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
            </div>
        </>
    )
}