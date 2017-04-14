/// <reference types="react" />
import * as React from 'react';
export interface Props extends React.HTMLProps<HTMLInputElement> {
    autocompleteValues: string[];
}
export interface State {
    written: string;
    completed: string;
}
export declare class InputAutocomplete extends React.Component<Props, State> {
    constructor(props: Props);
    fireOnChange(ev: React.FormEvent<HTMLInputElement>, changedValue?: string): void;
    handleOnChange(ev: React.FormEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export default InputAutocomplete;
