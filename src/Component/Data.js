import React from "react";
import { Doughnut } from "react-chartjs-2";
	
const App = () => {
	

const data = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],
	datasets: [
		{
		data: ["orange", "purple", "skyblue", "green"],
		backgroundColor: ["orange", "purple", "skyblue", "green"],
		}
	]
}
	
return (
	<Doughnut data={data} />
);
}
	
export default App;
