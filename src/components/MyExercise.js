import React from "react";
import exercisesData from './exercisesData';


class MyExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.handleInputChange = this.handleInputChange.bind(this);
      }

      handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
          });
      }

    render() {
        const exercises = exercisesData;
        const exercisesComponents = exercises.map((exercise) =>
            <div className="field">
            <label htmlFor={exercise.id}>{exercise.label}</label>
            <input type={exercise.type} label={exercise.label} id={exercise.id} key={exercise.id} name={exercise.id} onChange={this.handleInputChange}/>
            </div>
        )
        return (
            <div>
                {exercisesComponents}
            </div>
        )
    }
}

export default MyExercise;
