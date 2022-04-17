import type {NextPage} from "next";
import ReviewItem from "../../../../components/page/ReviewItem";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import {MongoClient} from 'mongodb';

interface Props{
    props:any
}


const Review:NextPage<Props> = (props) => {

    console.log(props, 'props')
    return (
                <ReviewItem props={props}/>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {

    return{
        fallback:false,
        paths:[
            {
                params:{
                    ride:'motorbike'
                }
            },
            {
                params:{
                    ride:'car'
                }
            },
            {
                params:{
                    ride:'van'
                }
            },
            {
                params:{
                    ride:'truck'
                }
            }
        ]
    }
    // ...
}

export const getStaticProps: GetStaticProps = async (context) => {

    const client = await MongoClient.connect("mongodb+srv://Truth:wYV3ELA1MFAKWmpS@cluster0.692kb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

    const db = client.db();
    const meetupsCollection = db.collection('owerrilogistic');
    const result = await meetupsCollection.find().toArray();

    client.close()

    return {
        props:{
          result:result.map(info => ({
            id:info._id.toString(),
            deliveryAddress:info.deliveryAddress,
            pickUpAddress:info.pickUpAddress,
            senderAddressLine1:info.senderAddressLine1,
            senderAddressLine2:info.senderAddressLine2,
            senderName:info.senderName,
            senderPhoneNumber:info.senderPhoneNumber,
            senderLocation:info.senderLocation,
            receiverAddressLine1:info.receiverAddressLine1,
            receiverAddressLine2:info.receiverAddressLine2,
            receiverName:info.receiverName,
            receiverPhoneNumber:info.receiverPhoneNumber,
            receiverLocation:info.receiverLocation,
            category:info.category,
            item:info.item,
            weight:info.weight,
            value:info.value,
            quantity:info.quantity
          }))
        },
        revalidate:1
      }
}


export default Review;