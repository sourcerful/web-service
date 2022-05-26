import Dropzone, {FileRejection, useDropzone} from 'react-dropzone';
import {StoreContext} from "../index";
import { useCallback, useContext, useState, useEffect } from 'react';
import { Button, Grid } from '@mui/material';

const FileUploader = () => {

    const store = useContext(StoreContext)
    const [myFiles, setMyFiles] = useState<File[]>([])
    const [rejectedFiles, setRejectedFiles] = useState<FileRejection[]>([])

    useEffect(() => {
      myFiles.map((file: File) => {
        store.stores.requestDataStore.requestBody.files?.push(file)
      })
    }, [myFiles])

    const onDrop = useCallback(acceptedFiles => {
      if(myFiles.length <= 2){
        setMyFiles([...myFiles, ...acceptedFiles])
      }
      setRejectedFiles([...rejectedFiles, ...fileRejections])
    }, [myFiles, rejectedFiles])

    const {
      acceptedFiles,
      fileRejections,
      getRootProps,
      getInputProps
    } = useDropzone({    
      maxFiles: 2,
      onDrop
    });

    //try to fix delete
    const acceptedFileItems = myFiles.map((file: File) => (
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <li key={file.name}>
            {file.name} - {file.size} bytes
          </li>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color='secondary' onClick={() => removeFile(file)}>Delete</Button>
        </Grid>
      </Grid>
    ));
  
    const fileRejectionItems = rejectedFiles.map(({ file, errors  }) => { 
     return (
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <li key={file.name}>
              {file.name} - {file.size} bytes
              <ul>
                {errors.map(e => <li key={e.code}>{e.message}</li>)}
              </ul>
        </li>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color='secondary' onClick={() => removeRejectedFile({file, errors})}>Delete</Button>
        </Grid>
    </Grid>
       
     ) 
    });
    
    //add delete
    const removeFile = (file: File) => {
      const newFiles = [...myFiles]
      newFiles.splice(newFiles.indexOf(file), 1)
      setMyFiles(newFiles)
    }
    const removeRejectedFile = (item: FileRejection) => {
      const newFiles = [...rejectedFiles]
      newFiles.splice(newFiles.indexOf(item), 1)
      setRejectedFiles(newFiles)
    }

    return (
      <section className="container">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click here to select files</p>
          <em>(Maximum files: 2)</em>
        </div>
        <aside>
          <h4>Accepted files</h4>
          <ul>{acceptedFileItems}</ul>
          <h4>Rejected files</h4>
          <ul>{fileRejectionItems}</ul>
        </aside>
      </section>
    );
  }
  
export default FileUploader;