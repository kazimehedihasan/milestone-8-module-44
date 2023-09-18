import { LineChart, Line, XAxis , YAxis } from 'recharts';

const LineCharts = () => {

    const studentData = [
        { id: 1, name: "Jack", physics: 85, chemistry: 78, math: 92 },
        { id: 2, name: "Jack", physics: 76, chemistry: 88, math: 95 },
        { id: 3, name: "Jack", physics: 70, chemistry: 82, math: 89 },
        { id: 4, name: "Jack", physics: 91, chemistry: 84, math: 79 },
        { id: 5, name: "Jack", physics: 88, chemistry: 75, math: 93 },
        { id: 6, name: "Jack", physics: 82, chemistry: 90, math: 87 },
        { id: 7, name: "Jack", physics: 94, chemistry: 72, math: 88 },
        { id: 8, name: "Jack", physics: 76, chemistry: 89, math: 91 },
        { id: 9, name: "Jack", physics: 87, chemistry: 80, math: 94 },
        { id: 10, name: "Jack", physics: 89, chemistry: 78, math: 90 },
      ];
    
    return (
        <div>
            <LineChart width={500} height={400} data={studentData}>
                <XAxis dataKey={'name'}/>
                <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey={'chemistry'} stroke='yellow'></Line>
            </LineChart>
           
        </div>
    );
};

export default LineCharts;