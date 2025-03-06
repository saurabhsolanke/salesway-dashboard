export default function Navbar() {
    return (
        <>
            <div className="flex w-full flex-col justify-between bg-white px-6 py-5 shadow-lg dark:bg-zinc-900 dark:shadow-black/5 lg:flex-row lg:items-center">
                <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center text-lg font-bold text-gray-700 dark:text-zinc-500">
                        <img className="h-full w-full" src="https://res.cloudinary.com/pranav1421/image/upload/v1652785994/Tailwind-Component-library/Logo/tailwind-css_yizuxw.svg" alt="" />
                        <span className="px-2">tailwindcss</span>
                    </div>
                    <div className="flex w-full justify-end">
                        <a className="block lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </a>
                    </div>
                </div>
                <div className="">
                    <div className="" id="navigation">
                        <ul className="mt-2 flex flex-col gap-2 font-medium text-gray-700 dark:text-zinc-400 lg:mt-0 lg:flex-row lg:gap-4">
                            <li><a href="#" className="text-sky-700">Home</a></li>
                            <li><a href="#" className="hover:text-sky-700">About</a></li>
                            <li><a href="#" className="hover:text-sky-700">Services</a></li>
                            <li><a href="#" className="hover:text-sky-700">Pricing</a></li>
                            <li><a href="#" className="hover:text-sky-700">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}