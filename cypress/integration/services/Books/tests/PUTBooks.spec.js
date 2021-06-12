import * as POSTBooks from '../requests/POSTBooks.request'
import * as PUTBooks from '../requests/PUTBooks.request'
import * as GETBooks from '../requests/GETBooks.request'


describe('PUT Books', ()=>{
    it('Alterar um livro', ()=>{
        GETBooks.allBooks().then((resAllBooks) =>{
            PUTBooks.changeBooks(resAllBooks.body[0].id).should((resChangeBook)=>{
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq('Giovani teste');
            })
    })  
    it('Criar e alterar um livro', () =>{
        POSTBooks.addBooks().then((resAddBooks)=>{
            PUTBooks.changeBooks(resAddBooks.body[2].id).should((resChangeLivro)=>{
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq('Giovani teste');
            })
        })

    });
});

})