export type ProjectResponseType = {
  id: number;
  name: string;
  projectOwner: string;
  description: string;
  department: string;
  projectManager: string;
  startDate: string; // ISO date string
  endDate: string;   // ISO date string
  developers: DeveloperType[];
  sourceCode: string;
  document: DocumentFile;
};

export type DeveloperType = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
};

type DocumentFile = {
  base64: string;
  contentType: string;
};

export type CreateProjectRequest = {
  name: string;
  departmentId: number;
  projectOwner: string;
  description: string;
  startDate: string;
  endDate: string; 
  projectManagerId: number;
  developers: number[];
  sourceCode: string;
  document: DocumentFile;
};

