import type { Request, Response } from "express";
import { Contact } from "../database/contact-model";

export const updateContactController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, phone } = req.body;

    if (!id) {
      return res.status(400).send({
        message: "Id is required",
      });
    }

    if (!name && !phone) {
      return res.status(400).send({
        message: "Name or phone is required",
      });
    }

    const normalizedPhone = phone.replace(/\D/g, "");
    const normalizedName = name.trim();

    await Contact.findByIdAndUpdate(id, {
      name: normalizedName,
      phone: normalizedPhone,
    });

    const contacts = await Contact.find();

    res.status(200).send({
      message: "Contact updated successfully",
      data: contacts,
    });
  } catch (error) {
    res.status(500).send({
      message: `Error updating contact: ${error}`,
    });
  }
};
