import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';


export default function ProductDetails() {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setCard(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);








  if (!card) {
    return <div>
      <div className='loader-main'>
        <div className='position-relative w-100 min-vh-100'>
          <div className='loader-spinner-section'>
            <Spinner animation="border" /><br />
            Loading Please Wait
          </div>
        </div>

      </div>


    </div>;
  }

  return (
    <div>


      <div className='container'>

        <div>
          <h1 className='heading-title line-animation'>Details Page{">"} </h1>
        </div>


        <div className='details-description-details'>

          <div>
            <div className='row '>
              <div className='col-lg-5'>
                <img src={card.image} className='product-detail-img' />

              </div>

              <div className='col-lg-7 text-start text-md-center text-lg-start'>
                <h2 className='product-descritption-title'>{card.title}</h2>
                <p className='product-details-category'>category : {card.category}</p>
                <p className='product-details-price'>Price: ${card.price}</p>
                <p className='details-description'><span className='fw-bold'> Description:</span> {card.description}</p>


              </div>

            </div>

          </div>






        </div>

      </div>

      {/* <h2>{card.title}</h2>
      <p>{card.price}</p>
      <p>{card.category}</p>
      <img src={card.image} />

      <p>{card.description}</p> */}

    </div>




  )
}
