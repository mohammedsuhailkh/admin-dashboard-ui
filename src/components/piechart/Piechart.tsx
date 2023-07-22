import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './Piechart.scss';


type PieDataItem = {
    name: string;
    sales: number;
    color: string;
  };


type Props = {
    pieData : PieDataItem[];
   
}

const Piechart = (props:Props) => {
  return (
    <div className='piechart'>
      <h1>Leads By Source</h1>
      <div className="chart">
        <ResponsiveContainer width='99%' height={300}>

        <PieChart width={800} >
            <Tooltip  contentStyle={{backgroundColor: 'white', borderRadius: '5px'}}
            labelStyle={{display: 'none'}}
            cursor={{fill: 'none'}}/>
        {props.pieData && props.pieData.length > 0 && (
  <Pie
    data={props.pieData}
    innerRadius={'70%'}
    outerRadius={'90%'}
    paddingAngle={5}
    dataKey="sales"
      >
    {props.pieData.map((item) => (
      <Cell key={item.name} fill={item.color} />
    ))}
  </Pie>
)}
        </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
      {props.pieData.map((item) => (
      <div className="option" key={item.name}>
        <div className="title">
            <div className="dot" style={{backgroundColor: item.color}} />
            <span>{item.name}</span>
        </div>
        <span>{item.sales}</span>
      </div>
    ))}
      </div>
    </div>
  )
}

export default Piechart
