import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <Navbar />
            <div className='flex'>
                <Sidebar /> 
                <main className='flex-1 px-4'>
                    
                </main>
            </div>
        </div>
    )
}