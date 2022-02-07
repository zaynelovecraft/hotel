import cn from 'classnames';
import React, { forwardRef, useRef, ButtonHTMLAttributes } from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './Button.module.css';

import LoadingDots from '../LoadingDots/LoadingDots';

const Button = forwardRef((props, buttonRef) => {
    const {
      className,
      variant = 'flat',
      children,
      active,
      width,
      loading = false,
      disabled = false,
      style = {},
      Component = 'button',
      ...rest
    } = props;
    const ref = useRef(null);
    const rootClassName = cn(
      styles.root,
      {
        [styles.slim]: variant === 'slim',
        [styles.loading]: loading,
        [styles.disabled]: disabled
      },
      className
    );
    return (
      <Component
        aria-pressed={active}
        data-variant={variant}
        ref={mergeRefs([ref, buttonRef])}
        className={rootClassName}
        disabled={disabled}
        style={{
          width,
          ...style
        }}
        {...rest}
      >
        {children}
        {loading && (
          <i className="pl-2 m-0 flex">
            <LoadingDots />
          </i>
        )}
      </Component>
    );
  });

export default Button