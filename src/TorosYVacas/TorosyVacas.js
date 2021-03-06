import Parametros from "./Parametros.js";
const p= new Parametros();

class TorosyVacas{
    sinCoincidencias(res){
        if(res=="")res="sin coincidencias";
        return res;
    }

    todosLosToros(clave1,clave2){
        var res="";
        res= this.toros(clave1,clave2);
        return res;
    } 

    toros(cl1,cl2){
     var clave1=this.transformar(cl1), clave2=this.transformar(cl2);
     var res="";
     for(var cont=0; p.tamano(clave1)!= cont  ;cont++){
        if(this.toro(clave1,clave2,cont))res=res+"!";
     }
         return res;
    }

    toro(clave1,clave2,cont){
        var res=false;
        if(clave1[cont]==clave2[cont])  res=true;
        return res;
       }

    transformar(cl){
        return p.insertar(cl);
    }

    todasLasVacas(clave1,clave2){
        var res="";
        res= this.vacas(clave1,clave2);
        return res;
    } 
    vacas(cl1,cl2){
        var clave1=this.repetidos(cl1);
        var clave2=this.transformar(cl2);
        var res="";
        for(var cont=0;p.tamano(clave2)!= cont; cont++){
            for(var cont2=0;p.tamano(clave1)!=cont2 ; cont2++){
               res=this.vaca(clave1,clave2,res,cont,cont2); 
            }
        } 
        return res;
    }
    vaca(clave1,clave2,res,cont,cont2){
        if(clave1[cont2]==clave2[cont] && cont!=cont2)res=res+"*";
        return res;
    }
    repetidos(clave){
        var newClave=this.transformar(clave);
        return p.repetido(newClave);
    }
    todaLaClave(clave1,clave2){
        var res;
            res=this.todosLosToros(clave1,clave2);
            res=res+this.todasLasVacas(clave1,clave2);
            res=this.casosEspeciales(clave1,clave2,res);;
        return res;
    }
    casosEspeciales(clave1,clave2,res){
        res=this.ganador(clave1,clave2,res);
        res=this.sinCoincidencias(res);
        return res
    }
    ganador(clave1,clave2,res){
        if(clave1==clave2)res= "GANASTE!!!";
        return res;
    }
    ternera(clave1,clave2,res,cont,cont2){
        if(Number(clave1[cont2])==Number(clave2[cont])+1 &&Number(clave1[cont2])==Number(clave2[cont])-1)res=res+"#";
        return res;
    }
    todasLasTerneras(clave1,clave2){
        clave1=this.repetidos(clave1);
        var clave2=this.transformar(clave2);
        var res="";
        for(var cont=0;p.tamano(clave2)!= cont; cont++){
            for(var cont2=0;p.tamano(clave1)!=cont2 ; cont2++){
               res=this.ternera(clave1,clave2,res,cont,cont2); 
            }
        } 
        return res;
    }
}
export default TorosyVacas;