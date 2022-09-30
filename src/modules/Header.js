import logoImg from './../images/email.png'
const Header = () => {
    return(
       <div className="header">
         <div className="container">
            <div className="wrap-nav">
               <div className="wrap-img">
                  <img src={logoImg}></img>
               </div>
               <div className="area-serach"></div>
               <div className="additional-setings"></div>
            </div>
         </div>
       </div>
    );
}

export default Header;