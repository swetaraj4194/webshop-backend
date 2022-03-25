const { Router, response } = require("express");
// import React from 'react'
// import { useState } from 'react';
const Users = require("../models").users;

// const bcrypt = require("bcrypt");
// import axios from "axios";
const router = new Router();


// const[users,setUser]=useState([])
// const[name,setName]=useState([])
// const[emai,setEmail]=useState([])
// const[password,setPassword]=useState([])

// const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/signup");

//       setUser(response.data);
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

// const userData=users.map((user)=>{
// const name=user.name
// const email=user.email
// const password=user.password
// return(


// router.post(`http :4000/users name=${name} email=${email} password=${password}`, async (request, response) => {
//   try {
//     const { name, email, password, phone } = request.body;

//     const checkEmail = await Users.findOne({ where: { email: email } });
//     if (checkEmail) {
//       response.status(401).send("Email already exists");
//     }
//     const user = await Users.create({ name, email, password, phone });
//     response.send(user);
//   } catch (e) {
//     console.log(e.message);
//     next(e);
//   }
// })
// )});


router.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(404).send("please enter all data");
    } else {
      const newUser = await Users.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      res.send(newUser);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// const createNewUser = async (name, email, password) => {
//   try {
//     const newUser = await User.create({
//       name: name,
//       email: email,
//       password: password,
//     });
//     console.log(newUser);
//   } catch (e) {
//     console.log(e.message);
//   }
// };
module.exports = router;
