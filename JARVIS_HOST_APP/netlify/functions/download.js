exports.handler = async (event, context) => {
  // Check if a user is logged in
  if (!context.clientContext || !context.clientContext.user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "You must be logged in to download this file." }),
    };
  }

  // If the user is logged in, perform the redirect
  const downloadUrl = 'https://www.dropbox.com/scl/fi/woeg78hhpxcz7zkvzehgl/jarvis.exe?rlkey=pp17u2yji0taovaxude4lf8lp&st=9ln25qzi&dl=0';

  return {
    statusCode: 302, // 302 is the status code for a temporary redirect
    headers: {
      'Location': downloadUrl,
    },
  };
};
