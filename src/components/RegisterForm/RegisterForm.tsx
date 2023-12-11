import './registerForm.css'

export function RegisterForm() {
    return (
        <form className="register-form">
            <section className='name'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" />
            </section>

            <section>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
            </section>

            <section>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
            </section>

            <section>
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input type="date" name="dateOfBirth" id="dateOfBirth" />
            </section>

            <section>
                <label htmlFor="gender">Gender:</label>
                <select name="gender" id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </section>

            <section>
                <label htmlFor="height">Heigh:</label>
                <input type="number" name="height" id="height" />
            </section>

            <section>
                <label htmlFor="weight">Weight:</label>
                <input type="number" name="weight" id="weight" />
            </section>

            <section>
                <label htmlFor="modalites">Modalites:</label>
                <input type="text" name="modalites" id="modalites" />
            </section>
        </form>
    )
}