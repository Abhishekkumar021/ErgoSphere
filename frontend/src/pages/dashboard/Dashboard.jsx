// // src/pages/Dashboard.jsx
// import React from "react";

// const documents = [
//     { id: 1, title: "Document 1", pages: 12 },
//     { id: 2, title: "Research Paper", pages: 5 },
// ];

// export default function Dashboard() {
//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">Document Library</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {documents.map((doc) => (
//                     <div
//                         key={doc.id}
//                         className="bg-white shadow-md p-4 rounded-lg border border-gray-200"
//                     >
//                         <h2 className="text-lg font-semibold">{doc.title}</h2>
//                         <p className="text-sm text-gray-500">{doc.pages} pages</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



// // src/pages/Dashboard.jsx
// import React, { useEffect, useState } from "react";

// export default function Dashboard() {
//     const [documents, setDocuments] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchDocuments = async () => {
//             try {
//                 const res = await fetch("http://localhost:8000/api/documents/");
//                 const data = await res.json();
//                 console.log(data);
//                 setDocuments(data);
//             } catch (err) {
//                 console.error("Failed to fetch documents:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchDocuments();
//     }, []);

//     return (
//         <div className="lg:p-6 lg:max-w-7xl max-w-full px-4 py-6 mx-auto">
//             <h1 className="text-2xl font-bold mb-4">📚 Uploaded Documents</h1>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : documents.length === 0 ? (
//                 <p className="text-gray-500">No documents uploaded yet.</p>
//             ) : (
//                 <table className="w-full table-auto border-collapse border border-gray-300">
//                     <thead className="bg-gray-100">
//                         <tr>
//                             <th className="border px-4 py-2">Title</th>
//                             <th className="border px-4 py-2">Document Id</th>
//                             <th className="border px-4 py-2">Type</th>
//                             <th className="border px-4 py-2">Pages</th>
//                             <th className="border px-4 py-2">Uploaded</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {documents.map((doc) => (
//                             <tr key={doc.id} className="hover:bg-gray-50">
//                                 <td className="border px-4 py-2 text-justify">{doc.title}</td>
//                                 <td className="border px-4 py-2">{doc.id}</td>
//                                 <td className="border px-4 py-2 uppercase">{doc.doc_type}</td>
//                                 <td className="border px-4 py-2">{doc.pages}</td>
//                                 <td className="border px-4 py-2">{new Date(doc.created_at).toLocaleDateString()}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }


import React, { useEffect, useState } from "react";

export default function Dashboard() {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/documents/");
                const data = await res.json();
                setDocuments(data);
            } catch (err) {
                console.error("Failed to fetch documents:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, []);

    return (
        <div className="max-w-full lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-xl sm:text-2xl font-bold mb-6">📚 Uploaded Documents</h1>
            {loading ? (
                <p>Loading...</p>
            ) : documents.length === 0 ? (
                <p className="text-gray-500">No documents uploaded yet.</p>
            ) : (
                // Add horizontal scroll wrapper for small devices
                <div className="overflow-x-auto">
                    <table className="min-w-[600px] w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border px-3 py-2 text-left text-sm sm:text-base">Title</th>
                                <th className="border px-3 py-2 text-left text-sm sm:text-base">Document Id</th>
                                <th className="border px-3 py-2 text-left text-sm sm:text-base">Type</th>
                                <th className="border px-3 py-2 text-left text-sm sm:text-base">Pages</th>
                                <th className="border px-3 py-2 text-left text-sm sm:text-base">Uploaded</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map((doc) => (
                                <tr key={doc.id} className="hover:bg-gray-50">
                                    <td className="border px-3 py-2 text-justify text-sm sm:text-base">{doc.title}</td>
                                    <td className="border px-3 py-2 text-sm sm:text-base">{doc.id}</td>
                                    <td className="border px-3 py-2 uppercase text-sm sm:text-base">{doc.doc_type}</td>
                                    <td className="border px-3 py-2 text-sm sm:text-base">{doc.pages}</td>
                                    <td className="border px-3 py-2 text-sm sm:text-base">{new Date(doc.created_at).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-8"><strong>Note : </strong>
                        <p><strong>.txt</strong> files don't have actual pages like PDF or Word documents. To estimate the number of pages, we use a simple rule:</p>
                        <strong>1 page ≈ 50 lines of text</strong>
                        <p>This is just an approximation to help you understand the file length. Actual layout may vary depending on how the text is displayed.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
