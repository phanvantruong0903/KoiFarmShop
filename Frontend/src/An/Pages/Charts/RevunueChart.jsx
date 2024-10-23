import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

export default function RevenueChart({ types }) {
    const data = [
        { "date": "2024-10-06", "value": 182664, "profit": 145000 },
        { "date": "2024-10-07", "value": 1325963, "profit": 1250000 },
        { "date": "2024-10-08", "value": 1373571, "profit": 1300000 },
        { "date": "2024-10-09", "value": 1287479, "profit": 1200000 },
        { "date": "2024-10-10", "value": 1295080, "profit": 1250000 },
        { "date": "2024-10-11", "value": 1575260, "profit": 1500000 },
        { "date": "2024-10-12", "value": 1388847, "profit": 1300000 },
        { "date": "2024-10-13", "value": 1633423, "profit": 1600000 },
        { "date": "2024-10-14", "value": 1852390, "profit": 1800000 },
        { "date": "2024-10-15", "value": 415998, "profit": 390000 },
        { "date": "2024-10-16", "value": 1530824, "profit": 1500000 },
        { "date": "2024-10-17", "value": 475660, "profit": 450000 },
        { "date": "2024-10-18", "value": 1983580, "profit": 1900000 },
        { "date": "2024-10-19", "value": 1450355, "profit": 1400000 },
        { "date": "2024-10-20", "value": 1543935, "profit": 1500000 },
        { "date": "2024-10-21", "value": 1109348, "profit": 1050000 },
        { "date": "2024-10-22", "value": 552198, "profit": 530000 },
        { "date": "2024-10-23", "value": 252193, "profit": 1200000 }
    ];

    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Revenue',
                data: data.map(item => item.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Profit',
                data: data.map(item => item.profit),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: false
            }
        ]
    };

    const chartOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const revenue = tooltipItem.dataset.label === 'Revenue'
                            ? tooltipItem.raw
                            : data[tooltipItem.dataIndex].value;
                        const profit = tooltipItem.dataset.label === 'Profit'
                            ? tooltipItem.raw
                            : data[tooltipItem.dataIndex].profit;

                        const percentageChange = ((profit - revenue) / revenue) * 100;
                        const changeLabel = percentageChange > 0 ? 'gain' : 'loss';

                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw.toLocaleString('en-US')} VND (${percentageChange.toFixed(2)}% ${changeLabel})`;
                    }
                }
            }
        }
    };

    return (
        <div style={{ height: '50vh', width: '100%' }}>
            {types === 'BarChart' ? (
                <Bar data={chartData} options={chartOptions} height={400} width={600} />
            ) : (
                <Line data={chartData} options={chartOptions} height={400} width={600} />
            )}
        </div>
    );
}
