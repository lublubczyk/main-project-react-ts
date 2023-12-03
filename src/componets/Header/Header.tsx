import { HeaderLinks } from "./HeaderLinks";
import { Title } from "./Title";
import style from './Header.module.css';
import { UserInfo } from "./UserInfo";
import { ChangeTheme } from "./ChangeTheme";


const Header = () => {
    return (
        <div className={style.Header}>
            <Title />
            <HeaderLinks />
            <div className={style.RightDiv}>
                <ChangeTheme/>
                <UserInfo/>
            </div>
        </div>
    )
};

export { Header };