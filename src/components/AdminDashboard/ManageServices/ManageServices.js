import React, { useEffect, useState } from 'react';

const ManageServices = () => {
  const [serviceList, setServiceList] = useState([])
  useEffect(() => {
    setServiceList([]);
    const url = 'http://localhost:5000/allService'
    fetch(url)
      .then(res => res.json())
      .then(data => setServiceList(data))
  }, [])

  function deleteService(id) {
    const url = `http://localhost:5000/delete/${id}`;
    fetch(url, {
      method: "delete"
    })
      .then(res => res.json())
      .then(ok => {
        if (ok) {
          alert('Deleted Successfully')
        }
      })
  }
  return (
    <div>
      <h4 className='m-4'>Manage Services</h4>
      <div className="pt-4 d-flex justify-content-center">

      </div>
    </div>
  );
};

export default ManageServices;