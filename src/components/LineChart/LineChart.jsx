import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const student_data=[
        { id: 1, name: "Alice", math: 85, physics: 92, chemistry: 78 },
        { id: 2, name: "Bob", math: 78, physics: 88, chemistry: 72 },
        { id: 3, name: "Charlie", math: 92, physics: 91, chemistry: 94 },
        { id: 4, name: "David", math: 65, physics: 72, chemistry: 68 },
        { id: 5, name: "Eva", math: 89, physics: 94, chemistry: 86 },
        { id: 6, name: "Frank", math: 77, physics: 82, chemistry: 75 },
        { id: 7, name: "Grace", math: 95, physics: 97, chemistry: 92 },
        { id: 8, name: "Hannah", math: 73, physics: 81, chemistry: 70 },
        { id: 9, name: "Isabel", math: 88, physics: 90, chemistry: 84 },
        { id: 10, name: "Jack", math: 84, physics: 89, chemistry: 80 }
      ]
    return (
        <div>
            <LChart width={800} height={400} data={student_data}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;