module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { make, model, year, color, plate, owner, phone, space } = req.body;
     dbInstance.create_vehicle([ make, model, year, color, plate, owner, phone, space ])
      .then( () => res.status(200).send() )
      .catch( (err) => res.status(500).send(err) );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    dbInstance.read_vehicle([ params.id ])
      .then( (vehicle) => res.status(200).send( vehicle ) )
      .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_vehicles()
      .then( (vehicles) => res.status(200).send(vehicles) )
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;
    dbInstance.update_vehicle([ params.id, query.desc ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    dbInstance.delete_vehicle([params.id])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};
