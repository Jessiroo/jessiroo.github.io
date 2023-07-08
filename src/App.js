import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import AboutPage from './pages/About';
import QualificationsPage from './pages/Qualifications';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: '/qualifications', element: <QualificationsPage /> },
      { path: '/portfolio', element: <PortfolioPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


// Change react app tab name and picture