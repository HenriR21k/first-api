import dbConn from './database.js'

//Model
const dbStructure = {};
dbStructure.table = 'Modules';
dbStructure.idField = 'ModuleID';
dbStructure.mutableFields = [
  'ModuleName',
  'ModuleCode',
  'ModuleLevel',
  'ModuleYearID',
  'ModuleLeaderID',
  'ModuleImageURL'
];
dbStructure.fields = [dbStructure.idField, ...dbStructure.mutableFields];
dbStructure.extendedTable = `(( ${dbStructure.table} LEFT JOIN Users ON ModuleLeaderID=UserID ) LEFT JOIN Years ON ModuleYearID=YearID )`;
dbStructure.extendedFields = `${dbStructure.fields},YearName AS ModuleYearName,CONCAT(UserFirstname," ",UserLastname) AS ModuleLeaderName`;

//INNER JOIN Years ON ModuleLeaderID=Years.YearID ) INNER JOIN Users ON ModuleYearID=YearID )`

const dbConformance = {};
dbConformance.recordToObj = (record) => record;
dbConformance.objToRecord = (obj) => dbStructure.mutableFields.reduce((prevRecord, currField) => {
  if (Object.keys(obj).includes(currField)) prevRecord[currField] = obj[currField];
  return prevRecord;
},{});


export default {dbConn, dbStructure, dbConformance};