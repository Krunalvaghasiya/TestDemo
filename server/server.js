require('./config/config');

const _ = require('lodash');
const express = require('express');


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
