# 📄 Document Intelligence Platform (RAG-based)

A full-stack web application that lets users upload documents (PDF, TXT, DOCX), ask natural language questions, and receive accurate contextual answers using Retrieval Augmented Generation (RAG) with ChromaDB and Mistral AI.

---

## 🧰 Tech Stack

- 🔙 **Backend**: Django REST Framework
- 🧠 **LLM**: Mistral AI API
- 📦 **Vector Store**: ChromaDB
- 🗃️ **Database**: MySQL
- 🎨 **Frontend**: React.js and Tailwind CSS
- 📁 **File Storage**: Local filesystem

---

## ⚙️ Setup Instructions (Local Development)

## 📁 Clone the Repository

```bash
git clone https://github.com/Abhishekkumar021/ErgoSphere.git
cd document-intelligence-platform/backend
```
# Backend Setup

### 🐍 1. Create & Activate Virtual Environment

```bash
# Create venv
python -m venv venv

# Activate venv
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```
### 📦 2. Install Dependencies
```bash
pip install -r requirements.txt
```
### 🔐 3. Set Up Environment Variables

Create a `.env` file in the backend/ folder:
```bash
SECRET_KEY=your-django-secret-key
DEBUG=True

DB_NAME=document_db
DB_USER=root
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=3306

MISTRAL_API_KEY=your_mistral_api_key

```

### 🛠️ 4. Set Up MySQL Database
Open your MySQL client and run:
```bash
#CREATE DATABASE database_name
CREATE DATABASE test
```

### 📜 5. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```
### ▶️ 6. Run the Server from backend directory
```bash
python manage.py runserver
```
Server will be available at:  
👉 http://127.0.0.1:8000/


# Frontend Setup

### 📦 2. Install Node Dependencies
Make sure you have Node.js and npm installed.  
Run the following command from frontend directory
```bash
npm install
```

### ⚙️ 3. Directory Structure
```bash
src/
├── components/
│   └── FileUploader.jsx       # Reusable drag-and-drop file uploader
│   └── Navbar.jsx       # Global navbar for navigation between pages
├── pages/
│   ├── Dashboard
│   │   ├── Dashboard.jsx          # Document list page
│   ├── Upload
│   │   ├── Upload.jsx             # Upload interface
│   ├── Home
│   └── └── Home.jsx                 # Q&A interface
│ 
├── App.jsx                    # Router setup
├── main.jsx                   # Entry point
└── index.css    
```

### 🛠️ 4. Start Development Server from frontend directory
```bash
npm run dev
```

By default, the app runs at:  
👉 http://localhost:5173

#

## 🚀 Pages

### 📤 Upload Page (/upload)
Upload multiple .pdf, .docx, or .txt files

Uses react-dropzone for drag-and-drop UI

### 📚 Dashboard (/dashboard)
Lists all uploaded documents

Displays metadata like title, pages, and file type

### 💬 Q&A Page (/ask) and (/)
Select document and number of chunks

Enter a natural language question

Displays AI-generated answer from RAG backend



### 🚀 Features
-   📂 Upload documents

-   🤖 Ask natural language questions

-   🧠 Uses Mistral for answer generation

-   🔍 ChromaDB for similarity search

-   🧱 Structured storage of document chunks



### 📸 Screenshots
-   📤 Upload Interface
![Upload Page Screenshot](https://github.com/Abhishekkumar021/ErgoSphere/blob/4235e62fe34a86faf0afc996dd137480e9660a17/Screenshots/Upload-page.png)
-   📚 Dashboard
![Dashboard Page Screenshot](https://github.com/Abhishekkumar021/ErgoSphere/blob/4235e62fe34a86faf0afc996dd137480e9660a17/Screenshots/Dashboard-page.png)
-   💬 Q&A Interface
![QA Page Screenshot](https://github.com/Abhishekkumar021/ErgoSphere/blob/4235e62fe34a86faf0afc996dd137480e9660a17/Screenshots/QA-page.png)
