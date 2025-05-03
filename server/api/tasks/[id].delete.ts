export default defineEventHandler(async (event) => {
  try {
    const raw = event.context.params?.id as string;
    const idx = Number(raw);

    return await TaskSchema.findOneAndDelete({}, { skip: idx });
  } catch (error) {
    return error;
  }
});
