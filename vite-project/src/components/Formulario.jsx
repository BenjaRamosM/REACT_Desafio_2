import Alert from "./Alert";
import { useState } from "react";

const Formulario = () =>{

    const [nombre, setNombre]=useState('');
    const [email, setEmail]=useState('');
    const [pass1, setPass1]=useState('');
    const [pass2, setPass2]=useState('');

    const [error1,setError1]=useState(false);
    const [error2,setError2]=useState(false);
    const [error3,setError3]=useState(false);
    const [exito,setExito]=useState(false);

    const validarDatos=(e)=>{
        e.preventDefault()

        if(nombre===''||email===''||pass1===''||pass2===''){
            setError1(true);
            return;

        }

        if(pass1 != pass2){
            setError2(true);
            return;
        }

        if( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
        {

        
        }
        else{
            setError3(true);
            return;
        }
        

        
        setExito(true);
        setError1(false);
        setError2(false);
        setError3(false);
        setNombre('');
        setEmail('');
        setPass1('');
        setPass2('');


    };

    return(
        <>
            <form className="formulario" onSubmit={validarDatos}>
                {error1 ?  <Alert mensaje="Todos los campos son obligatorios" clase="error" /> : null} 

                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type = "text"
                        name = "nombre"
                        className="form-control"
                        onChange={(e)=> setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
               
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type = "text"
                        name = "email"
                        className="form-control"
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                {error3 ?  <Alert mensaje="Formato de email incorrecto" clase="error"  /> : null}

                <div className="form-group">
                    <label>Contraseña</label>
                    <input 
                        type = "text"
                        name = "pass1"
                        className="form-control"
                        onChange={(e)=> setPass1(e.target.value)}
                        value={pass1}
                    />
                </div>
                <div className="form-group">
                    <label>Confirmar contraseña</label>
                    <input 
                        type = "text"
                        name = "pass2"
                        className="form-control"
                        onChange={(e)=> setPass2(e.target.value)}
                        value={pass2}
                    />
                </div>

                {error2 ?  <Alert mensaje="Las contraseñas no coinciden" clase="error" /> : null}

                <button type = "submit" className="btn btn-primary">Enviar</button>

                {exito ? <Alert mensaje="Ingreso exitoso!" clase ="correcto"/> : null}
            </form>

            <hr />
        </>
    );
};

export default Formulario;