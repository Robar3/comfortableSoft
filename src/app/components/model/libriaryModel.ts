interface Email {
  is_deleted: number;
  Email: string;
  global_id: number;
}

interface Fax {
  is_deleted: number;
  Fax: string;
  global_id: number;
}

interface AvailableElement {
  is_deleted: number;
  global_id: number;
  Group_mgn: string;
  Area_mgn: string;
  Element_mgn?: string;
  available_degree: string;
  available_index: string;
}

interface Availability {
  is_deleted: number;
  global_id: number;
  available_k: string;
  available_o: string;
  available_s: string;
  available_z: string;
  available_element: AvailableElement[];
}

interface ObjectAddress {
  is_deleted: number;
  AdmArea: string;
  District: string;
  Address: string;
  PostalCode: string;
  Availability: Availability[];
  global_id: number;
}

interface ChiefPhone {
  is_deleted: number;
  global_id: number;
  ChiefPhone: string;
}

interface OrgInfo {
  is_deleted: number;
  ChiefName: string;
  ChiefPhone: ChiefPhone[];
  ChiefPosition: string;
  FullName: string;
  INN: string;
  KPP: string;
  LegalAddress: string;
  OGRN: string;
  global_id: number;
}

interface PublicPhone {
  is_deleted: number;
  PublicPhone: string;
  global_id: number;
}

interface WorkingHours {
  is_deleted: number;
  DayWeek: string;
  WorkHours: string;
  global_id: number;
}

interface GeoData {
  coordinates: number[][];
  type: string;
}

export interface Cells{
  Category: string;
  CommonName: string;
  ChiefName: string;
  ChiefOrg: string;
  ChiefPosition: string;
  ClarificationOfWorkingHours: string;
  Email: Email[];
  Fax: Fax[];
  FullName: string;
  NumOfReaders: number;
  NumOfSeats: number;
  NumOfVisitors: number;
  ObjectAddress: ObjectAddress[];
  OrgInfo: OrgInfo[];
  PublicPhone: PublicPhone[];
  ShortName: string;
  WebSite: string;
  WorkingHours: WorkingHours[];
  geoData: GeoData;
  global_id: number;
  Number: number;
}

export interface Library{
  global_id: number;
  Number: number;
  Cells:Cells;
}
export interface LibraryInfo{
  id: string;
  name: string;
  address: string;
}

export interface Libraries{
  libraries:Library[]
}
