import Parametros from "./Parametros.js";
import TorosyVacas from "./TorosyVacas.js";
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
        expect(tyv.todosLosToros(12345,12345)).toEqual("!!!!!");
        expect(tyv.todosLosToros(1234,5678)).toEqual("sin coincidencias");
      });

});