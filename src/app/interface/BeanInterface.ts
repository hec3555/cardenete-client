interface ArticuloInterface{
    id: number;
    titulo: String;
    desc: String;
    fecha: Date;
    articulo: String;
    etiquetas: String;
    id_seccion: SeccionInterface;
    id_usuario: UsuarioInterface;
}

interface CategoriaInterface{
    id: number;
    descripcion: String;
}

interface ImagenInterface{
    id: number;
    nom_imagen: String;
    descripcion: String;
    foto: String;
    categoria: CategoriaInterface;
    usuario: UsuarioInterface;
}

interface SeccionInterface{
    id: number;
    nom_seccion: String;
    descripcion: String;
}

interface SugerenciaInterface{
    id: number;
    nombre: String;
    email: String;
    sugerencia: String;
    usuario: UsuarioInterface;
}

interface TipousuarioInterface{
    id: number;
    desc: String;
}

interface UsuarioInterface{
    id: number;
    nombre: String;
    ape1: String;
    ape2: String;
    fecha_nacimiento: Date;
    fecha_alta: Date;
    login: String;
    pass: String;
    email: String;
    token: String;
    confirmado: boolean;
    id_tipo_usuario: TipousuarioInterface;
}

interface ResponseInterface{
    status: number;
    msg: String;
}