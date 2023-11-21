import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { Contact } from './pages/contact';
import { Navbar } from './pages/Navbar';
import { QueryClient,QueryClientProvider} from "@tanstack/react-query"
import { Forms } from './pages/forms';

function App() {
  const client=new QueryClient({defaultOptions:{
    queries:{

      refetchOnWindowFocus:false
    }
  }});
  return(
    <div className="App">
      <QueryClientProvider client={client} >
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/forms" element={<Forms/>}/>
          <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
