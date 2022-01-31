import classes from './AsideMenu.module.css';

const AsideMenu = () => {
    return (
        <aside className={classes.asideMenu}>
            <div className={classes.link}>
                <a href='#3'>Profile</a>
            </div>
            <div className={classes.link}>
                <a href='#3'>Messages</a>
            </div>
            <div className={classes.link}>
                <a href='#3'>News</a>
            </div>
            <div className={classes.link}>
                <a href='#3'>Music</a>
            </div>
            <div className={classes.link}>
                <a href='#3'>Settings</a>
            </div>
        </aside>
    )
}

export default AsideMenu