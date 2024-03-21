

const Alert = ({mensaje,clase}) =>{
    
    return(
        <>
            <p className={clase}>{mensaje}</p>
        </>
    );
};

export default Alert;