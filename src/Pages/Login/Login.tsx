import {useState} from "react";

export const Login = (): JSX.Element => {

    const [errorString, setErrorString] = useState('')


    const checkPassword = (e: React.FormEvent<HTMLInputElement>) => {

        if (e.currentTarget.value.length <= 6) {
            setErrorString('Password should have at least 6 lenght')
        } else {
            setErrorString('')
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
            <div>{errorString}</div>
            <input type="submit" value="Send"/>
        </form>
    </>
}
