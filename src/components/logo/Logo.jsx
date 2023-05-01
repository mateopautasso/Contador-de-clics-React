import foto from '../../assets/imagenes/freecodecamp-logo.png'
import './Logo.css'

function Logo() {
    return(
        <div className="logo-freecodecamp__container">
            <img src={foto} alt="" className="logo-freecodecamp__logo" />
        </div>
    )
}

export default Logo;