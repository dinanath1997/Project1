import React from "react";

import { Doughnut } from "react-chartjs-2";
	
const App = () => {
	

const data = {
	datasets: [
		{
		data: [3, 5, 6, 7],
		backgroundColor: ["orange", "purple", "skyblue", "green"],
		}
	]
}
	
return (
	
	<Doughnut data={data} />

);
}
	
export default App;
