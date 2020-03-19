
import {ADD_F,REMOVE_F} from "../actions/carActions"

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

// default parameters (advanced JS feature)
export const carReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_F:
      // initialState.car.features.push(action.payload);
      // initialState.additionalPrice += action.payload.price;
      // console.log("Im sending this back", state)
      // return state;
      return{
        ...state,
        additionalPrice: action.payload.price + state.additionalPrice,
        car : {...state.car, features:[...state.car.features,action.payload]},
        additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
      }
    case REMOVE_F:
      return {
        ...state,
        additionalPrice:state.additionalPrice -  action.payload.price,
        car : {...state.car, features:state.car.features.filter(feature=>feature.id!==action.payload.id)},
        additionalFeatures: [...state.additionalFeatures, action.payload]
      }
    default:
      return state;






  }
  
};


// import {ADD_F,REMOVE_F} from "../actions/carActions"

// export const initialState = [
//   {additionalPrice: 0,
//     car: {
//       price: 26395,
//       name: '2019 Ford Mustang',
//       image:
//         'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//       features: []
//     },
//     additionalFeatures: [
//       { id: 1, name: 'V-6 engine', price: 1500 },
//       { id: 2, name: 'Racing detail package', price: 1500 },
//       { id: 3, name: 'Premium sound system', price: 500 },
//       { id: 4, name: 'Rear spoiler', price: 250 }
//     ]},
//   {additionalPrice: 0,
//     car: {
//       price: 22395,
//       name: '2019 Ford Mustang',
//       image:
//         'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//       features: []
//     },
//     additionalFeatures: [
//       { id: 1, name: 'V-6 engine', price: 1500 },
//       { id: 2, name: 'Racing detail package', price: 1500 },
//       { id: 3, name: 'Premium sound system', price: 500 },
//       { id: 4, name: 'Rear spoiler', price: 250 }
//     ]}
// ]

// // default parameters (advanced JS feature)
// export const carReducer = (state = initialState, action) => {
//   switch(action.type){
//     case ADD_F:
//       // initialState.car.features.push(action.payload);
//       // initialState.additionalPrice += action.payload.price;
//       // console.log("Im sending this back", state)
//       // return state;
//       return{
//         ...state,
//         additionalPrice: action.payload.price + state.additionalPrice,
//         car : {...state.car, features:[...state.car.features,action.payload]},
//         additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
//       }
//     case REMOVE_F:
//       return {
//         ...state,
//         additionalPrice:state.additionalPrice -  action.payload.price,
//         car : {...state.car, features:state.car.features.filter(feature=>feature.id!==action.payload.id)},
//         additionalFeatures: [...state.additionalFeatures, action.payload]
//       }
//     default:
//       return state;
//   }
// };