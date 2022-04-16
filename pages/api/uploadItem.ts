// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {MongoClient} from 'mongodb';

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
      

      const client = await MongoClient.connect("mongodb+srv://Truth:wYV3ELA1MFAKWmpS@cluster0.692kb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

      console.log(client)
  
      const db = client.db()


    const meetupsCollection = db.collection('owerrilogistic')

    const result = await meetupsCollection.insertOne(data)

    console.log(result, 'result');

    // client.close();
    res.status(200).json({ message: 'posted successfully' })
  }
}
