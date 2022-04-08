class TorosyVacas{
    todosLosToros(clave1,clave2){
        var res= this.toros(clave1,clave2);
        if(res=="")res="sin coincidencias";
        return res;
    } 
 
    toros(cl1,cl2){
     var clave1=this.transformar(cl1);
     var clave2=this.transformar(cl2);
     var res="";
     for(var cont=0; p.tamano(clave1)!= cont  ;cont++){
        res=this.toro(clave1,clave2,cont,res);
     }
         return res;
    }

    toro(clave1,clave2,cont,res){
        if(clave1[cont]==clave2[cont]) res=res+"!"; 
        return res;
       }
}

export default TorosyVacas;