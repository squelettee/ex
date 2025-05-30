
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserLikes
 * 
 */
export type UserLikes = $Result.DefaultSelection<Prisma.$UserLikesPayload>
/**
 * Model UserDislikes
 * 
 */
export type UserDislikes = $Result.DefaultSelection<Prisma.$UserDislikesPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLikes`: Exposes CRUD operations for the **UserLikes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLikes
    * const userLikes = await prisma.userLikes.findMany()
    * ```
    */
  get userLikes(): Prisma.UserLikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDislikes`: Exposes CRUD operations for the **UserDislikes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDislikes
    * const userDislikes = await prisma.userDislikes.findMany()
    * ```
    */
  get userDislikes(): Prisma.UserDislikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserLikes: 'UserLikes',
    UserDislikes: 'UserDislikes',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userLikes" | "userDislikes" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserLikes: {
        payload: Prisma.$UserLikesPayload<ExtArgs>
        fields: Prisma.UserLikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesPayload>
          }
          findFirst: {
            args: Prisma.UserLikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesPayload>
          }
          findMany: {
            args: Prisma.UserLikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesPayload>[]
          }
          create: {
            args: Prisma.UserLikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesPayload>
          }
          createMany: {
            args: Prisma.UserLikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesPayload>[]
          }
          delete: {
            args: Prisma.UserLikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesPayload>
          }
          update: {
            args: Prisma.UserLikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesPayload>
          }
          deleteMany: {
            args: Prisma.UserLikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesPayload>[]
          }
          upsert: {
            args: Prisma.UserLikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesPayload>
          }
          aggregate: {
            args: Prisma.UserLikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLikes>
          }
          groupBy: {
            args: Prisma.UserLikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLikesCountArgs<ExtArgs>
            result: $Utils.Optional<UserLikesCountAggregateOutputType> | number
          }
        }
      }
      UserDislikes: {
        payload: Prisma.$UserDislikesPayload<ExtArgs>
        fields: Prisma.UserDislikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDislikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDislikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDislikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDislikesPayload>
          }
          findFirst: {
            args: Prisma.UserDislikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDislikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDislikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDislikesPayload>
          }
          findMany: {
            args: Prisma.UserDislikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDislikesPayload>[]
          }
          create: {
            args: Prisma.UserDislikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDislikesPayload>
          }
          createMany: {
            args: Prisma.UserDislikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDislikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDislikesPayload>[]
          }
          delete: {
            args: Prisma.UserDislikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDislikesPayload>
          }
          update: {
            args: Prisma.UserDislikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDislikesPayload>
          }
          deleteMany: {
            args: Prisma.UserDislikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDislikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDislikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDislikesPayload>[]
          }
          upsert: {
            args: Prisma.UserDislikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDislikesPayload>
          }
          aggregate: {
            args: Prisma.UserDislikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDislikes>
          }
          groupBy: {
            args: Prisma.UserDislikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDislikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDislikesCountArgs<ExtArgs>
            result: $Utils.Optional<UserDislikesCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userLikes?: UserLikesOmit
    userDislikes?: UserDislikesOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    likes: number
    likedBy: number
    dislikes: number
    dislikedBy: number
    messagesSent: number
    messagesReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    likedBy?: boolean | UserCountOutputTypeCountLikedByArgs
    dislikes?: boolean | UserCountOutputTypeCountDislikesArgs
    dislikedBy?: boolean | UserCountOutputTypeCountDislikedByArgs
    messagesSent?: boolean | UserCountOutputTypeCountMessagesSentArgs
    messagesReceived?: boolean | UserCountOutputTypeCountMessagesReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDislikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDislikesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDislikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDislikesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    tokens: number | null
  }

  export type UserSumAggregateOutputType = {
    tokens: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    wallet: string | null
    lastSeen: Date | null
    name: string | null
    bio: string | null
    image: string | null
    tokens: number | null
    referral: string | null
    onboarded: boolean | null
    visitedX: boolean | null
    visitedInstagram: boolean | null
    visitedTiktok: boolean | null
    visitedYoutube: boolean | null
    visitedTelegram: boolean | null
    lastDailyClaim: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    wallet: string | null
    lastSeen: Date | null
    name: string | null
    bio: string | null
    image: string | null
    tokens: number | null
    referral: string | null
    onboarded: boolean | null
    visitedX: boolean | null
    visitedInstagram: boolean | null
    visitedTiktok: boolean | null
    visitedYoutube: boolean | null
    visitedTelegram: boolean | null
    lastDailyClaim: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    wallet: number
    lastSeen: number
    name: number
    bio: number
    image: number
    tokens: number
    referral: number
    onboarded: number
    visitedX: number
    visitedInstagram: number
    visitedTiktok: number
    visitedYoutube: number
    visitedTelegram: number
    lastDailyClaim: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    tokens?: true
  }

  export type UserSumAggregateInputType = {
    tokens?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    wallet?: true
    lastSeen?: true
    name?: true
    bio?: true
    image?: true
    tokens?: true
    referral?: true
    onboarded?: true
    visitedX?: true
    visitedInstagram?: true
    visitedTiktok?: true
    visitedYoutube?: true
    visitedTelegram?: true
    lastDailyClaim?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    wallet?: true
    lastSeen?: true
    name?: true
    bio?: true
    image?: true
    tokens?: true
    referral?: true
    onboarded?: true
    visitedX?: true
    visitedInstagram?: true
    visitedTiktok?: true
    visitedYoutube?: true
    visitedTelegram?: true
    lastDailyClaim?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    wallet?: true
    lastSeen?: true
    name?: true
    bio?: true
    image?: true
    tokens?: true
    referral?: true
    onboarded?: true
    visitedX?: true
    visitedInstagram?: true
    visitedTiktok?: true
    visitedYoutube?: true
    visitedTelegram?: true
    lastDailyClaim?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    wallet: string
    lastSeen: Date
    name: string | null
    bio: string | null
    image: string | null
    tokens: number
    referral: string | null
    onboarded: boolean
    visitedX: boolean
    visitedInstagram: boolean
    visitedTiktok: boolean
    visitedYoutube: boolean
    visitedTelegram: boolean
    lastDailyClaim: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    wallet?: boolean
    lastSeen?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    tokens?: boolean
    referral?: boolean
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: boolean
    likes?: boolean | User$likesArgs<ExtArgs>
    likedBy?: boolean | User$likedByArgs<ExtArgs>
    dislikes?: boolean | User$dislikesArgs<ExtArgs>
    dislikedBy?: boolean | User$dislikedByArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    wallet?: boolean
    lastSeen?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    tokens?: boolean
    referral?: boolean
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    wallet?: boolean
    lastSeen?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    tokens?: boolean
    referral?: boolean
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    wallet?: boolean
    lastSeen?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    tokens?: boolean
    referral?: boolean
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "wallet" | "lastSeen" | "name" | "bio" | "image" | "tokens" | "referral" | "onboarded" | "visitedX" | "visitedInstagram" | "visitedTiktok" | "visitedYoutube" | "visitedTelegram" | "lastDailyClaim", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | User$likesArgs<ExtArgs>
    likedBy?: boolean | User$likedByArgs<ExtArgs>
    dislikes?: boolean | User$dislikesArgs<ExtArgs>
    dislikedBy?: boolean | User$dislikedByArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      likes: Prisma.$UserLikesPayload<ExtArgs>[]
      likedBy: Prisma.$UserLikesPayload<ExtArgs>[]
      dislikes: Prisma.$UserDislikesPayload<ExtArgs>[]
      dislikedBy: Prisma.$UserDislikesPayload<ExtArgs>[]
      messagesSent: Prisma.$MessagePayload<ExtArgs>[]
      messagesReceived: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      wallet: string
      lastSeen: Date
      name: string | null
      bio: string | null
      image: string | null
      tokens: number
      referral: string | null
      onboarded: boolean
      visitedX: boolean
      visitedInstagram: boolean
      visitedTiktok: boolean
      visitedYoutube: boolean
      visitedTelegram: boolean
      lastDailyClaim: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedBy<T extends User$likedByArgs<ExtArgs> = {}>(args?: Subset<T, User$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dislikes<T extends User$dislikesArgs<ExtArgs> = {}>(args?: Subset<T, User$dislikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dislikedBy<T extends User$dislikedByArgs<ExtArgs> = {}>(args?: Subset<T, User$dislikedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesSent<T extends User$messagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesReceived<T extends User$messagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly wallet: FieldRef<"User", 'String'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly tokens: FieldRef<"User", 'Int'>
    readonly referral: FieldRef<"User", 'String'>
    readonly onboarded: FieldRef<"User", 'Boolean'>
    readonly visitedX: FieldRef<"User", 'Boolean'>
    readonly visitedInstagram: FieldRef<"User", 'Boolean'>
    readonly visitedTiktok: FieldRef<"User", 'Boolean'>
    readonly visitedYoutube: FieldRef<"User", 'Boolean'>
    readonly visitedTelegram: FieldRef<"User", 'Boolean'>
    readonly lastDailyClaim: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
    where?: UserLikesWhereInput
    orderBy?: UserLikesOrderByWithRelationInput | UserLikesOrderByWithRelationInput[]
    cursor?: UserLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLikesScalarFieldEnum | UserLikesScalarFieldEnum[]
  }

  /**
   * User.likedBy
   */
  export type User$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
    where?: UserLikesWhereInput
    orderBy?: UserLikesOrderByWithRelationInput | UserLikesOrderByWithRelationInput[]
    cursor?: UserLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLikesScalarFieldEnum | UserLikesScalarFieldEnum[]
  }

  /**
   * User.dislikes
   */
  export type User$dislikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
    where?: UserDislikesWhereInput
    orderBy?: UserDislikesOrderByWithRelationInput | UserDislikesOrderByWithRelationInput[]
    cursor?: UserDislikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDislikesScalarFieldEnum | UserDislikesScalarFieldEnum[]
  }

  /**
   * User.dislikedBy
   */
  export type User$dislikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
    where?: UserDislikesWhereInput
    orderBy?: UserDislikesOrderByWithRelationInput | UserDislikesOrderByWithRelationInput[]
    cursor?: UserDislikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDislikesScalarFieldEnum | UserDislikesScalarFieldEnum[]
  }

  /**
   * User.messagesSent
   */
  export type User$messagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.messagesReceived
   */
  export type User$messagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserLikes
   */

  export type AggregateUserLikes = {
    _count: UserLikesCountAggregateOutputType | null
    _min: UserLikesMinAggregateOutputType | null
    _max: UserLikesMaxAggregateOutputType | null
  }

  export type UserLikesMinAggregateOutputType = {
    fromId: string | null
    toId: string | null
  }

  export type UserLikesMaxAggregateOutputType = {
    fromId: string | null
    toId: string | null
  }

  export type UserLikesCountAggregateOutputType = {
    fromId: number
    toId: number
    _all: number
  }


  export type UserLikesMinAggregateInputType = {
    fromId?: true
    toId?: true
  }

  export type UserLikesMaxAggregateInputType = {
    fromId?: true
    toId?: true
  }

  export type UserLikesCountAggregateInputType = {
    fromId?: true
    toId?: true
    _all?: true
  }

  export type UserLikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLikes to aggregate.
     */
    where?: UserLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikes to fetch.
     */
    orderBy?: UserLikesOrderByWithRelationInput | UserLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLikes
    **/
    _count?: true | UserLikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLikesMaxAggregateInputType
  }

  export type GetUserLikesAggregateType<T extends UserLikesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLikes[P]>
      : GetScalarType<T[P], AggregateUserLikes[P]>
  }




  export type UserLikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikesWhereInput
    orderBy?: UserLikesOrderByWithAggregationInput | UserLikesOrderByWithAggregationInput[]
    by: UserLikesScalarFieldEnum[] | UserLikesScalarFieldEnum
    having?: UserLikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLikesCountAggregateInputType | true
    _min?: UserLikesMinAggregateInputType
    _max?: UserLikesMaxAggregateInputType
  }

  export type UserLikesGroupByOutputType = {
    fromId: string
    toId: string
    _count: UserLikesCountAggregateOutputType | null
    _min: UserLikesMinAggregateOutputType | null
    _max: UserLikesMaxAggregateOutputType | null
  }

  type GetUserLikesGroupByPayload<T extends UserLikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLikesGroupByOutputType[P]>
            : GetScalarType<T[P], UserLikesGroupByOutputType[P]>
        }
      >
    >


  export type UserLikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fromId?: boolean
    toId?: boolean
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLikes"]>

  export type UserLikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fromId?: boolean
    toId?: boolean
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLikes"]>

  export type UserLikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fromId?: boolean
    toId?: boolean
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLikes"]>

  export type UserLikesSelectScalar = {
    fromId?: boolean
    toId?: boolean
  }

  export type UserLikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fromId" | "toId", ExtArgs["result"]["userLikes"]>
  export type UserLikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserLikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserLikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserLikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLikes"
    objects: {
      from: Prisma.$UserPayload<ExtArgs>
      to: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fromId: string
      toId: string
    }, ExtArgs["result"]["userLikes"]>
    composites: {}
  }

  type UserLikesGetPayload<S extends boolean | null | undefined | UserLikesDefaultArgs> = $Result.GetResult<Prisma.$UserLikesPayload, S>

  type UserLikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLikesCountAggregateInputType | true
    }

  export interface UserLikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLikes'], meta: { name: 'UserLikes' } }
    /**
     * Find zero or one UserLikes that matches the filter.
     * @param {UserLikesFindUniqueArgs} args - Arguments to find a UserLikes
     * @example
     * // Get one UserLikes
     * const userLikes = await prisma.userLikes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLikesFindUniqueArgs>(args: SelectSubset<T, UserLikesFindUniqueArgs<ExtArgs>>): Prisma__UserLikesClient<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLikes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLikesFindUniqueOrThrowArgs} args - Arguments to find a UserLikes
     * @example
     * // Get one UserLikes
     * const userLikes = await prisma.userLikes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLikesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLikesClient<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesFindFirstArgs} args - Arguments to find a UserLikes
     * @example
     * // Get one UserLikes
     * const userLikes = await prisma.userLikes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLikesFindFirstArgs>(args?: SelectSubset<T, UserLikesFindFirstArgs<ExtArgs>>): Prisma__UserLikesClient<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLikes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesFindFirstOrThrowArgs} args - Arguments to find a UserLikes
     * @example
     * // Get one UserLikes
     * const userLikes = await prisma.userLikes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLikesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLikesClient<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLikes
     * const userLikes = await prisma.userLikes.findMany()
     * 
     * // Get first 10 UserLikes
     * const userLikes = await prisma.userLikes.findMany({ take: 10 })
     * 
     * // Only select the `fromId`
     * const userLikesWithFromIdOnly = await prisma.userLikes.findMany({ select: { fromId: true } })
     * 
     */
    findMany<T extends UserLikesFindManyArgs>(args?: SelectSubset<T, UserLikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLikes.
     * @param {UserLikesCreateArgs} args - Arguments to create a UserLikes.
     * @example
     * // Create one UserLikes
     * const UserLikes = await prisma.userLikes.create({
     *   data: {
     *     // ... data to create a UserLikes
     *   }
     * })
     * 
     */
    create<T extends UserLikesCreateArgs>(args: SelectSubset<T, UserLikesCreateArgs<ExtArgs>>): Prisma__UserLikesClient<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLikes.
     * @param {UserLikesCreateManyArgs} args - Arguments to create many UserLikes.
     * @example
     * // Create many UserLikes
     * const userLikes = await prisma.userLikes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLikesCreateManyArgs>(args?: SelectSubset<T, UserLikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLikes and returns the data saved in the database.
     * @param {UserLikesCreateManyAndReturnArgs} args - Arguments to create many UserLikes.
     * @example
     * // Create many UserLikes
     * const userLikes = await prisma.userLikes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLikes and only return the `fromId`
     * const userLikesWithFromIdOnly = await prisma.userLikes.createManyAndReturn({
     *   select: { fromId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLikesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLikes.
     * @param {UserLikesDeleteArgs} args - Arguments to delete one UserLikes.
     * @example
     * // Delete one UserLikes
     * const UserLikes = await prisma.userLikes.delete({
     *   where: {
     *     // ... filter to delete one UserLikes
     *   }
     * })
     * 
     */
    delete<T extends UserLikesDeleteArgs>(args: SelectSubset<T, UserLikesDeleteArgs<ExtArgs>>): Prisma__UserLikesClient<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLikes.
     * @param {UserLikesUpdateArgs} args - Arguments to update one UserLikes.
     * @example
     * // Update one UserLikes
     * const userLikes = await prisma.userLikes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLikesUpdateArgs>(args: SelectSubset<T, UserLikesUpdateArgs<ExtArgs>>): Prisma__UserLikesClient<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLikes.
     * @param {UserLikesDeleteManyArgs} args - Arguments to filter UserLikes to delete.
     * @example
     * // Delete a few UserLikes
     * const { count } = await prisma.userLikes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLikesDeleteManyArgs>(args?: SelectSubset<T, UserLikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLikes
     * const userLikes = await prisma.userLikes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLikesUpdateManyArgs>(args: SelectSubset<T, UserLikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLikes and returns the data updated in the database.
     * @param {UserLikesUpdateManyAndReturnArgs} args - Arguments to update many UserLikes.
     * @example
     * // Update many UserLikes
     * const userLikes = await prisma.userLikes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLikes and only return the `fromId`
     * const userLikesWithFromIdOnly = await prisma.userLikes.updateManyAndReturn({
     *   select: { fromId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserLikesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLikes.
     * @param {UserLikesUpsertArgs} args - Arguments to update or create a UserLikes.
     * @example
     * // Update or create a UserLikes
     * const userLikes = await prisma.userLikes.upsert({
     *   create: {
     *     // ... data to create a UserLikes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLikes we want to update
     *   }
     * })
     */
    upsert<T extends UserLikesUpsertArgs>(args: SelectSubset<T, UserLikesUpsertArgs<ExtArgs>>): Prisma__UserLikesClient<$Result.GetResult<Prisma.$UserLikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesCountArgs} args - Arguments to filter UserLikes to count.
     * @example
     * // Count the number of UserLikes
     * const count = await prisma.userLikes.count({
     *   where: {
     *     // ... the filter for the UserLikes we want to count
     *   }
     * })
    **/
    count<T extends UserLikesCountArgs>(
      args?: Subset<T, UserLikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLikesAggregateArgs>(args: Subset<T, UserLikesAggregateArgs>): Prisma.PrismaPromise<GetUserLikesAggregateType<T>>

    /**
     * Group by UserLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLikesGroupByArgs['orderBy'] }
        : { orderBy?: UserLikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLikes model
   */
  readonly fields: UserLikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLikes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserLikes model
   */
  interface UserLikesFieldRefs {
    readonly fromId: FieldRef<"UserLikes", 'String'>
    readonly toId: FieldRef<"UserLikes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserLikes findUnique
   */
  export type UserLikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
    /**
     * Filter, which UserLikes to fetch.
     */
    where: UserLikesWhereUniqueInput
  }

  /**
   * UserLikes findUniqueOrThrow
   */
  export type UserLikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
    /**
     * Filter, which UserLikes to fetch.
     */
    where: UserLikesWhereUniqueInput
  }

  /**
   * UserLikes findFirst
   */
  export type UserLikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
    /**
     * Filter, which UserLikes to fetch.
     */
    where?: UserLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikes to fetch.
     */
    orderBy?: UserLikesOrderByWithRelationInput | UserLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLikes.
     */
    cursor?: UserLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLikes.
     */
    distinct?: UserLikesScalarFieldEnum | UserLikesScalarFieldEnum[]
  }

  /**
   * UserLikes findFirstOrThrow
   */
  export type UserLikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
    /**
     * Filter, which UserLikes to fetch.
     */
    where?: UserLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikes to fetch.
     */
    orderBy?: UserLikesOrderByWithRelationInput | UserLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLikes.
     */
    cursor?: UserLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLikes.
     */
    distinct?: UserLikesScalarFieldEnum | UserLikesScalarFieldEnum[]
  }

  /**
   * UserLikes findMany
   */
  export type UserLikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
    /**
     * Filter, which UserLikes to fetch.
     */
    where?: UserLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikes to fetch.
     */
    orderBy?: UserLikesOrderByWithRelationInput | UserLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLikes.
     */
    cursor?: UserLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikes.
     */
    skip?: number
    distinct?: UserLikesScalarFieldEnum | UserLikesScalarFieldEnum[]
  }

  /**
   * UserLikes create
   */
  export type UserLikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLikes.
     */
    data: XOR<UserLikesCreateInput, UserLikesUncheckedCreateInput>
  }

  /**
   * UserLikes createMany
   */
  export type UserLikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLikes.
     */
    data: UserLikesCreateManyInput | UserLikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLikes createManyAndReturn
   */
  export type UserLikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * The data used to create many UserLikes.
     */
    data: UserLikesCreateManyInput | UserLikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLikes update
   */
  export type UserLikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLikes.
     */
    data: XOR<UserLikesUpdateInput, UserLikesUncheckedUpdateInput>
    /**
     * Choose, which UserLikes to update.
     */
    where: UserLikesWhereUniqueInput
  }

  /**
   * UserLikes updateMany
   */
  export type UserLikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLikes.
     */
    data: XOR<UserLikesUpdateManyMutationInput, UserLikesUncheckedUpdateManyInput>
    /**
     * Filter which UserLikes to update
     */
    where?: UserLikesWhereInput
    /**
     * Limit how many UserLikes to update.
     */
    limit?: number
  }

  /**
   * UserLikes updateManyAndReturn
   */
  export type UserLikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * The data used to update UserLikes.
     */
    data: XOR<UserLikesUpdateManyMutationInput, UserLikesUncheckedUpdateManyInput>
    /**
     * Filter which UserLikes to update
     */
    where?: UserLikesWhereInput
    /**
     * Limit how many UserLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLikes upsert
   */
  export type UserLikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLikes to update in case it exists.
     */
    where: UserLikesWhereUniqueInput
    /**
     * In case the UserLikes found by the `where` argument doesn't exist, create a new UserLikes with this data.
     */
    create: XOR<UserLikesCreateInput, UserLikesUncheckedCreateInput>
    /**
     * In case the UserLikes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLikesUpdateInput, UserLikesUncheckedUpdateInput>
  }

  /**
   * UserLikes delete
   */
  export type UserLikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
    /**
     * Filter which UserLikes to delete.
     */
    where: UserLikesWhereUniqueInput
  }

  /**
   * UserLikes deleteMany
   */
  export type UserLikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLikes to delete
     */
    where?: UserLikesWhereInput
    /**
     * Limit how many UserLikes to delete.
     */
    limit?: number
  }

  /**
   * UserLikes without action
   */
  export type UserLikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikes
     */
    select?: UserLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikes
     */
    omit?: UserLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesInclude<ExtArgs> | null
  }


  /**
   * Model UserDislikes
   */

  export type AggregateUserDislikes = {
    _count: UserDislikesCountAggregateOutputType | null
    _min: UserDislikesMinAggregateOutputType | null
    _max: UserDislikesMaxAggregateOutputType | null
  }

  export type UserDislikesMinAggregateOutputType = {
    fromId: string | null
    toId: string | null
  }

  export type UserDislikesMaxAggregateOutputType = {
    fromId: string | null
    toId: string | null
  }

  export type UserDislikesCountAggregateOutputType = {
    fromId: number
    toId: number
    _all: number
  }


  export type UserDislikesMinAggregateInputType = {
    fromId?: true
    toId?: true
  }

  export type UserDislikesMaxAggregateInputType = {
    fromId?: true
    toId?: true
  }

  export type UserDislikesCountAggregateInputType = {
    fromId?: true
    toId?: true
    _all?: true
  }

  export type UserDislikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDislikes to aggregate.
     */
    where?: UserDislikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDislikes to fetch.
     */
    orderBy?: UserDislikesOrderByWithRelationInput | UserDislikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDislikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDislikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDislikes
    **/
    _count?: true | UserDislikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDislikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDislikesMaxAggregateInputType
  }

  export type GetUserDislikesAggregateType<T extends UserDislikesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDislikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDislikes[P]>
      : GetScalarType<T[P], AggregateUserDislikes[P]>
  }




  export type UserDislikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDislikesWhereInput
    orderBy?: UserDislikesOrderByWithAggregationInput | UserDislikesOrderByWithAggregationInput[]
    by: UserDislikesScalarFieldEnum[] | UserDislikesScalarFieldEnum
    having?: UserDislikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDislikesCountAggregateInputType | true
    _min?: UserDislikesMinAggregateInputType
    _max?: UserDislikesMaxAggregateInputType
  }

  export type UserDislikesGroupByOutputType = {
    fromId: string
    toId: string
    _count: UserDislikesCountAggregateOutputType | null
    _min: UserDislikesMinAggregateOutputType | null
    _max: UserDislikesMaxAggregateOutputType | null
  }

  type GetUserDislikesGroupByPayload<T extends UserDislikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDislikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDislikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDislikesGroupByOutputType[P]>
            : GetScalarType<T[P], UserDislikesGroupByOutputType[P]>
        }
      >
    >


  export type UserDislikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fromId?: boolean
    toId?: boolean
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDislikes"]>

  export type UserDislikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fromId?: boolean
    toId?: boolean
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDislikes"]>

  export type UserDislikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fromId?: boolean
    toId?: boolean
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDislikes"]>

  export type UserDislikesSelectScalar = {
    fromId?: boolean
    toId?: boolean
  }

  export type UserDislikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fromId" | "toId", ExtArgs["result"]["userDislikes"]>
  export type UserDislikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDislikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDislikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDislikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDislikes"
    objects: {
      from: Prisma.$UserPayload<ExtArgs>
      to: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fromId: string
      toId: string
    }, ExtArgs["result"]["userDislikes"]>
    composites: {}
  }

  type UserDislikesGetPayload<S extends boolean | null | undefined | UserDislikesDefaultArgs> = $Result.GetResult<Prisma.$UserDislikesPayload, S>

  type UserDislikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDislikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDislikesCountAggregateInputType | true
    }

  export interface UserDislikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDislikes'], meta: { name: 'UserDislikes' } }
    /**
     * Find zero or one UserDislikes that matches the filter.
     * @param {UserDislikesFindUniqueArgs} args - Arguments to find a UserDislikes
     * @example
     * // Get one UserDislikes
     * const userDislikes = await prisma.userDislikes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDislikesFindUniqueArgs>(args: SelectSubset<T, UserDislikesFindUniqueArgs<ExtArgs>>): Prisma__UserDislikesClient<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDislikes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDislikesFindUniqueOrThrowArgs} args - Arguments to find a UserDislikes
     * @example
     * // Get one UserDislikes
     * const userDislikes = await prisma.userDislikes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDislikesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDislikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDislikesClient<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDislikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDislikesFindFirstArgs} args - Arguments to find a UserDislikes
     * @example
     * // Get one UserDislikes
     * const userDislikes = await prisma.userDislikes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDislikesFindFirstArgs>(args?: SelectSubset<T, UserDislikesFindFirstArgs<ExtArgs>>): Prisma__UserDislikesClient<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDislikes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDislikesFindFirstOrThrowArgs} args - Arguments to find a UserDislikes
     * @example
     * // Get one UserDislikes
     * const userDislikes = await prisma.userDislikes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDislikesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDislikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDislikesClient<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDislikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDislikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDislikes
     * const userDislikes = await prisma.userDislikes.findMany()
     * 
     * // Get first 10 UserDislikes
     * const userDislikes = await prisma.userDislikes.findMany({ take: 10 })
     * 
     * // Only select the `fromId`
     * const userDislikesWithFromIdOnly = await prisma.userDislikes.findMany({ select: { fromId: true } })
     * 
     */
    findMany<T extends UserDislikesFindManyArgs>(args?: SelectSubset<T, UserDislikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDislikes.
     * @param {UserDislikesCreateArgs} args - Arguments to create a UserDislikes.
     * @example
     * // Create one UserDislikes
     * const UserDislikes = await prisma.userDislikes.create({
     *   data: {
     *     // ... data to create a UserDislikes
     *   }
     * })
     * 
     */
    create<T extends UserDislikesCreateArgs>(args: SelectSubset<T, UserDislikesCreateArgs<ExtArgs>>): Prisma__UserDislikesClient<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDislikes.
     * @param {UserDislikesCreateManyArgs} args - Arguments to create many UserDislikes.
     * @example
     * // Create many UserDislikes
     * const userDislikes = await prisma.userDislikes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDislikesCreateManyArgs>(args?: SelectSubset<T, UserDislikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDislikes and returns the data saved in the database.
     * @param {UserDislikesCreateManyAndReturnArgs} args - Arguments to create many UserDislikes.
     * @example
     * // Create many UserDislikes
     * const userDislikes = await prisma.userDislikes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDislikes and only return the `fromId`
     * const userDislikesWithFromIdOnly = await prisma.userDislikes.createManyAndReturn({
     *   select: { fromId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDislikesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDislikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDislikes.
     * @param {UserDislikesDeleteArgs} args - Arguments to delete one UserDislikes.
     * @example
     * // Delete one UserDislikes
     * const UserDislikes = await prisma.userDislikes.delete({
     *   where: {
     *     // ... filter to delete one UserDislikes
     *   }
     * })
     * 
     */
    delete<T extends UserDislikesDeleteArgs>(args: SelectSubset<T, UserDislikesDeleteArgs<ExtArgs>>): Prisma__UserDislikesClient<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDislikes.
     * @param {UserDislikesUpdateArgs} args - Arguments to update one UserDislikes.
     * @example
     * // Update one UserDislikes
     * const userDislikes = await prisma.userDislikes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDislikesUpdateArgs>(args: SelectSubset<T, UserDislikesUpdateArgs<ExtArgs>>): Prisma__UserDislikesClient<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDislikes.
     * @param {UserDislikesDeleteManyArgs} args - Arguments to filter UserDislikes to delete.
     * @example
     * // Delete a few UserDislikes
     * const { count } = await prisma.userDislikes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDislikesDeleteManyArgs>(args?: SelectSubset<T, UserDislikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDislikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDislikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDislikes
     * const userDislikes = await prisma.userDislikes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDislikesUpdateManyArgs>(args: SelectSubset<T, UserDislikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDislikes and returns the data updated in the database.
     * @param {UserDislikesUpdateManyAndReturnArgs} args - Arguments to update many UserDislikes.
     * @example
     * // Update many UserDislikes
     * const userDislikes = await prisma.userDislikes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDislikes and only return the `fromId`
     * const userDislikesWithFromIdOnly = await prisma.userDislikes.updateManyAndReturn({
     *   select: { fromId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDislikesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDislikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDislikes.
     * @param {UserDislikesUpsertArgs} args - Arguments to update or create a UserDislikes.
     * @example
     * // Update or create a UserDislikes
     * const userDislikes = await prisma.userDislikes.upsert({
     *   create: {
     *     // ... data to create a UserDislikes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDislikes we want to update
     *   }
     * })
     */
    upsert<T extends UserDislikesUpsertArgs>(args: SelectSubset<T, UserDislikesUpsertArgs<ExtArgs>>): Prisma__UserDislikesClient<$Result.GetResult<Prisma.$UserDislikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDislikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDislikesCountArgs} args - Arguments to filter UserDislikes to count.
     * @example
     * // Count the number of UserDislikes
     * const count = await prisma.userDislikes.count({
     *   where: {
     *     // ... the filter for the UserDislikes we want to count
     *   }
     * })
    **/
    count<T extends UserDislikesCountArgs>(
      args?: Subset<T, UserDislikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDislikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDislikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDislikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDislikesAggregateArgs>(args: Subset<T, UserDislikesAggregateArgs>): Prisma.PrismaPromise<GetUserDislikesAggregateType<T>>

    /**
     * Group by UserDislikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDislikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDislikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDislikesGroupByArgs['orderBy'] }
        : { orderBy?: UserDislikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDislikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDislikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDislikes model
   */
  readonly fields: UserDislikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDislikes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDislikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDislikes model
   */
  interface UserDislikesFieldRefs {
    readonly fromId: FieldRef<"UserDislikes", 'String'>
    readonly toId: FieldRef<"UserDislikes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserDislikes findUnique
   */
  export type UserDislikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
    /**
     * Filter, which UserDislikes to fetch.
     */
    where: UserDislikesWhereUniqueInput
  }

  /**
   * UserDislikes findUniqueOrThrow
   */
  export type UserDislikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
    /**
     * Filter, which UserDislikes to fetch.
     */
    where: UserDislikesWhereUniqueInput
  }

  /**
   * UserDislikes findFirst
   */
  export type UserDislikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
    /**
     * Filter, which UserDislikes to fetch.
     */
    where?: UserDislikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDislikes to fetch.
     */
    orderBy?: UserDislikesOrderByWithRelationInput | UserDislikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDislikes.
     */
    cursor?: UserDislikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDislikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDislikes.
     */
    distinct?: UserDislikesScalarFieldEnum | UserDislikesScalarFieldEnum[]
  }

  /**
   * UserDislikes findFirstOrThrow
   */
  export type UserDislikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
    /**
     * Filter, which UserDislikes to fetch.
     */
    where?: UserDislikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDislikes to fetch.
     */
    orderBy?: UserDislikesOrderByWithRelationInput | UserDislikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDislikes.
     */
    cursor?: UserDislikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDislikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDislikes.
     */
    distinct?: UserDislikesScalarFieldEnum | UserDislikesScalarFieldEnum[]
  }

  /**
   * UserDislikes findMany
   */
  export type UserDislikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
    /**
     * Filter, which UserDislikes to fetch.
     */
    where?: UserDislikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDislikes to fetch.
     */
    orderBy?: UserDislikesOrderByWithRelationInput | UserDislikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDislikes.
     */
    cursor?: UserDislikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDislikes.
     */
    skip?: number
    distinct?: UserDislikesScalarFieldEnum | UserDislikesScalarFieldEnum[]
  }

  /**
   * UserDislikes create
   */
  export type UserDislikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDislikes.
     */
    data: XOR<UserDislikesCreateInput, UserDislikesUncheckedCreateInput>
  }

  /**
   * UserDislikes createMany
   */
  export type UserDislikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDislikes.
     */
    data: UserDislikesCreateManyInput | UserDislikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDislikes createManyAndReturn
   */
  export type UserDislikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * The data used to create many UserDislikes.
     */
    data: UserDislikesCreateManyInput | UserDislikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDislikes update
   */
  export type UserDislikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDislikes.
     */
    data: XOR<UserDislikesUpdateInput, UserDislikesUncheckedUpdateInput>
    /**
     * Choose, which UserDislikes to update.
     */
    where: UserDislikesWhereUniqueInput
  }

  /**
   * UserDislikes updateMany
   */
  export type UserDislikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDislikes.
     */
    data: XOR<UserDislikesUpdateManyMutationInput, UserDislikesUncheckedUpdateManyInput>
    /**
     * Filter which UserDislikes to update
     */
    where?: UserDislikesWhereInput
    /**
     * Limit how many UserDislikes to update.
     */
    limit?: number
  }

  /**
   * UserDislikes updateManyAndReturn
   */
  export type UserDislikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * The data used to update UserDislikes.
     */
    data: XOR<UserDislikesUpdateManyMutationInput, UserDislikesUncheckedUpdateManyInput>
    /**
     * Filter which UserDislikes to update
     */
    where?: UserDislikesWhereInput
    /**
     * Limit how many UserDislikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDislikes upsert
   */
  export type UserDislikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDislikes to update in case it exists.
     */
    where: UserDislikesWhereUniqueInput
    /**
     * In case the UserDislikes found by the `where` argument doesn't exist, create a new UserDislikes with this data.
     */
    create: XOR<UserDislikesCreateInput, UserDislikesUncheckedCreateInput>
    /**
     * In case the UserDislikes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDislikesUpdateInput, UserDislikesUncheckedUpdateInput>
  }

  /**
   * UserDislikes delete
   */
  export type UserDislikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
    /**
     * Filter which UserDislikes to delete.
     */
    where: UserDislikesWhereUniqueInput
  }

  /**
   * UserDislikes deleteMany
   */
  export type UserDislikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDislikes to delete
     */
    where?: UserDislikesWhereInput
    /**
     * Limit how many UserDislikes to delete.
     */
    limit?: number
  }

  /**
   * UserDislikes without action
   */
  export type UserDislikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDislikes
     */
    select?: UserDislikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDislikes
     */
    omit?: UserDislikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDislikesInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    fromUserId: string | null
    toUserId: string | null
    content: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    fromUserId: string | null
    toUserId: string | null
    content: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    createdAt: number
    fromUserId: number
    toUserId: number
    content: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    createdAt?: true
    fromUserId?: true
    toUserId?: true
    content?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    fromUserId?: true
    toUserId?: true
    content?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    createdAt?: true
    fromUserId?: true
    toUserId?: true
    content?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    createdAt: Date
    fromUserId: string
    toUserId: string
    content: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "fromUserId" | "toUserId" | "content", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      fromUserId: string
      toUserId: string
      content: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly fromUserId: FieldRef<"Message", 'String'>
    readonly toUserId: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    wallet: 'wallet',
    lastSeen: 'lastSeen',
    name: 'name',
    bio: 'bio',
    image: 'image',
    tokens: 'tokens',
    referral: 'referral',
    onboarded: 'onboarded',
    visitedX: 'visitedX',
    visitedInstagram: 'visitedInstagram',
    visitedTiktok: 'visitedTiktok',
    visitedYoutube: 'visitedYoutube',
    visitedTelegram: 'visitedTelegram',
    lastDailyClaim: 'lastDailyClaim'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserLikesScalarFieldEnum: {
    fromId: 'fromId',
    toId: 'toId'
  };

  export type UserLikesScalarFieldEnum = (typeof UserLikesScalarFieldEnum)[keyof typeof UserLikesScalarFieldEnum]


  export const UserDislikesScalarFieldEnum: {
    fromId: 'fromId',
    toId: 'toId'
  };

  export type UserDislikesScalarFieldEnum = (typeof UserDislikesScalarFieldEnum)[keyof typeof UserDislikesScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    content: 'content'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    wallet?: StringFilter<"User"> | string
    lastSeen?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    tokens?: IntFilter<"User"> | number
    referral?: StringNullableFilter<"User"> | string | null
    onboarded?: BoolFilter<"User"> | boolean
    visitedX?: BoolFilter<"User"> | boolean
    visitedInstagram?: BoolFilter<"User"> | boolean
    visitedTiktok?: BoolFilter<"User"> | boolean
    visitedYoutube?: BoolFilter<"User"> | boolean
    visitedTelegram?: BoolFilter<"User"> | boolean
    lastDailyClaim?: DateTimeNullableFilter<"User"> | Date | string | null
    likes?: UserLikesListRelationFilter
    likedBy?: UserLikesListRelationFilter
    dislikes?: UserDislikesListRelationFilter
    dislikedBy?: UserDislikesListRelationFilter
    messagesSent?: MessageListRelationFilter
    messagesReceived?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    wallet?: SortOrder
    lastSeen?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    tokens?: SortOrder
    referral?: SortOrderInput | SortOrder
    onboarded?: SortOrder
    visitedX?: SortOrder
    visitedInstagram?: SortOrder
    visitedTiktok?: SortOrder
    visitedYoutube?: SortOrder
    visitedTelegram?: SortOrder
    lastDailyClaim?: SortOrderInput | SortOrder
    likes?: UserLikesOrderByRelationAggregateInput
    likedBy?: UserLikesOrderByRelationAggregateInput
    dislikes?: UserDislikesOrderByRelationAggregateInput
    dislikedBy?: UserDislikesOrderByRelationAggregateInput
    messagesSent?: MessageOrderByRelationAggregateInput
    messagesReceived?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    wallet?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastSeen?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    tokens?: IntFilter<"User"> | number
    referral?: StringNullableFilter<"User"> | string | null
    onboarded?: BoolFilter<"User"> | boolean
    visitedX?: BoolFilter<"User"> | boolean
    visitedInstagram?: BoolFilter<"User"> | boolean
    visitedTiktok?: BoolFilter<"User"> | boolean
    visitedYoutube?: BoolFilter<"User"> | boolean
    visitedTelegram?: BoolFilter<"User"> | boolean
    lastDailyClaim?: DateTimeNullableFilter<"User"> | Date | string | null
    likes?: UserLikesListRelationFilter
    likedBy?: UserLikesListRelationFilter
    dislikes?: UserDislikesListRelationFilter
    dislikedBy?: UserDislikesListRelationFilter
    messagesSent?: MessageListRelationFilter
    messagesReceived?: MessageListRelationFilter
  }, "id" | "wallet">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    wallet?: SortOrder
    lastSeen?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    tokens?: SortOrder
    referral?: SortOrderInput | SortOrder
    onboarded?: SortOrder
    visitedX?: SortOrder
    visitedInstagram?: SortOrder
    visitedTiktok?: SortOrder
    visitedYoutube?: SortOrder
    visitedTelegram?: SortOrder
    lastDailyClaim?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    wallet?: StringWithAggregatesFilter<"User"> | string
    lastSeen?: DateTimeWithAggregatesFilter<"User"> | Date | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    tokens?: IntWithAggregatesFilter<"User"> | number
    referral?: StringNullableWithAggregatesFilter<"User"> | string | null
    onboarded?: BoolWithAggregatesFilter<"User"> | boolean
    visitedX?: BoolWithAggregatesFilter<"User"> | boolean
    visitedInstagram?: BoolWithAggregatesFilter<"User"> | boolean
    visitedTiktok?: BoolWithAggregatesFilter<"User"> | boolean
    visitedYoutube?: BoolWithAggregatesFilter<"User"> | boolean
    visitedTelegram?: BoolWithAggregatesFilter<"User"> | boolean
    lastDailyClaim?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserLikesWhereInput = {
    AND?: UserLikesWhereInput | UserLikesWhereInput[]
    OR?: UserLikesWhereInput[]
    NOT?: UserLikesWhereInput | UserLikesWhereInput[]
    fromId?: StringFilter<"UserLikes"> | string
    toId?: StringFilter<"UserLikes"> | string
    from?: XOR<UserScalarRelationFilter, UserWhereInput>
    to?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserLikesOrderByWithRelationInput = {
    fromId?: SortOrder
    toId?: SortOrder
    from?: UserOrderByWithRelationInput
    to?: UserOrderByWithRelationInput
  }

  export type UserLikesWhereUniqueInput = Prisma.AtLeast<{
    fromId_toId?: UserLikesFromIdToIdCompoundUniqueInput
    AND?: UserLikesWhereInput | UserLikesWhereInput[]
    OR?: UserLikesWhereInput[]
    NOT?: UserLikesWhereInput | UserLikesWhereInput[]
    fromId?: StringFilter<"UserLikes"> | string
    toId?: StringFilter<"UserLikes"> | string
    from?: XOR<UserScalarRelationFilter, UserWhereInput>
    to?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "fromId_toId" | "fromId_toId">

  export type UserLikesOrderByWithAggregationInput = {
    fromId?: SortOrder
    toId?: SortOrder
    _count?: UserLikesCountOrderByAggregateInput
    _max?: UserLikesMaxOrderByAggregateInput
    _min?: UserLikesMinOrderByAggregateInput
  }

  export type UserLikesScalarWhereWithAggregatesInput = {
    AND?: UserLikesScalarWhereWithAggregatesInput | UserLikesScalarWhereWithAggregatesInput[]
    OR?: UserLikesScalarWhereWithAggregatesInput[]
    NOT?: UserLikesScalarWhereWithAggregatesInput | UserLikesScalarWhereWithAggregatesInput[]
    fromId?: StringWithAggregatesFilter<"UserLikes"> | string
    toId?: StringWithAggregatesFilter<"UserLikes"> | string
  }

  export type UserDislikesWhereInput = {
    AND?: UserDislikesWhereInput | UserDislikesWhereInput[]
    OR?: UserDislikesWhereInput[]
    NOT?: UserDislikesWhereInput | UserDislikesWhereInput[]
    fromId?: StringFilter<"UserDislikes"> | string
    toId?: StringFilter<"UserDislikes"> | string
    from?: XOR<UserScalarRelationFilter, UserWhereInput>
    to?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDislikesOrderByWithRelationInput = {
    fromId?: SortOrder
    toId?: SortOrder
    from?: UserOrderByWithRelationInput
    to?: UserOrderByWithRelationInput
  }

  export type UserDislikesWhereUniqueInput = Prisma.AtLeast<{
    fromId_toId?: UserDislikesFromIdToIdCompoundUniqueInput
    AND?: UserDislikesWhereInput | UserDislikesWhereInput[]
    OR?: UserDislikesWhereInput[]
    NOT?: UserDislikesWhereInput | UserDislikesWhereInput[]
    fromId?: StringFilter<"UserDislikes"> | string
    toId?: StringFilter<"UserDislikes"> | string
    from?: XOR<UserScalarRelationFilter, UserWhereInput>
    to?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "fromId_toId" | "fromId_toId">

  export type UserDislikesOrderByWithAggregationInput = {
    fromId?: SortOrder
    toId?: SortOrder
    _count?: UserDislikesCountOrderByAggregateInput
    _max?: UserDislikesMaxOrderByAggregateInput
    _min?: UserDislikesMinOrderByAggregateInput
  }

  export type UserDislikesScalarWhereWithAggregatesInput = {
    AND?: UserDislikesScalarWhereWithAggregatesInput | UserDislikesScalarWhereWithAggregatesInput[]
    OR?: UserDislikesScalarWhereWithAggregatesInput[]
    NOT?: UserDislikesScalarWhereWithAggregatesInput | UserDislikesScalarWhereWithAggregatesInput[]
    fromId?: StringWithAggregatesFilter<"UserDislikes"> | string
    toId?: StringWithAggregatesFilter<"UserDislikes"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    fromUserId?: StringFilter<"Message"> | string
    toUserId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    createdAt?: DateTimeFilter<"Message"> | Date | string
    fromUserId?: StringFilter<"Message"> | string
    toUserId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    fromUserId?: StringWithAggregatesFilter<"Message"> | string
    toUserId?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesCreateNestedManyWithoutFromInput
    likedBy?: UserLikesCreateNestedManyWithoutToInput
    dislikes?: UserDislikesCreateNestedManyWithoutFromInput
    dislikedBy?: UserDislikesCreateNestedManyWithoutToInput
    messagesSent?: MessageCreateNestedManyWithoutFromUserInput
    messagesReceived?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesUncheckedCreateNestedManyWithoutFromInput
    likedBy?: UserLikesUncheckedCreateNestedManyWithoutToInput
    dislikes?: UserDislikesUncheckedCreateNestedManyWithoutFromInput
    dislikedBy?: UserDislikesUncheckedCreateNestedManyWithoutToInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUpdateManyWithoutFromNestedInput
    likedBy?: UserLikesUpdateManyWithoutToNestedInput
    dislikes?: UserDislikesUpdateManyWithoutFromNestedInput
    dislikedBy?: UserDislikesUpdateManyWithoutToNestedInput
    messagesSent?: MessageUpdateManyWithoutFromUserNestedInput
    messagesReceived?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUncheckedUpdateManyWithoutFromNestedInput
    likedBy?: UserLikesUncheckedUpdateManyWithoutToNestedInput
    dislikes?: UserDislikesUncheckedUpdateManyWithoutFromNestedInput
    dislikedBy?: UserDislikesUncheckedUpdateManyWithoutToNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLikesCreateInput = {
    from: UserCreateNestedOneWithoutLikesInput
    to: UserCreateNestedOneWithoutLikedByInput
  }

  export type UserLikesUncheckedCreateInput = {
    fromId: string
    toId: string
  }

  export type UserLikesUpdateInput = {
    from?: UserUpdateOneRequiredWithoutLikesNestedInput
    to?: UserUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type UserLikesUncheckedUpdateInput = {
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLikesCreateManyInput = {
    fromId: string
    toId: string
  }

  export type UserLikesUpdateManyMutationInput = {

  }

  export type UserLikesUncheckedUpdateManyInput = {
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type UserDislikesCreateInput = {
    from: UserCreateNestedOneWithoutDislikesInput
    to: UserCreateNestedOneWithoutDislikedByInput
  }

  export type UserDislikesUncheckedCreateInput = {
    fromId: string
    toId: string
  }

  export type UserDislikesUpdateInput = {
    from?: UserUpdateOneRequiredWithoutDislikesNestedInput
    to?: UserUpdateOneRequiredWithoutDislikedByNestedInput
  }

  export type UserDislikesUncheckedUpdateInput = {
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type UserDislikesCreateManyInput = {
    fromId: string
    toId: string
  }

  export type UserDislikesUpdateManyMutationInput = {

  }

  export type UserDislikesUncheckedUpdateManyInput = {
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    createdAt?: Date | string
    content: string
    fromUser: UserCreateNestedOneWithoutMessagesSentInput
    toUser: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    fromUserId: string
    toUserId: string
    content: string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    fromUser?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    toUser?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    fromUserId: string
    toUserId: string
    content: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserLikesListRelationFilter = {
    every?: UserLikesWhereInput
    some?: UserLikesWhereInput
    none?: UserLikesWhereInput
  }

  export type UserDislikesListRelationFilter = {
    every?: UserDislikesWhereInput
    some?: UserDislikesWhereInput
    none?: UserDislikesWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserLikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDislikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    wallet?: SortOrder
    lastSeen?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    tokens?: SortOrder
    referral?: SortOrder
    onboarded?: SortOrder
    visitedX?: SortOrder
    visitedInstagram?: SortOrder
    visitedTiktok?: SortOrder
    visitedYoutube?: SortOrder
    visitedTelegram?: SortOrder
    lastDailyClaim?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    wallet?: SortOrder
    lastSeen?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    tokens?: SortOrder
    referral?: SortOrder
    onboarded?: SortOrder
    visitedX?: SortOrder
    visitedInstagram?: SortOrder
    visitedTiktok?: SortOrder
    visitedYoutube?: SortOrder
    visitedTelegram?: SortOrder
    lastDailyClaim?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    wallet?: SortOrder
    lastSeen?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    tokens?: SortOrder
    referral?: SortOrder
    onboarded?: SortOrder
    visitedX?: SortOrder
    visitedInstagram?: SortOrder
    visitedTiktok?: SortOrder
    visitedYoutube?: SortOrder
    visitedTelegram?: SortOrder
    lastDailyClaim?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserLikesFromIdToIdCompoundUniqueInput = {
    fromId: string
    toId: string
  }

  export type UserLikesCountOrderByAggregateInput = {
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type UserLikesMaxOrderByAggregateInput = {
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type UserLikesMinOrderByAggregateInput = {
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type UserDislikesFromIdToIdCompoundUniqueInput = {
    fromId: string
    toId: string
  }

  export type UserDislikesCountOrderByAggregateInput = {
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type UserDislikesMaxOrderByAggregateInput = {
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type UserDislikesMinOrderByAggregateInput = {
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
  }

  export type UserLikesCreateNestedManyWithoutFromInput = {
    create?: XOR<UserLikesCreateWithoutFromInput, UserLikesUncheckedCreateWithoutFromInput> | UserLikesCreateWithoutFromInput[] | UserLikesUncheckedCreateWithoutFromInput[]
    connectOrCreate?: UserLikesCreateOrConnectWithoutFromInput | UserLikesCreateOrConnectWithoutFromInput[]
    createMany?: UserLikesCreateManyFromInputEnvelope
    connect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
  }

  export type UserLikesCreateNestedManyWithoutToInput = {
    create?: XOR<UserLikesCreateWithoutToInput, UserLikesUncheckedCreateWithoutToInput> | UserLikesCreateWithoutToInput[] | UserLikesUncheckedCreateWithoutToInput[]
    connectOrCreate?: UserLikesCreateOrConnectWithoutToInput | UserLikesCreateOrConnectWithoutToInput[]
    createMany?: UserLikesCreateManyToInputEnvelope
    connect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
  }

  export type UserDislikesCreateNestedManyWithoutFromInput = {
    create?: XOR<UserDislikesCreateWithoutFromInput, UserDislikesUncheckedCreateWithoutFromInput> | UserDislikesCreateWithoutFromInput[] | UserDislikesUncheckedCreateWithoutFromInput[]
    connectOrCreate?: UserDislikesCreateOrConnectWithoutFromInput | UserDislikesCreateOrConnectWithoutFromInput[]
    createMany?: UserDislikesCreateManyFromInputEnvelope
    connect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
  }

  export type UserDislikesCreateNestedManyWithoutToInput = {
    create?: XOR<UserDislikesCreateWithoutToInput, UserDislikesUncheckedCreateWithoutToInput> | UserDislikesCreateWithoutToInput[] | UserDislikesUncheckedCreateWithoutToInput[]
    connectOrCreate?: UserDislikesCreateOrConnectWithoutToInput | UserDislikesCreateOrConnectWithoutToInput[]
    createMany?: UserDislikesCreateManyToInputEnvelope
    connect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutFromUserInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutToUserInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserLikesUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<UserLikesCreateWithoutFromInput, UserLikesUncheckedCreateWithoutFromInput> | UserLikesCreateWithoutFromInput[] | UserLikesUncheckedCreateWithoutFromInput[]
    connectOrCreate?: UserLikesCreateOrConnectWithoutFromInput | UserLikesCreateOrConnectWithoutFromInput[]
    createMany?: UserLikesCreateManyFromInputEnvelope
    connect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
  }

  export type UserLikesUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<UserLikesCreateWithoutToInput, UserLikesUncheckedCreateWithoutToInput> | UserLikesCreateWithoutToInput[] | UserLikesUncheckedCreateWithoutToInput[]
    connectOrCreate?: UserLikesCreateOrConnectWithoutToInput | UserLikesCreateOrConnectWithoutToInput[]
    createMany?: UserLikesCreateManyToInputEnvelope
    connect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
  }

  export type UserDislikesUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<UserDislikesCreateWithoutFromInput, UserDislikesUncheckedCreateWithoutFromInput> | UserDislikesCreateWithoutFromInput[] | UserDislikesUncheckedCreateWithoutFromInput[]
    connectOrCreate?: UserDislikesCreateOrConnectWithoutFromInput | UserDislikesCreateOrConnectWithoutFromInput[]
    createMany?: UserDislikesCreateManyFromInputEnvelope
    connect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
  }

  export type UserDislikesUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<UserDislikesCreateWithoutToInput, UserDislikesUncheckedCreateWithoutToInput> | UserDislikesCreateWithoutToInput[] | UserDislikesUncheckedCreateWithoutToInput[]
    connectOrCreate?: UserDislikesCreateOrConnectWithoutToInput | UserDislikesCreateOrConnectWithoutToInput[]
    createMany?: UserDislikesCreateManyToInputEnvelope
    connect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserLikesUpdateManyWithoutFromNestedInput = {
    create?: XOR<UserLikesCreateWithoutFromInput, UserLikesUncheckedCreateWithoutFromInput> | UserLikesCreateWithoutFromInput[] | UserLikesUncheckedCreateWithoutFromInput[]
    connectOrCreate?: UserLikesCreateOrConnectWithoutFromInput | UserLikesCreateOrConnectWithoutFromInput[]
    upsert?: UserLikesUpsertWithWhereUniqueWithoutFromInput | UserLikesUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: UserLikesCreateManyFromInputEnvelope
    set?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    disconnect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    delete?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    connect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    update?: UserLikesUpdateWithWhereUniqueWithoutFromInput | UserLikesUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: UserLikesUpdateManyWithWhereWithoutFromInput | UserLikesUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: UserLikesScalarWhereInput | UserLikesScalarWhereInput[]
  }

  export type UserLikesUpdateManyWithoutToNestedInput = {
    create?: XOR<UserLikesCreateWithoutToInput, UserLikesUncheckedCreateWithoutToInput> | UserLikesCreateWithoutToInput[] | UserLikesUncheckedCreateWithoutToInput[]
    connectOrCreate?: UserLikesCreateOrConnectWithoutToInput | UserLikesCreateOrConnectWithoutToInput[]
    upsert?: UserLikesUpsertWithWhereUniqueWithoutToInput | UserLikesUpsertWithWhereUniqueWithoutToInput[]
    createMany?: UserLikesCreateManyToInputEnvelope
    set?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    disconnect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    delete?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    connect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    update?: UserLikesUpdateWithWhereUniqueWithoutToInput | UserLikesUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: UserLikesUpdateManyWithWhereWithoutToInput | UserLikesUpdateManyWithWhereWithoutToInput[]
    deleteMany?: UserLikesScalarWhereInput | UserLikesScalarWhereInput[]
  }

  export type UserDislikesUpdateManyWithoutFromNestedInput = {
    create?: XOR<UserDislikesCreateWithoutFromInput, UserDislikesUncheckedCreateWithoutFromInput> | UserDislikesCreateWithoutFromInput[] | UserDislikesUncheckedCreateWithoutFromInput[]
    connectOrCreate?: UserDislikesCreateOrConnectWithoutFromInput | UserDislikesCreateOrConnectWithoutFromInput[]
    upsert?: UserDislikesUpsertWithWhereUniqueWithoutFromInput | UserDislikesUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: UserDislikesCreateManyFromInputEnvelope
    set?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    disconnect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    delete?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    connect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    update?: UserDislikesUpdateWithWhereUniqueWithoutFromInput | UserDislikesUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: UserDislikesUpdateManyWithWhereWithoutFromInput | UserDislikesUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: UserDislikesScalarWhereInput | UserDislikesScalarWhereInput[]
  }

  export type UserDislikesUpdateManyWithoutToNestedInput = {
    create?: XOR<UserDislikesCreateWithoutToInput, UserDislikesUncheckedCreateWithoutToInput> | UserDislikesCreateWithoutToInput[] | UserDislikesUncheckedCreateWithoutToInput[]
    connectOrCreate?: UserDislikesCreateOrConnectWithoutToInput | UserDislikesCreateOrConnectWithoutToInput[]
    upsert?: UserDislikesUpsertWithWhereUniqueWithoutToInput | UserDislikesUpsertWithWhereUniqueWithoutToInput[]
    createMany?: UserDislikesCreateManyToInputEnvelope
    set?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    disconnect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    delete?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    connect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    update?: UserDislikesUpdateWithWhereUniqueWithoutToInput | UserDislikesUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: UserDislikesUpdateManyWithWhereWithoutToInput | UserDislikesUpdateManyWithWhereWithoutToInput[]
    deleteMany?: UserDislikesScalarWhereInput | UserDislikesScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFromUserInput | MessageUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFromUserInput | MessageUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFromUserInput | MessageUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutToUserNestedInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutToUserInput | MessageUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutToUserInput | MessageUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutToUserInput | MessageUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserLikesUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<UserLikesCreateWithoutFromInput, UserLikesUncheckedCreateWithoutFromInput> | UserLikesCreateWithoutFromInput[] | UserLikesUncheckedCreateWithoutFromInput[]
    connectOrCreate?: UserLikesCreateOrConnectWithoutFromInput | UserLikesCreateOrConnectWithoutFromInput[]
    upsert?: UserLikesUpsertWithWhereUniqueWithoutFromInput | UserLikesUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: UserLikesCreateManyFromInputEnvelope
    set?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    disconnect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    delete?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    connect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    update?: UserLikesUpdateWithWhereUniqueWithoutFromInput | UserLikesUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: UserLikesUpdateManyWithWhereWithoutFromInput | UserLikesUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: UserLikesScalarWhereInput | UserLikesScalarWhereInput[]
  }

  export type UserLikesUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<UserLikesCreateWithoutToInput, UserLikesUncheckedCreateWithoutToInput> | UserLikesCreateWithoutToInput[] | UserLikesUncheckedCreateWithoutToInput[]
    connectOrCreate?: UserLikesCreateOrConnectWithoutToInput | UserLikesCreateOrConnectWithoutToInput[]
    upsert?: UserLikesUpsertWithWhereUniqueWithoutToInput | UserLikesUpsertWithWhereUniqueWithoutToInput[]
    createMany?: UserLikesCreateManyToInputEnvelope
    set?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    disconnect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    delete?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    connect?: UserLikesWhereUniqueInput | UserLikesWhereUniqueInput[]
    update?: UserLikesUpdateWithWhereUniqueWithoutToInput | UserLikesUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: UserLikesUpdateManyWithWhereWithoutToInput | UserLikesUpdateManyWithWhereWithoutToInput[]
    deleteMany?: UserLikesScalarWhereInput | UserLikesScalarWhereInput[]
  }

  export type UserDislikesUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<UserDislikesCreateWithoutFromInput, UserDislikesUncheckedCreateWithoutFromInput> | UserDislikesCreateWithoutFromInput[] | UserDislikesUncheckedCreateWithoutFromInput[]
    connectOrCreate?: UserDislikesCreateOrConnectWithoutFromInput | UserDislikesCreateOrConnectWithoutFromInput[]
    upsert?: UserDislikesUpsertWithWhereUniqueWithoutFromInput | UserDislikesUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: UserDislikesCreateManyFromInputEnvelope
    set?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    disconnect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    delete?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    connect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    update?: UserDislikesUpdateWithWhereUniqueWithoutFromInput | UserDislikesUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: UserDislikesUpdateManyWithWhereWithoutFromInput | UserDislikesUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: UserDislikesScalarWhereInput | UserDislikesScalarWhereInput[]
  }

  export type UserDislikesUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<UserDislikesCreateWithoutToInput, UserDislikesUncheckedCreateWithoutToInput> | UserDislikesCreateWithoutToInput[] | UserDislikesUncheckedCreateWithoutToInput[]
    connectOrCreate?: UserDislikesCreateOrConnectWithoutToInput | UserDislikesCreateOrConnectWithoutToInput[]
    upsert?: UserDislikesUpsertWithWhereUniqueWithoutToInput | UserDislikesUpsertWithWhereUniqueWithoutToInput[]
    createMany?: UserDislikesCreateManyToInputEnvelope
    set?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    disconnect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    delete?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    connect?: UserDislikesWhereUniqueInput | UserDislikesWhereUniqueInput[]
    update?: UserDislikesUpdateWithWhereUniqueWithoutToInput | UserDislikesUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: UserDislikesUpdateManyWithWhereWithoutToInput | UserDislikesUpdateManyWithWhereWithoutToInput[]
    deleteMany?: UserDislikesScalarWhereInput | UserDislikesScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFromUserInput | MessageUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFromUserInput | MessageUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFromUserInput | MessageUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutToUserInput | MessageUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutToUserInput | MessageUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutToUserInput | MessageUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikedByInput = {
    create?: XOR<UserCreateWithoutLikedByInput, UserUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikedByNestedInput = {
    create?: XOR<UserCreateWithoutLikedByInput, UserUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedByInput
    upsert?: UserUpsertWithoutLikedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedByInput, UserUpdateWithoutLikedByInput>, UserUncheckedUpdateWithoutLikedByInput>
  }

  export type UserCreateNestedOneWithoutDislikesInput = {
    create?: XOR<UserCreateWithoutDislikesInput, UserUncheckedCreateWithoutDislikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDislikesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDislikedByInput = {
    create?: XOR<UserCreateWithoutDislikedByInput, UserUncheckedCreateWithoutDislikedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutDislikedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDislikesNestedInput = {
    create?: XOR<UserCreateWithoutDislikesInput, UserUncheckedCreateWithoutDislikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDislikesInput
    upsert?: UserUpsertWithoutDislikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDislikesInput, UserUpdateWithoutDislikesInput>, UserUncheckedUpdateWithoutDislikesInput>
  }

  export type UserUpdateOneRequiredWithoutDislikedByNestedInput = {
    create?: XOR<UserCreateWithoutDislikedByInput, UserUncheckedCreateWithoutDislikedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutDislikedByInput
    upsert?: UserUpsertWithoutDislikedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDislikedByInput, UserUpdateWithoutDislikedByInput>, UserUncheckedUpdateWithoutDislikedByInput>
  }

  export type UserCreateNestedOneWithoutMessagesSentInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesReceivedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    upsert?: UserUpsertWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesSentInput, UserUpdateWithoutMessagesSentInput>, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    upsert?: UserUpsertWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesReceivedInput, UserUpdateWithoutMessagesReceivedInput>, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserLikesCreateWithoutFromInput = {
    to: UserCreateNestedOneWithoutLikedByInput
  }

  export type UserLikesUncheckedCreateWithoutFromInput = {
    toId: string
  }

  export type UserLikesCreateOrConnectWithoutFromInput = {
    where: UserLikesWhereUniqueInput
    create: XOR<UserLikesCreateWithoutFromInput, UserLikesUncheckedCreateWithoutFromInput>
  }

  export type UserLikesCreateManyFromInputEnvelope = {
    data: UserLikesCreateManyFromInput | UserLikesCreateManyFromInput[]
    skipDuplicates?: boolean
  }

  export type UserLikesCreateWithoutToInput = {
    from: UserCreateNestedOneWithoutLikesInput
  }

  export type UserLikesUncheckedCreateWithoutToInput = {
    fromId: string
  }

  export type UserLikesCreateOrConnectWithoutToInput = {
    where: UserLikesWhereUniqueInput
    create: XOR<UserLikesCreateWithoutToInput, UserLikesUncheckedCreateWithoutToInput>
  }

  export type UserLikesCreateManyToInputEnvelope = {
    data: UserLikesCreateManyToInput | UserLikesCreateManyToInput[]
    skipDuplicates?: boolean
  }

  export type UserDislikesCreateWithoutFromInput = {
    to: UserCreateNestedOneWithoutDislikedByInput
  }

  export type UserDislikesUncheckedCreateWithoutFromInput = {
    toId: string
  }

  export type UserDislikesCreateOrConnectWithoutFromInput = {
    where: UserDislikesWhereUniqueInput
    create: XOR<UserDislikesCreateWithoutFromInput, UserDislikesUncheckedCreateWithoutFromInput>
  }

  export type UserDislikesCreateManyFromInputEnvelope = {
    data: UserDislikesCreateManyFromInput | UserDislikesCreateManyFromInput[]
    skipDuplicates?: boolean
  }

  export type UserDislikesCreateWithoutToInput = {
    from: UserCreateNestedOneWithoutDislikesInput
  }

  export type UserDislikesUncheckedCreateWithoutToInput = {
    fromId: string
  }

  export type UserDislikesCreateOrConnectWithoutToInput = {
    where: UserDislikesWhereUniqueInput
    create: XOR<UserDislikesCreateWithoutToInput, UserDislikesUncheckedCreateWithoutToInput>
  }

  export type UserDislikesCreateManyToInputEnvelope = {
    data: UserDislikesCreateManyToInput | UserDislikesCreateManyToInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutFromUserInput = {
    id?: string
    createdAt?: Date | string
    content: string
    toUser: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type MessageUncheckedCreateWithoutFromUserInput = {
    id?: string
    createdAt?: Date | string
    toUserId: string
    content: string
  }

  export type MessageCreateOrConnectWithoutFromUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput>
  }

  export type MessageCreateManyFromUserInputEnvelope = {
    data: MessageCreateManyFromUserInput | MessageCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutToUserInput = {
    id?: string
    createdAt?: Date | string
    content: string
    fromUser: UserCreateNestedOneWithoutMessagesSentInput
  }

  export type MessageUncheckedCreateWithoutToUserInput = {
    id?: string
    createdAt?: Date | string
    fromUserId: string
    content: string
  }

  export type MessageCreateOrConnectWithoutToUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput>
  }

  export type MessageCreateManyToUserInputEnvelope = {
    data: MessageCreateManyToUserInput | MessageCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLikesUpsertWithWhereUniqueWithoutFromInput = {
    where: UserLikesWhereUniqueInput
    update: XOR<UserLikesUpdateWithoutFromInput, UserLikesUncheckedUpdateWithoutFromInput>
    create: XOR<UserLikesCreateWithoutFromInput, UserLikesUncheckedCreateWithoutFromInput>
  }

  export type UserLikesUpdateWithWhereUniqueWithoutFromInput = {
    where: UserLikesWhereUniqueInput
    data: XOR<UserLikesUpdateWithoutFromInput, UserLikesUncheckedUpdateWithoutFromInput>
  }

  export type UserLikesUpdateManyWithWhereWithoutFromInput = {
    where: UserLikesScalarWhereInput
    data: XOR<UserLikesUpdateManyMutationInput, UserLikesUncheckedUpdateManyWithoutFromInput>
  }

  export type UserLikesScalarWhereInput = {
    AND?: UserLikesScalarWhereInput | UserLikesScalarWhereInput[]
    OR?: UserLikesScalarWhereInput[]
    NOT?: UserLikesScalarWhereInput | UserLikesScalarWhereInput[]
    fromId?: StringFilter<"UserLikes"> | string
    toId?: StringFilter<"UserLikes"> | string
  }

  export type UserLikesUpsertWithWhereUniqueWithoutToInput = {
    where: UserLikesWhereUniqueInput
    update: XOR<UserLikesUpdateWithoutToInput, UserLikesUncheckedUpdateWithoutToInput>
    create: XOR<UserLikesCreateWithoutToInput, UserLikesUncheckedCreateWithoutToInput>
  }

  export type UserLikesUpdateWithWhereUniqueWithoutToInput = {
    where: UserLikesWhereUniqueInput
    data: XOR<UserLikesUpdateWithoutToInput, UserLikesUncheckedUpdateWithoutToInput>
  }

  export type UserLikesUpdateManyWithWhereWithoutToInput = {
    where: UserLikesScalarWhereInput
    data: XOR<UserLikesUpdateManyMutationInput, UserLikesUncheckedUpdateManyWithoutToInput>
  }

  export type UserDislikesUpsertWithWhereUniqueWithoutFromInput = {
    where: UserDislikesWhereUniqueInput
    update: XOR<UserDislikesUpdateWithoutFromInput, UserDislikesUncheckedUpdateWithoutFromInput>
    create: XOR<UserDislikesCreateWithoutFromInput, UserDislikesUncheckedCreateWithoutFromInput>
  }

  export type UserDislikesUpdateWithWhereUniqueWithoutFromInput = {
    where: UserDislikesWhereUniqueInput
    data: XOR<UserDislikesUpdateWithoutFromInput, UserDislikesUncheckedUpdateWithoutFromInput>
  }

  export type UserDislikesUpdateManyWithWhereWithoutFromInput = {
    where: UserDislikesScalarWhereInput
    data: XOR<UserDislikesUpdateManyMutationInput, UserDislikesUncheckedUpdateManyWithoutFromInput>
  }

  export type UserDislikesScalarWhereInput = {
    AND?: UserDislikesScalarWhereInput | UserDislikesScalarWhereInput[]
    OR?: UserDislikesScalarWhereInput[]
    NOT?: UserDislikesScalarWhereInput | UserDislikesScalarWhereInput[]
    fromId?: StringFilter<"UserDislikes"> | string
    toId?: StringFilter<"UserDislikes"> | string
  }

  export type UserDislikesUpsertWithWhereUniqueWithoutToInput = {
    where: UserDislikesWhereUniqueInput
    update: XOR<UserDislikesUpdateWithoutToInput, UserDislikesUncheckedUpdateWithoutToInput>
    create: XOR<UserDislikesCreateWithoutToInput, UserDislikesUncheckedCreateWithoutToInput>
  }

  export type UserDislikesUpdateWithWhereUniqueWithoutToInput = {
    where: UserDislikesWhereUniqueInput
    data: XOR<UserDislikesUpdateWithoutToInput, UserDislikesUncheckedUpdateWithoutToInput>
  }

  export type UserDislikesUpdateManyWithWhereWithoutToInput = {
    where: UserDislikesScalarWhereInput
    data: XOR<UserDislikesUpdateManyMutationInput, UserDislikesUncheckedUpdateManyWithoutToInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutFromUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutFromUserInput, MessageUncheckedUpdateWithoutFromUserInput>
    create: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutFromUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutFromUserInput, MessageUncheckedUpdateWithoutFromUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutFromUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutFromUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    fromUserId?: StringFilter<"Message"> | string
    toUserId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
  }

  export type MessageUpsertWithWhereUniqueWithoutToUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutToUserInput, MessageUncheckedUpdateWithoutToUserInput>
    create: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutToUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutToUserInput, MessageUncheckedUpdateWithoutToUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutToUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutToUserInput>
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likedBy?: UserLikesCreateNestedManyWithoutToInput
    dislikes?: UserDislikesCreateNestedManyWithoutFromInput
    dislikedBy?: UserDislikesCreateNestedManyWithoutToInput
    messagesSent?: MessageCreateNestedManyWithoutFromUserInput
    messagesReceived?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likedBy?: UserLikesUncheckedCreateNestedManyWithoutToInput
    dislikes?: UserDislikesUncheckedCreateNestedManyWithoutFromInput
    dislikedBy?: UserDislikesUncheckedCreateNestedManyWithoutToInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikedByInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesCreateNestedManyWithoutFromInput
    dislikes?: UserDislikesCreateNestedManyWithoutFromInput
    dislikedBy?: UserDislikesCreateNestedManyWithoutToInput
    messagesSent?: MessageCreateNestedManyWithoutFromUserInput
    messagesReceived?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutLikedByInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesUncheckedCreateNestedManyWithoutFromInput
    dislikes?: UserDislikesUncheckedCreateNestedManyWithoutFromInput
    dislikedBy?: UserDislikesUncheckedCreateNestedManyWithoutToInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutLikedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedByInput, UserUncheckedCreateWithoutLikedByInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likedBy?: UserLikesUpdateManyWithoutToNestedInput
    dislikes?: UserDislikesUpdateManyWithoutFromNestedInput
    dislikedBy?: UserDislikesUpdateManyWithoutToNestedInput
    messagesSent?: MessageUpdateManyWithoutFromUserNestedInput
    messagesReceived?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likedBy?: UserLikesUncheckedUpdateManyWithoutToNestedInput
    dislikes?: UserDislikesUncheckedUpdateManyWithoutFromNestedInput
    dislikedBy?: UserDislikesUncheckedUpdateManyWithoutToNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutLikedByInput = {
    update: XOR<UserUpdateWithoutLikedByInput, UserUncheckedUpdateWithoutLikedByInput>
    create: XOR<UserCreateWithoutLikedByInput, UserUncheckedCreateWithoutLikedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedByInput, UserUncheckedUpdateWithoutLikedByInput>
  }

  export type UserUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUpdateManyWithoutFromNestedInput
    dislikes?: UserDislikesUpdateManyWithoutFromNestedInput
    dislikedBy?: UserDislikesUpdateManyWithoutToNestedInput
    messagesSent?: MessageUpdateManyWithoutFromUserNestedInput
    messagesReceived?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUncheckedUpdateManyWithoutFromNestedInput
    dislikes?: UserDislikesUncheckedUpdateManyWithoutFromNestedInput
    dislikedBy?: UserDislikesUncheckedUpdateManyWithoutToNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateWithoutDislikesInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesCreateNestedManyWithoutFromInput
    likedBy?: UserLikesCreateNestedManyWithoutToInput
    dislikedBy?: UserDislikesCreateNestedManyWithoutToInput
    messagesSent?: MessageCreateNestedManyWithoutFromUserInput
    messagesReceived?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutDislikesInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesUncheckedCreateNestedManyWithoutFromInput
    likedBy?: UserLikesUncheckedCreateNestedManyWithoutToInput
    dislikedBy?: UserDislikesUncheckedCreateNestedManyWithoutToInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutDislikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDislikesInput, UserUncheckedCreateWithoutDislikesInput>
  }

  export type UserCreateWithoutDislikedByInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesCreateNestedManyWithoutFromInput
    likedBy?: UserLikesCreateNestedManyWithoutToInput
    dislikes?: UserDislikesCreateNestedManyWithoutFromInput
    messagesSent?: MessageCreateNestedManyWithoutFromUserInput
    messagesReceived?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutDislikedByInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesUncheckedCreateNestedManyWithoutFromInput
    likedBy?: UserLikesUncheckedCreateNestedManyWithoutToInput
    dislikes?: UserDislikesUncheckedCreateNestedManyWithoutFromInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutDislikedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDislikedByInput, UserUncheckedCreateWithoutDislikedByInput>
  }

  export type UserUpsertWithoutDislikesInput = {
    update: XOR<UserUpdateWithoutDislikesInput, UserUncheckedUpdateWithoutDislikesInput>
    create: XOR<UserCreateWithoutDislikesInput, UserUncheckedCreateWithoutDislikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDislikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDislikesInput, UserUncheckedUpdateWithoutDislikesInput>
  }

  export type UserUpdateWithoutDislikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUpdateManyWithoutFromNestedInput
    likedBy?: UserLikesUpdateManyWithoutToNestedInput
    dislikedBy?: UserDislikesUpdateManyWithoutToNestedInput
    messagesSent?: MessageUpdateManyWithoutFromUserNestedInput
    messagesReceived?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDislikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUncheckedUpdateManyWithoutFromNestedInput
    likedBy?: UserLikesUncheckedUpdateManyWithoutToNestedInput
    dislikedBy?: UserDislikesUncheckedUpdateManyWithoutToNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutDislikedByInput = {
    update: XOR<UserUpdateWithoutDislikedByInput, UserUncheckedUpdateWithoutDislikedByInput>
    create: XOR<UserCreateWithoutDislikedByInput, UserUncheckedCreateWithoutDislikedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDislikedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDislikedByInput, UserUncheckedUpdateWithoutDislikedByInput>
  }

  export type UserUpdateWithoutDislikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUpdateManyWithoutFromNestedInput
    likedBy?: UserLikesUpdateManyWithoutToNestedInput
    dislikes?: UserDislikesUpdateManyWithoutFromNestedInput
    messagesSent?: MessageUpdateManyWithoutFromUserNestedInput
    messagesReceived?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDislikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUncheckedUpdateManyWithoutFromNestedInput
    likedBy?: UserLikesUncheckedUpdateManyWithoutToNestedInput
    dislikes?: UserDislikesUncheckedUpdateManyWithoutFromNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateWithoutMessagesSentInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesCreateNestedManyWithoutFromInput
    likedBy?: UserLikesCreateNestedManyWithoutToInput
    dislikes?: UserDislikesCreateNestedManyWithoutFromInput
    dislikedBy?: UserDislikesCreateNestedManyWithoutToInput
    messagesReceived?: MessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutMessagesSentInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesUncheckedCreateNestedManyWithoutFromInput
    likedBy?: UserLikesUncheckedCreateNestedManyWithoutToInput
    dislikes?: UserDislikesUncheckedCreateNestedManyWithoutFromInput
    dislikedBy?: UserDislikesUncheckedCreateNestedManyWithoutToInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type UserCreateWithoutMessagesReceivedInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesCreateNestedManyWithoutFromInput
    likedBy?: UserLikesCreateNestedManyWithoutToInput
    dislikes?: UserDislikesCreateNestedManyWithoutFromInput
    dislikedBy?: UserDislikesCreateNestedManyWithoutToInput
    messagesSent?: MessageCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutMessagesReceivedInput = {
    id?: string
    createdAt?: Date | string
    wallet: string
    lastSeen: Date | string
    name?: string | null
    bio?: string | null
    image?: string | null
    tokens?: number
    referral?: string | null
    onboarded?: boolean
    visitedX?: boolean
    visitedInstagram?: boolean
    visitedTiktok?: boolean
    visitedYoutube?: boolean
    visitedTelegram?: boolean
    lastDailyClaim?: Date | string | null
    likes?: UserLikesUncheckedCreateNestedManyWithoutFromInput
    likedBy?: UserLikesUncheckedCreateNestedManyWithoutToInput
    dislikes?: UserDislikesUncheckedCreateNestedManyWithoutFromInput
    dislikedBy?: UserDislikesUncheckedCreateNestedManyWithoutToInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutMessagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
  }

  export type UserUpsertWithoutMessagesSentInput = {
    update: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateWithoutMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUpdateManyWithoutFromNestedInput
    likedBy?: UserLikesUpdateManyWithoutToNestedInput
    dislikes?: UserDislikesUpdateManyWithoutFromNestedInput
    dislikedBy?: UserDislikesUpdateManyWithoutToNestedInput
    messagesReceived?: MessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUncheckedUpdateManyWithoutFromNestedInput
    likedBy?: UserLikesUncheckedUpdateManyWithoutToNestedInput
    dislikes?: UserDislikesUncheckedUpdateManyWithoutFromNestedInput
    dislikedBy?: UserDislikesUncheckedUpdateManyWithoutToNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutMessagesReceivedInput = {
    update: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type UserUpdateWithoutMessagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUpdateManyWithoutFromNestedInput
    likedBy?: UserLikesUpdateManyWithoutToNestedInput
    dislikes?: UserDislikesUpdateManyWithoutFromNestedInput
    dislikedBy?: UserDislikesUpdateManyWithoutToNestedInput
    messagesSent?: MessageUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: IntFieldUpdateOperationsInput | number
    referral?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    visitedX?: BoolFieldUpdateOperationsInput | boolean
    visitedInstagram?: BoolFieldUpdateOperationsInput | boolean
    visitedTiktok?: BoolFieldUpdateOperationsInput | boolean
    visitedYoutube?: BoolFieldUpdateOperationsInput | boolean
    visitedTelegram?: BoolFieldUpdateOperationsInput | boolean
    lastDailyClaim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: UserLikesUncheckedUpdateManyWithoutFromNestedInput
    likedBy?: UserLikesUncheckedUpdateManyWithoutToNestedInput
    dislikes?: UserDislikesUncheckedUpdateManyWithoutFromNestedInput
    dislikedBy?: UserDislikesUncheckedUpdateManyWithoutToNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type UserLikesCreateManyFromInput = {
    toId: string
  }

  export type UserLikesCreateManyToInput = {
    fromId: string
  }

  export type UserDislikesCreateManyFromInput = {
    toId: string
  }

  export type UserDislikesCreateManyToInput = {
    fromId: string
  }

  export type MessageCreateManyFromUserInput = {
    id?: string
    createdAt?: Date | string
    toUserId: string
    content: string
  }

  export type MessageCreateManyToUserInput = {
    id?: string
    createdAt?: Date | string
    fromUserId: string
    content: string
  }

  export type UserLikesUpdateWithoutFromInput = {
    to?: UserUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type UserLikesUncheckedUpdateWithoutFromInput = {
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLikesUncheckedUpdateManyWithoutFromInput = {
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLikesUpdateWithoutToInput = {
    from?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type UserLikesUncheckedUpdateWithoutToInput = {
    fromId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLikesUncheckedUpdateManyWithoutToInput = {
    fromId?: StringFieldUpdateOperationsInput | string
  }

  export type UserDislikesUpdateWithoutFromInput = {
    to?: UserUpdateOneRequiredWithoutDislikedByNestedInput
  }

  export type UserDislikesUncheckedUpdateWithoutFromInput = {
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type UserDislikesUncheckedUpdateManyWithoutFromInput = {
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type UserDislikesUpdateWithoutToInput = {
    from?: UserUpdateOneRequiredWithoutDislikesNestedInput
  }

  export type UserDislikesUncheckedUpdateWithoutToInput = {
    fromId?: StringFieldUpdateOperationsInput | string
  }

  export type UserDislikesUncheckedUpdateManyWithoutToInput = {
    fromId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    toUser?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type MessageUncheckedUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    fromUser?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
  }

  export type MessageUncheckedUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}