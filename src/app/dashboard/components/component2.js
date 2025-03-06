import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

export default function Component2() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const { data, error } = await supabase
                    .from('tablename')
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

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 border rounded shadow-md">
                    <p className="font-medium text-gray-900">{`Month: ${label}`}</p>
                    <p className="text-gray-700">
                        <span className="inline-block w-3 h-3 mr-2" style={{ backgroundColor: "#9FF0FE" }}></span>
                        {`Last Year: ${payload[0].value.toLocaleString()}`}
                    </p>
                    <p className="text-gray-700">
                        <span className="inline-block w-3 h-3 mr-2" style={{ backgroundColor: "#016BFF" }}></span>
                        {`This Year: ${payload[1].value.toLocaleString()}`}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                        {`Growth: ${((payload[1].value - payload[0].value) / payload[0].value * 100).toFixed(1)}%`}
                    </p>
                </div>
            );
        }
        return null;
    };

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div className="w-full h-64 p-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ paddingTop: "10px" }} />
                    <Bar dataKey="last_year" name="Last Year" fill="#3B82F6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                    <Bar dataKey="this_year" name="This Year" fill="#10B981" radius={[4, 4, 0, 0]} maxBarSize={40} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}