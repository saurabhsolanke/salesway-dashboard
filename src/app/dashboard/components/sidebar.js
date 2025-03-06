import Navbar from "./navbar";
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from "react";


export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // console.log("Current pathname:", pathname);
    }, [pathname]);

    return (
        <>
            {/* style={{background: "#F4F5F8"}} */}
            <div className="w-64 h-screen overflow-y-hidden shadow-md rounded-2xl" style={{ background: "#F4F5F8" }}>
                <aside className="w-full">
                    <div className="flex items-center pl-6 pt-4">
                        <div className="flex h-10 w-10 items-center text-lg font-bold text-black dark:text-black-400">
                            {/* <img className="h-full w-full" src="https://res.cloudinary.com/pranav1421/image/upload/v1652785994/Tailwind-Component-library/Logo/tailwind-css_yizuxw.svg" alt="" /> */}
                            <span className="px-2">Salesway</span>
                        </div>
                    </div>
                    <div className="mt-8 flex h-96 flex-col space-y-3 pl-8 text-base font-medium text-gray-500 dark:text-zinc-400">
                        <div className="flex items-center gap-2 transition-all hover:pl-0.5 hover:font-semibold">
                            <svg width="20" height="20" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Settings
                        </div>
                        <div className="flex items-center gap-2 transition-all hover:pl-0.5 hover:font-semibold">
                            <svg width="20" height="20" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5L12 4L21 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Team
                        </div>
                        <p>MENU</p>
                        <div className={`flex items-center gap-2 transition-all hover:pl-0.5 hover:font-semibold ${pathname === '/dashboard' ? 'font-semibold text-blue-600' : ''}`}>
                            <svg width="20" height="20" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 20.4V14.6C14 14.2686 14.2686 14 14.6 14H20.4C20.7314 14 21 14.2686 21 14.6V20.4C21 20.7314 20.7314 21 20.4 21H14.6C14.2686 21 14 20.7314 14 20.4Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M3 20.4V14.6C3 14.2686 3.26863 14 3.6 14H9.4C9.73137 14 10 14.2686 10 14.6V20.4C10 20.7314 9.73137 21 9.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M14 9.4V3.6C14 3.26863 14.2686 3 14.6 3H20.4C20.7314 3 21 3.26863 21 3.6V9.4C21 9.73137 20.7314 10 20.4 10H14.6C14.2686 10 14 9.73137 14 9.4Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M3 9.4V3.6C3 3.26863 3.26863 3 3.6 3H9.4C9.73137 3 10 3.26863 10 3.6V9.4C10 9.73137 9.73137 10 9.4 10H3.6C3.26863 10 3 9.73137 3 9.4Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            Dashboard
                        </div>
                        <div className="flex items-center gap-2 transition-all hover:pl-0.5 hover:font-semibold">
                            <svg width="20" height="20" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 14V18.4C4 18.7314 4.26863 19 4.6 19H10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 14V18.4C19 18.7314 18.7314 19 18.4 19H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 5H18.4C18.7314 5 19 5.26863 19 5.6V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 10V5.6C4 5.26863 4.26863 5 4.6 5H10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 19V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 10H5C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 5V4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4V5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Projects
                        </div>
                        <div className="flex items-center gap-2 transition-all hover:pl-0.5 hover:font-semibold">
                            <svg width="20" strokeWidth="1.5" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L20 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.80002 5.79999L4.60002 6.59998L6.60001 4.59999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.80002 11.8L4.60002 12.6L6.60001 10.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.80002 17.8L4.60002 18.6L6.60001 16.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12L20 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 18L20 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Tasks
                        </div>
                        <div className="flex items-center gap-2 transition-all hover:pl-0.5 hover:font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                            </svg>
                            Reporting
                        </div>
                        <div className="flex items-center gap-2 transition-all hover:pl-0.5 hover:font-semibold" onClick={() => {
                            localStorage.removeItem('username');
                            router.push('/login');
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            Logout
                        </div>
                    </div>
                    <div className="mt-auto flex flex-col space-y-2 py-6 pl-8 text-base font-medium text-gray-500 dark:text-zinc-400">
                        <div className="flex items-center gap-2 transition-all hover:pl-0.5 hover:font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                            Tom Wang
                            
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}