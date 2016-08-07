var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var Fooddataschema = new Schema({
			type:String,
			id:  String,
			dishname: String,
			img: String,
			price: Number,
			rating: String,
			chefName: String
});

var fooddata = mongoose.model('fooddata',Fooddataschema);
var breakfastdata = mongoose.model('breakfastdata',Fooddataschema);
var dinnerdata = mongoose.model('dinnerdata',Fooddataschema);
var dessertdata = mongoose.model('dessertdata',Fooddataschema);
console.log("Created model");

module.exports={fooddata:fooddata,
				breakfastdata:breakfastdata,
				dinnerdata:dinnerdata,
				desserttdata:dessertdata
				};