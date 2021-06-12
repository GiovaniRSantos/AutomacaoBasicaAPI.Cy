import * as DELETEBooks from '../requests/DELETEBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'


describe('DELETE Books', ()=>{
    it('Deletar um livro', () =>{
        GETBooks.allBooks().then((resAllbooks)=>{
            DELETEBooks.deleteBooks(resAllbooks.body[0].id).should((resDeleteBook)=>{
                expect(resDeleteBook.status).to.eq(200)
            })
        })
        
    });
});

describe('Criar e excluir um livro', ()=>{
    it('Criar livro', () =>{
        POSTBooks.addBooks().then((resPostBook) =>{
            expect(resPostBook.status).to.eq(200);
            expect(resPostBook.body.id).to.be.eq(1)
            expect(resPostBook.body.title).to.be.eq('Giovani') 
            expect(resPostBook.body.description).to.be.eq('Teste de API')
            expect(resPostBook.body.pageCount).to.be.eq(300)
            expect(resPostBook.body.publishDate).to.be.not.null 
        }).should((resExcluirLivro)=>{
                expect(resExcluirLivro.status).to.eq(200)
            });
        });
    });
