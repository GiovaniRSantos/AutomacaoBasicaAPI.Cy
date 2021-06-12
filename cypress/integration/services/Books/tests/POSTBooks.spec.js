import * as POSTBooks from '../requests/POSTBooks.request'



describe('POST Books', ()=>{
    it('Adicionar um novo livro', () =>{
        POSTBooks.addBooks().should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body.id).to.be.eq(1)
            expect(response.body.title).to.be.eq('Giovani') 
            expect(response.body.description).to.be.eq('Teste de API')
            expect(response.body.pageCount).to.be.eq(300)
            expect(response.body.publishDate).to.be.not.null 
        });
    });
});