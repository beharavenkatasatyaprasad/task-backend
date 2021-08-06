const express = require("express");
const router = express.Router();

router.post("/postData", (req, res) => {
  const {
    name,
    experience,
    description,
    qualification,
    age,
    gender,
    status,
    picture,
    email,
    mbl,
  } = req.body;

  let validationErrors = []
    if (!name) {
        validationErrors.push('name field is required !!!')
    }
    if (!experience) {
        validationErrors.push('experience field is required !!!')
    }
    if (!description) {
        validationErrors.push('description field is required !!!')
    }
    if (!qualification) {
        validationErrors.push('qualification field is required !!!')
    }
    if (!gender) {
        validationErrors.push('gender field is required !!!')
    }
    if (!status) {
        validationErrors.push('status field is required !!!')
    }
    if (!email) {
        validationErrors.push('email field is required !!!')
    }
    if (!picture) {
        validationErrors.push('picture field is required !!!')
    }
    if (!age) {
        validationErrors.push('age field is required !!!')
    }
    if (!mbl) {
        validationErrors.push('mobile number field is required !!!')
    }

    
});

module.exports = router;
