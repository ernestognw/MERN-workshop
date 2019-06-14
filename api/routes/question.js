import { Router } from "express";
import { Question } from "../../db/models";
import authRequired from "../../middleware/auth-required";

const question = Router();

// Get all
// GET /api/questions
question.get("/", async (req, res) => {
  try {
    // Hacemos un query con todas las preguntas
    const questions = await Question.find();
    // El resultado lo enviamos al usuario
    res.status(200).send(questions);
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
});

// Get one by id
// GET /api/question/:id
question.get("/:id", async (req, res) => {
  try {
    // Obtenemos el id a buscar del request
    const { id } = req.params;
    // Buscamos la pregunta con el id correspondiente
    const question = await Question.findOne({ _id: id });
    if (question) {
      // Si la pregunta existe, la retornamos al usuario
      res.status(200).send(question);
    } else {
      // En caso de no existir, regresamos un error
      res.status(404).send({
        message: "Question not found"
      });
    }
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
});

// Create one
// POST /api/questions
question.post("/", authRequired, async (req, res) => {
  try {
    // Obtenemos el contenido de la pregunta del body del request
    const { title, description, icon } = req.body;
    // Creamos una nueva pregunta con ayuda del modelo
    const question = new Question({
      title,
      description,
      icon,
      user: req.userId
    });
    // Guardamos la pregunta
    await question.save();
    // Returnamos
    res.status(201).send(question);
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
});

// Update one by id
// PUT /api/questions/:id
question.put("/:id", authRequired, async (req, res) => {
  try {
    // Obtenemos el id de la pregunta a editar
    const { id } = req.params;
    // Obtenemos el nuevo contenido de la pregunta
    const { title, description, icon } = req.body;
    // Creamos un nuevo objeto de pregunta
    const newQuestion = { title, description, icon };
    // Hacemos una query para actualizar la información de la pregunta
    const question = await Question.findOneAndUpdate(
      { _id: id },
      { $set: newQuestion },
      { new: true }
    );
    if (question) {
      // Si la pregunta existe, la retornamos al usuario
      res.status(200).send(question);
    } else {
      // En caso de no existir, regresamos un error
      res.status(404).send({
        message: "Question not found"
      });
    }
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
});

// Delete one by id
// DELETE /api/questions/:id
question.delete("/:id", authRequired, async (req, res) => {
  try {
    // Obtenemos el id de la pregunta a eliminar
    const { id } = req.params;
    // Eliminamos la pregunta
    await Question.findByIdAndRemove(id);
    // Enviamos una notificación al usuario de que se elimnó
    res.status(200).send(true);
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
});

export default question;
