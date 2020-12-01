const mongoose = require('mongoose');

const Product = mongoose.model('Product');
// require('dotenv/config');

module.exports = {

    //Index
    async Index(req,res){
        const products = await Product.find();
        return res.json(products);
    },

    //Details
    async Details(req, res){
        const products = await Product.findById(req.params.id).populate('prodId',['Nameprod', 'Price']);

        if(!products)
        return res.status(404).json({error: 'Produto não encontrado'});

        return res.json(products);
    },

    //Create
    async Create(req,res){
        const products = await Product.create(req.body);
        return res.json(products)
    },

    //Update
    async Update(req,res){
        const products = await Product.findByIdAndUpdate(req.params.id,req.body,{new: true});
        return res.json(products);
    },

    //Delete
    async Delete(req,res){
        await Product.findByIdAndDelete(req.params.id);
        return res.json({msg:'Produto excluido'});
    },
}