export type License = {
  license_type: string;
  libraries: string[];
};

export type Payment = {
  id: string;
  project_name: number;
  project_domain: string;
  last_accessed: string;
  license_use: License[];
};
