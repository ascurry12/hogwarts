import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Layout from "../routes/Layout.jsx";
import CreateView from "../routes/CreateView.jsx";
import DirectoryView from "../routes/DirectoryView.jsx";
import NotFound from "../routes/NotFound.jsx";
import "./index.css";
import App from "./App.jsx";
import EditView from "../routes/EditView.jsx";
import DetailView from "../routes/DetailView.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route index={false} path="/student/create" element={<CreateView />} />
        <Route
          index={false}
          path="/student/directory"
          element={<DirectoryView />}
        />
        <Route index={false} path="/edit/:id" element={<EditView />} />
        <Route index={false} path="/detail/:id" element={<DetailView />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
