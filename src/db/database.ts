import Doctor from "../interfaces/doctor.model";
import fs from 'fs';

// Mock data (replace with your actual data source)
const providers:Doctor[] = JSON.parse(fs.readFileSync('providers.json', 'utf-8'));

// Create cache of providers by name
const providersByName = providers.reduce((acc: any, provider: Doctor) => {
    acc[provider.name] = provider;
    return acc;
}, {});

// Create cache of providers by specialty
/*const providersBySpecialty = providers.reduce((acc:any, provider: Doctor) => {
    //const specialtyKey = provider.specialties.toLowerCase();
    if (!acc[specialtyKey]) {
        acc[specialtyKey] = [];
    }
    acc[specialtyKey].push(provider);
    return acc;
}, {});*/

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

const cache: { [key: string]: string[] } = {};

export default providers;