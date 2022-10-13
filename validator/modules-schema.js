//Imports 
import joi from 'joi';

//Schema

const idSchema = joi.number().integer().required();

const objSchema = joi.object({
  ModuleID: joi.number().integer(),
  ModuleName: joi.string().min(5),
  ModuleCode: joi.string().min(5),
  ModuleLevel: joi.number().integer().min(3).max(7),
  ModuleYearID: joi.number().integer(),
  ModuleLeaderID: joi.number().integer(),
  ModuleImageURL: joi.string().uri()
}).unknown(true);

const mutableKeys = ['ModuleName', 'ModuleCode', 'ModuleLevel', 'ModuleYearID', 'ModuleLeaderID', 'ModuleImageURL'];

const createSchema = objSchema.and(...mutableKeys);

const updateSchema = joi.object({
  id: idSchema,
  obj: objSchema.or(...mutableKeys)
})

export default { idSchema, createSchema, updateSchema };