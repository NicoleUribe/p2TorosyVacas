import Parametros from "./Parametros.js";
const p= new Parametros();

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

       transformar(cl){
        return p.insertar(cl);
    }

    todasLasVacas(clave1,clave2){
        var res= this.vacas(clave1,clave2);
        if(res=="")res="sin coincidencias";
        return res;
    } 
    
       vacas(cl1,cl2){
        var clave1=this.transformar(cl1);
        var clave2=this.transformar(cl2);
        var res="";
        for(var cont=0;p.tamano(clave1)!= cont; cont++){
            for(var cont2=0;p.tamano(clave1)!=cont2 ; cont2++){
               res=this.vaca(clave1,clave2,res,cont,cont2); 
            }
        } 
        return res;
       }

      vaca(clave1,clave2,res,cont,cont2){
        if(clave1[cont2]==clave2[cont])res=res+"*";
        return res;
      }
}

export default TorosyVacas;