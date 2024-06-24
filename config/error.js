const status={
    EMAIL_ALREADY_EXIST:-1.
};

export class BaseError extends Error {
    constructor(data){
        super(data.message);
        this.data = data;
    if (data.emailExists){
        this.status=status.EMAIL_ALREADY_EXIST;
    }else{
        this.status = data.status || 0;
    }
    }
}