import { Router } from "express";
import * as produtoController from '../controllers/produtoController'
import * as usuarioController from '../controllers/usuarioController'

const router = Router()

router.get('/',(req,res)=>{
    res.send('TESTE')
})

router.get('/produtos',produtoController.index)

router.get('/cadastrar',produtoController.visualizarCadastro)
router.post('/cadastrar',produtoController.cadastroProduto)

router.get('/editar/:id',produtoController.editaProduto)
router.post('/editar/:id',produtoController.atualizaProduto)

router.get('/excluir/:id',produtoController.deletarProduto)

router.get('/usuarios',usuarioController.usuarios)

export default router