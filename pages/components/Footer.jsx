import Link from "next/link";

const Footer = () => {
    return ( 
        <>
        <section className="footer">
       <div className="row">
        <div className="col-sm-4 links">
            <h3 className="h3">Useful Links</h3>
           <div> <Link href = '/'> Home</Link></div>
           <div> <Link href = '/'> Home</Link></div>
           <div> <Link href = '/'> Home</Link></div>
           <div> <Link href = '/'> Home</Link></div>
            
            
        </div>

        <div className="col-sm-4">
            <h3 className="h3">Anout Us</h3>
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur ab nesciunt voluptas eius corporis 
                quidem voluptatem, consectetur vero omnis rerum, voluptatibus, quis vitae error autem. Eaque inventore eius dolorum?
             </p>
        </div>

        <div className="col-sm-4">
            <h3 className="h3">Contact Us</h3>
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur ab nesciunt voluptas eius corporis 
                quidem voluptatem, consectetur vero omnis rerum, voluptatibus, quis vitae error autem. Eaque inventore eius dolorum?
             </p>
        </div>
       </div>
       
        </section>
        </>
     );
}
 
export default Footer;