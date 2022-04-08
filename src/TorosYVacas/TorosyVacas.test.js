import Parametros from "./Parametros.js";
describe("Parametros", () => {
    const p = new Parametros();
  
    it("1.Insertar 1 numero y volverse una clave(string)", () => {
      expect(p.insertar(3)).toEqual("3");
    });

    it("2.Insertar varios numeros y volverse una clave(string)", ()=>{
        expect(p.insertar(1234)).toEqual("1234");
    });
});