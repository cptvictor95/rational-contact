import type { Request, Response } from "express";
import { contactRepository } from "../repository/contact-repository";

export const getContactByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Contact ID is required" });
    }

    const contact = await contactRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json({
      message: "Contact found",
      contact,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
