exports.handler = async (event, context) => {
  const { user } = context.clientContext;
  
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'You must be logged in to download this file.' })
    };
  }

  // Use the Google Drive link you provided
  const fileUrl = 'https://drive.google.com/uc?export=download&id=1XhJJkBWXkWlJ1FUogw5RthO9Ld0m4TSS';

  const body = JSON.stringify({ url: fileUrl });

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  };
};

