import { component1, displayComponent5 } from "@/app/api/api";
import React, { useEffect, useState } from 'react';

export default function Component5() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        displayComponent5().then((data) => {
            setData(data);
            setLoading(false); 
        }).catch((err) => {
            console.log('error', err);
            setLoading(false);
        });

    }, [setData]);

    return (
        <>
            {loading ? (
                <div className="loader">Loading...</div>
            ) : (
                <div className="p-5">
                    <span className="text-sm ">Community feedback</span>
                    <h3 className="text-lg font-extrabold">Mostly positive</h3>
                    <div className="flex mt-3">
                        <div className="w-full rounded-full h-2.5 relative">
                            <div className="h-2.5 rounded-full" style={{ backgroundColor: "#FFA3A6", width: "74%", position: 'absolute' }}> </div>
                            <div className="h-2.5 rounded-full" style={{ backgroundColor: "#FFCB85", width: "11.1%", position: 'absolute', left: '74%' }}> </div>
                            <div className="h-2.5 rounded-full" style={{ backgroundColor: "#6CF0B0", width: "14.4%", position: 'absolute', left: '85.1%' }}> </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto mt-5">
                        <table className="min-w-full">
                            <thead className="">
                                <tr>
                                    <th className="px-3 text-left text-xs font-medium text-gray-500 tracking-wider">Negative</th>
                                    <th className="px-3 text-left text-xs font-medium text-gray-500 tracking-wider">Neutral</th>
                                    <th className="px-3 text-left text-xs font-medium text-gray-500 tracking-wider">Positive</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y">
                                <tr>
                                    <td className="px-6  whitespace-nowrap text-sm text-gray-900 font-bold">{data.negative}</td>
                                    <td className="px-6  whitespace-nowrap text-sm text-gray-900 font-bold">{data.neutral}</td>
                                    <td className="px-6  whitespace-nowrap text-sm text-gray-900 font-bold">{data.positive}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    )
}