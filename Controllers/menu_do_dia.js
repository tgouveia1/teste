var express = require('express');
var router = express.Router();


const sf = require("../shared/functions")
    
    
  router.get("/",(req,res)=>{
    var collection = req.app.get('collection');
    collection.find().toArray().then(result => {
         res.send(result)
    })})
        
    router.get("/:cod",(req,res)=>{
      var collection = req.app.get('collection');
      collection.findOne({ "codigo_do_prato": req.params.cod }, function(err,result){
          if(err) res.send(err)
            res.send(result)
          })
      })
        
    router.post("/",(req,res)=>{
      var collection = req.app.get('collection');
      const {codigo_do_prato, nome, preco, regime, ing} = req.body;
        collection.insertOne({codigo_do_prato, nome, preco, regime, ing})
          .then(result => {
            res.send("Prato adicionado com sucesso")
          })
            .catch(error => console.error(error))
      });
        
    router.patch("/:cod",(req,res)=>{
      var collection = req.app.get('collection');
      let novo_valor=req.body
      quotesCollection.findOneAndUpdate(
        { "codigo_do_prato": req.params.cod },
        {$set: {novo_valor}},
        {upsert: false}
      )
        .then(result => {"Prato criado com sucesso"})
        .catch(error => console.error(error))
    })
        
    router.put("/:cod",(req,res)=>{
      var collection = req.app.get('collection');
      let novos_valores=req.body
      quotesCollection.findOneAndUpdate(
         { "codigo_do_prato": req.params.cod },
         {$set: {novos_valores}},
         {upsert: false}
      )
        .then(result => {res.send(console.log("Pratos eliminados"))})
        .catch(error => console.error(error))
    })
        
    router.delete("/:cod",(req,res)=>{
        var collection = req.app.get('collection');
        collection.deleteOne(
          {"codigo_do_prato": req.params.cod}
        )
          .then(result => {res.send(console.log(result))})
          .catch(error => console.error(error))
    })
    
    
    router.delete("/",(req,res)=>{
      var collection = req.app.get('collection');
        collection.deleteMany(
          {}
            
          )
            .then(result => {res.send(console.log("Pratos eliminados"))})
            .catch(error => console.error(error))
    });

    module.exports = router;