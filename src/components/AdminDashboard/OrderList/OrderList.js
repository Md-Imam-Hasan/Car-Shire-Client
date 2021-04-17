import React from 'react';

const OrderList = () => {
  return (
    <div>

    </div>
  );
};

export default OrderList;
// import React, { useEffect, useState } from 'react';

// const ManageServices = () => {
//   const [serviceList, setServiceList] = useState([])
//   useEffect(() => {
//     setServiceList([]);
//     const url = 'http://localhost:5000/allService'
//     fetch(url)
//       .then(res => res.json())
//       .then(data => setServiceList(data))
//   }, [])

//   function deleteService(id) {
//     const url = `http://localhost:5000/delete/${id}`;
//     fetch(url, {
//       method: "delete"
//     })
//       .then(res => res.json())
//       .then(ok => {
//         if (ok) {
//           alert('Deleted Successfully')
//         }
//       })
//   }
//   return (
//     <div>
//       <h4 className='m-4'>Manage Services</h4>
//       <div className="pt-4 d-flex justify-content-center">
//         <table style={{ width: '90%' }}>
//           <thead>
//             <tr>
//               <th>Book Name</th>
//               <th>Author Name</th>
//               <th>Price</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               bookList.map(book => <tr key={book._id}>
//                 <td>{book.bookName}</td>
//                 <td>{book.author}</td>
//                 <td>${book.price}</td>
//                 <td>
//                   <button className='btn p-0'>
//                     <img src={editIcon} className='icon' alt="" />
//                   </button>
//                   <button className='btn' onClick={() => deleteService(`${book._id}`)}>
//                     <img src={deleteIcon} className='icon' alt="" />
//                   </button>
//                 </td>
//               </tr>)
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageServices;