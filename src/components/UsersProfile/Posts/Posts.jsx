import classes from './Posts.module.css';
const Post = (props) => {
    return (
        <div className={classes.post}>
            <img className={classes.userAvatar} src = 'https://cdn-icons-png.flaticon.com/512/147/147144.png' alt='аватар' />
            <p>{props.message}</p>
            <span>like {props.likeCount}</span>
        </div>
    )
}

export default Post