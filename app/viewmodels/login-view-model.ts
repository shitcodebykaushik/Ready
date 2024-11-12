import { Observable, Frame } from '@nativescript/core';

export class LoginViewModel extends Observable {
    private _email: string = '';
    private _password: string = '';

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value);
        }
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value);
        }
    }

    onLogin() {
        // Add authentication logic here
        Frame.topmost().navigate({
            moduleName: 'pages/home-page',
            clearHistory: true
        });
    }

    onGoToSignup() {
        Frame.topmost().navigate('pages/signup-page');
    }
}