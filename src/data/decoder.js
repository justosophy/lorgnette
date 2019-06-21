import { object, string, array } from 'decoders';

const apiResponseDecoder = object({
  items: array(
    object({
      author: string,
      author_id: string,
      date_taken: string,
      link: string,
      tags: string,
      media: object({ m: string }),
      title: string,
    }),
  ),
});

export { apiResponseDecoder };
