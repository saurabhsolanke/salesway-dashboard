import { component1, displayComponent1 } from "@/app/api/api";
import React, { useEffect, useState } from 'react';

export default function Component1() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

   useEffect(() => {
        displayComponent1().then((data) => {
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
            <div className="grid grid-cols-3 gap-4 px-5">
                <div className="card rounded-2xl shadow px-6 py-2 text-sm" style={{ border: "1px solid #F2F3F5" }}>Purchases
                    <div className='flex'>
                        <h3 className="text-xl font-medium">{data.purchases}</h3>&nbsp;
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-600/20 ring-inset">
                            +32% &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="card shadow rounded-2xl px-6 pt-2 text-sm">Revenue
                    <div className='flex'>
                        <h3 className="text-xl font-medium">${data.revenue}</h3>&nbsp;
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-600/20 ring-inset">
                            +49% &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="card shadow rounded-2xl px-6 pt-2 text-sm">Refunds
                    <div className='flex'>
                        <h3 className="text-xl font-medium">${data.refunds}</h3>&nbsp;
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-600/20 ring-inset">
                            -7% &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-graph-down-arrow" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
             )}
        </>
    )
}