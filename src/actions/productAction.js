import axios from 'axios';
export const listProduct=() => async (dispatch)=>{
try{
    dispatch({type:'PRODUCT_LIST-REQUEST'});
    const {data}=await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(data);
    dispatch({type:'PRODUCT_LIST-SUCCESS',payload:data});
}catch(error){
    dispatch({type:'PRODUCT_LIST_FAIL',payload:error.response && error.response.data.message ? error.response.data.message : error.message});
}
}


export const listProductDetail=(id) => async (dispatch)=>{
    try{
        dispatch({type:'PRODUCT_DETAIL_REQUEST'});
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log(data);
        dispatch({type:'PRODUCT_DETAIL_SUCCESS',payload:data});
    }catch(error){
        dispatch({type:'PRODUCT_DETAIL_FAIL',payload:error.response && error.response.data.message ? error.response.data.message : error.message});
    }
    }