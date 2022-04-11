import TorosyVacas from "./TorosyVacas.js";
import Parametros from "./Parametros.js";
const tyv= new TorosyVacas();
const p= new Parametros();

class Juego{

 jugar(clave1,clave2,long){
     var res;
        if(p.longitud(clave1,long)&&p.longitud(clave2,long) && p.validarCaracteres(clave2)== true) res=tyv.todaLaClave(clave1,clave2);

        else{
            res="El numero tiene caracteres especiales o excede el tamaño, por favor intentelo de nuevo";       

        }
                 


     return res;
 }
}
export default Juego;