export default defineEventHandler(async (event) => {
  try {
    return await TaskSchema.find({});
  } catch (error) {
    return error;
  }
});
