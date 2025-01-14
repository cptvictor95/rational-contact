export type IContact = {
  name: string;
  phone: string;
  created_at: Date;
  updated_at: Date;
};

export type IContactUpdate = {
  name?: string;
  phone?: string;
  updated_at?: Date;
};

export type IContactFind = {
  name?: string;
  phone?: string;
  id?: string;
  created_at?: string;
  updated_at?: string;
};
