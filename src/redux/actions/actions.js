export const Add = (iteam) => {
  return {
    type: "ADD_DATA",
    payload: iteam,
  };
};


export const Delete = (id) => {
  return {
    type: "DELETE_DATA",
    payload: id,
  };
};

export const Update_Data =(items,id)=>{
    return {
        type:"UPDATE_DATA", 
        payload:items,
        d:id 
    }
}