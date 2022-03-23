import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    allItems:[],
    deliveryAddress:'',
    pickUpAddress:"",
    senderAddressLine1:"",
    senderAddressLine2:"",
    senderName:"",
    senderPhoneNumber:"",
    senderLocation:"",
    receiverAddressLine1:"",
    receiverAddressLine2:"",
    receiverName:"",
    receiverPhoneNumber:"",
    receiverLocation:"",
    category:"",
    item:"",
    weight:"",
    value:"",
    quantity:"",
    deliveryMethod:""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.DELIVERY_ADDRESS:
            return {
                ...state,
                deliveryAddress:action.deliveryAddress
            }
        case ActionTypes.PICK_UP_ADDRESS:
            return {
                ...state, 
                pickUpAddress:action.pickUpAddress
            }
        case ActionTypes.SENDER_ADDRESS_LINE1:
            return{
                ...state,
                senderAddressLine1:action.senderAddressLine1
            }
        case ActionTypes.SENDER_ADDRESS_LINE2:
            return{
                ...state,
                senderAddressLine2:action.senderAddressLine2
            }

        case ActionTypes.SENDER_NAME:
            return{
                ...state,
                senderName:action.senderName
            }
        case ActionTypes.SENDER_PHONENUMBER:
            return{
                ...state,
                senderPhoneNumber:action.senderPhoneNumber
            }

        case ActionTypes.SENDER_LOCATION:
            return{
                ...state,
                senderLocation:action.senderLocation
            }
        case ActionTypes.RECEIVER_ADDRESS_LINE1:
            return{
                ...state,
                receiverAddressLine1:action.receiverAddressLine1
            }
        case ActionTypes.RECEIVER_ADDRESS_LINE2:
            return{
                ...state,
                receiverAddressLine2:action.receiverAddressLine2
            }

        case ActionTypes.RECEIVER_NAME:
            return{
                ...state,
                receiverName:action.receiverName
            }
        case ActionTypes.RECEIVER_PHONENUMBER:
            return{
                ...state,
                receiverPhoneNumber:action.receiverPhoneNumber
            }

        case ActionTypes.RECEIVER_LOCATION:
            return{
                ...state,
                receiverLocation:action.receiverLocation
            }

        case ActionTypes.CATEGORY:
            return{
                ...state,
                category:action.category
            }

        case ActionTypes.ITEM:
            return{
                ...state,
                item:action.item
            }

        case ActionTypes.WEIGHT:
            return{
                ...state,
                weight:action.weight
            }
        
        case ActionTypes.VALUE:
            return {
                ...state,
                value:action.value
            }

        case ActionTypes.DELIVERY_METHOD:
            return{
                ...state,
                deliveryMethod:action.deliveryMethod
            }

        default:
            return state;
    }
}

export default reducer;
