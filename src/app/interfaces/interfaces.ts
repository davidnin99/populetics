export interface Employees {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
}

export interface responseApi {
  status: string;
  data: Employees;
}
