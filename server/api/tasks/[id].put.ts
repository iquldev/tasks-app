export default defineEventHandler(async (event) => {
  try {
    const _id = event.context.params?.id as string;
    const body = await readBody<Record<string, any>>(event);
    return await TaskSchema.findByIdAndUpdate(
      _id,
      { $set: body },
      { new: true, runValidators: true }
    );
  } catch (error) {
    return error;
  }
});
