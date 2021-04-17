import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    // let newBook = {...addBook}
    // const newService = {
    //   serviceTitle: data.serviceTitle,
    //   description: data.description,
    //   price: data.price,
    //   imageURL: imageURL
    // }
    // console.log(newService);
    // const url = `http://localhost:5000/addService`;
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newService)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     data && alert("New Service's Information Added Successfully")
    //   })
  };
  return (
    <div>
      <h4 className='m-4'>Make Admin</h4>
      <div className="m-4 pt-4">
        <form className="mx-5 pe-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-4">
            <div className="col-sm-6 col-12">
              <label className='form-label' htmlFor="email"><b>Email</b></label>
              <input type="email" className='form-control' placeholder='Enter Email' {...register("email", { required: true })} />
              {errors.email && <small className='text-danger'>Email is required</small>}
            </div>
          </div>
          <div className="mt-4 ">
            <button className='btn btn-primary' type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;