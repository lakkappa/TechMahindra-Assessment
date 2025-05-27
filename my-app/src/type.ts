export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export interface AddressInfo {
  address: string;
  city: string;
  zip: string;
}

export interface FormData extends PersonalInfo, AddressInfo {}
