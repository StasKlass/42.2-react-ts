import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import GlobalStyles from './styles/GlobalStyles';
import About from 'pages/About/About';
import Home from 'pages/Home/Home';
import Users from 'pages/Users/Users';

//lessons
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from './lessons/Lesson07/Lesson07';
// import Lesson08 from './lessons/Lesson08/Lesson08';
// import Lesson09 from 'lessons/Lesson09/Lesson09';
// import Lesson11 from 'lessons/Lesson11/Lesson11';

//homeworks
// import Homework07 from './homeworks/Homework07/Homework07';
// import Homework08 from './homeworks/Homework08/Homework08';
// import Homework09 from 'homeworks/Homework09/Homework09';
// import Homework11 from 'homeworks/Homework11/Homework11';

//consultations
// import Consultation04 from './consultations/Consultation04/Consultation04';
// import Consultation05 from 'consultations/Consultation05/Consultation05';

import Clients from './pages/Clients/Clients';
import Facebook from './pages/Clients/components/Facebook';
import Google from './pages/Clients/components/Google';
import Amazon from './pages/Clients/components/Amazon';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/google" element={<Google />} />
          <Route path="/clients/amazon" element={<Amazon />} />
          <Route path='*' element='Page not found' />
        </Routes>
      </Layout>
      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Consultation04 /> */}
      {/* <Homework07 /> */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* <Lesson09 /> */}
      {/* <Consultation05 /> */}
      {/* <Homework09 /> */}
      {/* <Lesson11 /> */}
      {/* <Homework11 /> */}
    </BrowserRouter>
  );
}

export default App;
