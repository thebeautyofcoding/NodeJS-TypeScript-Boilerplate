import mongoose from "mongoose"

interface ITodo {
  description: string
  todosStatus: boolean
}

interface TodoDoc extends mongoose.Document {
  description: string
  todoStatus: boolean
}

interface ITodoModel extends mongoose.Model<any> {
  build(attr: ITodo): TodoDoc
}

const todoSchema = new mongoose.Schema({
  todoStatus: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

todoSchema.statics.build = (attr: ITodo) => {
  return new Todo(attr)
}

export const Todo = mongoose.model<TodoDoc, ITodoModel>("Todo", todoSchema)
