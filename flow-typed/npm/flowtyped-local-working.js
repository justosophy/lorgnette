declare module 'decoders' {
    // From 'lemons' package
    declare type Result<E, T> =
        | { type: 'Ok', value: T }
        | { type: 'Err', error: E };

    // from 'debrief' package

    declare type Maybe<T> = T | void;

    declare type ScalarAnnotation = {
        type: 'ScalarAnnotation',
        value: mixed,
        hasAnnotation: boolean,
        annotation: Maybe<string>,
    };

    declare type AnnPair = { key: string, value: Annotation };

    declare type ObjectAnnotation = {
        type: 'ObjectAnnotation',
        pairs: Array<AnnPair>,
        hasAnnotation: boolean,
        annotation: Maybe<string>,
    };

    declare type ArrayAnnotation = {
        type: 'ArrayAnnotation',
        items: Array<Annotation>,
        hasAnnotation: boolean,
        annotation: Maybe<string>,
    };

    declare type Annotation = ObjectAnnotation | ArrayAnnotation | ScalarAnnotation;

    // from 'decoders' package
    declare type $DecoderType = <T>(Decoder<T>) => T;

    declare type Guard<T> = mixed => T;
    declare type Predicate<T> = T => boolean;
    declare type DecodeResult<T> = Result<Annotation, T>;
    declare type Decoder<T, F = mixed> = F => DecodeResult<T>;

    declare module.exports: {

      guard: <T>(any, ?Object) => any,
      compose: any,
      map: (any),
      predicate: (any),
      array: (any),
      poja: (any),
      boolean: (any),
      numericBoolean: (any),
      truthy: (any),
      constant: (any),
      hardcoded: (any),
      mixed: (any),
      null_: (any),
      undefined_: (any),
      unknown: (any),
      date: (any),
      dispatch: (any),
      either: (any),
      either3: (any),
      either4: (any),
      either5: (any),
      either6: (any),
      either7: (any),
      either8: (any),
      either9: (any),
      oneOf: (any),
      fail: (any),
      instanceOf: (any),
      mapping: (any),
      dict: (any),
      integer: (any),
      number: (any),
      positiveInteger: (any),
      positiveNumber: (any),
      exact: (any),
      object: (any),
      pojo: (any),
      maybe: (any),
      nullable: (any),
      optional: (any),
      email: (any),
      regex: (any),
      string: (any),
      url: (any),
      tuple2: (any),
      tuple3: (any),
      tuple4: (any),
      tuple5: (any),
      tuple6: (any),
    };
}
