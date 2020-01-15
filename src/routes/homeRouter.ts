import express, { Router } from 'express';
import * as homeController from '../controllers/homeController';
export const router: Router = Router();

//Routes
router.get('/', homeController.GetHome);
