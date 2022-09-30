import contentPhoto from './../images/mountain.jpg';
import likePhoto from './../images/heart.png';
import forward from './../images/arrow.png';
import commentBtn from './../images/quotes.png';
import sendComment from './../images/send.png';




const BodyContent = ()=> {
    return(
      <div className="profile-content">
        <div className="wrap-profile">
          <div className="wrap-record">
            <div className="record-img">
              <img src={contentPhoto}></img>
            </div>
            <div className="active-record">
              <img src={likePhoto}></img>
              <img src={forward}></img>
              <img src={commentBtn}></img>
            </div>
            <div className="comments">
              <div className="sent-comments">
                <div className="sent-comment">
                  <div className="sender-photo"></div>
                  <div className="data-sender">
                    <div className="name-sender">Виктор Андереевич</div>
                    <div className="comment-sender">Очень красивый вид</div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <div className="user-photo"></div>
                <input type="text" placeholder="Ваш комментарий..."></input>
                <img src={sendComment}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BodyContent;