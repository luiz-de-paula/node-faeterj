const express = require('express');
// import express from 'express';

// const server = express();

// server.get('/teste', () => {
//   console.log('testando...');
// })

// 

const server = express();
const users = ['Rubens', 'Eliete', 'Marina'];



server.get('/users/:index', (req, res) => {
  const {index} = req.params;


  return res.json(users[index]);
})

server.listen(3000)
