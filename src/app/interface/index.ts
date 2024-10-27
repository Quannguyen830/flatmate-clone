export interface PropertyListInterface {
    propertyId: string[];
    location: string[];
    price: string[];
    timeForAvailable: string[];
    description: string[];
    imagesList: string[][];
    imagesLength: string[];
    featureList: string[][];
}
  
export interface PropertyListDatabase {
    location: string;
    price: string;
    timeForAvailable: string;
    description: string;
    imagesLength: string;
    images: string[];
    features: string[];
    link: string;
}

export interface MateListInterface {
    mateId: string[];
    name: string[];
    price: string[];
    overview: string[];
    description: string[];
}