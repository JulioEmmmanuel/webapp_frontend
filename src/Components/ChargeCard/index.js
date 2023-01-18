import {Card, Data, Buttons, CancelButton, PayButton} from "./styles";

const ChargeCard = (props) => {
    return (
        <Card>
            <Data>
                <p><b>Cliente:</b> {props.name} {props.lastName}</p>
                <p><b>Fecha de cobro:</b> {props.date}</p>
            </Data>
            <Data>
                <p><b>Servicio:</b> {props.service}</p>
                <p><b>Cantidad:</b> {props.amount}</p>
                <p><b>Estatus:</b> {props.status}</p>
            </Data>
            {props.status === "No pagado" &&
                <Buttons>
                    <PayButton onClick={props.pay}>Pagar</PayButton>
                    <CancelButton onClick={props.cancel}>Cancelar</CancelButton>
                </Buttons>
            }
            
        </Card>
    )
}

export default ChargeCard;