import comm from '../Profile.module.css';
import SenderComment from './SenderComment/SenderComment';
import MyComment from './MyComment/MyComment';
const CommentUnderPost = ()=> {
    return (
        <div className={comm.comments}>
            <SenderComment name='Игорь Анисимов' message='Бывал я там в прошлом году, вид захватывает дух!'/>    
            <SenderComment name='Игорь Анисимов' message='Хотел бы там побывать'/>     
            <MyComment />
        </div>  
    )
}

export default CommentUnderPost;
