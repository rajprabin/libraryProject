module.exports=function(err,req,res,next)
{
    if (err) {
        res.status(400).send({'descrption':'some thing failed','message':err.message})
        //console.log(err)
    }else res.status(500).send({'descrption':'InternalServerError'})
       

}