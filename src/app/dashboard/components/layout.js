import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className='flex'>
                <Sidebar /> 
                <main className='flex-1'>
                    
                </main>
            </div>
        </>
    )
}