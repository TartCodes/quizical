const Start = (props) => {
	return (
		<div>
			<h1>Quizzical!</h1>
			<p>A short and simple trivia game</p>
			<div className="quiz-options">
				<label htmlFor="difficulty">Difficulty</label>
				<select
					name="difficulty"
					onChange={props.updateQuizOptions}
				>
					<option value="">Any Difficulty</option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
				<label htmlFor="category">Select Category</label>
				<select
					id="category"
					name="category"
					onChange={props.updateQuizOptions}
				>
					<option value="1">Any Category</option>
					<option value="2">Entertainment</option>
				</select>
			</div>
			<button>Begin</button>
		</div>
	);
};

export default Start;
