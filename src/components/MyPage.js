import React from "react";
import MyTable from './MyTable';
import MyForm from './MyForm';

class MyPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <MyTable/>
                <MyForm/>
            </div>
        )
    }
}

export default MyPage;
