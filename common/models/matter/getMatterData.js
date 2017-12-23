'use strict';

const app = require("../../../server/server");
const Q = require("q");
const promise=require("promise");
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

    function getComments (tasks){
      //console.log(task);
      var i =0;
      for(var key in tasks){
        var defered = Q.defer();
        var list = [];
          MatterTaskComments.find({where:{matterTaskId:tasks[key].matterTaskId}},function(err,comments){
            tasks[key].comments = comments;
            list.push(JSON.stringify(tasks[key]));
            i++
            if (i == tasks.length) {
              //console.log(list);
              return defered.resolve(list);
            }
           })
      }
         return defered.promise;
    };
function getTasks (id){
  var defered = Q.defer();
    MatterTasks.find({where:{matterId:id}},function(err,tasks){
        getComments(tasks).then(function(list) {
          //console.log("iiiii",list);
          return defered.resolve(list);
        });
  });
  return defered.promise;
};

Matters.find({where: {matterId: reqMatterId}}, function(err, data) {
  if(err){
    callback(err);
  }else{
    getTasks(reqMatterId).then(function(tasks){
      data[0].tasks = tasks;
      var finalData = JSON.stringify(data)
      console.log(JSON.parse(finalData));
    })
}
});

    //TODO: YOUR SOLUTION GOES HERE
    //callback(null, results);
  }
};
