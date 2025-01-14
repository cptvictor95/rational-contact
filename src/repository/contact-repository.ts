import { Contact } from "../database/contact-model";
import type { IContact, IContactFind, IContactUpdate } from "../types/Contact";

export const contactRepository = {
  create: async (data: IContact) => {
    return await Contact.create(data);
  },
  find: async (params: IContactFind) => {
    let query = Contact.find({});

    if (params.name) {
      query = query.find({ name: { $regex: params.name, $options: "i" } });
    }

    if (params.phone) {
      query = query.find({ phone: { $regex: params.phone, $options: "i" } });
    }

    if (params.id) {
      query = query.find({ _id: params.id });
    }

    if (params.created_at) {
      query = query.find({ created_at: { $gte: params.created_at } });
    }

    if (params.updated_at) {
      query = query.find({ updated_at: { $gte: params.updated_at } });
    }

    return await query.exec();
  },
  findById: async (id: string) => {
    return await Contact.findById(id);
  },
  update: async (id: string, data: IContactUpdate) => {
    return await Contact.findByIdAndUpdate(id, {
      ...data,
      updated_at: new Date(),
    });
  },
  delete: async (id: string) => {
    return await Contact.findByIdAndDelete(id);
  },
};
