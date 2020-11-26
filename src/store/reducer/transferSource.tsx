import { TRANSFER_DATA_INCREASE ,TRANSFER_DATA_DECREASE } from '../action/transfer';
import _ from 'lodash';

const initialState ={
    data:[
        {
            id:0,
            content:'content1',
            seleteable:true
        },
        {
            id:1,
            content:'content2',
            seleteable:true
        },
        {
            id:2,
            content:'content3',
            seleteable:false
        },
        {
            id:3,
            content:'content4',
            seleteable:true
        },
        {
            id:4,
            content:'content5',
            seleteable:false
        }
        ,
        {
            id:5,
            content:'content6',
            seleteable:false
        },
        {
            id:6,
            content:'content7',
            seleteable:true
        },
        {
            id:7,
            content:'content8',
            seleteable:true
        },
        {
            id:8,
            content:'content9',
            seleteable:true
        },
        {
            id:9,
            content:'content10',
            seleteable:true
        },
        {
            id:10,
            content:'content11',
            seleteable:true
        },
        {
            id:11,
            content:'content12',
            seleteable:true
        },
        {
            id:12,
            content:'content13',
            seleteable:true
        },
        {
            id:13,
            content:'content14',
            seleteable:true
        },
        {
            id:14,
            content:'content15',
            seleteable:true
        },
        {
            id:15,
            content:'content16',
            seleteable:true
        }
    ],
    data1:[]
}

const reducer =(state : any= initialState, action:any) => {
    switch(action.type){
        case TRANSFER_DATA_INCREASE:
            return{
                data:[
                    ..._.sortBy(state.data.contact(action.dataload), (singleData) => {
                        return parseInt(singleData.content.replace(/[^0-9]/gi, ""));
                      })
                ]
            }
        case TRANSFER_DATA_DECREASE: 
            for(let a =0; a<state.data.length; a++){
                action.dataload.includes( state.data[a].id) && state.data1.push( state.data[a])
            }
            _.remove(state.data,(removeItem :any)=> action.dataload.includes(removeItem.id))
          

            return{
                data : [
                    ...state.data
                ],
                data1:[
                    ...state.data1
                ]
            }

        default:
            return state;
    }   
}

export default reducer;