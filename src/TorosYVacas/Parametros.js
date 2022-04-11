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

    repetido(clave){
        var res="";
        var res1;
        for(var cont=0;this.tamano(clave)!= cont;cont++){
            res1=false;
            for(var cont2=0;this.tamano(res)!=cont2 ; cont2++){
                if(clave[cont]==res[cont2])res1=true; 
             } 
             if(!res1){
                res=res+clave[cont];
             }
             else{
                 res=res+".";
             }
        }
        return res;
    }


}

export default Parametros;