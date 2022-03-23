import type {NextPage} from "next";
import Layout from '../../../../components/Layout/Layout';
import ReviewItem from "../../../../components/page/ReviewItem";
import Provider from "../../../../store/hoc/Provider";

const Review:NextPage = () => {
    return (
                <ReviewItem/>
    )
}

export default Review;