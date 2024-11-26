import { Request, Response } from "express";
import { Usuario } from "../models/Usuario"; // Certifique-se de importar o modelo correto

// Função para renderizar a página de usuários
export const usuarios = async (req: Request, res: Response) => {
    try {
        // Buscando todos os usuários no banco de dados
        const usuarios = await Usuario.findAll();

        // Renderizando a página com os dados dos usuários
        res.render('pages/usuarios', {
            usuarios
        });
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).send('Erro ao buscar usuários');
    }
};

