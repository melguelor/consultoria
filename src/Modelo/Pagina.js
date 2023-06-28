import { Container } from "react-bootstrap"
import Menu from "./menu"



export default function Pagina(props)
{

    return (
    
    <Container className="borda-tracos ">
            <Menu />

            {props.children}

    </Container>
    )
}