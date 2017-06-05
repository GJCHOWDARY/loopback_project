'use strict';

const app = require("../../../server/server");
const Q = require("q");

module.exports = {
  'config': {
    'http': {
      'path': '',
      'verb': 'get',
      'status': 200,
      'error': 404
    },
    'description': 'retrieve matter data',
    'accepts': {
      'arg': 'matterId',
      'type': 'number',
      'required': true
    },
    'returns': {
      'type': 'object',
      'root': true
    }
  },
  'function': (reqMatterId, callback) => {

    const Matters = app.models.Matter;
    const MatterTasks = app.models.MatterTask;
    const MatterTaskComments = app.models.MatterTaskComment;
    const Client = app.models.Client;
    const Group = app.models.Group;
    const results = {};



    //TODO: YOUR SOLUTION GOES HERE



    callback(null, results);
  }
};
