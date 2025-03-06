import { displayComponent6 } from "@/app/api/api";
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase';

export default function Component6() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const { data, error } = await supabase
                    .from('tablenum')
                    .select('*')
                if (error) throw error
                setData(data)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div className='overflow-x-auto px-5'>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Sold amount</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Unit price</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Revenue</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Rating</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-gray-200">
                    {data.map((item) => (
                        <tr key={item.product}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"> {item.product}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.sold_amount}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.unit_price}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.revenue}</td>
                            <td className="px-6 flex py-4 whitespace-nowrap text-sm text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="orange" className="bi bi-star-fill mt-1" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg> &nbsp; {item.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}