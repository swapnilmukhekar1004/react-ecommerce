import React, { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [show, setShow] = useState([]);


  // Function to handle form input changes
  const handleData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };



  //post data

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:3000/signup-post",
        data
      );

      console.log("data save in db", response);
    } catch (error) {
      console.log("post signup error");
    }
  };


  //get data 

  useEffect(() => {
    axios.get("http://localhost:3000/signup-post").then((response) => {
      console.log("response data", response.data);
      setShow(response.data);
    });
  }, []);

  return (
    <>
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <lable>Username</lable>
          <input type="text" name="username" value={data.username} onChange={handleData} /> <br></br>
          <lable>Gmail</lable>
          <input type="email" name="email"  value={data.email} onChange={handleData} /> <br></br>
          <lable>Password</lable>
          <input type="password" name="password" value={data.password} onChange={handleData} />{" "}
          <br></br>
          <input type="submit"></input>
        </form>
      </div>

      <div>
        <div className="mt-5">
          <h1>Result Show</h1>
          <br></br>
          {show.map((item) => {
            return (
              <ul>
                <li> Username :{item.username}</li>
                <li> Gmail :{item.gmail}</li>
                <li>Password : {item.password}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}
