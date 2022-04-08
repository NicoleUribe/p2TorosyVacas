import Parametros from "./Parametros.js";
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


});