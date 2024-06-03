import React from 'react'
import Movielist from '../components/Movielist'
import axios from "axios"
import Formlist from '../components/Formlist'
import { useLoaderData } from 'react-router-dom';
 export  async function loader({request}){
  const url=new URL(request.url);
  const searchTerm=url.searchParams.get("search")||"one piece";
try {
  const moviesearch=`https://www.omdbapi.com/?apikey=b6960854&s=${searchTerm}`;
  const response= await axios.get(moviesearch);
 return {movieapirsponse:response.data,searchTerm,isError:false,error:""};
} catch (error) {
  const errorMessage=error?.response?.data?.Error||error.msessage||"something went wrong...."
  return {movieapirsponse:null,searchTerm,isError:true,error:errorMessage,};
}
 
}
function Home() {
  const data=useLoaderData();
  return (
    <div>
      <Formlist searchTerm={data.searchTerm}/>
      <Movielist data={data}/>
    </div>
  )
}

export default Home