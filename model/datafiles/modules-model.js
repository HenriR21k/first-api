import dbConn from '../database/database.js'

//Model

const idKey = 'ModuleID';
const mutableKeys = ['ModuleName', 'ModuleCode', 'ModuleLevel', 'ModuleLeaderID', 'ModuleImageURL'];


export default {dbConn, idKey, mutableKeys};