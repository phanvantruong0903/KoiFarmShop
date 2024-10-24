
import { Bar, Line } from 'react-chartjs-2'; 


export default function GeneralChart({ data, chartType, title }) {
    return (
        <div style={{ height: '50vh', width: '100%' }}>
            {chartType === 'BarChart' ? (
                <Bar
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            x: { title: { display: true, text: 'Date' } },
                            y: { title: { display: true, text: title } }, 
                        },
                    }}
                />
            ) : (
                <Line
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            x: { title: { display: true, text: 'Date' } },
                            y: { title: { display: true, text: title } },
                        },
                    }}
                />
            )}
        </div>
    );
}
