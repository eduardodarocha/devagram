import type {NextApiRequest, NextApiResponse} from 'next';
import { conectarMongoDB } from '../../middlewares/conectarMongoDB';

const endpointLogin = async (
  req : NextApiRequest,
  res : NextApiResponse
  ) => {
    if(req.method === 'POST'){
      const {login, senha} = req.body;
      if(login === 'admin@123' && senha === 'admin@123'){
        return res.status(200).json({msg : 'Usuário logado com sucesso'});
      }
      return res.status(405).json({erro : 'Usuário ou senha inválidos'});
    }
    
    return res.status(405).json({erro : 'Method not allowed'});
    
  }

  export default conectarMongoDB(endpointLogin);