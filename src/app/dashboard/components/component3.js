import { displayComponent3 } from "@/app/api/api";
import React, { useEffect, useState } from 'react';
// import SemiCircleProgressBar from "react-progressbar-semicircle";

export default function Component3() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        displayComponent3().then((data) => {
            setData(data);
            setLoading(false);
        }).catch((err) => {
            console.log('error', err);
            setError(err)
            setLoading(false);
        })
    }, [setData]);
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    return (
        <>
            <div className="flex text-center justify-center position-relative px-12">
                {/* <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                </div> */}
                {/* <SemiCircleProgressBar percentage={data.score} stroke="#0170FE" /> */}
                {/* <h3 className="position-absolute text-2xl font-bold" style={{ top: '12%', left: '85%', transform: 'translateX(-25%)', position: 'absolute' }}>{data.score}</h3> */}
            </div>
            <div className="flex justify-center mt-5">
                <div className="multigraph">
                    <span className="tooltip">{data.score}%</span>
                    <span className="graph"></span>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <b className="font-bold text-4xl">{data.score}</b>
            </div>
            <p className="mt-3 flex justify-center text-xs">of 100 points</p>
            
            <div className="border border-gray-100 mx-8 my-2"></div>

            <div className="px-10 py-2">
                <div className="border-gray-800 mx-3"></div>
                <h3 className="font-semibold">{data.title}!</h3>
                <h3 className="py-1 text-xs">{data.message} by 80% users</h3>
                <button className="bg-white hover:bg-gray-100 text-gray-800 px-3 py-1 border border-gray-300 text-xs rounded-full">Improve your score</button>
            </div>
        </>
    )
}