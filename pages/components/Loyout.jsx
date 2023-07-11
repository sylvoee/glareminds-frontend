import Head from "next/head";
import Link from "next/link";


const Layout = ({children}) => {
    return ( 
        <>


<Head>
    
    <meta charset="utf-8" />
    <title>Simply Amazed HTML Template by Tooplate</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="fontawesome/css/all.min.css" type="text/css" /> 
    <link rel="stylesheet" href="css/slick.css" type="text/css" />   
    <link rel="stylesheet" href="css/tooplate-simply-amazed.css" type="text/css" />

</Head>



    <div id="outer">
        <header class="header order-last" id="tm-header">
            <nav class="navbar">
                <div class="collapse navbar-collapse single-page-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" href="/"><span class="icn"><i class="fas fa-2x fa-air-freshener"></i></span> Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/about"><span class="icn"><i class="fab fa-2x fa-battle-net"></i></span> About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/contact"><span class="icn"><i class="far fa-2x fa-images"></i></span> Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/login"><span class="icn"><i class="far fa-2x fa-sigin"></i></span> Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/register"><span class="icn"><i class="far fa-2x fa-note"></i></span> Register </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        
        <button class="navbar-button collapsed" type="button">
            <span class="menu_icon">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </span>
        </button>
        
        <main id="content-box" class="order-first">
            {children}


            <section class="contact-section section" id="section-4">
                <div class="container">
                    <div class="title">
                        <h3>Contact Us</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 col-md-6 mb-4 contact-form">
                            <div class="form tm-contact-item-inner">
                                <form action="#" method="POST">
                                    <div class="form-group">
                                        <input name="name" type="text" class="form-control" placeholder="Name" />
                                    </div>
                                    <div class="form-group">
                                        <input name="email" type="text" class="form-control" placeholder="Email" />
                                    </div>
                                    <div class="form-group">
                                        <textarea name="message" class="textarea form-control" placeholder="Message"></textarea>
                                    </div>
                                    <div class="form-group text-right">
                                        <input type="submit" class="btn btn-primary" value="Send it" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 contact-details">
                            <div class="tm-contact-item-inner-2">
                                <p>Nam mollis felis elementum, placerat dolor id, vehicula libero. Etiam dui nisl, mattis ut rhoncus et, cursus ut diam.</p>
                                <ul class="font-weight-light">
                                    <li>
                                        <span class="icn"><i class="fas fa-mobile-alt"></i></span>
                                        <span class="lbl">Tel:</span> <a href="#">010-020-0340</a>
                                    </li>
                                    <li>
                                        <span class="icn"><i class="fas fa-at"></i></span>
                                        <span class="lbl">Email:</span> <a href="#">info@company.com</a>
                                    </li>
                                    <li>
                                        <span class="icn"><i class="fas fa-globe-asia"></i></span>
                                        <span class="lbl">URL:</span> <a href="#">www.company.com</a>
                                    </li>
                                </ul>
                            </div>                        
                        </div>
                        <div class="col-lg-3 col-md-12 map">
                          
                            <div class="map-outer tm-mb-40">
                                <div class="gmap-canvas">
                                    <iframe width="100%" height="400" id="gmap-canvas"
                                        src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
                <footer class="footer container container-2">
                    <div class="row"> 
                        <p class="col-sm-7">Copyright 2021 Simply Amazed Co.</p>
                        <p class="col-sm-5 text-right design">Design: <a rel="nofollow" href="https://www.tooplate.com" target="_parent">Tooplate</a></p>
                    </div>
                </footer>
            </section>


        </main>
    </div>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.singlePageNav.min.js"></script>
    <script src="js/slick.js"></script>
    <script src="js/parallax.min.js"></script>
    <script src="js/templatemo-script.js"></script>

    
        </>

     );
}
 
export default Layout;