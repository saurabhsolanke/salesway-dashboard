import { component1, displayComponent4 } from "@/app/api/api";
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Component4() {
    const [cardData, setCardData] = useState({});
    const [chartData, setChartData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAllData() {
            try {
                const { data: supabaseData, error: supabaseError } = await supabase
                    .from('bigtable')
                    .select('*');

                if (supabaseError) throw supabaseError;
                const apiData = await displayComponent4();
                setCardData(apiData);
                const formattedData = supabaseData.map(item => ({
                    date: item.date,
                    offline_sales: item.offline_sales,
                    web_sales: item.web_sales
                }));                
                setChartData(formattedData);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err);
                setLoading(false);
            }
        }

        fetchAllData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="py-4 pr-3">
            <div className="rounded-2xl h-64">
                <h4 className="text-lg font-extrabold mb-2 pl-4">Customers by device</h4>
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 0,
                            bottom: 5,
                        }}
                        label={{ fontSize: 16 }}
                        >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="web_sales"
                            name="Web Sales"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                            strokeWidth={2}
                            />
                        <Line
                            type="monotone"
                            dataKey="offline_sales"
                            name="Offline selling"
                            stroke="#82ca9d"
                            strokeWidth={2}
                            />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}