import { Request, Response } from 'express';
import {generalledgerDao} from '../dao/generalledgerDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let generalledger = new generalledgerDao();

export class generalledgerService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into generalledgerService.ts: GpDelete')
     let  generalledgerId = req.params.id;
     generalledger.GpDelete(generalledgerId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from generalledgerService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into generalledgerService.ts: GpSearch')
     let  generalledgerData = req.query;
     generalledger.GpSearch(generalledgerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from generalledgerService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into generalledgerService.ts: GpSearchForUpdate')
     let  generalledgerData = req.body;
     generalledger.GpSearchForUpdate(generalledgerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from generalledgerService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into generalledgerService.ts: GpUpdate')
     let  generalledgerData = req.body;
     generalledger.GpUpdate(generalledgerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from generalledgerService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into generalledgerService.ts: GpGetNounById')
     let  generalledgerId = req.params.id;
     generalledger.GpGetNounById(generalledgerId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from generalledgerService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into generalledgerService.ts: GpGetAllValues')
     
     generalledger.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from generalledgerService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into generalledgerService.ts: GpCreate')
     let  generalledgerData = req.body;
     generalledger.GpCreate(generalledgerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from generalledgerService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into generalledgerService.ts: GpGetNounCreatedBy')
     let  generalledgerData = { created_by: req.query.createdby };
     generalledger.GpGetNounCreatedBy(generalledgerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from generalledgerService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}