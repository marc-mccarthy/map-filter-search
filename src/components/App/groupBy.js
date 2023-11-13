import { sampleData } from '../../../data/sampleData';

export const groupBy = (fieldName, inputString) => {
    return sampleData
        .filter(element => element[fieldName].toLowerCase().includes(inputString.toLowerCase()))
        .reduce((resultMap, nextElement) => {
            const key = nextElement[fieldName];
            const existingGroup = resultMap.get(key) || [];
            resultMap.set(key, [...existingGroup, nextElement]);
            return resultMap;
        }, new Map());
};
