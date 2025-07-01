export default defineEventHandler(async (event) => {
  try {
    const _id = event.context.params?.id as string;
    return await TaskSchema.findByIdAndDelete(_id);
  } catch (error) {
    return error;
  }
});
