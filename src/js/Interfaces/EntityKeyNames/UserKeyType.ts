import {UserKeyTypeValue} from "./UserKeyTypeValue";

export interface UserKeyType extends UserKeyTypeValue{
    name: 'firstName' | 'lastName' | 'emailAddress';
    [value: string]: string;
}
