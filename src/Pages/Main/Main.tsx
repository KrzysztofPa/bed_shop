import {Baner, ContactButton, MainContent, ShopButton} from "./Main.style";
import {useNavigate} from "react-router-dom";
import {Routing} from "../../services/Routing";

export const Main = (): JSX.Element => {

    const navigator = useNavigate();

    return <>
        <MainContent>
            <Baner>
                <h3>Bed shop</h3>
                <p>Twój sklep z łózkami</p>
                <ShopButton onClick={() => navigator(Routing.shop)}>Przeglądaj ofertę</ShopButton>
                <ContactButton onClick={() => navigator(Routing.contact)}>Skontaktuj się z nami</ContactButton>
            </Baner>
        </MainContent>

    </>
}
