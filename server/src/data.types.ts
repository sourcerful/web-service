import { IsBoolean, IsString } from 'class-validator';
import { Request, Response, NextFunction, Router } from 'express';

export class activatorBodyFormat{
    @IsBoolean()
    activator?: boolean
    // @IsString()
    // destIP?: string
}

export interface Controller{
    path: string
    router: Router;
}

export interface CustomRequest extends Request{
    data ?: activatorBodyFormat
}