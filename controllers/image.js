const handleImage=(req,res,db,id)=>{
    const { id } = req.params;
    const { id } = req.body;
    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0])
        })
        .catch(err => res.status(400).json('json UNABLE TO GET ENTIRES'))
    }
    module.exports = {
        handleRegister: handleImage
    }