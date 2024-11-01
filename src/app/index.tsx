import {
  Routes,
  Route,
  Link,
  UIMatch,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Main from './main';
import Cases from './cases';
import BurgerMenu from '../components/burger-menu';

import { useState } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} handle={{ crumb: <Link to='/'>Главная</Link> }}>
      <Route index element={<Main />}></Route>
      <Route
        path={'/cases'}
        element={<Cases />}
        handle={{
          crumb: () => <Link to='/cases'>Кейсы</Link>,
        }}
      />
    </Route>
  )
);

function App() {
  const [visible, setVisible] = useState(false);

  // return <RouterProvider router={router} />

  return (
    <>
      <RouterProvider router={router} />;
      {/* <Routes>
        <Route path={'/'} handle={{ crumb: <Link to='/'>Mainnn</Link> }}>
          <Route
            index
            element={<Main />}
            handle={{
              crumb: () => <Link to='/'>Main</Link>,
            }}
          ></Route>
          <Route
            path={'/cases'}
            element={<Cases />}
            handle={{
              crumb: () => <Link to='/cases'>casesbc</Link>,
            }}
          />
        </Route>
      </Routes> */}
      {visible && <BurgerMenu handleClose={setVisible}></BurgerMenu>}
    </>
  );
}

export default App;
