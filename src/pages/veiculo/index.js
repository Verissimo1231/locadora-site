import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Menu from '../../components/menu';


export default function Veiculo(){


    return(
        <div className='page-veiculo'>
            <div className='supla'>
            <Menu/>

            <div className='container'>
                <Cabecalho/>

                <div className='cont'>
                    <div className='titulo'><p>ÁREA ADMINISTRATIVA</p>
                    <h1>Controle de Veículos</h1></div>

                    <div className='cadastro'>
                        <h1>Novo veículo</h1>

<div className='inp'>
<div className='d1'> <div className='d2'><label>Tipo</label> <input type='text'/></div> <button><img src='assets/images/seta.png' alt=''/></button></div>
                        <div className='div'> <label>Modelo</label> <input type='text'/> </div>
                        <div className='div'> <label>Marca</label> <input type='text'/> </div>
                        <div className='div'> <label>Ano</label> <input type='text'/> </div>
                        <div className='div'> <label>Placa</label> <input type='text'/> </div>

                        <button> Salvar </button>
                    </div>
</div>

                    <div className='tabela'>
                        <h1>Lista de Veículos</h1>
                       <div className='d1'> <div className='d2'><label>Modelo,Marca,Placa</label> <input type='text'/></div> <button><img src='assets/images/lupa.png' alt=''/></button></div>

<div className='inp2'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Modelo</th>
                                    <th>Marca</th>
                                    <th>Ano</th>
                                    <th>Tipo</th>
                                    <th>Placa</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Pedro</td>
                                    <td>537.555.088-18</td>
                                    <td>11 98210-2404</td>
                                    <td>pedrohenrique001198@gmail.com</td>
                                    <td>cgiushufcu</td>
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