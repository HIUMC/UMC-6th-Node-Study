// dtos/region.dto.js

// 새로운 지역을 추가하기 위한 DTO
export const AddRegionDTO = (region) => {
    return {
        name: region.name,          // 지역 이름
        createdAt: region.createdAt, // 생성일
        updatedAt: region.updatedAt  // 업데이트일
    };
}

export const AddStoreToRegionDTO = (regionId, store) => {
    return {
        regionId: regionId,
        name: store.name,
        address: store.address,
        score: store.score
    };
} //미션 1

// 조회된 지역을 반환하기 위한 DTO
export const RegionDTO = (region) => {
    return {
        id: region.id,             // 지역 ID
        name: region.name,         // 지역 이름
        createdAt: region.created_at, // 생성일
        updatedAt: region.updated_at  // 업데이트일
    };
}

// 특정 지역을 업데이트하기 위한 DTO
export const UpdateRegionDTO = (region) => {
    return {
        name: region.name,         // 지역 이름
        updatedAt: region.updatedAt // 업데이트일
    };
}
