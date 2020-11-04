import React from "react";

class MyTable extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div className="block block-table">
        <table>
        <tr>
          <th>Дата</th>
          <th>Верхний пресс</th>
          <th>Нижний пресс</th>
          <th>Отжимания</th>
          <th>Приседания</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </table>
      </div>
    )
  }
}

export default MyTable;
