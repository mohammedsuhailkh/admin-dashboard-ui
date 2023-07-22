import ChartBox from '../../components/chartBox/ChartBox'
import TopBox from '../../components/topBox/topBox'
import './home.scss'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, pieData } from '../../data'
import Barchart from '../../components/barchart/Barchart'
import Piechart from '../../components/piechart/Piechart'
import Linechart from '../../components/Linecharts/Linechart'
import { UserData } from '../../data'

     const Home = () => {
       return (
         <div className="home">
           <div className="box box1"><TopBox/></div>
           <div className="box box2"><ChartBox {...chartBoxUser}/></div>
           <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
           <div className="box box4"><Piechart pieData={pieData}/></div>
           <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
           <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
           <div className="box box7"><Linechart title={"User Analytics"} data={UserData} grid dataKey1={"Active User"} dataKey2={"sales"}/></div>
           <div className="box box8"><Barchart {...barChartBoxRevenue}/></div>
           <div className="box box9"><Barchart {...barChartBoxVisit}/></div>

           
         </div>
       )
     }
     
     export default Home
     