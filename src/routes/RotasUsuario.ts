import { Router } from 'express'
import ControlandoUsuarios from "../Controllers/ControlandoUsuarios";

const router = Router()


router.post("/cadastrar", ControlandoUsuarios.criandoCadastro);
router.post("/login", ControlandoUsuarios.criandoLogin);



export = router;
