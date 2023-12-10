import './home.css'

export function Home(){

    return (
        <div className="home">
            <section className="home-element-01">
                <h1 className='title-element-01'>Junte-se a Familia</h1>
                <h1 className='title-element-01-1'>Bio Corpo</h1>
                <button className='button-element-01'>Matricule-se</button>
            </section>
            <h1 className='title-modalites'>Modalidades</h1>
            <section className='home-element-02'>
                <div className='conatiner-modalites'>
                    <h1 className='title-element-02-01'>Musculação</h1>
                    <p className='text-element-02-01'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Porro rerum commodi sit atque nemo nobis ratione natus maxime nulla. Provident.</p>
                </div>
                <div className='conatiner-modalites functional'>
                <h1 className='title-element-02-01'>Funcional</h1>
                    <p className='text-element-02-01'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Porro rerum commodi sit atque nemo nobis ratione natus maxime nulla. Provident.</p>
                </div>
                <div className='conatiner-modalites'></div>
                <div className='conatiner-modalites'></div>
            </section>
        </div>
    )
}