import QRCode from 'qrcode';
import { Service } from 'typedi';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { QrCodeError } from '../errors/QrCodeError';
import { EncodedModel } from '../models/EncodedModel';

@Service()
export class QrCodeService {

    constructor(
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public async encodedValue(qrCodeData: EncodedModel): Promise<EncodedModel> {
        try{
            qrCodeData.encodedImg = await QRCode.toDataURL(qrCodeData.data);
            console.log('-------123-------');
            this.log.info('Data is being encoded...');
            console.log('-------456-------');
        } catch (err) {
            throw QrCodeError;
        }
        return qrCodeData;
    }
}
