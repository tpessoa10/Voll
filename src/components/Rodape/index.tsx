import styled from 'styled-components'
import facebook from './assets/facebook.png'
import whatsapp from './assets/whatsapp.png'
import instagram from './assets/instagram.png'
import google from './assets/google.png'


const RodapeEstilizado = styled.footer`
    height: 100%
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`

const ListaEstilizada = styled.ul`
    display:flex;
    justify-content: space-around;
    width: 20%;
    margin: 1em auto;
`
const ItemEstilizado = styled.li`
    list-style-type: none;
`
const LinkEstilizado = styled.a`
    padding: .5em;
`

function Rodape(){
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <LinkEstilizado href="#">
                        <img src={facebook} alt="logo do facebook" />
                    </LinkEstilizado>
                    <LinkEstilizado href="#">
                        <img src={instagram} alt="logo do instagram" />
                    </LinkEstilizado>
                    <LinkEstilizado href="#">
                        <img src={whatsapp} alt="logo do whatsapp" />
                    </LinkEstilizado>
                    <LinkEstilizado href="#">
                        <img src={google} alt="logo do google" />
                    </LinkEstilizado>
                </ItemEstilizado>
            </ListaEstilizada>
            <p style={{color: 'white'}}>2023 Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
        </RodapeEstilizado>
    )
}

export default Rodape