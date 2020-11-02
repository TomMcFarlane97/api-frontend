export interface UserKeyType {
    name: 'firstName' | 'lastName' | 'emailAddress';
    [value: string]: string;
}
