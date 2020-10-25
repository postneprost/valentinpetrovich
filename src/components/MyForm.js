import React from "react";


function MyForm() {
    return (
        <div className="block block-form">
            <form>
                <div className="field">
                    <label for="date">Дата </label>
                    <input type="date"></input>
                </div>
                <div className="field">
                    <label for="highPress">Верхний пресс </label>
                    <input type="text" id="highPress"></input>
                </div>
                <div className="field">
                    <label for="lowPress">Нижний пресс </label>
                    <input type="text" id="lowPress"></input>
                </div>
                <div className="field">
                    <label for="pushups">Отжимания </label>
                    <input type="text" id="pushups"></input>
                </div>
                <div className="field">
                    <label for="squats">Приседания </label>
                    <input type="text" id="squats"></input>
                </div>
                <button type="add">Добавить</button>
            </form>
        </div>
    )
}

export default MyForm;
