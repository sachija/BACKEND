const technology=(req,res)=>{
    res.send(
        [
    {
      bollyhead:"Information Technology",
      bollydesc:"Information technology (IT) is the use of any computers, storage"  ,
      bollytags:['Mint','/ December 21 2020'],
    //   bollyimg:require("../pics/it.jpg")

    },
    {
        bollyhead:"Automation Technology",
        bollydesc:"Automation Testing is a software testing technique that performs"  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/auto.jpg")
  
    },
    {
        bollyhead:"Health Technology",
        bollydesc:"Medical technologies can save lives, improve health and  "  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/medical.jpg")

  
    },
    {
        bollyhead:"Electronics Technology",
        bollydesc:"Computers, smartphones, digital camera, RADAR (Radio Detection And Ranging) "  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/auto.jpg")
  
    },
    {
        bollyhead:"Artificial Intelligence",
        bollydesc:"Artificial intelligence was founded as an academic discipline in 1956 "  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/ai.jpg")
  
    },
    {
        bollyhead:"Biotechnology",
        bollydesc:"Biotechnology is the integration of natural sciences "  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/bio.jpg")
  
    },
    {
        bollyhead:"optical fiber Technology",
        bollydesc:"Optical fibre is the technology associated with data transmission using light "  ,
        bollytags:['Mint','/ December 21 2020'],
        // bollyimg:require("../pics/fiber.jpg")
  
    }

])}
module.exports.techData=technology