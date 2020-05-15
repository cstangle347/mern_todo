import React from 'react';

const Task = (props) => {
	const { task, index, list, setList } = props;
	const onClick = () => {
    setList(() => list.filter(task => list.indexOf(task) !== index));
	}

	const onChange = (e) => {
    list[index].isComplete = !list[index].isComplete;
    setList([...list]);
	};


	return (
		<div className="container bg-secondary w-50 mt-3">
			<h4>{task.name}</h4>
			<div className="container">
				<lable htmlFor="checkbox">Compleated?  </lable>
				<input 
					onChange={onChange} 
					type="checkbox" name="" 
					checked={task.isComplete}
				/>
				<button onClick={ onClick } className="btn btn-sm btn-danger ml-3 mb-1">Delete</button>
			</div>
		</div>
	);
};

export default Task;