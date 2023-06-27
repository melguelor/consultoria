import { Col,Row} from "react-bootstrap"


export default function Sequencia(props)
{
    return(
        <div  className="d-flex justify-content-center">
            <Row >
                <Col className=" d-flex justify-content-center mx-auto col-4" >
             <h1 style={{fontSize:"130px"}}> {props.numero}</h1>
                </Col>
                <Col className=" col-8">
                    <h1>{props.titulo}</h1>
                {props.texto}
                </Col>
            </Row>
        </div>
    )
}