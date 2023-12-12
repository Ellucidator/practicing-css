import './registerForm.css'

export function RegisterForm() {
    return (
        <form className="register-form">
            <section className='name'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" />
            </section>

            <section className='email'>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
            </section>

            <section className='password'>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
            </section>

            <section className='dateOfBirth'>
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input type="date" name="dateOfBirth" id="dateOfBirth" />
            </section>

            <section className='height'>
                <label htmlFor="height">Heigh:</label>
                <input type="number" name="height" id="height" />
            </section>

            <section className='weight'>
                <label htmlFor="weight">Weight:</label>
                <input type="number" name="weight" id="weight" />
            </section >

            <section className='modalites'>
                <label htmlFor="modalites">Modalites:</label>
                <input type="text" name="modalites" id="modalites" />
            </section>

            <section className='gender'>
                <label htmlFor="gender">Gender:</label>
                <select name="gender" id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </section>
            <button>Register</button>
        </form>
    )
}