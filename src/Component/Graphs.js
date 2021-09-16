import React from "react";
import { Line } from "react-chartjs-2";

const App = () => {

// Sample data
const data = {
	labels: ["Sunday", "Monday", "Tuesday",
	"Wednesday", "Thursday", "Friday", "Saturday"],
	datasets: [
	{
		label: "Hours Working in office",
		data: [2, 5, 7, 9, 7, 6, 4],
		fill: true,
		backgroundColor: "rgba(6, 156,51, .3)",
		borderColor: "#02b844",
	}
	]
}

return (
	<Line data={data} />
	
);
}

export default App;
