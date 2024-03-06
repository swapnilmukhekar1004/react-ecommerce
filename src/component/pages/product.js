import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';



export default function Product() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);




    if (loading) {
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
        <>
            <div className='container'>

                 <div>
                    <h1 className='heading-title'>Product</h1>
                 </div>


                <div className='row'>
                    {data.map((product) => {
                        return (

                            <div className='col-lg-4 col-md-6'>
                                <Card key={product.id} className='mb-4'>
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <h5 className='product-title'>{product.title}</h5>
                                        <h3 className='product-price'>Price : ${product.price}</h3>
                                        <h6>{product.category}</h6>
                                        {/* <p>{product.description.split(' ').slice(0, 2).join(' ')}.....</p> */}
                                        <Link to={`/productDetails/${product.id}`} className='product-view-details'>View Details</Link>

                                    </Card.Body>
                                </Card>


                            </div>

                        )

                    })}


                </div>

            </div>
        </>
    )
}
