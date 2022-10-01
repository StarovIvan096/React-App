import myC from './MyComment.module.css'
import sendComment from '../../../../images/send.png';
const MyComment = ()=> {
    return (
        <div className={myC.comment}>
            <div className={myC.user_photo}></div>
            <input className={myC.my_comment} type="text" placeholder="Ваш комментарий..."></input>
            <img className={myC.btn_send} src={sendComment}></img>
        </div>
    )
}

export default MyComment; 