import type { Request, Response } from "express";
import { Contact } from "../database/contact-model";

export const getContactController = async (req: Request, res: Response) => {
  try {
    const { name, phone, id } = req.query;
    const contacts = await Contact.find({
      name: name ? name : { $exists: true },
      phone: phone ? phone : { $exists: true },
      id: id ? id : { $exists: true },
    });
    console.info("CONTACTS", contacts);

    res.status(200).send({
      message: "Contact fetched successfully",
      data: contacts,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error fetching contact",
    });
  }
};
