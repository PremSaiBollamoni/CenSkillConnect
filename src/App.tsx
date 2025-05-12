import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Internships from './pages/Internships';
import Jobs from './pages/Jobs';
import Practice from './pages/Practice';
import Mentorship from './pages/Mentorship';
import CodingTest from './pages/CodingTest';
import AptitudeTest from './pages/AptitudeTest';
import ReasoningTest from './pages/ReasoningTest';
import ResumeBuilder from './pages/ResumeBuilder';
import ApplicationForm from './pages/ApplicationForm';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/practice/coding" element={<CodingTest />} />
          <Route path="/practice/aptitude" element={<AptitudeTest />} />
          <Route path="/practice/reasoning" element={<ReasoningTest />} />
          <Route path="/practice/resume" element={<ResumeBuilder />} />
          <Route path="/apply" element={<ApplicationForm />} />
        </Routes>
        <Chatbot />
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

// Ensure that App is exported as default
export default App;