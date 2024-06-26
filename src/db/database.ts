import Doctor from "../interfaces/doctor.model";
import fs from 'fs';

// Mock data (replace with your actual data source)

const data = fs.readFileSync('providers.json', 'utf-8');
const providers:Doctor[] = JSON.parse(data);

// Create cache of providers by name
export const providersByNameCache: { [key: string]: Doctor } = providers.reduce((acc: any, provider: Doctor) => {
    acc[provider.name] = provider;
    return acc;
}, {});

// Create cache of providers by specialty
export const providersBySpecialtyCache = providers.reduce((acc:any, provider: Doctor) => {
    
    //const specialtyKey = provider.specialties.toLowerCase();
    for (const specialtyKey of provider.specialties) {

        const specialtyKeyLow = specialtyKey.toLowerCase();
        if (!acc[specialtyKeyLow]) {
            acc[specialtyKeyLow] = [];
        }
        acc[specialtyKeyLow].push(provider);
    }

    return acc;

}, {});

/*
const readProvidersData = (filePath: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData);
                } catch (parseError) {
                    reject(parseError);
                }
            }
        });
    });
};
*/

