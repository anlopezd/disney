import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import { useState } from "react";
import Home from "./components/Home";
import firebaseApp from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Detail from "./components/Detail";
import { PrivateRouter } from "./routes/PrivateRouter";
import { PublicRouter } from "./routes/PublicRouter";

const auth = getAuth(firebaseApp);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuarioGlobal(usuarioFirebase);
    } else {
      setUsuarioGlobal(null);
    }
  });

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header usuarioGlobal={usuarioGlobal} />
        <Routes>
        <Route path="/" element={<PrivateRouter autenticado={usuarioGlobal}>
            <Home />
          </PrivateRouter>} />
          <Route path="login" element={<PublicRouter autenticado={usuarioGlobal}>
            <Login />
          </PublicRouter>} />
          <Route
            path="/detail/:title"
            element={usuarioGlobal ? <Detail /> : <Navigate to="login" replace /> }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
