import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});
import ConnectDB from "./db/index.js";

ConnectDB();
