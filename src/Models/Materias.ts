
import {Schema, model} from "mongoose";



interface Imateria extends Document {
    AreaDeAtuacao: string,
            Conteudos:{
                type:object,
                Materia:[
                    {
                        Titulo:string,
                        Detalhes:string,
                        Desafios:string
                    }
                ]
            }
}


const materiaSchema = new Schema({
            AreaDeAtuacao: String,
            Conteudos:{
                type:Object,
                Materia:[
                    {
                        Titulo:String,
                        Detalhes:String,
                        Desafios:String
                    }
                ]
            }
        })

export const materias = model<Imateria>('materias',materiaSchema)

