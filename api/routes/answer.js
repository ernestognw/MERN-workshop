import { Router } from "express";
import { Answer, Question } from "../../db/models";
import authRequired from "../../middleware/auth-required";

const answer = Router();

// Get all
// GET /api/answers
answer.get("/", async (req, res) => {
  try {
    // Hacemos un query con todas las respuestas
    const answers = await Answer.find();
    // El resultado lo enviamos al usuario
    res.status(200).send(answers);
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
});

// Get one by id
// GET /api/answers/:id
answer.get("/:id", async (req, res) => {
  try {
    // Obtenemos el id a buscar del request
    const { id } = req.params;
    // Buscamos la respuesta con el id correspondiente
    const answer = await Answer.findOne({ _id: id });
    if (answer) {
      // Si la respuesta existe, la retornamos al usuario
      res.status(200).send(answer);
    } else {
      // En caso de no existir, regresamos un error
      res.status(404).send({
        message: "Answer not found"
      });
    }
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
});

// Create one
// POST /api/answers
answer.post("/", authRequired, async (req, res) => {
  try {
    // Obtenemos el contenido de la pregunta del body del request
    const { description, questionId } = req.body;
    // Creamos una nueva pregunta con ayuda del modelo
    const answer = new Answer({
      description,
      user: req.userId
    });
    // Buscamos la pregunta a la que pertenece esta respuesta
    const question = await Question.findOne({ _id: questionId });
    if (question) {
      // Si la respuesta existe, guardamos la respuesta en la pregunta
      await answer.save();
      question.answers.push(answer._id);
      // Y guardamos la actualización de la pregunta
      await question.save();
      // Finalmente retornamos la nueva respuesta
      res.status(200).send(answer);
    } else {
      // En caso de no existir, regresamos un error
      res.status(404).send({
        message: "Host question not found"
      });
    }
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
});

// Update one by id
// PUT /api/answers/:id
answer.put("/:id", authRequired, async (req, res) => {
  try {
    // Obtenemos el id de la pregunta a editar
    const { id } = req.params;
    // Obtenemos los nuevos datos
    const { description } = req.body;
    // Creamos un nuevo objeto de respuesta
    const newAnswer = { description };
    const answer = await Answer.findOneAndUpdate(
      { _id: id },
      { $set: newAnswer },
      { new: true }
    );
    res.status(200).send(answer);
  } catch (err) {
    // Cachamos cualquier potencial error
    console.log(err);
    res.status(500).send(err);
  }
});

// Delete one by id
// DELETE /api/answers/:id
answer.delete("/:id", authRequired, async (req, res) => {
  try {
    // Obtenemos el id de la respuesta a eliminar
    const { id } = req.params;
    // Retiramos esa respuesta de la pregunta original
    await Question.findOneAndUpdate(
      { answers: id },
      { $pull: { answers: id } },
      { new: true }
    );
    // Eliminamos la respuesta
    await Answer.findByIdAndRemove(id);
    // Enviamos una notificación al usuario de que se elimnó
    res.status(200).send(true);
  } catch (err) {
    // Cachamos cualquier potencial error
    res.status(500).send(err);
  }
});

export default answer;
