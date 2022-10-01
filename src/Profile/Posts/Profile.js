import prof from './Profile.module.css';
import contentPhoto from '../../images/mountain.jpg';
import CommentUnderPost from './Comments/Comments';
import ActPost from './Activity/ActivityPost';




const BodyContent = ()=> {
    return(
      <div className={prof.content}>
        <div className={prof.wp_prof}>
          <div className={prof.wp_rec}>
            <div className="record-img">
              <img className={prof.rec_img} src={contentPhoto}></img>
            </div>
            <ActPost oneItem='43' twoItem='12' threeItem='23'/>
          </div>
          <CommentUnderPost />
        </div>
      </div>
    )
}

export default BodyContent;