import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link' ;
import Axios from 'axios';
import { useEffect, useState } from 'react';

import Layout from './components/Loyout';

const HOME = () => {

 // Set Home data
 const[homeData, setHomeData] = useState(''); 

useEffect(()=>{
  Axios.get('http://localhost:5000').then(
   response => setHomeData(response.data.data)
  ).catch(
    err => console.log(err)
  );
  
}, [])


  return( 
    <>
    
   <Layout>
   
   <div>
   <div class="banner-section section parallax-window" data-parallax="scroll" data-image-src="img/section-1-bg.jpg" id="section-1">
        <div class="container">
          
            <div class="item">
                <div class="bg-blue-transparent logo-fa"><span><i class="fas fa-2x fa-atom"></i></span> Simply Amazed <h3>{homeData}</h3></div>
                <div class="bg-blue-transparent simple"><p>Your simplest HTML template, the most amazing page ever, yet free!</p></div>
            </div>
        </div>
    </div>
   </div>

  </Layout>
    </>

   );
}
 
export default HOME;