import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";

export async function getUserByEmail(email: string) {
  const client = await clientPromise;
  const collection = client.db().collection("users");
  return collection.findOne({ email });
}

export async function createUser(userData: {
  email: string;
  password: string;
  name: string;
}) {
  const client = await clientPromise;
  const collection = client.db().collection("users");
  return collection.insertOne(userData);
}

export async function getUserById(id: string) {
  const client = await clientPromise;
  const collection = client.db().collection("users");
  return collection.findOne({ _id: new ObjectId(id) });
}