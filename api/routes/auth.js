import { Router } from "express";
import jwt from "jsonwebtoken";
import { hashSync as hash, compareSync as comparePasswords } from "bcryptjs";
import { User } from "../../db/models";
import { secret } from "../../config";

const auth = Router();

// POST /api/auth/login
auth.post("/login", async (req, res) => {
  // Recibimos las credenciales del usuario desde el cuerpo del request
  const { email, password } = req.body;
  // Buscamos un usuario cuyo email corresponda al que se envió
  const user = await User.findOne({ email });

  // Si no hay usuario disponible, o la contraseña no coincide, error.
  if (!user || !comparePasswords(password, user.password)) {
    return res.status(401).json({
      message: "Login failed",
      error: "Email and password don't match"
    });
  }

  // Obtenemos el token firmado con nuestra clave secreta
  const token = jwt.sign({ userId: user.id }, secret, { expiresIn: 86400 });

  // Regresamos el usuario SIN CONTRASEÑA y el token
  res.status(200).json({
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    },
    token
  });
});

// POST /api/auth/signup
auth.post("/signup", async (req, res) => {
  try {
    // Recibimos los datos del usuario desde el cuerpo del request
    const { firstName, lastName, email, password } = req.body;

    // Creamos un nuevo usuario con el modelo de Mongoose
    const user = new User({
      firstName,
      lastName,
      email,
      password: hash(password, 10)
    });

    // Obtenemos el token firmado con nuestra clave secreta
    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: 86400 });

    // Guardamos el nuevo usuario
    await user.save();

    // Regresamos el usuario SIN CONTRASEÑA y el token
    res.status(201).json({
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      },
      token
    });
  } catch (err) {
    // En caso de cualquier error, lo obtenemos y mandamos al usuario
    res.status(500).send(err);
  }
});

export default auth;
