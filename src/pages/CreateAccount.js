import { createUserWithEmailAndPassword } from "firebase/auth"
import { React } from "react"
import { useState } from "react"
import { auth } from "../firebase-config"

function CreateAccount() {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    

    const register = async () => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(userCredential)
        }   catch(error){
            console.log(error.message)
            }
    }

    return(
        <div>
            <h1>Register</h1>
            <div>
                <input type="text" placeholder="Email" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                <input type="text" placeholder="Password" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
                <button onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default CreateAccount