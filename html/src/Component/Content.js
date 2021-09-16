import React from "react";
import PieChart from '../Component/PieChart'
import Data from '../Component/Data'
import Graphs from '../Component/Graphs'


function Cont() {
    return (
        <div>
    <div class="container" >
    <div className="Pie">
     <PieChart />
     </div>
     <div className="Data">
         <Data />
     </div>
   </div>

  
   <div class="container1">
       <div className="graph">
     <Graphs />
     </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <div class="container2">
        <table>
        <tr>
                                  <th>Company</th>
                                  <th>Employee </th>
                                  <th>Employee ID</th>
                                  <th>Employee Detail</th>
                                </tr>
                                <tr>
                                  <td>Softdel Pvt Ltd</td>
                                  <td>Sakshi B</td>
                                  <td>1318</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Softdel Pvt Ltd</td>
                                  <td>Sumit Singh Rajput</td>
                                  <td>1321</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Softdel Pvt Ltd</td>
                                  <td>Krishna S</td>
                                  <td>1322</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Softdel Pvt Ltd</td>
                                  <td>Sumit A</td>
                                  <td>1319</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Softdel Pvt Ltd</td>
                                  <td>Akshaya </td>
                                  <td>1317</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Softdel Pvt Ltd</td>
                                  <td>Dinanath P</td>
                                  <td>1316</td>
                                  <td></td>
                                </tr>
            </table> 
    </div>
</div>
    )
}
export default Cont;