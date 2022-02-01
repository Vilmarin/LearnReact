import Post from './Posts/Posts';
import classes from './UsersProfile.module.css';

const UsersProfile = () => {
    return (
        <div className = {classes.content}>
            <img className={classes.backgroundImage} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='горы с озером' />
            <img className={classes.userAvatar} src='https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png' alt='аватар пользователя' />
            <textarea className={classes.userText}>My post</textarea>
            <Post message = 'hi, how are you?' likeCount = '20'/>
            <Post message = 'it is my new post' likeCount = '24'/>


        </div>
    )
}

export default UsersProfile