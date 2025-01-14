import type { Request, Response } from "express";
import { Contact } from "../database/contact-model";

export type Contact = {
  name: string;
  phone: string;
  created_at: Date;
};

export const addContactController = async (req: Request, res: Response) => {
  try {
    const { name, phone } = req.body;

    if (!name) {
      return res.status(400).send({
        message: "Name is required",
      });
    }

    if (!phone) {
      return res.status(400).send({
        message: "Phone is required",
      });
    }

    const normalizedPhone = phone.replace(/\D/g, "");
    const normalizedName = name.trim();

    const contact: Contact = {
      name: normalizedName,
      phone: normalizedPhone,
      created_at: new Date(),
    };

    const newContact = await Contact.create(contact);

    res.status(200).send({
      message: "Contact added successfully",
      data: newContact,
    });
  } catch (error) {
    console.error("Error adding contact", error);
    res.status(500).send({
      message: `Error adding contact: ${error}`,
    });
  }
};
