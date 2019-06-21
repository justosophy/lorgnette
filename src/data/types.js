/* eslint-disable no-use-before-define */
// ^ not necessary for flowtype declaration

const Ok = 'Ok';
const Err = 'Err';

export type Result<E, T> =
  | { type: typeof Ok, value: T }
  | { type: typeof Err, error: E };

export type ApiResponse = {
  items: Array<{
    author: string,
    author_id: string,
    date_taken: string,
    link: string,
    tags: string,
    media: { m: string },
    title: string
  }>
};

export type ApiResponseDecoderResult = Result<Annotation, ApiResponse>;

export type SearchRecord = {|
  author: string,
  author_id: string,
  date_taken: string,
  link: string,
  tags: string[],
  thumbnail: string,
  title: string
|};

export type Maybe<T> = T | void;

export type ScalarAnnotation = {
  type: "ScalarAnnotation",
  value: mixed,
  hasAnnotation: boolean,
  annotation: Maybe<string>
};

export type AnnPair = { key: string, value: Annotation };

export type ObjectAnnotation = {
  type: "ObjectAnnotation",
  pairs: Array<AnnPair>,
  hasAnnotation: boolean,
  annotation: Maybe<string>
};

export type ArrayAnnotation = {
  type: "ArrayAnnotation",
  items: Array<Annotation>,
  hasAnnotation: boolean,
  annotation: Maybe<string>
};

export type Annotation = ObjectAnnotation | ArrayAnnotation | ScalarAnnotation;
/* eslint-enable no-use-before-define */
