import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto'; //
import axiosInstance from '../../Utils/axiosJS';
import Spinner from '../../Components/Spinner';
export default function ProfileChart() {
  const { chartType } = useParams();
  const [chartData, setChartData] = React.useState({
    labels: [],  
    datasets: [],
  });
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/manager/manage-user/get-all');
        const users = response.data.result;

        const dateCounts = {};
        users.forEach(user => {
 
          if (user.created_at) {
            const createdDate = new Date(user.created_at);

          
            if (!isNaN(createdDate.getTime())) {
                console.log('Date:', createdDate.toISOString().slice(0, 10));
              const formattedDate = createdDate.toISOString().slice(0, 10);
              dateCounts[formattedDate] = (dateCounts[formattedDate] || 0) + 1;
            } else {
              console.warn('Invalid date:', user.created_at);
            }
          }
        });

        const labels = Object.keys(dateCounts);
        const data = Object.values(dateCounts);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Accounts Created',
              data,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profiles Page</h1>
      {chartType && <h2>Displaying {chartType} Chart</h2>}
      
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {chartData.datasets.length > 0 && (
            chartType === 'BarChart' ? (
              <Bar 
                data={chartData}
                options={{
                  scales: {
                    x: { title: { display: true, text: 'Date' }},
                    y: { title: { display: true, text: 'Accounts Created' }}
                  },
                }}
              />
            ) : (
              <Line
                data={chartData}
                options={{
                  scales: {
                    x: { title: { display: true, text: 'Date' }},
                    y: { title: { display: true, text: 'Accounts Created' }}
                  },
                }}
              />
            )
          )}
        </>
      )}
    </div>
  );
}
