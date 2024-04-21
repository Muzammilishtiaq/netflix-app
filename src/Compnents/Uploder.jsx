import React from 'react'
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';

function Uploder() {
    const{ getRootProps, getInputProps} = useDropzone({
        multiple:false,
        maxSize:100000,
        onDrop:(acceptedFiles)=>{
            alert(acceptedFiles[0].name);
        },

    });
  return (
<div className="w-full text-center">
    <div
    {...getRootProps()}
    className="px-6 py-8  border-2 border-border border-dashed bg-main rounded-md cursor-pointer">
<input {...getInputProps()} />
<span className="mx-auto flex-colo text-submain text-3xl">
    <FiUploadCloud />
</span>
<span className="text-white font-medium">Drag your image here</span>
<br />
<em className="text-border">(only .jpg and .png files will be accepted)</em>
    </div>
    
</div>
  )
}

export default Uploder;
