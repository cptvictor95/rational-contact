import type { Request, Response } from "express";
import { contactRepository } from "../repository/contact-repository";
import type { IContactFind } from "../types/Contact";

export const getContactController = async (req: Request, res: Response) => {
  try {
    const { name, phone, id, created_at, updated_at } = req.query;

    const query: IContactFind = {
      name: name as string,
      phone: phone as string,
      id: id as string,
      created_at: created_at as string,
      updated_at: updated_at as string,
    };

    const contacts = await contactRepository.find(query);

    res.status(200).send({
      message: "Contacts fetched successfully",
      data: contacts,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error fetching contact",
    });
  }
};
