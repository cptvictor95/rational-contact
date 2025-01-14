import type { Request, Response } from "express";
import type { IContact } from "../types/Contact";
import { contactRepository } from "../repository/contact-repository";

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

    const contact: IContact = {
      name: normalizedName,
      phone: normalizedPhone,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const newContact = await contactRepository.create(contact);

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
