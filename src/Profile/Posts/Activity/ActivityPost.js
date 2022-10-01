import actP from './ActivityPost.module.css';
import likePhoto from '../../../images/heart.png';
import forward from '../../../images/arrow.png';
import commentBtn from '../../../images/quotes.png';
const ActPost = (props)=> {
    return (
        <div className={actP.act_rec}>
            <div className={actP.wrp_act_rec}><img className={actP.btn_act_rec} src={likePhoto}></img>{props.oneItem}</div>
            <div className={actP.wrp_act_rec}><img className={actP.btn_act_rec} src={forward}></img>{props.twoItem}</div>
            <div className={actP.wrp_act_rec}><img className={actP.btn_act_rec} src={commentBtn}></img>{props.threeItem}</div>
        </div>
    )
}

export default ActPost;