import React from 'react';
import MyExercise from './MyExercise';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(MyExercise.state)
    }

    render() {
        return (
            <div className="block block-form">
                <form>
                    <div className="field">
                        <label htmlFor="date">Дата</label>
                        <input type="date" id="date" key="date"/>
                    </div>
                    <MyExercise/>
                    <button type="button" onClick={this.handleClick}>Добавить</button>
                </form>
            </div>

        )
    }
}

export default MyForm;
