import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Body, Controller, Post, Req, Res, UseBefore } from 'routing-controllers';

// import { Body, Controller, Post, UseBefore } from 'routing-controllers';
import { EncodedModel } from '../models/EncodedModel';
import { QrCodeService } from '../services/QrCodeService';

@Controller('/qrcodes')
@UseBefore(bodyParser.urlencoded( {extended: true}), bodyParser.json())
export class PetController {

    constructor(
        private qrCodeService: QrCodeService
    ) { }

    @Post('/encodedvalue')
    public async encodedValue(
        @Req() request: express.Request,
        @Body() qrCodeData: EncodedModel,
        @Res() response: express.Response):
        Promise<EncodedModel | express.Response> {
            console.log('-------321-------');
            const qrCodeValue = await this.qrCodeService.encodedValue(qrCodeData);
            console.log('-------678-------');
            return qrCodeValue;
        }

    // @Post('/encodedvalue')
    // public async encodedValue(@Body({required: true}) qrCodeData: EncodedModel): Promise<EncodedModel> {
    //     const qrCodeValue = await this.qrCodeService.encodedValue(qrCodeData);
    //     return qrCodeValue;
    // }
}
