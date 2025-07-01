import { defineMongooseModel } from "#nuxt/mongoose";

export const TaskSchema = defineMongooseModel({
  name: "Task",
  options: {
    versionKey: false,
  },
  schema: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
    },
  },
});
