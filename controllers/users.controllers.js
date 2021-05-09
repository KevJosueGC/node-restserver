const { request, response } = req = require('express');

const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API - controllers',
        query
    });
}
const usuariosPut = (req = request, res = response) => {

    const id = req.params;

    res.json({
        msg: 'put API - controllers',
        id
    });
}
const usuariosPost = (req = request, res = response) => {

    const body = req.body;

    res.json({
        msg: 'post API - controllers',
        body
    });
}
const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'Delete API - controllers'
    });
}
const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: 'Patch API - controllers'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}