const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//retrieving contacts
router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err,contacts){
        res.json(contacts);
        // res.send(contacts);
    });
});

//adding contacts
router.post('/contacts',(req,res,next)=>{
    let newContact = new Contact({
        book_name : req.body.bookName,
        author_name : req.body.authorName?req.body.authorName:'',
        shelf_no : req.body.shelfNo
    });
    console.log("newContact", newContact);
    newContact.save((err,contact)=>{
        if(err)
        {
            console.log("err", err);
            res.json({msg: 'Failed to add contacts'});

        }
        else {
            console.log("contact", contact);
            res.json({msg:'Contact added successfully'});;
        }
    });
});

// delete contacts
router.delete('/contacts/:id',(req,res,next)=>{
   Contact.deleteOne({_id: req.params.id},function(err,result){
       if(err)
       {
           console.log("err", err);
       }
       else{
           res.json({msg:'Contact erased successfully'});
       }
   });
});


// find contacts
router.post('/contacts/search',(req,res,next)=>{
    
    console.log("search answer", req.body);

    Contact.find({book_name: req.body.book_name},function(err,result){
        if(err)
        {
            console.log("err", err);
        }
        else{
            res.json({msg:'Contact found successfully',result});
            console.log("found successfully",result);
        }
    });
 });


 //update contacts
router.put('/contacts/:id',(req,res,next)=>{
    
    console.log("update answer 1234", req.body, req.params.id);

    Contact.updateOne({_id:req.params.id },{shelf_no:req.body.shelf_no },function(err,result){
        if(err)
        {
            console.log("err", err);
        }
        else{
            res.json({msg:'Contact updated successfully',result});
            console.log("updted successfully",result);
        }
    });
 });

 
module.exports = router;

