import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import './registrationPage.css'

export default function RegistrationPage(){
    return(
        <div className="registration-page">
            <h1>Register</h1>
            <RegisterForm />
        </div>
    )
}