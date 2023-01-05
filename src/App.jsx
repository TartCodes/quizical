import { useState, useEffect } from "react";
import Start from "./Components/Start";

function App() {
	//states
	const [start, setStart] = useState(false);
	const [quizData, setQuizData] = useState([]);
	const [quizOptions, setQuizOptions] = useState({
		category: "",
		difficulty: ""
	});
	//api
	useEffect(
		() => {
			fetch(
				`https://opentdb.com/api.php?amount=5&category=${quizOptions.category}&difficulty=${quizOptions.difficulty}`
			)
				.then((res) => res.json())
				.then((data) => setQuizData(data.results));
		},
		[quizOptions],
		[start]
	);
	console.log(quizData.map((e) => e.category));
	//start app
	const startQuiz = () => {
		setStart(true);
	};

	//update quiz options
	const updateQuizOptions = (e) => {
		const { name, value } = e.target;
		setQuizOptions((prevOptions) => {
			return {
				...prevOptions,
				[name]: value
			};
		});
	};

	//render categories?
	// const renderCatergories = () => {};

	return (
		<main>
			{start ? (
				""
			) : (
				<Start
					start={startQuiz}
					updateQuizOptions={updateQuizOptions}
				/>
			)}
		</main>
	);
}

export default App;
