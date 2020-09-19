import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const onLogin = (event) => {
        event.preventDefault();
        router.push('/dashboard');
    }
    return (
        <>
            <input placeholder="User name" type="text" />
            <input placeholder="Passowrd" type="password" />
            <button onClick={onLogin}>Log in</button>
        </>
    )
}

export default Login;