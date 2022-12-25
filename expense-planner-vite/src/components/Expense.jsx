import savingIcon from '../img/icono_ahorro.svg'
import homeIcon from '../img/icono_casa.svg'
import foodIcon from '../img/icono_comida.svg'
import expIcon from '../img/icono_gastos.svg'
import funIcon from '../img/icono_ocio.svg'
import healthIcon from '../img/icono_salud.svg'
import suscpIcon from '../img/icono_suscripciones.svg'


const Expense = ({ exp, formatDate }) => {

    const {category, name, qty, date} = exp

    const icons = {
        ahorro: savingIcon,
        alimentación: foodIcon,
        hogar: homeIcon,
        gastos: expIcon,
        ocio: funIcon,
        salud: healthIcon,
        suscripciones: suscpIcon
    }

  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <img src={icons[category]} alt="Expenses Icons" />
            <div className="descripcion-gasto">
                <p className="categoria">{category}</p>
                <p className="nombre-gasto">{name}</p>
                <p className="fecha-gasto">
                    Cargado: {''}
                    <span>{formatDate(date)}</span>
                </p>
            </div>
        </div>

        <p className="cantidad-gasto">${qty}</p>
    </div>
  )
}

export default Expense