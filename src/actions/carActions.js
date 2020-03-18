export const ADD_F = "ADD_F";
export const REMOVE_F = "REMOVE_F";

export const addFeature = feature => {
    return {type : ADD_F,payload:feature};
};
export const removeFeature = feature => {
    return {type : REMOVE_F,payload:feature};
};