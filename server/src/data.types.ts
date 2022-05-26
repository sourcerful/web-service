import { IsBoolean, IsString } from 'class-validator';
import { Request, Response, NextFunction, Router } from 'express';

export interface reqBodyDTO{
    activator: boolean
    IP?: string
    Port?: string
    files?: File[]
    formData: FormData
 //   fileInfo?: FileDTO[]
}

export interface Controller{
    path: string
    router: Router;
}

export interface CustomRequest extends Request{
    data ?: reqBodyDTO
}