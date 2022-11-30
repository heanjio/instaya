import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"

const OrderForm = ({data}) => {
    const [isEdit, setIsEdit] = useState(false)

    const { register, formState: { error }, handleSubmit, setValue} = useForm();
    
    const customSubmit = (dataForm) => {
        if (isEdit) {
            console.log('Here goes the edit logic')
        } else {
            console.log('Here goes create logic')
        }
        console.log('dataForm', dataForm)
    }

    useEffect(() => {
        if (data.length != 0) {
            setValue('fecha', data.fecha)
            setValue('largo', data.largo)
            setValue('ancho', data.ancho)
            setValue('peso', data.peso)
            setValue('direccion', data.direccion)
            setValue('ciudad', data.ciudad)
            setValue('destinatario', data.destinatario)
            setValue('nitdestinatario', data.nitdestinatario)
            setValue('direccionentrega', data.direccionentrega)
            setValue('ciudadentrega', data.ciudadentrega)
        }
    })

    return (
        <>
        <form className="form" onSubmit={handleSubmit(customSubmit)}>

            
            <div className="form__item">
                <label>Fecha</label>
                <input
                    type="date"
                    {...register("fecha", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Largo</label>
                <input
                    {...register("largo", { required: true })}
                />
            </div>
            <div className="form__item">                
                <label>Ancho</label>
                <input
                    {...register("ancho", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Peso</label>
                <input
                    {...register("peso", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Direccion recogida</label>
                <input
                    {...register("direccion", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Ciudad recogida</label>
                <input
                    {...register("ciudad", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Nombre destinatario</label>
                <input
                    {...register("destinatario", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Cedula / NIT destinatario</label>
                <input
                    {...register("nitdestinatario", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Direccion entrega</label>
                <input
                    {...register("direccionentrega", { required: true })}
                />
            </div>
            <div className="form__item">
                <label>Ciudad entrega</label>
                <input
                    {...register("ciudadentrega", { required: true })}
                />
            </div>

            <input type="submit" value={isEdit ? "Edit" : "Create"} />
        </form>
        </>

    )
}

export default OrderForm
