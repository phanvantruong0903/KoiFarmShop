import React from 'react';
import { useEffect } from 'react';
import axiosInstance from '../Utils/axiosJS';

export default function useChartData() {
    const [profileChartData, setProfileChartData] = React.useState({
        labels: [],
        datasets: [],
    });
    const [unFilteredProfileChartData, setUnFilteredProfileChartData] = React.useState(null);
    const [orderData, setOrderData] = React.useState({
        labels: [],
        datasets: [],
    });
    const [unFilteredorderData, setUnFilteredDorderData] = React.useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userResponse, orderResponse] = await Promise.all([
                    axiosInstance.get('/manager/manage-user/get-all'),
                    axiosInstance.get('/manager/manage-order/get-all'),
                ]);
                setUnFilteredProfileChartData(userResponse.data.result);
                setUnFilteredDorderData(orderResponse.data.result);

                const users = userResponse.data.result;
                const userDateCounts = {};
                users.forEach(user => {
                    if (user.created_at) {
                        const createdDate = new Date(user.created_at);
                        if (!isNaN(createdDate.getTime())) {
                            const formattedDate = createdDate.toISOString().slice(0, 10);
                            userDateCounts[formattedDate] = (userDateCounts[formattedDate] || 0) + 1;
                        }
                    }
                });

                const userLabels = Object.keys(userDateCounts);
                const userData = Object.values(userDateCounts);

                setProfileChartData({
                    labels: userLabels,
                    datasets: [
                        {
                            label: 'Accounts Created',
                            data: userData,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                });

                const orders = orderResponse.data.result;
                const orderDateCounts = {};
                orders.forEach(order => {
                    if (order.OrderDate) {
                        const orderDate = new Date(order.OrderDate);
                        if (!isNaN(orderDate.getTime())) {
                            const formattedOrderDate = orderDate.toISOString().slice(0, 10);
                            orderDateCounts[formattedOrderDate] = (orderDateCounts[formattedOrderDate] || 0) + 1;
                        }
                    }
                });

                const orderLabels = Object.keys(orderDateCounts);
                const orderData = Object.values(orderDateCounts);

                setOrderData({
                    labels: orderLabels,
                    datasets: [
                        {
                            label: 'Orders Placed',
                            data: orderData,
                            backgroundColor: 'rgba(153, 102, 255, 0.6)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                            borderWidth: 1,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    const combineData = () => {
        const combinedLabels = [...new Set([...profileChartData.labels, ...orderData.labels])].sort();

        const accountsCreatedData = combinedLabels.map(date => {
            const index = profileChartData.labels.indexOf(date);
            return index >= 0 ? profileChartData.datasets[0].data[index] : 0;
        });

        const ordersPlacedData = combinedLabels.map(date => {
            const index = orderData.labels.indexOf(date);
            return index >= 0 ? orderData.datasets[0].data[index] : 0;
        });

        return {
            labels: combinedLabels,
            datasets: [
                {
                    label: 'Accounts Created',
                    data: accountsCreatedData,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    
                },
                {
                    label: 'Orders Placed',
                    data: ordersPlacedData,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
            ],
        };
    };

    const filterDataByTimeRange = (timeRange, chartData) => {
        const now = new Date();
        let startDate;

        if (timeRange === '7days') {
            startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        } else if (timeRange === 'month') {
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        } else if (timeRange === 'year') {
            startDate = new Date(now.getFullYear(), 0, 1);
        } else {
            return chartData;
        }

        const filteredLabels = chartData.labels.filter(label => new Date(label) >= startDate);
        const filteredDatasets = chartData.datasets.map(dataset => ({
            ...dataset,
            data: dataset.data.slice(chartData.labels.findIndex(label => new Date(label) >= startDate)),
        }));

        return {
            labels: filteredLabels,
            datasets: filteredDatasets,
        };
    };

    const filterProfileData = (timeRange) => filterDataByTimeRange(timeRange, profileChartData);
    const filterOrderData = (timeRange) => filterDataByTimeRange(timeRange, orderData);
    const filterCombinedData = (timeRange) => filterDataByTimeRange(timeRange, combineData());

    return {
        profileChartData,
        orderData,
        combineData,
        unFilteredProfileChartData,
        unFilteredorderData,
        filterProfileData,
        filterOrderData,
        filterCombinedData,
    };
}
