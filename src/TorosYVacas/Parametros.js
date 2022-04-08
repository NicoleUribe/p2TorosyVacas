class Parametros{
    insertar(clave){
        return clave+"";
    }

    validarCaracteres(clave){
        var res=false;
        if(/^[a-zA-Z0-9]+$/.test(clave))res=true;
        return res;
    }

    longitud(claves,long){
        var res=false;
        if( this.tamano(claves)== long) res = true;
        return res;
    }
    
    tamano(claves){
        return this.insertar(claves).length;
    }

}

export default Parametros;