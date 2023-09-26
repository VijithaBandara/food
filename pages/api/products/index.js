import dbConnection from "../../../utill/mongo"
import getProductModel from "../../../modals/Product"


export default async function handler(req, res) {
    const {method} = req;

    await dbConnection()

    if(method === "GET"){}
    if(method === "GET"){
        try{
            const product = await getProductModel().findOneAndUpdate(req.body);
            res.status(201).json(product)
        }catch (err){
            console.log(err)
            res.status(500).json(err);
        }
    }

  }