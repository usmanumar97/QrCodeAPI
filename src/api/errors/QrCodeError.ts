import { HttpError } from 'routing-controllers';

export class QrCodeError extends HttpError {
    constructor() {
        super(404, 'Data not found!');
    }
}
