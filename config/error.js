const status={
    PARAMETER_IS_WRONG: 'PARAMETER_IS_WRONG_CODE',
    EMAIL_ALREADY_EXIST:-1
};

export class BaseError extends Error {
    constructor(data){
        super(data.message);
        this.data = data;
    }
}