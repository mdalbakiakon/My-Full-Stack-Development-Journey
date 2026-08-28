const inputValidation = async (req, res, next) => {
    try {
        
        let identifier = req.body.identifier;
        const password = req.body.password;

        if (!identifier || !password) {
            return res.status(400).json({
                status: 'failed',
                message: 'one or both input fields may be blank'
            });
        }

        identifier = identifier.trim();
        if (identifier === "") {
            return res.status(400).json({
                status: 'failed',
                message: 'identifier can\'t be empty'
            })
        };

        if (identifier.includes('@')) {
            req.identifierType = 'email';
            req.email = identifier;
        } else {
            req.identifierType = 'username';
            req.username = identifier;
        }

        req.password = password;
        next();

    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            status: 'failed',
            message: 'something went wrong in input validation',
            err: err.message
        });
    }
};

export default { inputValidation };