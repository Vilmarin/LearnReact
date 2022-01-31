import classes from './UsersProfile.module.css';

const UsersProfile = () => {
    return (
        <div className={classes.content}>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='горы с озером' />
            <div>Ava + discription</div>
            <div>My post</div>
            <div>New post</div>
            <div>Post 1</div>
            <div>Post 2</div>

        </div>
    )
}

export default UsersProfile