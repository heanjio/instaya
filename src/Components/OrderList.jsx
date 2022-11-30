import { Link } from "react-router-dom"

const orders = [
    {
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
    },
    {
        id: 2,
        fecha: "2022-11-09",
        largo: "2.6",
        ancho: "4.2",
        peso: "3.0",
        direccion: "Cra 15 50-21",
        ciudad: "Barranquilla",
        destinatario: "Juan Rico",
        nitdestinatario: "234567",
        direccionentrega: "cll 45  60-21",
        ciudadentrega: "Barranquilla"
    }]

const labels = [
    "No. orden",
    "Fecha",
    "Dirección entrega",
    "Acción"
]


const OrderList = () => {
    return (
        <>
        <table className="table">
            <thead>
                    <tr>
                        {labels.map((labels, index) => {
                            return (
                            <th key={index} scope="col">{labels}</th>)
                        })}
                    </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => {
                    return (
                    <tr key ={index}>
                        <th scope="row">
                            <Link to={'/orderlist/1' + order.id}>{order.id}</Link>
                        </th>
                        <td>{order.fecha}</td>
                        <td>{order.direccionentrega}</td>
                        <td>
                            <Link to={"/orderlist/" + order.id + "/edit"}>Edit</Link>
                        </td>
                    </tr>)
                    
                })}

            </tbody>
        </table>
        <Link to="/orderlist/new">Crear nueva Orden</Link>
        </>
    )
}

export default OrderList
