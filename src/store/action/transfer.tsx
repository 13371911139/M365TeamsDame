export const TRANSFER_DATA_DECREASE = 'TRANSFER_DATA_DECREASE';
export const TRANSFER_DATA_INCREASE = 'TRANSFER_DATA_INCREASE';

const transferDecrease =(data:any) =>({
    type:TRANSFER_DATA_DECREASE,
    dataload:data,
})

const transferIncrease =(data:any) =>({
    type:TRANSFER_DATA_DECREASE,
    dataload:data,
})


export const transferDataDe =(data:any) =>{
    return  (dispatch:any) =>{
        dispatch(transferDecrease(data))
    }
}


export const transferDataIn =(data:any) =>{
    return  (dispatch:any) =>{
        dispatch(transferIncrease(data))
    }
}

