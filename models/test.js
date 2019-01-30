const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/testdb', { useNewUrlParser: true }
);
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  title: { type: String },
  status: { type: Boolean, default: true }
});

const Test = mongoose.model("Tests", TestSchema);
module.exports = Test;