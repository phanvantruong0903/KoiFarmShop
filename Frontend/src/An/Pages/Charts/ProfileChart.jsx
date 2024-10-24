import { Bar, Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import useChartData from '../../Hooks/useChartData';
export default function ProfileChart({ profileData, types }) {
    const [profileChartData, setProfileChartData] = useState({});
    useEffect(() => {
        console.log('profileData:', profileData);
        setProfileChartData(profileData);
    }, [profileData]);

    console.log('profileChartData:', profileChartData);

    return (
        <div style={{ height: '50vh', width: '100%' }}>
            {profileChartData && profileChartData.labels && profileChartData.labels.length > 0 && (
                types === 'BarChart' ? (
                    <Bar
                        data={profileChartData}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                x: { title: { display: true, text: 'Date' } },
                                y: { title: { display: true, text: 'Account Created' } }
                            },
                        }}
                    />
                ) : (
                    <Line
                        data={profileChartData}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                x: { title: { display: true, text: 'Date' } },
                                y: { title: { display: true, text: 'Account Created' } }
                            },
                        }}
                    />
                )
            )}
        </div>
    )
}