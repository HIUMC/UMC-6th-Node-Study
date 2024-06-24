// temp.service.js

import { flagResponseDTO } from "../dtos/temp.response.dto.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";

export function CheckFlag(flag){
    if(flag == 1) {
        throw new BaseError({ message: 'Flag value is invalid.', status: status.BAD_REQUEST });
    } else {
        return flagResponseDTO(flag);
    }
}
