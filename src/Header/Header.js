import h from './Header.module.css';
import logoImg from './../images/email.png';
const Header = () => {
    return(
       <div className={h.header}>
         <div className={h.container}>
            <div className={h.nav}>
               <div className={h.wrapLogo}>
                  <img className={h.logo} src={logoImg}></img>
               </div>
               <div className={h.area_serach}></div>
               <div className={h.other_set}></div>
            </div>
         </div>
       </div>
    );
}

export default Header;