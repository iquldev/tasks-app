export default defineEventHandler(async (event) => {
  try {
    const raw = event.context.params?.id as string;
    const idx = Number(raw);
    const body = await readBody<Record<string, any>>(event);

    const docs = await TaskSchema.find().skip(idx).limit(1);
    const targetId = docs[0]._id;

    return await TaskSchema.findByIdAndUpdate(
      targetId,
      { $set: body },
      { new: true, runValidators: true }
    );
  } catch (error) {
    return error;
  }
});
