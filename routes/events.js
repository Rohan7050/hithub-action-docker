import { Router } from 'express';

// import db from '../data/database.js';

const router = Router();

router.get('/', async (req, res) => {
  res.json({ events: [{id:1, name: 'event one'}] });
});

router.post('/', async (req, res) => {
  const eventData = req.body;
  res.status(201).json({
    message: 'Event created.',
    event: { ...eventData, id: 1},
  });
});

export default router;
