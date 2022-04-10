import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ErrorAlert} from "./Login.style";
import {Routing} from "../../services/Routing";

export const Login = (): JSX.Element => {

    const [errorString, setErrorString] = useState('')

    const navigator = useNavigate();

    const checkPassword = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length <= 6) {
            setErrorString('Password should have at least 6 lenght')
        } else {
            setErrorString('')
        }
    }

    const login = () => {
        if (errorString === '') {
            navigator(Routing.main)
        }
    }


    return <>
        Login
        <form>
            <label>Email:
                <input type='email'/>
            </label>
            <label>Password:
                <input type='password' onChange={(e) => {
                    checkPassword(e)
                }}/>
            </label>
            <ErrorAlert>{errorString}</ErrorAlert>
            <input type="submit" value="Send" onClick={() => login()}/>
        </form>
    </>
}
