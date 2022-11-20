const food = (req,res)=>{
    res.send(
    [
    {
      bollyhead:"Eggs and meat",
      bollydesc:"Eggs and meat” as it is commonly known in most parts of India, ...."  ,
      bollytags:['Mint','/ December 21 2020'],
    //   bollyimg:require("../pics/meat.jpg")

    },
    {
        bollyhead:" Vegetables",
        bollydesc:"Green leafy vegetables are already popular in the Indian diet. "  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/veg.jpg")
  
    },
    {
        bollyhead:"Rice plate",
        bollydesc:"While they are not always an option for are excellent sources of protein."  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/rice.jpg")

  
    },
    {
        bollyhead:"burger",
        bollydesc:"sometimes it is fine to eat fast food "  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/burger.jpg")
  
    },
    {
        bollyhead:"Fruits",
        bollydesc:" fruits are great for you. They contain all kinds of minerals."  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/fruits.jpg")
  
    },
    {
        bollyhead:"Juices",
        bollydesc:"juice  are a great source of proteins, calcium, iron and folic acid,cook.."  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/juice.jpg")
  
    },
    {
        bollyhead:"lemon",
        bollydesc:"lemon is flavourful,also renowned for its many healing properties and.."  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/lemon.jpg")
  
    }

])}
module.exports.foodData=food