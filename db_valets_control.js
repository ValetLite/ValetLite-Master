module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name } = req.body;
     dbInstance.create_valet([ name ])
      .then( () => res.status(200).send() )
      .catch( (err) => res.status(500).send(err) );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    dbInstance.read_valet([ params.id ])
      .then( (valet) => res.status(200).send( valet ) )
      .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_valets()
      .then( (valets) => res.status(200).send(valets) )
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;
    dbInstance.update_valet([ params.id, query.desc ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    dbInstance.delete_valet([params.id])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};
