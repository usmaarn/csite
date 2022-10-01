/** @format */

import { PrismaClient } from ".prisma/client";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().trim().required().min(7).max(255),
  ward: yup.string().trim().required().min(7).max(255),
  polling_unit: yup.string().trim().required(),
  pvc_number: yup.string().trim(),
  phone_number: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .test("len", "Must be exactly 11 characters", (val) => val.length == 11),
  address: yup.string().trim().required().min(7).max(255),
});

export default async function handler(req, res) {
  if (req.method.toLowerCase() !== "post") {
    res.status(404).end("Page Not Found");
  }

  try {
    let result = await schema.validate(req.body);
    const prisma = new PrismaClient();
    let response = await prisma.users.create({
      data: result,
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(200).json(req.body);
  }
}
