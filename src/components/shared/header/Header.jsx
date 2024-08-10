import "./Header.css";
import { useTranslation } from "react-i18next";
const Header = () => {
    const {t} = useTranslation();
    return ( 
        <>
        <header>
            <nav>
                <ul>
                    <li>{t("home")}</li>
                </ul>
            </nav>
        </header>
        </>
     );
}
 
export default Header;