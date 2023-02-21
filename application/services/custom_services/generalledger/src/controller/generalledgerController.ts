import { Request, Response } from 'express';
import { generalledgerService } from '../service/generalledgerService';
import { CustomLogger } from '../config/Logger'
let generalledger = new generalledgerService();

export class generalledgerController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    generalledger.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into generalledgerController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from generalledgerController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    generalledger.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into generalledgerController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from generalledgerController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    generalledger.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into generalledgerController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from generalledgerController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    generalledger.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into generalledgerController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from generalledgerController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    generalledger.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into generalledgerController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from generalledgerController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    generalledger.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into generalledgerController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from generalledgerController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    generalledger.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into generalledgerController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from generalledgerController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    generalledger.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into generalledgerController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from generalledgerController.ts: GpGetNounCreatedBy');
    })}


}