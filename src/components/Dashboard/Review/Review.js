import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const newReview = {
      name: data.name,
      discription: data.discription,
      rate: data.rate,
      image: loggedInUser.photoURL
    }
    console.log(newReview);
    const url = `https://obscure-coast-14600.herokuapp.com/addReview`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .then(data => {
        data && alert("Thank you for the feedback")
      })
  };

  return (
    <div className="m-4 pt-4">
      <form className="mx-5 pe-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-4">
          <div className="col-sm-6 col-12">
            <label className='form-label' htmlFor="name"><b>Your Name</b></label>
            <input type="text" className='form-control' placeholder='Enter Your Name' {...register("name", { required: true })} />
            {errors.name && <small className='text-danger'>Name is required</small>}
          </div>
          <div className="col-auto">
            <label className='form-label' htmlFor="rate"><b>Rate us</b></label>
            <select className="form-select" {...register("rate", { required: true })} defaultValue="5" id="autoSizingSelect">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.rate && <small className='text-danger'>Please rate us</small>}
          </div>
          <div className="col-sm-6 col-12">
            <label className='form-label' htmlFor="discription"><b>Discription</b></label>
            <textarea type="text" className='form-control' placeholder='Write Description' {...register("discription", { required: true })} cols="20" rows="5"></textarea>
            {errors.discription && <small className='text-danger'>Description is required</small>}
          </div>
        </div>
        <div className="d-flex mt-4 justify-content-end">
          <button className='btn btn-brand' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Review;