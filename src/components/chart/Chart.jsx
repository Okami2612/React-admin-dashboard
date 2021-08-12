import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './chart.css';

export default function Chart({title, data, dataKey, grid}){
    
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#1f618d"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#cb4335" />
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                    <YAxis />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}