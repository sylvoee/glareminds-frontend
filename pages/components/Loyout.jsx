import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        
        <>
    
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    
        <title>Glareminds</title>
    
        {/* <!-- Bootstrap core CSS --> */}
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    
        {/* <!-- Additional CSS Files --> */}
        <link rel="stylesheet" href="assets/css/fontawesome.css" />
        <link rel="stylesheet" href="assets/css/templatemo-space-dynamic.css" />
        <link rel="stylesheet" href="assets/css/animated.css" />
        <link rel="stylesheet" href="assets/css/owl.css" />
        </Head>
        
        {/* <!-- ***** Preloader Start ***** --> */}
      {/* <div id="js-preloader" class="js-preloader">
        <div class="preloader-inner">
          <span class="dot"></span>
          <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}
      {/* <!-- ***** Preloader End ***** --> */}
    
      <Navbar />
    
    
     {children}
    
      <footer style={{backgroundColor:'coral', padding:'3em', borderTopLeftRadius: '50%'}}>

        <div class="container">
          <div class="row">
            <div class="col-lg-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
              <p>© Copyright 2021 Space Dynamic Co. All Rights Reserved. 
              
              Design: <a rel="nofollow" href="https://templatemo.com">TemplateMo</a></p> 
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Scripts --> */}
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/owl-carousel.js"></script>
      <script src="assets/js/animation.js"></script>
      <script src="assets/js/imagesloaded.js"></script>
      <script src="assets/js/templatemo-custom.js"></script>
      
    
        
        </>

     );
}
 
export default Layout;