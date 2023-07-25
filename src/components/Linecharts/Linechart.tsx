import './Linechart.scss';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type dataitem ={
    name : string;
    "Active User" : number;
    sales : number;
    revenue: number;
}
type Props = {
    
    title : string;
    data : dataitem[];
    grid: any ;
    dataKey1 : string | number;
    dataKey2 : string | number;
    dataKey3 : string | number;

}
const Linechart = (props : Props) => {
  return (
    <div className="linechart">
      <h1>Revenue Analytics</h1>
      <div className="chart">
      <ResponsiveContainer width="100%" >
        <LineChart
         
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name"  stroke="#ddddfd"/>
        
          <Tooltip />
          <Legend />
          {props.grid && <Line type="monotone" dataKey={props.dataKey1} stroke="#7C73C0" activeDot={{ r: 8 }} />}
          {props.grid && <Line type="monotone" dataKey={props.dataKey2} stroke="#FF8042" activeDot={{ r: 8 }} />}
          {props.grid && <Line type="monotone" dataKey={props.dataKey3} stroke="#75C2F6" activeDot={{ r: 8 }} />}
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Linechart
