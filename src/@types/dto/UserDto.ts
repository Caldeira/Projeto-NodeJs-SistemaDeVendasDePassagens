export interface UserDTO {
  id?: number;
  idCompanhia?: number;
  admin?: boolean;
  employee?: boolean;
  name: string;
  email: string;
  password: string;
}
