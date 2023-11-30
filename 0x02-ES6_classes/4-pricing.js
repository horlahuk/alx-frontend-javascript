import Currency from './3-currency.js';

export default class Pricing {
    constructor (amount, currency) {
        if (typeof amount !== 'number') {
        throw TypeError('amount must be a number');
        }
        if (!(currency instanceof Currency)) {
        throw TypeError('currency must be a Currency');
        }
        this._amount = amount;
        this._currency = currency;
    }
    
    displayFullPrice () {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }
    
    static convertPrice (amount, conversionRate) {
        if (typeof amount !== 'number') {
        throw TypeError('amount must be a number');
        }
        if (typeof conversionRate !== 'number') {
        throw TypeError('conversionRate must be a number');
        }
        return amount * conversionRate;
    }
    
    get amount () {
        return this._amount;
    }
    
    set amount (value) {
        if (typeof value !== 'number') {
        throw TypeError('amount must be a number');
        }
        this._amount = value;
    }
    
    get currency () {
        return this._currency;
    }
    
    set currency (value) {
        if (!(value instanceof Currency)) {
        throw TypeError('currency must be a Currency');
        }
        this._currency = value;
    }
}
