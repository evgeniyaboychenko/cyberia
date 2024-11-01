import { useState } from 'react';
import React from 'react';
import { Params, useMatches, UIMatch, useLocation } from 'react-router-dom';
import Nav from '../nav';
import Contacts from '../contacts';
import './style.scss';

export interface IMatches {
  /** Route id. */
  id: string;
  /** The portion of the URL the route matched. */
  pathname: string;
  /**  The parsed params from the URL. */
  params: Params<string>;
  /** The data from the loader. */
  data: unknown;
  /** The <Route handle> with any app specific data. */
  handle: {
    crumb: (param?: IMatches) => React.ReactNode;
  };
}

// interface Props {
//   handleClose: (value: boolean) => void
// }

function Breadcrumbs() {
  const matches: IMatches[] = useMatches();
  let location = useLocation();
  console.log(location.pathname);
  console.log('matches', matches);

  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) =>
      typeof match.handle.crumb === 'function' ? match.handle.crumb(match) : match.handle.crumb
    );
  console.log('crumbs', crumbs);
  return (
    <div className='breadcrumbs'>
      <ul className='breadcrumbs__list'>
        {crumbs.map((crumb, index) => {
          console.log(crumb);
          const className = crumb?.props.to === location.pathname ? ' is-active' : '';
          return (
            <li key={index} className={`breadcrumbs__item${className}`}>
              {crumb}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
