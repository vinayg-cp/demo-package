import { HTMLAttributes, ReactChild } from 'react';
import './app.scss';
export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}
/**
 * A custom Thing component. Neat!
 */
export declare const Thing: ({ children }: Props) => JSX.Element;
