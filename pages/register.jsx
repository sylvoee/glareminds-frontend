
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link' ;
import Axios from 'axios';
import {useState } from 'react';
import { FaBeer, } from 'react-icons/fa';
import {  } from "react-icons/ai";
import { IconName } from "react-icons/ci";
import {AiFillGoogleCircle, AiFillLock,AiFillBook } from "react-icons/ai";
import {SlGraduation} from "react-icons/sl";
// import Navbar from './components/Navbar';
import axios from 'axios';
import Image from 'next/image';
// import Footer from './components/Footer';
import Layout from './components/Loyout';
import { useRouter } from 'next/router';



const register = () => {
const[name, setName]  = useState();
const[email, setEmail] = useState();
const[password, setPassWord] = useState();

const router = useRouter();

const[postRecord, setPostRecord] = useState([]);    


// Making a post request
const postRegister =(e) =>{
  e.preventDefault() ;
    
Axios.post('http://localhost:5000/sign-up', {
    email , password, name 
    }).then(
        response => router.push('/login')
    ).catch(
        err => console.log(err)
    );
   
}

  return ( 
    <>
    <Layout>
    <div className="content ">
    <div className="row sign-up p-3">
       <div className="col-sm-4 p-5 d-none d-sm-block" style={{color:'blue'}}>
        <p>
        <b className='text-light'>We will like you to be part of us. Koin the Island of knowledge</b>
        </p>
        <p>
          <Image src="/img/bookstack.svg" alt='Books' height ={270} width={270} ></Image>
        </p>
       </div>
      <div className="col-sm-8 " >
        <div className="register-form offset-1">
         
          <form action="" className="form-group col-sm-8">
          <h3 className="h3 d-flex justify-content-end "> Register <SlGraduation size={50}></SlGraduation > </h3>
          <p style={{color:'blue'}}>Register with a verified email</p>
          <hr className='col-sm-8'/>
            <div>
              <label htmlFor="Name">Name</label>
              <input  type="text" name ='name' className='form-control input text-dark' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="Email" required>Email</label>
              <input type="email" name ='email' className='form-control text-dark input' onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            
            <div>
              <label htmlFor="Password" required>Password</label>
              <input type="password" name ='password' className='form-control text-dark input' onChange={(e) => setPassWord(e.target.value)} required/>
            </div>

            
            <div>
              <label htmlFor="Password" required>Confirm Password</label>
              <input type="password" name ='password' className='form-control text-dark input' onChange={(e) => setPassWord(e.target.value)} required/>
            </div>

            <button className='btn btn-primary col-sm-12 mt-3' onClick={postRegister}>Register</button>

          </form>

          <div className="other-links mt-5">
            <Link href="login" className='text-decoration-none m-3' style={{color:'blue'}}>Already Have an account</Link>
            <Link href="/" className='text-decoration-none m-3' style={{color:'blue'}}>Forget Passwords</Link>
          </div>


        </div>
      </div>

    </div>
   
    
    
    </div>
    </Layout>
    </>
   );
}
 
export default register;