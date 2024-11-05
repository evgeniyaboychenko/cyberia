import {
  Route,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { useRef } from 'react';
import Main from './main';
import Cases from './cases';
import RootStore from '../stores/root-store';
import { RootStoreContext } from '../stores';
import { observer } from 'mobx-react-lite';

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

const App = observer(() => {
  const store = useRef(new RootStore());
  return (
    <>
      <RootStoreContext.Provider value={store.current}>
        <RouterProvider router={router} />;
      </RootStoreContext.Provider>
    </>
  );
});

export default App;
