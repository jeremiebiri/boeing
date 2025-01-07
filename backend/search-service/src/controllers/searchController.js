const client = require('../config/elasticsearch'); // ElasticSearch client

// Search Tasks
exports.searchTasks = async (req, res) => {
  try {
    const { query } = req.body;

    const result = await client.search({
      index: 'tasks', // Replace 'tasks' with your ElasticSearch index name
      query: {
        multi_match: {
          query: query,
          fields: ['title', 'description'], // Fields to search in
        },
      },
    });

    const hits = result.hits.hits.map(hit => ({
      id: hit._id,
      ...hit._source,
    }));

    res.status(200).json({ results: hits });
  } catch (error) {
    console.error('Error searching tasks:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Index Task
exports.indexTask = async (req, res) => {
  try {
    const { id, title, description } = req.body;

    await client.index({
      index: 'tasks', // Replace 'tasks' with your ElasticSearch index name
      id: id,
      document: {
        title,
        description,
      },
    });

    res.status(201).json({ message: 'Task indexed successfully' });
  } catch (error) {
    console.error('Error indexing task:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await client.delete({
      index: 'tasks', // Replace 'tasks' with your ElasticSearch index name
      id: id,
    });

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error.message);
    res.status(500).json({ error: error.message });
  }
};
