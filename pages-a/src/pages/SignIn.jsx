import { useState } from "react"

export default function SignIn(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const res = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    username: username,
                    email: email,
                    password: password
                }
            )
        });
        const data = await res.json();
        alert(data['message']);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Email" onChange={function (e){
                    setEmail(e.target.value)
                }}/>
                <input type="text" placeholder="Enter Username" onChange={function (e){
                    setUsername(e.target.value)
                }}/>
                <input type="text" placeholder="Enter Password" onChange={function (e){
                    setPassword(e.target.value)
                }}/>
                <button>Signin</button>
            </form>
        </div>
    )
}