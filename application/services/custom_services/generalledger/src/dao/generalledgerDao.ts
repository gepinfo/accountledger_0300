import * as mongoose from 'mongoose';
import generalledgerModel from '../models/daomodels/generalledger';
import { CustomLogger } from '../config/Logger'


export class generalledgerDao {
    private generalledger = generalledgerModel;
    constructor() { }
    
    public async GpDelete(generalledgerId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into generalledgerDao.ts: GpDelete');

    

    
    
    
    this.generalledger.findByIdAndRemove(generalledgerId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from generalledgerDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(generalledgerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into generalledgerDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(generalledgerData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.generalledger.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from generalledgerDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(generalledgerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into generalledgerDao.ts: GpSearchForUpdate');

    

    
    
    
    this.generalledger.findOneAndUpdate({ _id: generalledgerData._id }, generalledgerData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from generalledgerDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(generalledgerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into generalledgerDao.ts: GpUpdate');

    

    
    
    
    this.generalledger.findOneAndUpdate({ _id: generalledgerData._id }, generalledgerData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from generalledgerDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(generalledgerId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into generalledgerDao.ts: GpGetNounById');

    

    
    
    
    this.generalledger.findById(generalledgerId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from generalledgerDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into generalledgerDao.ts: GpGetAllValues');

    

    
    
    
    this.generalledger.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from generalledgerDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(generalledgerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into generalledgerDao.ts: GpCreate');

    let temp = new generalledgerModel(generalledgerData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from generalledgerDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(generalledgerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into generalledgerDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.generalledger.aggregate(([
                        { $match: { $and: [{ created_by: generalledgerData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from generalledgerDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}