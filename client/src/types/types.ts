export interface FileDTO{
    file: File
    fileName: string
    size: number
}
export interface reqBodyDTO{
    activator: boolean
    IP?: string
    Port?: string
    fileInfo?: FileDTO[]
}

