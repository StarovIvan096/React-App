import p from '../style/Profile.module.css';
import contentPhoto from './../images/mountain.jpg';
import likePhoto from './../images/heart.png';
import forward from './../images/arrow.png';
import commentBtn from './../images/quotes.png';
import sendComment from './../images/send.png';




const BodyContent = ()=> {
    return(
      <div className={p.content}>
        <div className={p.wp_prof}>
          <div className={p.wp_rec}>
            <div className="record-img">
              <img className={p.rec_img} src={contentPhoto}></img>
            </div>
            <div className={p.act_rec}>
              <img className={p.btn_act_rec} src={likePhoto}></img>
              <img className={p.btn_act_rec} src={forward}></img>
              <img className={p.btn_act_rec} src={commentBtn}></img>
            </div>
            <div className={p.comments}>
                <div className={p.sent_comment}>
                  <div className={p.sender_photo}></div>
                  <div className={p.data_sender}>
                    <div className={p.name_sender}>Виктор Андереевич</div>
                    <div className={p.com_send}>Очень красивый вид</div>
                  </div>
                </div>
              <div className={p.comment}>
                <div className={p.user_photo}></div>
                <input className={p.my_comment} type="text" placeholder="Ваш комментарий..."></input>
                <img className={p.my_photo} src={sendComment}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BodyContent;