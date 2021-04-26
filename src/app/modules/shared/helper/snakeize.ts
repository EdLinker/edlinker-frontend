export const camelToSnake = (obj: Record<string, any>): Record<string, any> => {
    if (!obj || typeof obj !== 'object') {return obj;}
    if (isDate(obj) || isRegex(obj)) {return obj;}
    if (Array.isArray(obj)) {return obj.map(camelToSnake);}
    return Object.keys(obj).reduce((acc: Record<string, any>, key: string) => {
        const camel = key[0].toLowerCase() + key.slice(1).replace(/([A-Z]+)/g, (m, x) => '_' + x.toLowerCase());
        acc[camel] = camelToSnake(obj[key]);
        return acc;
    }, {});
};

const isDate = (obj: Record<string, any>): boolean => obj instanceof Date;
const isRegex = (obj: Record<string, any>): boolean => obj instanceof RegExp;
