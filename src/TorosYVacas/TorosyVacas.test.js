import Parametros from "./Parametros.js";
import TorosyVacas from "./TorosyVacas.js";
import Juego from "./Juego.js";

describe("Parametros", () => {
    const p = new Parametros();
  
    it("1.Insertar 1 numero y volverse una clave(string)", () => {
      expect(p.insertar(3)).toEqual("3");
    });

    it("2.Insertar varios numeros y volverse una clave(string)", ()=>{
        expect(p.insertar(1234)).toEqual("1234");
    });

    it("3.Insertar varios caracteres(numeros y letras) y volverse una clave(string)", ()=>{
        expect(p.insertar("1ab4")).toEqual("1ab4");
    });

    it("4.Que no acepte simbolos", ()=>{
        expect(p.validarCaracteres("1#b4")).toEqual(false);
        expect(p.validarCaracteres("1cb4")).toEqual(true);
    });

    it("5.Que la clave no pase los 4 caracteres", ()=>{
        expect(p.longitud("1cb4",4)).toEqual(true);
        expect(p.longitud("1cb45",4)).toEqual(false);
    });

    it("6.Que la clave no pase de la cantidad de caracteres ingresados", ()=>{
        expect(p.longitud("1cb5674",7)).toEqual(true);
        expect(p.longitud("1cb45",4)).toEqual(false);
    });


});
describe("TorosyVacas", () => {
    const tyv = new TorosyVacas();
  
    it("7.detectar cadenas iguales con toros", () => {
        expect(tyv.todosLosToros(1,1)).toEqual("!");
    });
    
    it("8.detectar coincidencias identicas en una cadena y por cada una devuelve un toro", () => {
        expect(tyv.todosLosToros(12345,12345)).toEqual("!!!!!");
    });

    it("9. determinar todas coincidencias en cualquier lugar de la cadena y devolver vaca", () => {
        expect(tyv.todasLasVacas(12,21)).toEqual("**");
    });

    it("10. determinar algunas coincidencias en cualquier lugar de la cadena y devolver vaca", () => {
        expect(tyv.todasLasVacas(1245,2167)).toEqual("**");
    });

    it("11. detectar coincidencias en una cadena para evitar vacas extras", () => {
        expect(tyv.repetidos("5225")).toEqual("52..");
    });

    it("12. determinar algunas coincidencias en cadenas con numeros repetidos", () => {
        expect(tyv.todasLasVacas(5225,4352)).toEqual("**");
    });

    it("13. Que devuelva '' si no hay ninguna vacas ", () => {
        expect(tyv.todasLasVacas(3445,7876)).toEqual("");
    });

    it("14. Que devuelva '' si no hay ningun toro ", () => {
        expect(tyv.todosLosToros(3445,7876)).toEqual("");
    });

    it("15. Que diferencie vacas de toros",()=>{
        expect(tyv.todasLasVacas(3445,3876)).toEqual("");
    });

    it("15. Que diferencie vacas de toros con repetidos",()=>{
        expect(tyv.todasLasVacas(3345,8376)).toEqual("*");
    });

    it("16. Que identifique vacas y toros en la misma clave",()=>{
        expect(tyv.todaLaClave(2134,1234)).toEqual("!!**");
    });

    it("19.Que se avise si gano",()=>{
        expect(tyv.todaLaClave(1234,1234)).toEqual("GANASTE!!!");
    });

    it("20.Que muestre 'sin coincidencias' cuando las cadenas sean totalmente diferentes",()=>{
        expect(tyv.todaLaClave(1234,5678)).toEqual("sin coincidencias");
    });

   
});
describe("Juego", () => {
    const j = new Juego();
  
    it("17.Comprobar que el juego completo funciona", () => {
        expect(j.jugar(1234,4321,4)).toEqual("****");
        expect(j.jugar(1224,43%1,4)).toEqual("El numero tiene caracteres especiales o excede el tamaño, por favor intentelo de nuevo");
    });

    it("18.Que avise cuando una persona gana",()=>{
        expect(j.jugar(1234,1234,4)).toEqual("GANASTE!!!");
    });

    it("21.Que se muestre 'El numero tiene caracteres especiales o excede el tamaño, por favor intentelo de nuevo' si los caracteres son mas que los seleccionados",()=>{
        expect(j.jugar(12345,12347,4)).toEqual("El numero tiene caracteres especiales o excede el tamaño, por favor intentelo de nuevo");
    });

    describe("TorosyVacas", () => {
        const tyv = new TorosyVacas();
      
        it("22.Que devuelva # si el numero difiere en +1", () => {
            expect(tyv.ternera(1,2,"",0,0)).toEqual("#");
       });
       
       it("23.Que devuelva # si el numero difiere en -1", () => {
        expect(tyv.ternera(1,2,"",0,0)).toEqual("#");

         });

        it("24.Que devuelva ' 'si el numero difiere en mas de 1 ", () => {
            expect(tyv.ternera(1,8,"",0,0)).toEqual("");
    
         });

        it("25.Que devuelva '##'si el numero difiere en de alguno de los numeros difieren en 1 ", () => {
            expect(tyv.todasLasTerneras(1234,5788)).toEqual("#");
    
         });    
    
    });  
});
