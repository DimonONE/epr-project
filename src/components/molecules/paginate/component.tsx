import React, { useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from './style.module.scss';
import { IconButton } from '@material-ui/core';

interface Array<T> {
     [keys: string]: T
}

interface IPaginate<T> {
    array: Array<T>[]
    Element: (key: any, props: Array<T>[]) => JSX.Element
    countItem?: number
    className?: string
}

const Paginate = <T extends IPaginate<T>, >({ array, Element, className, countItem = 2 }: T) => {
    const [limit, setLimit] = useState({ prev: 0, next: countItem - 1 });

    return (
      <div className={`${styled.arrows} ${className}`}>
        <IconButton
          onClick={() => limit.prev !== 0 &&
              setLimit({ prev: limit.prev - 1, next: limit.next - 1 })}
          className={styled.arrowPrev}
        >
          <ChevronLeftIcon className={styled.icon} />
        </IconButton>
        {array.map((props, index) => index >= limit.prev && index <= limit.next && (
        <Element key={props.id} {...props} />
        ))}
        <IconButton
          onClick={() => limit.next !== (array.length - 1) &&
              setLimit({ prev: limit.prev + 1, next: limit.next + 1 })}
          className={styled.arrowNext}
        >
          <ChevronRightIcon className={styled.icon} />
        </IconButton>
      </div>
    );
};

Paginate.defaultProps = {
    className: '',
    muchToShow: 2,
};

export default Paginate;
