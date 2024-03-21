import SocialButton from "./SocialButton";
import Formulario from "./Formulario";

const Registro =()=>{
    return(
    <>
    
        <div className = "iconos">
            <SocialButton 
            imagen="https://cdn-icons-png.flaticon.com/128/1384/1384005.png"
            />
            <SocialButton 
            imagen="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
            />
            <SocialButton 
            imagen="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
            />
        </div>

        <p>O usa tu email para registrarte</p>

        <div className="formulario">
             <Formulario  />
        </div>
        


    </>
    );
};

export default Registro;