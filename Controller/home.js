const homepage =(req,res)=>{
res.send (
 [
    {    
        id:1,
        header:"Agra,New Delhi",
        description:"city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 210 kilometres (130 mi) south of the national capital New Delhi and 378 km west of the state capital Lucknow.",
        tags:['ART','/ December 21 2020'],
        // background:require("../pics/agra.jpg")

    },
    {   id:2,
        header:"Hava Mahal,Rajasthan",
        description:"Hawa Mahal, is a palace in Jaipur, India, so named because it was essentially a high screen wall built so the women of the royal household could observe st.",
        tags:['ART','/ December 21 2020'],
        // background:require("../pics/hava.jpg")
    },
    {   id:3,
        header:"Leh,The capital of Ladakh",
        description:"Leh, the capital of Ladakh is spreading rapidly in all directions. Leh is situated in a fertile side valley of the Indus river. Since the 17th century Leh has been the capital of the Ladakh region",
        tags:['ART','/ December 21 2020'],
        // background:require("../pics/leh.jpg")

    },

    {
      title:"HAVA mahal famous site in jaipur",
      tag:"Mint / December 2020"  ,
    //   image:require("../pics/hava.jpg")
    },
    {
        headding:"dream city",
        brief:"One of the most popular hill stations in India ,mumbai offers the most magnificent views",
        data:['Mint','/ December 21 2020'],
        // backimg:require("../pics/mumbai.jpg")


    },
    {
        headding:"Mumbai",
        brief:"a place for everyone for everything",
        data:['Mint','/ December 21 2020'],
        // backimg:require("../pics/mumbai.jpg")


    },
    {
        headding:"ladakh",
        brief:"Ladakh a place of peace",
        data:['Mint','/ December 21 2020'],
        // backimg:require("../pics/ladakh.jpg")


    }, 
    {
        headding:"Bombay",
        brief:"mumbai city of dreams",
        data:['Mint','/ December 21 2020'],
        // backimg:require("../pics/mumbai2.jpg")


    },

    {
        number:"2",
        toptext:"Ladakh ",
        midtext:['','/ December 21 2020'],
        // textimg:require("../pics/ladakh.jpg")
    },
    {
        number:"3",
        toptext:"Mumbai Maharashtra",
        midtext:['','/ December 21 2020'],
        // textimg:require("../pics/mumbai.jpg")
    },
    {
        number:"4",
        toptext:"Mumbai,Maharashtra",
        midtext:['','/ December 21 2020'],
        // textimg:require("../pics/mumbai.jpg")
    },

   {
        titlehead:"Follow your passion and Dreams as well",
        deschead:"Mumbai, formerly Bombay, city, capital of Maharashtra state, southwestern India..",
        taghead:["TECH","/ TODAY AT 11:54"]

    },
    {
        titlehead:"Follow your passion and Dreams as well",
        deschead:"Mumbai, formerly Bombay, city, capital of Maharashtra state, southwestern India. It is the country’s financial and commercial centre and its principal port on the Arabian Sea. in the world. It was built on a site of ancient settlement, and it took its name from the local goddess Mumba—a form of Parvati, the consort of Shiva, one of the principal deities of Hinduism",
        taghead:["STYLE","/ December 21 2020"]

    },
    {
        titlehead:"Follow your passion and Dreams as well",
        deschead:"Mumbai, formerly Bombay, city, capital of Maharashtra state, southwestern India..",
        taghead:["TECH","/ December 21 2020"]

       }   
])}
module.exports.homeData = homepage;
