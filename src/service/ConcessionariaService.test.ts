import { ConcessionariaService } from './ConcessionariaService';

describe('Serviço ConcessionariaService', () => {

    let mockRepository: any;


    let concessionariaService: ConcessionariaService;


    beforeEach(() => {

        mockRepository = {
            salvar: jest.fn(),
            listarTodos: jest.fn(),
            buscarPorId: jest.fn(),
            atualizar: jest.fn(),
            excluir: jest.fn
        };

        concessionariaService = new ConcessionariaService(mockRepository);
    });


    describe('Testando validações do método cadastrar', () => {
        it('deve lançar erro se o nome tiver menos de 2 caracteres', async () => {
            await expect(concessionariaService.cadastrar('A', '123456789', 'São Paulo'))
                .rejects.toThrow("O nome deve ter no mínimo 2 caracteres.");

            await expect(concessionariaService.cadastrar('', '123456789', 'São Paulo'))
                .rejects.toThrow("O nome deve ter no mínimo 2 caracteres.");
        });

        it('deve lançar erro se o cnpj não for informado', async () => {
            await expect(concessionariaService.cadastrar('Honda Civic', '', 'São Paulo'))
                .rejects.toThrow("O cnpj é obrigatório.");
        });
    });

    it('deve lançar o erro se a cidade não for informada', async () => {
        await expect(concessionariaService.cadastrar('Honda Civic', '123456789', ''))
            .rejects.toThrow("A cidade é obrigatória.");
    });

    describe('Testando validações do método buscarPorId', () => {
        it('deve lançar erro se não existir no banco', async () => {
            mockRepository.buscarPorId.mockResolvedValue(null);

            await expect(concessionariaService.buscarPorId(999))
                .rejects.toThrow("Concessionaria não encontrada.");
        })
    })
});