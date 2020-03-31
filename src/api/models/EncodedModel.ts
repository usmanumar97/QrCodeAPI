import { IsNotEmpty } from 'class-validator';

export class EncodedModel {

    public encodedImg: string;

    @IsNotEmpty()
    public data: string;

}
