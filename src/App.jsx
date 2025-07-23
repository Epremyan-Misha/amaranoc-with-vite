import Head from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Login from "./Login";
import Register from "./Register";  // <-- Ավելացրել եմ այստեղ
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./authContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />  {/* <-- Ավելացրիր այս Route-ը */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <div>
                  <Head />
                  <Body />
                  <Footer />
                  <h1>Firebase Connected</h1>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
