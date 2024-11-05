import React from 'react';
import { Params, useMatches } from 'react-router-dom';
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
    // eslint-disable-next-line no-unused-vars
    crumb: (param?: IMatches) => React.ReactNode;
  };
}

function Breadcrumbs() {
  const matches: IMatches[] = useMatches() as IMatches[];

  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) =>
      typeof match.handle.crumb === 'function' ? match.handle.crumb(match) : match.handle.crumb
    );
  return (
    <div className='breadcrumbs'>
      <ul className='breadcrumbs__list'>
        {crumbs.map((crumb, index) => {
          return (
            <li key={index} className={`breadcrumbs__item`}>
              {crumb}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
