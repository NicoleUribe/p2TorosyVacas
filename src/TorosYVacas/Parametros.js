class Parametros{
    insertar(clave){
        return clave+"";
    }

    validarCaracteres(clave){
        var res=false;
        if(/^[a-zA-Z0-9]+$/.test(clave))res=true;
        return res;
    }

}

export default Parametros;