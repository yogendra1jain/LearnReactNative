import {ADD_PLACE,DELETE_PLACE,SELECT_PLACE,DESELECT_PLACE} from '../Actions/actionTypes';

const initialState = {
    places:[],
    selectedPlaces:null
}

const placeReducer = (state=initialState,action)=>
{
switch (action.type){
 
    //Logic to Add a place
   case ADD_PLACE:
   return {...state,places:state.places.concat({
        key:Math.random(),
       name:action.placeName,
       placeImage:{
         uri:'https://www.jaipur.org.uk/images/amer-palace-jaipur.jpg'
       }
     })}


    //logic to deleting the place
     case DELETE_PLACE:
    return {
        ...state,places:state.places.filter((place)=>
        {
    return place.key!= state.selectedPlace.key;
        }),
        selectedPlace:null
      }


//Logic to selecting the place
    case SELECT_PLACE:
   return  {...state,
    selectedPlace:state.places.find((place)=>
    {
      if(place.key=action.placeKey)
      return true
    })}


//Logic to deslecting the place
    case DESELECT_PLACE:
    return {
        ...state,
        selectedPlace:null
    }

    //Default returning the initial state
    default:
        return state
}
}

export default placeReducer;