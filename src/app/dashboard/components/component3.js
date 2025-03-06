import { displayComponent3 } from "@/app/api/api";
import React, { useEffect, useState } from 'react';
import SemiCircleProgressBar from "react-progressbar-semicircle";

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
                <SemiCircleProgressBar percentage={data.score} stroke="#0170FE" />
                <h3 className="position-absolute text-2xl font-bold" style={{ top: '12%', left: '85%', transform: 'translateX(-25%)', position: 'absolute' }}>{data.score}</h3>
            </div>
            <p className="flex justify-center"> of 100 points</p>
            <div className="px-12 py-2">
                <div className="border-gray-800 mx-5"></div>
                <h3 className="font-semibold py-1">{data.title}!</h3>
                <h3 className="py-1 text-sm">{data.message} by 80%</h3>
                <button className="bg-gray-100 rounded-full px-4 py-1">Improve your score</button>
            </div>
        </>
    )
}