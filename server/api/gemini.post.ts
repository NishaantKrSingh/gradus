import getData from "../services/gemini";

export default defineEventHandler(async (event) => {
  // console.log(event, "event")
  const body = await readBody(event);

  try {
    const response = await getData(body.prompt);
    return { response };
  } catch (error) {
    return { error: error };
  }
});
