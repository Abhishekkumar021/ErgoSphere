// // src/components/FileUploader.jsx
// import React, { useCallback } from "react";
// import { useDropzone } from "react-dropzone";

// export default function FileUploader({ onFileAccepted }) {
//     const onDrop = useCallback((acceptedFiles) => {
//         if (onFileAccepted) onFileAccepted(acceptedFiles[0]);
//     }, [onFileAccepted]);

//     const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//     return (
//         <div
//             {...getRootProps()}
//             className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition"
//         >
//             <input {...getInputProps()} />
//             {isDragActive ? (
//                 <p className="text-blue-500">Drop the file here ...</p>
//             ) : (
//                 <p className="text-gray-600">Drag & drop a file here, or click to select a file</p>
//             )}
//         </div>
//     );
// }




// src/components/FileUploader.jsx
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import uploadImage from "../assets/upload.png";

export default function FileUploader({ onFileAccepted }) {
    const onDrop = useCallback((acceptedFiles) => {
        if (onFileAccepted) onFileAccepted(acceptedFiles); // Pass all files
    }, [onFileAccepted]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'text/plain': ['.txt'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
        },
        multiple: true  // ✅ Enable multiple file support
    });

    return (
        <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
        >
            <input {...getInputProps()} />
            {
                isDragActive ? (
                    <p className="text-blue-600">Drop the file here...</p>
                ) : (
                    <div className="flex flex-col items-center hover:text-gray-700 text-gray-600 ">

                        <img src={uploadImage} alt="Upload Image" className="w-14 h-14 mb-2 hover:shadow-lg" />
                        <p className="">Drag & drop a document, or click to select</p>

                    </div>
                )
            }
        </div>
    );
}
