import React from 'react'
import { useState } from 'react';

export default function Admin() {

    const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
  const [quantity,SetQuantity] = useState("");
  const[img,setImage] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'http://localhost:5000/register', {
			method: "post",
			body: JSON.stringify({ name, price,quantity,img }),
			headers: {  
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setPrice("");
			setName("");
      SetQuantity("");
      setImage("");
		}
	}
	return (
		<>
			<h1> Add Products </h1>
			<form action="">
				<input type="text" placeholder="name"
				value={name} onChange={(e) => setName(e.target.value)} />
				<input type="number" placeholder="price"
				value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="quantity"
				value={quantity} onChange={(e) => SetQuantity(e.target.value)} />

        <input type='text' placeholder='img' value={img} onChange={(e)=> setImage(e.target.value)}/>
				<button type="submit"
				onClick={handleOnSubmit}>submit</button>
			</form>

		</>
    );
}