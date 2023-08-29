import './index.scss';

export default function Menu(){
    return(
        <div className='comp-menu'>
            <div className='img'> <img src='assets/images/logo.png' alt=''/> <img src='assets/fonts/nomeLogo.png' alt=''/> </div>
            <div className='opcoes'>
                <div> <img src='assets/images/home.png' alt=''/> <p>Home</p> </div>
                <div> <img src='assets/images/userI.png' alt=''/> <p>Clientes</p> </div>
                <div> <img src='assets/images/carro.png' alt=''/> <p>Veículos</p> </div>
                <div> <img src='assets/images/chave.png' alt=''/> <p>Locação</p> </div>
            </div>
        </div>
    )
}