import React from 'react';
import Table from 'react-bootstrap/Table';

function TableClient({orders}) {
    return(
        <Table >
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
            {orders.map((orders)=>(
                 <tr key={orders.id}>
                 <td>{orders.id}</td>
                 <td>{orders.client}</td>
               </tr>
            ))
               
            }
          
          
        </tbody>
      </Table>
    )
}

export default TableClient;