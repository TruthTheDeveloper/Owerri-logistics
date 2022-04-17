// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {connectToDatabase} from "../../utils/mongodb";

type Data = {
  message: string
}

export default async function handler(req: NextApiRequest,res: NextApiResponse<Data>) {

  
  
  if(req.method === 'POST'){
    const {
      deliveryAddress,
      pickUpAddress,
      senderAddressLine1,
      senderAddressLine2,
      senderName,
      senderPhoneNumber,
      senderLocation,
      receiverAddressLine1,
      receiverAddressLine2,
      receiverName,
      receiverPhoneNumber,
      receiverLocation,
      category,
      item,
      weight,
      value,
      quantity
    } = req.body;

    const data = {deliveryAddress,
      pickUpAddress,
      senderAddressLine1,
      senderAddressLine2,
      senderName,
      senderPhoneNumber,
      senderLocation,
      receiverAddressLine1,
      receiverAddressLine2,
      receiverName,
      receiverPhoneNumber,
      receiverLocation,
      category,
      item,
      weight,
      value,
      quantity}

      console.log(data)
      

      const {db} = await connectToDatabase()

      const result = db.collection('owerrilogistic').insertOne(data)


    console.log(result, 'result');

    // client.close();
    res.status(200).json({ message: 'posted successfully' })
  }
}
