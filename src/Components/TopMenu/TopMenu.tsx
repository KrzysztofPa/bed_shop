import {useNavigate} from "react-router-dom";
import {Routing} from "../../services/Routing";
import {MenuContent, NavButton} from "./TopMenu.style";

export const TopMenu = (): JSX.Element => {

    const navigator = useNavigate()

    return <>
        <MenuContent>
            <img alt='logo'/>
            <div>
                <NavButton onClick={() => navigator(Routing.main)}> Strona główna</NavButton>
                <NavButton onClick={() => navigator(Routing.shop)}> Sklep</NavButton>
                <NavButton onClick={() => navigator(Routing.contact)}> Kontakt</NavButton>
            </div>
        </MenuContent>
    </>
}
