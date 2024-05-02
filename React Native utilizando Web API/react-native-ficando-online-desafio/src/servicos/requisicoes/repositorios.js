import api from "../api";

export async function pegarRepositoriosDoUsuario(login){
    try {
        const resultado = await api.get(`/users/${login}/repos`);
        return resultado.data
    }
    catch (error){
        console.log(error)
        return []
    }
}

export async function salvarRepositoriosDoUsuario(postId, nome, data, id){
    try {
        await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId
        });
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro'
    }
}

export async function criarRepositoriosDoUsuario(postId, nome, data){
    try {
        await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId
        });
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro'
    }
}


export async function deletarRepositorioDoUsuario(id){
    try {
        await api.delete(`/repos/${id}`);
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro'
    }
}