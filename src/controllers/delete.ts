import type { Request, Response } from "express";
import { contactRepository } from "../repository/contact-repository";

export const deleteContactController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        message: "Id is required",
      });
    }

    await contactRepository.delete(id);

    res.status(200).send({
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: `Error updating contact: ${error}`,
    });
  }
};
