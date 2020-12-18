import React from 'react';
import Table from "react-bootstrap/Table"


const AboutTable = () => {
    return (
        <Table className="w-50 p-xl-0"striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Vardas</th>
            <th>Pavarde</th>
            <th>Pareigos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Tadas</td>
            <td>Čibiras</td>
            <td>Vadovas</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tomas</td>
            <td>Rumša</td>
            <td>Pavaduotojas</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Andrius</td>
            <td>Ališauskas</td>
            <td>Pardavėjas</td>
          </tr>
        </tbody>
      </Table>
    );
};

export default AboutTable;