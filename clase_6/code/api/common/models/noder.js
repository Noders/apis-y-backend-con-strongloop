module.exports = function(Noder) {


    Noder.maileame = function(mail, cb) {




        Noder.app.models.Email.send({
            to: mail,
            from: 'noders team',
            subject: 'Hola',
            text: 'Mundo',
            html: 'Hola <p>Mundo</p>'
        }, function(err, email) {
            console.log("enviado!!")
            if (err) {
                cb(err);
            } else {
                cb(null, "success!");
            }
        })




    }



    Noder.hola = function(mail, cb) {


        cb(null, "hola: "+mail)




    }



    Noder.remoteMethod('maileame', {
        accepts: {
            arg: 'mail',
            type: 'string'
        },
        returns: {
            arg: 'response',
            type: 'string'
        }
    });




    Noder.remoteMethod('hola', {
        accepts: {
            arg: 'mail',
            type: 'string'
        },
        returns: {
            arg: 'response',
            type: 'string'
        }
    });

};
