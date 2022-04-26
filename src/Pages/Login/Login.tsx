import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ErrorAlert, Form, Input, LoginContent} from "./Login.style";
import {Routing} from "../../services/Routing";
import {Baner, DefaultButton} from "../Global.style";

export const Login = (): JSX.Element => {

    const [errorString, setErrorString] = useState('')

    const [password, setPassword] = useState('')

    const navigator = useNavigate();


    const login = () => {
        if (password.length <= 6) {
            setErrorString('Hasło powinno mieć minimum 6 znaków')
        } else {
            navigator(Routing.main)
        }
    }


    return <LoginContent>
        <Baner>

            <h1>Logowanie</h1>
            <Form>
                <label>Email:</label>
                <Input type='email' id='email'/>
                <label>Password:</label>
                <Input type='password' onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.currentTarget.value)
                }}/>
                <ErrorAlert>{errorString}</ErrorAlert>
                <DefaultButton onClick={() => login()}>Zaloguj się</DefaultButton>
            </Form>
        </Baner>
    </LoginContent>
}
