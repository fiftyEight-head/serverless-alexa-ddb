const AWS = require("aws-sdk");

const deleteTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  try {
    await dynamodb.delete({
      TableName: "TaskTable",
      Key: {
        id: id,
      },
    }).promise();
  } catch (Err) {
    console.log(Err);
  }

  return {
    status: 200,
    body: {
      message: "Task deleted",
    },
  };
};

module.exports = {
  deleteTask,
};
