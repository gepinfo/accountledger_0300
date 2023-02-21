import { Request, Response, NextFunction } from "express";
import { generalledgerController } from '../controller/generalledgerController';


export class Routes {
    private generalledger: generalledgerController = new generalledgerController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/generalledger/:id').delete(this.generalledger.GpDelete);
app.route('/generalledger/get/search').get(this.generalledger.GpSearch);
app.route('/generalledger/get/update').put(this.generalledger.GpSearchForUpdate);
app.route('/generalledger').put(this.generalledger.GpUpdate);
app.route('/generalledger/:id').get(this.generalledger.GpGetNounById);
app.route('/generalledger').get(this.generalledger.GpGetAllValues);
app.route('/generalledger').post(this.generalledger.GpCreate);
app.route('/generalledger/userid/created_by').get(this.generalledger.GpGetNounCreatedBy);
     }

}