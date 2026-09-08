import { describe } from "node:test";
import { Concessionaria } from "./Concessionaria";

describe('Modelo Concessionaria', () => {
    it('deve criar um carro corretamente com o nome tipo', () => {
        const nomeDaConcessionaria = 'Localiza';
        const cnpjDaConcessionaria = '123456789';
        const cidadeDaConcessionaria = 'Itapetininga';

        const concessionaria = new Concessionaria(nomeDaConcessionaria, cnpjDaConcessionaria, cidadeDaConcessionaria);

        expect(concessionaria.nome).toBe('Localiza');
        expect(concessionaria.cnpj).toBe('123456789');
        expect(concessionaria.cidade).toBe('Itapetininga');
        expect(concessionaria.id).toBeNull();
    });
});