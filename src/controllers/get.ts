import type { Request, Response } from "express";
import { Contact } from "../database/contact-model";

export const getContactController = async (req: Request, res: Response) => {
  try {
    // call db
    const contacts = await Contact.find();
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
