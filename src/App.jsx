import { useState } from "react";
import Start from "./Components/Start";

function App() {
	const [start, setStart] = useState(false);
	//start app
	const startQuiz = () => {
		setStart(true);
	};
	return <main>{start ? "" : <Start start={startQuiz} />}</main>;
}

export default App;
