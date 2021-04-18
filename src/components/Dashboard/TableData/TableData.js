import React from 'react';

const TableData = ({ order }) => {

  const handleChange = (e) => {
    console.log(e.target.value, order._id);
    const id = order._id;
    console.log(id);
    order.status = e.target.value;
    console.log(order);
    fetch(`https://obscure-coast-14600.herokuapp.com/update/${order._id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(result => result.json())
      .then(ok => console.log('ok'))
  }
  return (
    <tr>
      <td>{order.userName}</td>
      <td>{order.email}</td>
      <td>{order.serviceTitle}</td>
      <td>
        <select onChange={handleChange} className="form-select" aria-label="Default select example">
          <option selected value="Pending">{order.status}</option>
          <option value="Pending">Pending</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Done">Done</option>
        </select>
      </td>
    </tr>
  );
};

export default TableData;