import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Audio } from 'react-loader-spinner';
const Phone = () => {
    const [phone, setPhone] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
// fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
// .then(res => res.json())
// .then(data => setPhone(data.data))

axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
.then(data => {
    const phoneData = data.data.data;
    const phoneFakeData = phoneData.map(phone => {
        const obj ={
            name: phone.phone_name,
            price: parseInt(phone.slug.split('-')[1])
        }
        return obj;
    })
    setPhone(phoneFakeData)
    setLoading(false)
})
    },[])
    return (
        <div>

{loading && <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>}
            <h2 className="text-5xl">phone : {phone.length}</h2>
            <BarChart width={1200} height={400} data={phone}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={'name'}></XAxis>
          <XAxis></XAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phone;