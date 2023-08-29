import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Menu from '../../components/menu';


export default function Cliente(){


    return(
        <div className='page-cliente'>
            <div className='supla'>
            <Menu/>

            <div className='container'>
                <Cabecalho/>

                <div className='cont'>
                    <div className='titulo'><p>ÁREA ADMINISTRATIVA</p>
                    <h1>Controle de Clientes</h1></div>

                    <div className='cadastro'>
                        <h1>Novo Cliente</h1>

<div className='inp'>
                        <div> <label>Nome</label> <input type='text'/> </div>
                        <div> <label>Email</label> <input type='text'/> </div>
                        <div> <label>Telefone</label> <input type='text'/> </div>
                        <div> <label>CPF</label> <input type='text'/> </div>
                        <div> <label>CNH</label> <input type='text'/> </div>

                        <button> Salvar </button>
                    </div>
</div>

                    <div className='tabela'>
                        <h1>Lista de Clientes</h1>
                       <div className='d1'> <div className='d2'><label>Nome</label> <input type='text'/></div> <button><img src='assets/images/lupa.png' alt=''/></button></div>

<div className='inp2'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Telefone</th>
                                    <th>E-mail</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Pedro</td>
                                    <td>537.555.088-18</td>
                                    <td>11 98210-2404</td>
                                    <td>pedrohenrique001198@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
</div>

                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    )
}