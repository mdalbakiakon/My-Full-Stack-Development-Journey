const isUserInputValid = async (req, res, next) => {
    try {
        let {identifier, password} = req.body;
        
        if(!identifier || !password){
            return res.status(400).json({
                status: 'failed',
                message: 'credential fields may be missing or empty'
            })
        };

        if(identifier.trim() === ""){
            return res.status(400).json({
                status: 'failed',
                message: 'identifier field is empty'
            })
        };

        if(identifier.includes('@')){
            req.identifierType = 'email';
            req.email = identifier;
        }else{
            req.identifierType = 'username';
            req.username = identifier;
        }

        req.password = password;
        next();

    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            status: 'failed',
            message: 'something went wrong from input validation middleware',
            error: err.message
        })
    }
}

export default {isUserInputValid};