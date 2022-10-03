import p from './Sender.module.css';
const SenderComment = (props)=> {
    return (
        <div className={p.sent_comment}>
            <div className={p.sender_photo}></div>
                <div className={p.data_sender}>
                <div className={p.name_sender}>{props.name}</div>
                <div className={p.com_send}>{props.message}</div>
            </div>
        </div>
    )
}

export default SenderComment;