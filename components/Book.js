import HTMLFlipBook from "react-pageflip";


const Book = (props) => {


    return ( <><HTMLFlipBook width={300} height={500}>
         <div className="none">  </div>
        <div className="demoPage"> <img className="pageimg" src='/1.jpg' alt="" /> </div>
        <div className="demoPage"> <img className="pageimg" src='/1.jpg' alt="" /> </div>
        <div className="demoPage"> <img className="pageimg" src='/2.jpg' alt="" /></div>
        <div className="demoPage"> <img className="pageimg" src='/3.jpg' alt="" /></div>
        <div className="demoPage"><img className="pageimg" src='/4.jpg' alt="" /></div>
        
       
      </HTMLFlipBook> <div className="btnbox"><button className="btnbook" >Previous</button><button>Next</button></div></> );
}
 
export default Book;
