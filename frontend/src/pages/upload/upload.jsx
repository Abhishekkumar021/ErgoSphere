// // import React, { useState } from "react";
// // import FileUploader from "../components/FileUploader";

// // export default function Upload() {
// //     const [file, setFile] = useState(null);

// //     const handleUpload = async () => {
// //         if (!file) return alert("No file selected!");

// //         const formData = new FormData();
// //         formData.append("file", file);

// //         // Replace with your backend API
// //         await fetch("/api/upload", {
// //             method: "POST",
// //             body: formData,
// //         });

// //         alert("File uploaded!");
// //     };

// //     return (
// //         <div className="p-6 max-w-xl mx-auto">
// //             <h1 className="text-2xl font-bold mb-4">Upload Document</h1>
// //             <FileUploader onFileAccepted={setFile} />
// //             {file && <p className="mt-2 text-green-600">Selected: {file.name}</p>}
// //             <button
// //                 onClick={handleUpload}
// //                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //             >
// //                 Upload
// //             </button>
// //         </div>
// //     );
// // }




// // src/pages/Upload.jsx
// import React, { useState } from "react";
// import FileUploader from "../components/FileUploader";

// export default function Upload() {
//     const [file, setFile] = useState(null);
//     const [uploadStatus, setUploadStatus] = useState("");

//     const handleUpload = async () => {
//         if (!file) return alert("Please select a file first.");

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const res = await fetch("http://localhost:8000/api/upload/", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (!res.ok) throw new Error("Upload failed");
//             const result = await res.json();
//             setUploadStatus("✅ File uploaded successfully!");
//         } catch (err) {
//             console.error(err);
//             setUploadStatus("❌ Upload failed. Please try again.");
//         }
//     };

//     return (
//         <div className="p-6 max-w-xl mx-auto">
//             <h1 className="text-2xl font-bold mb-4">Upload Document</h1>
//             <FileUploader onFileAccepted={setFile} />
//             {file && <p className="mt-2 text-green-600">Selected: {file.name}</p>}
//             <button
//                 onClick={handleUpload}
//                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//                 Upload
//             </button>
//             {uploadStatus && <p className="mt-4 font-medium">{uploadStatus}</p>}
//         </div>
//     );
// }



import React, { useState } from "react";
import FileUploader from "../../components/FileUploader";



export default function Upload() {
    const [files, setFiles] = useState([]);
    const [uploadStatus, setUploadStatus] = useState("");

    const handleUpload = async () => {
        if (files.length === 0) return alert("Please select files first.");

        const formData = new FormData();
        files.forEach((file) => formData.append("files", file)); // Backend must support this

        try {
            const res = await fetch("http://localhost:8000/api/upload/", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Upload failed");
            const result = await res.json();
            setUploadStatus("✅ Files uploaded successfully!");
        } catch (err) {
            console.error(err);
            setUploadStatus("❌ Upload failed. Please try again.");
        }
    };

    //   return (
    //     <div className="p-6 max-w-xl mx-auto justify-center items-center">
    //       <h1 className="text-2xl font-bold mb-4">Upload Multiple Documents</h1>
    //       <FileUploader onFileAccepted={setFiles} />
    //       {files.length > 0 && (
    //         <ul className="mt-2 text-green-600 list-disc list-inside">
    //           {files.map((file, i) => (
    //             <li key={i}>{file.name}</li>
    //           ))}
    //         </ul>
    //       )}
    //       <button
    //         onClick={handleUpload}
    //         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
    //       >
    //         Upload
    //       </button>
    //       {uploadStatus && <p className="mt-4 font-medium">{uploadStatus}</p>}
    //     </div>
    //   );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="p-6 max-w-xl w-full bg-white rounded-lg shadow-md border border-b-2 border-slate-200">
                <h1 className="text-2xl font-bold mb-10 text-center">Upload Your Documents</h1>
                <FileUploader onFileAccepted={setFiles} />
                {files.length > 0 && (
                    <ul className="mt-4 text-green-600 list-disc list-inside">
                        {files.map((file, i) => (
                            <li key={i}>{file.name}</li>
                        ))}
                    </ul>
                )}
                <button
                    onClick={handleUpload}
                    className="mt-10 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer w-full"
                >
                    Upload
                </button>
                {uploadStatus && <p className="mt-10 font-medium text-center">{uploadStatus}</p>}
            </div>
        </div>
    );

}

