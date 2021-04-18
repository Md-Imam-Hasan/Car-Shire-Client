import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null)
  const onSubmit = data => {
    const newReview = {
      name: data.name,
      discription: data.discription,
      rate: data.rate,
      image: imageURL
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

  const handleImageUpload = e => {
    const imageData = new FormData();
    imageData.set('key', 'b3ce459487a7921c3a173fc17b867445');
    imageData.append('image', e.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="m-4 pt-4">
      <form className="mx-5 pe-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-4">
          <div className="col-sm-6 col-12">
            <label className='form-label' htmlFor="serviceTitle"><b>Service Title</b></label>
            <input type="text" className='form-control' placeholder='Enter Service Title' {...register("name", { required: true })} />
            {errors.name && <small className='text-danger'>Service Title is required</small>}
          </div>
          <div className="col-auto">
            <label className="visually-hidden" for="autoSizingSelect">Preference</label>
            <select className="form-select" {...register("rate", { required: true })} defaultValue="5" id="autoSizingSelect">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.rate && <small className='text-danger'>Service Title is required</small>}
          </div>
          <div className="col-sm-6 col-12">
            <label className='form-label' htmlFor="description"><b>Description</b></label>
            <textarea type="text" className='form-control' placeholder='Write Description' {...register("discription", { required: true })} cols="20" rows="5"></textarea>
            {errors.discription && <small className='text-danger'>Description is required</small>}
          </div>
          <div className="col-sm-6 col-12">
            <label className='form-label d-block'><b>Add a Photo</b></label>
            <button type='button' className='btn btn-outline-primary' onClick={() => document.getElementById('image-upload').click()}>
              Upload Photo
              </button>
            <input type="file" id='image-upload' className='form-control' hidden onChange={handleImageUpload} />
          </div>
        </div>
        <div className="d-flex mt-4 justify-content-end">
          <button className='btn btn-primary' type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Review;