import Dropzone, {useDropzone} from 'react-dropzone';

const FileUploader = () => {
    
    const {
      acceptedFiles,
      fileRejections,
      getRootProps,
      getInputProps
    } = useDropzone({    
      maxFiles: 2,
    });
  
    const acceptedFileItems = acceptedFiles.map((file: File) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));
  
    const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
     return (
       <li key={file.name}>
            {file.name} - {file.size} bytes
            <ul>
              {errors.map(e => <li key={e.code}>{e.message}</li>)}
           </ul>
       </li>
     ) 
    });
    
    //add delete

    return (
      <section className="container">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <em>(2 files are the maximum number of files you can drop here)</em>
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