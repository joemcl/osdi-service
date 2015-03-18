
function send(req, res) {
  var error = {
    'request_type': 'atomic',
    'response_code': 500,
    'resource_status': [
      {
        'resource': '*',
        'response_code': 500,
        'errors': [
          {
            'code': 'NOT_SUPPORTED',
            'description': 'The system does not support resources of this type.'
          }
        ]
      }
    ]
  };

  return res.status(500).send(error);
}


module.exports = {
  send: send
};

