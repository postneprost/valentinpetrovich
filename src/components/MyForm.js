import React from 'react';
import MyExercise from './MyExercise';
import exercisesData from './exercisesData';

function MyForm() {
    const exercisesComponents = exercisesData.map(exercises =>
        <MyExercise type={exercises.type} label={exercises.label} id={exercises.id} key={exercises.id}/>)
    return (
        <div className="block block-form">
            <form>
                <div className="field">
                    <label htmlFor="date">Дата</label>
                    <input type="date" for="date" key="date"/>
                </div>
                {exercisesComponents}
                <button type="add">Добавить</button>
            </form>
        </div>
    )
}

export default MyForm;
