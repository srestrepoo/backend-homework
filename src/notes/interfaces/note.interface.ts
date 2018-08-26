import { Document } from 'mongoose';

export interface Note extends Document {
    readonly text: string;
    readonly username: string;
    createdDate: Date;
    updatedDate: Date;
}