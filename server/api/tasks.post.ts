export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    return await TaskSchema.create(body);
  } catch (error) {
    return error;
  }
});
