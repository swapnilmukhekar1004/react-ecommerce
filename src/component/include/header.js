import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Remove } from "../../redux/action";

export default function Header() {
  //modal handle
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Navigation = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
  ];




  //selected data(add card) 
  const getdata = useSelector((state) => state.cardreducer);

  console.log(getdata);

  //console.log("data length:" , getdata.cards.length);
  const add_card_lenght = getdata.cards.length;
  const card_data = getdata.cards;



  //remove card
  const dispatch = useDispatch()
  const remove = (id) =>{
    dispatch(Remove(id))

  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            Shopy
          </Navbar.Brand>
          <button variant="primary" onClick={handleShow}>
            Add Card : {add_card_lenght}
          </button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {Navigation.map((items ,id) => {
                return (
                  <Nav.Link>
                    {" "}
                    <NavLink to={items.href}>{items.name}</NavLink>
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {card_data.map((card_data, id) => {
              return (
                <div className="col-lg-12 col-md-12">
                  <Card key={card_data.id} className="mb-4">
                    <Card.Img variant="top" src={card_data.image} />
                    <Card.Body>
                      <h5 className="product-title">{card_data.title}</h5>
                      <h3 className="product-price">
                        Price : ${card_data.price}
                      </h3>
                      <h6>{card_data.category}</h6>
                      {/* <p>{product.description.split(' ').slice(0, 2).join(' ')}.....</p> */}
                      {/* <Link to={`/productDetails/${product.id}`} className='product-view-details'>View Details</Link> */}
                      {/* <button type='button' onClick={ ()=> send(product)}>Add Card</button> */}

                      <button type="button" onClick={()=> remove(card_data.id)}>Remove</button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
