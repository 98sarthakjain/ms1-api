const handleSignin=(req,res,db,bcrypt)=>{
    const {email,password}=req.body;
    if (!email || !password){
        return res.status(400).json('PLease enter email and password');
    }
db.select('email','hash')
.from('login')
.where('email','=', email)
.then(data=>{
    const isValid = bcrypt.compareSync(password, data[0].hash);
    console.log(isValid);
    if (isValid){
       return db.select('*').from('users')
        .where('email','=', email)
        .then(user=>{
            console.log(user)
            res.json(user[0]);
        })

         .catch(err => res.status(400).json('UNABLE TO FIND USER'));
    }
    else{
        res.status(400).json('UNABLE wrong Credentials');
    }
})
.catch(err => res.status(400).json('WRONG CREDENTIALS'));
}
module.exports = {
    handleSignin: handleSignin
}