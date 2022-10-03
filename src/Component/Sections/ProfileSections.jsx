import { Link, useLocation } from 'react-router-dom';
import s from './ProfileSection.module.css';

const SectionsSite = ()=> {
  let url = useLocation();
  console.log(url);
  

    return(
      <div className="settings-profile">
          <div className={s.wrap}>
          <div className={s.groups}>
            <Link to="/profile">Мой профиль</Link>
            </div>
            <div className={s.groups}>
              <Link to="/ribbon"> Лента</Link>
            </div>
            <div className={s.groups}>
            <Link to="/message">Мои сообщения</Link>
            </div>
          </div>
      </div>
    )
}

export default SectionsSite;