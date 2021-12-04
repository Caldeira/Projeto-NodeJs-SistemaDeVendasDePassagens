export interface UserDTO {
  id?: number;
  admin?: boolean;
  employee?: boolean;
  name: string;
  email: string;
  password: string;
}
