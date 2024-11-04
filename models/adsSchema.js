const {Schema, model} = require('mongoose');

const adsSchema = new Schema(
    {
        image_path: [{ type: String, required: true }], // Field to store the image path
        expire_date: {type: Date, required: true}, // Date when the ad will expire
      }
);


module.exports = model('ads', adsSchema);
