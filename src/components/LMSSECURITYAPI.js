// LMSSECURITYAPI.js
import axios from 'axios';

export const fetchLMSData = async (isinCode) => {
  const data = {
    "assetId": "0",
    "loanNo": "DL240707106528",
    "assetType": "0",
    "assetClass": "0",
    "propertyDescription": "0",
    "propertyOwner": "John Doe",
    "propertyValue": "0",
    "documentValue": "0",
    "propertyAddress": "0",
    "country": "0",
    "state": "0",
    "district": "0",
    "percConstruction": "0",
    "constructedArea": "0",
    "vehicleChasisNumber": "CH123456789",
    "engineNumber": "0",
    "assetNewUsed": "0",
    "misNumber": "MIS-456",
    "assetCollateralType": "Property",
    "properyClassification": "Residential",
    "properyType": "Condominium",
    "manufacturer": "BrandName",
    "machineModel": "ModelXYZ",
    "crNumber": "CR12345",
    "loanableValue": "0",
    "dateOfValuation": "2024-11-01",
    "collateralType": "Real Estate",
    "brandType": "Premium",
    "brandOrigin": "USA",
    "assetMake": "MakeName",
    "vehicleManufacturerYear": "2020",
    "isinCode": isinCode, // Pass ISIN code here
    "qty": "60",
    "navOfSaction": "500",
    "totalValueOfSanction": "55149",
    "currentNav": "325546",
    "currentValue": "0",
    "relelasedCity": "CityName",
    "marginAllowed": "50",
    "totalPledgeValue": "110298"
  };

  try {
    const res = await axios.post('https://hnbdemo.newgensoftware.net:8443/LASLMS/lmsBRMS', data);
    return res.data; // Return the response data
  } catch (err) {
    throw new Error(`Error fetching data for ISIN ${isinCode}: ${err.message}`);
  }
};
