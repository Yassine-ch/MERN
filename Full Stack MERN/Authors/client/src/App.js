import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthorList } from "./components/AuthorList";
import { NewAuthor } from "./components/NewAuthor";
import { EditAuthor } from "./components/EditAuthor";
import { NotFound } from "./components/NotFound";

function App() {
    return (
        <div className="App">
            <h1>Favorite Authors</h1>
            <Routes>
                <Route path="/" element={<AuthorList />} />
                <Route path="/new" element={<NewAuthor />} />
                <Route path="/edit/:_id" element={<EditAuthor />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;