import Tema from './Tema';
import User from './User';

interface Postagem{
data: string,
id:    number,
imagemUrl:    string,
tema?:Tema|null,
texto:string,
titulo:string
}

export default Postagem;