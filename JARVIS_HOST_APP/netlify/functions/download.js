exports.handler = async (event, context) => {
  // Check if a user is logged in
  if (!context.clientContext || !context.clientContext.user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "You must be logged in to download this file." }),
    };
  }

  // If the user is logged in, perform the redirect
  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1S_BSHw0wCW9gozt9Q3qeIIoXKY6pLlIk';

  return {
    statusCode: 302, // 302 is the status code for a temporary redirect
    headers: {
      'Location': downloadUrl,
    },
  };
};
