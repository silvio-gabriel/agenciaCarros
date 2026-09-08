import prisma from '../lib/prisma';
import { Carro } from '../models/Carro';
import { CarroRepository } from '../repository/CarroRepository'

jest.mock('../lib/prisma', () => ({
    _esModule: true,
    default: {
        carro: {
            create: jest.fn(),
            findMany: jest.fn(),
            findUnique: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        }
    }
}));



describe('Repositório CarroRepository', () => {
    let repository: CarroRepository;

    beforeEach(() => {
        repository = new CarroRepository();
        jest.clearAllMocks();
    });

    describe ('Método salvar', () =>{
        it('')
    })


});