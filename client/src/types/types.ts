export interface reqBodyDTO{
    activator: boolean
    IP?: string
    Port?: string
    fileInfo?: {
        fileName: string
        fileSize: number
    }
    fileData?: any
}

export interface FileDTO{
    file: File
    fileName: string
    size: number
}

