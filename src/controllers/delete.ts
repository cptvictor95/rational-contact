import type { Request, Response } from "express";
import { Contact } from "../database/contact-model";

export const deleteContactController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        message: "Id is required",
      });
    }

    await Contact.findByIdAndDelete(id);

    const contacts = await Contact.find();

    res.status(200).send({
      message: "Contact deleted successfully",
      data: contacts,
    });
  } catch (error) {
    res.status(500).send({
      message: `Error updating contact: ${error}`,
    });
  }
};
