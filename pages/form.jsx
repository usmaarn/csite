import axios from "axios";
import { useForm } from "react-hook-form";
import Input from "../components/input";
import Navbar from "../components/navbar";  
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import ImageUpload from "../components/imageUpload";
import { useState } from "react";
import Generate from "../components/generate";

const schema = yup.object({
  name: yup.string().trim().required().min(7).max(255),
  ward: yup.string().trim().required().min(7).max(255),
  polling_unit: yup.string().trim().required(),
  pvc_number: yup.string().trim(),
  phone_number: yup.string().required().matches(/^[0-9]+$/, "Must be only digits")
    .test('len', 'Must be exactly 11 characters', val => val.length == 11),
  address: yup.string().trim().required().min(7).max(255),
});

export default function Form({}) {
  const [details, setDetails] = useState(null);
  const [image, setImage] = useState(null);
  const {register, handleSubmit, formState: { errors },reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios.post('/api/save', data)
      .then(res => {
        setDetails({...res.data, avatar: image})
      })
      .catch(err => console.warn(err.response.data));
    // reset();
  }

  if(details) {
    return <div id="capture">
      <Generate details={details} />
      </div>
  }

  return (
    <section>
      <Navbar />
      <div className="max-w-[700px] mx-auto p-5 rounded-lg border">
        <h1 className="text-xl font-bold  text-red-400 uppercase mb-5">
          Fill your Information
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ImageUpload onChange={(file) => setImage(file)} />
          <Input error={errors.name} label="Full Name" {...register('name')} />
          <Input error={errors.ward} label="Ward" {...register('ward')} />
          <Input error={errors.polling_unit} label="polling unit" {...register('polling_unit')} />
          <Input error={errors.pvc_number} label="pvc number" {...register('pvc_number')} />
          <Input error={errors.phone_number} label="phone number" {...register('phone_number')} />
          <Input error={errors.address} label="resident" {...register('address')} />
          <button className="btn">Submit</button>
      </form>
    </div>
  </section>
  )
}