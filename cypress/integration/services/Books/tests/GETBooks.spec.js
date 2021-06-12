import * as GETBooks from '../requests/GETBooks.request'

describe('GET Books', ()=>{
    it('Listar todos os livros', () =>{
        GETBooks.allBooks().should((response)=>{
            expect(response.status);
            expect(response.body).to.be.not.null;
        });
    });
});

