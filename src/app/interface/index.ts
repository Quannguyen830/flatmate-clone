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

export interface PropertyDetailInterface {
    propertyId: string;
    location: string;
    price: string[];
    timeForAvailable: string[];
    shortDescription: string;
    description: string;
    imagesList: string[];
    imagesLength: string;
    shortFeatureList: string[];
    tagList: string[];
    propertyFeatures: string[][];
    overviewDetails: string[][];
    overviewFeatures: string[][];
    ownerName: string;
    link: string;
}
  
export interface PropertyListDatabase {
    propertyId: string,
    location: string;
    price: string;
    timeForAvailable: string;
    description: string;
    imagesLength: string;
    images: string[];
    features: string[];
}

export interface MateListInterface {
    mateId: string[];
    name: string[];
    price: string[];
    overview: string[];
    description: string[];
}