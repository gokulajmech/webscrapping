import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import '../App';
import axios from 'axios';
import env from 'react-dotenv';


function Display() {
   let params=useParams();
console.log(params.prodType);

let [data,setData]=useState([{}]);

useEffect(()=>{
    getData();
},[]);
// console.log(env.API_URL.concat("param"));

let getData=async()=>{

    let res= await axios.get('http://localhost:4000/users/'+params.prodType);
    console.log(res.data.product);
    setData(res.data.product);
}
// console.log(params.prodType);
if(data.length>0)
{
    console.log(data);
    return <React.Fragment>
     
         {data.map((e,i)=>{
             return <div className='product-card'>
                  <img className="product-image" src={e.ProductImage}></img>
                  <div>
             <div className='product-title'>{e.Title}</div>
             
            
             <div className='product-3detail'>
                 <ul>
                     <li>Ratings:{e.Rating}</li>
                     <li>Price:{e.Price}</li>
                     <li>offer_Price:{e.OfferPrice}</li>
                 </ul>
             
             </div>
    
             </div>
         </div>
         })}
        
    </React.Fragment>
}
else{
    return <>
    No product available in the API LINK
    </>
}
    
}

export default Display
