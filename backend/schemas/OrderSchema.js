const{Schema} = require('mongoose');

const OrderSchema = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
    qty: Number,
    mode: String,
    
});
module.exports = {OrderSchema};