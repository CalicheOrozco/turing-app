import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'


const FileUploadComponent = () => {

    const fileParams = ({ meta }) => {
        return { url: 'https://httpbin.org/post' }
    }

    const onFileChange = ({ meta, file }, status) => { 
        console.log(status, meta, file) 
    }
    //Este es la funcion para enviar los datos
    const onSubmit = (files, allFiles) => {

        
        
        
        allFiles.forEach(f => f.remove())
        console.log(files)
    }

    const getFilesFromEvent = e => {
        return new Promise(resolve => {
            getDroppedOrSelectedFiles(e).then(chosenFiles => {
                resolve(chosenFiles.map(f => f.fileObject))
            })

            

            
        })
    }

    const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
        const textMsg = files.length > 0 ? 'Cargar de nuevo' : 'Selecciona imagenes' 

        return (
            <>
            <label className="btn btn-danger mt-4">
                    {textMsg}
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        accept={accept}
                        multiple
                        onChange={e => {
                            getFilesFromEvent(e).then(chosenFiles => {
                                onFiles(chosenFiles);
                            });
                        } } />






                </label></>
        )
    }

    return (
        <Dropzone
            onSubmit={onSubmit}
            submitButtonContent='Comunicar al C5'
            onChangeStatus={onFileChange}
            InputComponent={selectFileInput}
            getUploadParams={fileParams}
            getFilesFromEvent={getFilesFromEvent}
            accept="image/*,audio/*,video/*"
            maxFiles={5}
            inputContent="Soltar un archivo "
            styles={{
                dropzone: { width: '100%', height: 400 },
                dropzoneActive: { borderColor: 'green' },
            }}
                        
        />
    );
};

export default FileUploadComponent;