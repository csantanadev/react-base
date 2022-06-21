import { Title } from './styled'
import { Container } from '../../styles/GlobalStyles'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ApiServicelunos from '../../services/apiServiceAlunos';
import { useDispatch } from 'react-redux'
import * as exampleActions from '../../store/modules/example/actions'


function Login() {

    const [alunos, setAlunos] = useState([])

    // esse cara é um disparador
    const dispatch = useDispatch();

    // toast.success('Dados enviados com sucesso');

    /*useEffect(() => {

        async function getAlunos() {

            const { data } = await ApiServicelunos.getAllAlunos()
            setAlunos(data)
        }

        getAlunos()
    }, [])*/

    function handleClick(e) {
        e.preventDefault();


        // na hora de disparar é preciso passar qual a ACTION
        dispatch(exampleActions.clicaBotaoRequest())
    }


    return (
        <Container>
            <Title isRed={false}>
                Pagina do login
            </Title>
            {
                alunos.map((a) => {
                    return <li key={a.id}>{a.nome}</li>
                })
            }
            <div style={{ marginTop: '15px' }}>
                <button type='button' onClick={handleClick}>Enviar</button>
            </div>
        </Container>
    )
}

export default Login
