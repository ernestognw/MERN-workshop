import jwt from "jsonwebtoken";
import { secret } from "../config";

const authRequired = (req, res, next) => {
  // Verificación del que el token enviado ha sido firmado
  // por nuestro servidor y con nuestra llave secreta.
  // Se obtiene desde headers ya que por estandar
  // se envía bajo este formato: Bearer <token>
  // bajo el key Authorization
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  jwt.verify(token, secret, (err, token) => {
    if (err) {
      // Si genera algún error, termina la comunicación aquí.
      // Quiere decir que alguien trata de hacer algo que
      // no está autorizado
      return res.status(401).json({
        message: "Unauthourized",
        error: err
      });
    }

    // Si no hay error, el token regresará el contenido, así que
    // hay que colocar el contenido en el request para usarlo luego
    req.userId = token.userId;
    // Llamámos al siguiente middleware para continuar el flujo.
    next();
  });
};

export default authRequired;
