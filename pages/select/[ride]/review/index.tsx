import type {NextPage} from "next";
import ReviewItem from "../../../../components/page/ReviewItem";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import {connectToDatabase} from "../../../../utils/mongodb";

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

    console.log('server kided in', context)

    const {db} = await connectToDatabase()

  const data = await db.collection('owerrilogistic').find().toArray()

  console.log(data, 'data')

    return {
        props:{
          result:data.map((info: { _id: { toString: () => any; }; deliveryAddress: any; pickUpAddress: any; senderAddressLine1: any; senderAddressLine2: any; senderName: any; senderPhoneNumber: any; senderLocation: any; receiverAddressLine1: any; receiverAddressLine2: any; receiverName: any; receiverPhoneNumber: any; receiverLocation: any; category: any; item: any; weight: any; value: any; quantity: any; }) => ({
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

