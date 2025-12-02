import axios from 'axios';

export const getAsyncStories = async ({ url }) => {
  if (url === '') return null;
  try {
    const result = await axios.get(url);

    // Filtrar elementos que no tienen url.
    const filteredResult = result.data.hits.filter(
      (story) => story.url || story.story_url,
    );

    return filteredResult.map((story) => ({
      title: story.title || story.story_title,
      url: story.url || story.story_url,
      author: story.author,
      numComments: story.num_comments,
      points: story.points,
      objectId: story.objectID,
    }));
  } catch {
    throw new Error('Errror fetching news of Hacker News');
  }
};
