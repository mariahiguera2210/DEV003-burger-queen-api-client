
import React from 'react'

export default function Table({products}) {
  return (
    <table class="table table-bordered" style={{ fontSize: '18px' }}>
          <thead>
            <tr>
              <th>Productos</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
      {products.map((element, index) => (

            <tr key={index}>
              <td> {element.product.name}</td>
              <td> {element.qty}</td>
            </tr>

      ))}
                </tbody>
        </table>
  )
}

