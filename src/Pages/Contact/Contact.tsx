import {Content} from "../Global.style";
import {ContactForm, ContactInput, ContactTextArea, SendMassage} from "./Contact.style";
import {useState} from "react";
import {Baner} from "../Main/Main.style";

export const Contact = (): JSX.Element => {

    const [sendMassage, setSendMassage] = useState('')

    const setMassage = (e: MouseEvent) => {
        e.preventDefault();
        setSendMassage('Wiadomośc została wysłana')
    }

    return <Content>
        <Baner>
            <ContactForm>
                <label htmlFor='email'>
                    Mail:
                </label>
                <ContactInput type='email' id='email'/>
                <label htmlFor='massage'>
                    Wiadomość:
                </label>
                <ContactTextArea id='massage'/>

                <button onClick={(e) => setMassage(e as unknown as MouseEvent)}>Wyślij</button>

                <SendMassage>
                    {sendMassage}
                </SendMassage>
            </ContactForm>
        </Baner>

    </Content>
}
