import OrderForm from "./OrderForm"
import { useParams } from "react-router-dom"

const orderData ={
        id: 1,
        fecha: "2022-11-01",
        largo: "1.6",
        ancho: "3.2",
        peso: "1.2",
        direccion: "Cll 45  23-53",
        ciudad: "Barranquilla",
        destinatario: "Pedro Perez",
        nitdestinatario: "123456",
        direccionentrega: "cra 2  14-31",
        ciudadentrega: "Bogota"
    }

const OrderEdit = () => {
    const { id } = useParams
    return (
        <>
        <h1>Edicion Orden #{id}</h1>
        <OrderForm data={orderData}/>
        </>
        
    )
}

export default OrderEdit
