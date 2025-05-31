// // // src/pages/QA.jsx
// // import React, { useState } from "react";

// // export default function Home() {
// //   const [question, setQuestion] = useState("");
// //   const [answer, setAnswer] = useState("");

// //   const askQuestion = async () => {
// //     // Call RAG endpoint and get answer
// //     const response = await fetch("/api/ask-question", {
// //       method: "POST",
// //       body: JSON.stringify({ document_id: 1, question }),
// //       headers: { "Content-Type": "application/json" },
// //     });
// //     const data = await response.json();
// //     setAnswer(data.answer);
// //   };

// //   return (
// //     <div className="p-6 max-w-2xl mx-auto flex flex-col items-center justify-center ">
// //       <h1 className="text-2xl font-bold mb-4">Ask a Question</h1>
// //       <textarea
// //         rows="3"
// //         placeholder="Enter your question..."
// //         className="w-full p-2 border border-gray-300 rounded mb-4"
// //         value={question}
// //         onChange={(e) => setQuestion(e.target.value)}
// //       />
// //       <button
// //         onClick={askQuestion}
// //         className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer w-1/4"
// //       >
// //         Ask
// //       </button>
// //       {answer && (
// //         <div className="mt-6 bg-gray-100 p-4 rounded">
// //           <h2 className="font-semibold mb-2">Answer:</h2>
// //           <p>{answer}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// // src/pages/QA.jsx
// import React, { useState, useEffect } from "react";

// export default function QA() {
//     const [documents, setDocuments] = useState([]);
//     const [selectedDoc, setSelectedDoc] = useState("");
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [loading, setLoading] = useState(false);

//     // Fetch documents on mount
//     useEffect(() => {
//         const fetchDocuments = async () => {
//             try {
//                 const res = await fetch("http://localhost:8000/api/documents/");
//                 const data = await res.json();
//                 setDocuments(data);
//                 if (data.length > 0) setSelectedDoc(data[0].id);
//             } catch (err) {
//                 console.error("Error fetching documents:", err);
//             }
//         };
//         fetchDocuments();
//     }, []);

//     const handleAsk = async () => {
//         if (!selectedDoc || !question.trim()) return;

//         setLoading(true);
//         setAnswer("");

//         try {
//             const res = await fetch("http://localhost:8000/api/ask/", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     document_id: selectedDoc,
//                     question,
//                     num_chunks: 3,
//                 }),
//             });

//             const data = await res.json();
//             setAnswer(data.answer || "No answer found.");
//         } catch (err) {
//             console.error("Error:", err);
//             setAnswer("Error fetching answer.");
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
//             <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
//                 <h1 className="text-2xl font-bold mb-6 text-center">🧠 Document Q&A Interface</h1>

//                 {/* Document Dropdown */}
//                 <label className="block text-gray-700 mb-2 font-medium">Select Document:</label>
//                 <select
//                     value={selectedDoc}
//                     onChange={(e) => setSelectedDoc(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-4"
//                 >
//                     {documents.map((doc) => (
//                         <option key={doc.id} value={doc.id}>
//                             {doc.title} ({doc.doc_type.toUpperCase()}, {doc.pages} pages)
//                         </option>
//                     ))}
//                 </select>

//                 {/* Question Input */}
//                 <label className="block text-gray-700 mb-2 font-medium">Your Question:</label>
//                 <textarea
//                     rows="4"
//                     placeholder="Ask something about the selected document..."
//                     className="w-full p-3 border border-gray-300 rounded resize-none"
//                     value={question}
//                     onChange={(e) => setQuestion(e.target.value)}
//                 />

//                 <button
//                     onClick={handleAsk}
//                     disabled={loading}
//                     className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//                 >
//                     {loading ? "Generating answer..." : "Ask"}
//                 </button>

//                 {/* Answer Output */}
//                 {answer && (
//                     <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
//                         <h2 className="font-semibold text-lg mb-2">Answer:</h2>
//                         <p className="text-gray-800 whitespace-pre-line">{answer}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }



// // src/pages/QA.jsx
// import React, { useState, useEffect } from "react";

// export default function QA() {
//     const [documents, setDocuments] = useState([]);
//     const [selectedDoc, setSelectedDoc] = useState("");
//     const [numChunks, setNumChunks] = useState(3); // ✅ Default chunk count
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [loading, setLoading] = useState(false);

//     // Fetch documents on mount
//     useEffect(() => {
//         const fetchDocuments = async () => {
//             try {
//                 const res = await fetch("http://localhost:8000/api/documents/");
//                 const data = await res.json();
//                 setDocuments(data);
//                 if (data.length > 0) setSelectedDoc(data[0].id);
//             } catch (err) {
//                 console.error("Error fetching documents:", err);
//             }
//         };
//         fetchDocuments();
//     }, []);

//     const handleAsk = async () => {
//         if (!selectedDoc || !question.trim()) return;

//         setLoading(true);
//         setAnswer("");

//         try {
//             const res = await fetch("http://localhost:8000/api/ask/", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     doc_id: selectedDoc,
//                     question,
//                     top_k: numChunks, // ✅ Send selected chunk count
//                 }),
//             });

//             const data = await res.json();
//             setAnswer(data.answer || "No answer found.");
//         } catch (err) {
//             console.error("Error:", err);
//             setAnswer("Error fetching answer.");
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
//             <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
//                 <h1 className="text-2xl font-bold mb-6 text-center">🧠 Document Q&A Interface</h1>

//                 {/* Document Dropdown */}
//                 <label className="block text-gray-700 mb-2 font-medium">Select Document:</label>
//                 <select
//                     value={selectedDoc}
//                     onChange={(e) => setSelectedDoc(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-4 cursor-pointer"
//                 >
//                     {documents.map((doc) => (
//                         <option key={doc.id} value={doc.id}>
//                             {doc.title} ({doc.doc_type.toUpperCase()}, {doc.pages} pages)
//                         </option>
//                     ))}
//                 </select>

//                 {/* Chunks Dropdown */}
//                 {/* <label className="block text-gray-700 mb-2 font-medium">Number of Chunks to Retrieve:</label>
//                 <select
//                     value={numChunks}
//                     onChange={(e) => setNumChunks(Number(e.target.value))}
//                     className="w-full p-2 border border-gray-300 rounded mb-4"
//                 >
//                     {[3, 5, 7, 10].map((n) => (
//                         <option key={n} value={n}>{n} chunks</option>
//                     ))}
//                 </select> */}

//                 <label className="block text-gray-700 mb-2 font-medium">Number of Chunks to Retrieve:</label>
//                 <input
//                     type="number"
//                     min={1}
//                     value={numChunks}
//                     onChange={(e) => setNumChunks(Number(e.target.value))}
//                     className="w-full p-2 border border-gray-300 rounded mb-4"
//                 />

//                 {/* Question Input */}
//                 <label className="block text-gray-700 mb-2 font-medium">Your Question:</label>
//                 <textarea
//                     rows="4"
//                     placeholder="Ask something about the selected document..."
//                     className="w-full p-3 border border-gray-300 rounded resize-none"
//                     value={question}
//                     onChange={(e) => setQuestion(e.target.value)}
//                 />

//                 <button
//                     onClick={handleAsk}
//                     disabled={loading}
//                     className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer"
//                 >
//                     {loading ? "Generating answer..." : "Ask"}
//                 </button>

//                 {/* Answer Output */}
//                 {answer && (
//                     <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
//                         <h2 className="font-semibold text-lg mb-2">Answer:</h2>
//                         <p className="text-gray-800 whitespace-pre-line">{answer}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
// src/pages/QA.jsx
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown"; // ✅ Import react-markdown

export default function Home() {
    const [documents, setDocuments] = useState([]);
    const [selectedDoc, setSelectedDoc] = useState("");
    const [numChunks, setNumChunks] = useState(3);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/documents/");
                const data = await res.json();
                setDocuments(data);
                if (data.length > 0) setSelectedDoc(data[0].id);
            } catch (err) {
                console.error("Error fetching documents:", err);
            }
        };
        fetchDocuments();
    }, []);

    const handleAsk = async () => {
        if (!selectedDoc || !question.trim()) return;

        setLoading(true);
        setAnswer("");

        try {
            const res = await fetch("http://localhost:8000/api/ask/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    doc_id: selectedDoc,
                    question,
                    top_k: numChunks,
                }),
            });

            const data = await res.json();
            setAnswer(data.answer || "No answer found.");
        } catch (err) {
            console.error("Error:", err);
            setAnswer("Error fetching answer.");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full border border-slate-300 border-b-pink-300 border-b-2">
                <h1 className="text-2xl font-bold mb-6 text-center">🧠 Document Q&A Interface</h1>

                {/* Document Dropdown */}
                <label className="block text-gray-700 mb-2 font-medium">Select Document:</label>
                <select
                    value={selectedDoc}
                    onChange={(e) => setSelectedDoc(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4 cursor-pointer"
                >
                    {documents.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                            {doc.title} ({doc.doc_type.toUpperCase()}, {doc.pages} pages)
                        </option>
                    ))}
                </select>

                {/* Chunks Input */}
                <label className="block text-gray-700 mb-2 font-medium">Number of Chunks to Retrieve:</label>
                <input
                    type="number"
                    min={1}
                    value={numChunks}
                    onChange={(e) => setNumChunks(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />

                {/* Question Input */}
                <label className="block text-gray-700 mb-2 font-medium">Your Question:</label>
                <textarea
                    rows="4"
                    placeholder="Ask something about the selected document..."
                    className="w-full p-3 border border-gray-300 rounded resize-none"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />

                <button
                    onClick={handleAsk}
                    disabled={loading}
                    className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer"
                >
                    {loading ? "Generating answer..." : "Ask"}
                </button>

                {/* ✅ Markdown Answer Output */}
                {answer && (
                    <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200 prose max-w-none">
                        <h2 className="font-semibold text-lg mb-2">Answer:</h2>
                        <ReactMarkdown>{answer}</ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    );
}
