import s from '../style/ProfileSection.module.css';
const SettingsProfile = ()=> {
    return(
      <div className="settings-profile">
        <div className={s.wrap}>
          <div className={`${s.groups} my-profile`}>Мой профиль</div>
          <div className={`${s.groups} my-group`}>Мои группы</div>
          <div className={`${s.groups} my-message`}>Мои сообщения</div>
          <div className={`${s.groups} my-audio`}>Мои аудиозаписи</div>
          <div className={`${s.groups} my-video`}>Мои видео</div>
          <div className={`${s.groups} my-game`}>Мои игры</div>
        </div>
      </div>
    )
}

export default SettingsProfile;