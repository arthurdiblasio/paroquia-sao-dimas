
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model NewsCategory
 * 
 */
export type NewsCategory = $Result.DefaultSelection<Prisma.$NewsCategoryPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model Church
 * 
 */
export type Church = $Result.DefaultSelection<Prisma.$ChurchPayload>
/**
 * Model MassSchedule
 * 
 */
export type MassSchedule = $Result.DefaultSelection<Prisma.$MassSchedulePayload>
/**
 * Model Ministry
 * 
 */
export type Ministry = $Result.DefaultSelection<Prisma.$MinistryPayload>
/**
 * Model FinancialReport
 * 
 */
export type FinancialReport = $Result.DefaultSelection<Prisma.$FinancialReportPayload>
/**
 * Model Homily
 * 
 */
export type Homily = $Result.DefaultSelection<Prisma.$HomilyPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model AppointmentDocument
 * 
 */
export type AppointmentDocument = $Result.DefaultSelection<Prisma.$AppointmentDocumentPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model NewsMedia
 * 
 */
export type NewsMedia = $Result.DefaultSelection<Prisma.$NewsMediaPayload>
/**
 * Model MinistryMedia
 * 
 */
export type MinistryMedia = $Result.DefaultSelection<Prisma.$MinistryMediaPayload>
/**
 * Model FinancialReportMedia
 * 
 */
export type FinancialReportMedia = $Result.DefaultSelection<Prisma.$FinancialReportMediaPayload>
/**
 * Model HomilyMedia
 * 
 */
export type HomilyMedia = $Result.DefaultSelection<Prisma.$HomilyMediaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  COMUNICACAO: 'COMUNICACAO'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AppointmentType: {
  BATISMO: 'BATISMO',
  CASAMENTO: 'CASAMENTO'
};

export type AppointmentType = (typeof AppointmentType)[keyof typeof AppointmentType]


export const AppointmentStatus: {
  PENDING: 'PENDING',
  IN_REVIEW: 'IN_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const MediaType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  FILE: 'FILE'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AppointmentType = $Enums.AppointmentType

export const AppointmentType: typeof $Enums.AppointmentType

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.newsCategory`: Exposes CRUD operations for the **NewsCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsCategories
    * const newsCategories = await prisma.newsCategory.findMany()
    * ```
    */
  get newsCategory(): Prisma.NewsCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.church`: Exposes CRUD operations for the **Church** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Churches
    * const churches = await prisma.church.findMany()
    * ```
    */
  get church(): Prisma.ChurchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.massSchedule`: Exposes CRUD operations for the **MassSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MassSchedules
    * const massSchedules = await prisma.massSchedule.findMany()
    * ```
    */
  get massSchedule(): Prisma.MassScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ministry`: Exposes CRUD operations for the **Ministry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ministries
    * const ministries = await prisma.ministry.findMany()
    * ```
    */
  get ministry(): Prisma.MinistryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialReport`: Exposes CRUD operations for the **FinancialReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialReports
    * const financialReports = await prisma.financialReport.findMany()
    * ```
    */
  get financialReport(): Prisma.FinancialReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homily`: Exposes CRUD operations for the **Homily** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Homilies
    * const homilies = await prisma.homily.findMany()
    * ```
    */
  get homily(): Prisma.HomilyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointmentDocument`: Exposes CRUD operations for the **AppointmentDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointmentDocuments
    * const appointmentDocuments = await prisma.appointmentDocument.findMany()
    * ```
    */
  get appointmentDocument(): Prisma.AppointmentDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsMedia`: Exposes CRUD operations for the **NewsMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsMedias
    * const newsMedias = await prisma.newsMedia.findMany()
    * ```
    */
  get newsMedia(): Prisma.NewsMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ministryMedia`: Exposes CRUD operations for the **MinistryMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MinistryMedias
    * const ministryMedias = await prisma.ministryMedia.findMany()
    * ```
    */
  get ministryMedia(): Prisma.MinistryMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialReportMedia`: Exposes CRUD operations for the **FinancialReportMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialReportMedias
    * const financialReportMedias = await prisma.financialReportMedia.findMany()
    * ```
    */
  get financialReportMedia(): Prisma.FinancialReportMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homilyMedia`: Exposes CRUD operations for the **HomilyMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomilyMedias
    * const homilyMedias = await prisma.homilyMedia.findMany()
    * ```
    */
  get homilyMedia(): Prisma.HomilyMediaDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    NewsCategory: 'NewsCategory',
    News: 'News',
    Church: 'Church',
    MassSchedule: 'MassSchedule',
    Ministry: 'Ministry',
    FinancialReport: 'FinancialReport',
    Homily: 'Homily',
    Appointment: 'Appointment',
    AppointmentDocument: 'AppointmentDocument',
    Media: 'Media',
    NewsMedia: 'NewsMedia',
    MinistryMedia: 'MinistryMedia',
    FinancialReportMedia: 'FinancialReportMedia',
    HomilyMedia: 'HomilyMedia'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "newsCategory" | "news" | "church" | "massSchedule" | "ministry" | "financialReport" | "homily" | "appointment" | "appointmentDocument" | "media" | "newsMedia" | "ministryMedia" | "financialReportMedia" | "homilyMedia"
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
      NewsCategory: {
        payload: Prisma.$NewsCategoryPayload<ExtArgs>
        fields: Prisma.NewsCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          findFirst: {
            args: Prisma.NewsCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          findMany: {
            args: Prisma.NewsCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>[]
          }
          create: {
            args: Prisma.NewsCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          createMany: {
            args: Prisma.NewsCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>[]
          }
          delete: {
            args: Prisma.NewsCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          update: {
            args: Prisma.NewsCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          deleteMany: {
            args: Prisma.NewsCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>[]
          }
          upsert: {
            args: Prisma.NewsCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          aggregate: {
            args: Prisma.NewsCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsCategory>
          }
          groupBy: {
            args: Prisma.NewsCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCategoryCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      Church: {
        payload: Prisma.$ChurchPayload<ExtArgs>
        fields: Prisma.ChurchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChurchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChurchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          findFirst: {
            args: Prisma.ChurchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChurchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          findMany: {
            args: Prisma.ChurchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>[]
          }
          create: {
            args: Prisma.ChurchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          createMany: {
            args: Prisma.ChurchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChurchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>[]
          }
          delete: {
            args: Prisma.ChurchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          update: {
            args: Prisma.ChurchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          deleteMany: {
            args: Prisma.ChurchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChurchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChurchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>[]
          }
          upsert: {
            args: Prisma.ChurchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          aggregate: {
            args: Prisma.ChurchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChurch>
          }
          groupBy: {
            args: Prisma.ChurchGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChurchGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChurchCountArgs<ExtArgs>
            result: $Utils.Optional<ChurchCountAggregateOutputType> | number
          }
        }
      }
      MassSchedule: {
        payload: Prisma.$MassSchedulePayload<ExtArgs>
        fields: Prisma.MassScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MassScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MassScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulePayload>
          }
          findFirst: {
            args: Prisma.MassScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MassScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulePayload>
          }
          findMany: {
            args: Prisma.MassScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulePayload>[]
          }
          create: {
            args: Prisma.MassScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulePayload>
          }
          createMany: {
            args: Prisma.MassScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MassScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulePayload>[]
          }
          delete: {
            args: Prisma.MassScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulePayload>
          }
          update: {
            args: Prisma.MassScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulePayload>
          }
          deleteMany: {
            args: Prisma.MassScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MassScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MassScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulePayload>[]
          }
          upsert: {
            args: Prisma.MassScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MassSchedulePayload>
          }
          aggregate: {
            args: Prisma.MassScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMassSchedule>
          }
          groupBy: {
            args: Prisma.MassScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MassScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MassScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<MassScheduleCountAggregateOutputType> | number
          }
        }
      }
      Ministry: {
        payload: Prisma.$MinistryPayload<ExtArgs>
        fields: Prisma.MinistryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MinistryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MinistryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          findFirst: {
            args: Prisma.MinistryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MinistryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          findMany: {
            args: Prisma.MinistryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>[]
          }
          create: {
            args: Prisma.MinistryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          createMany: {
            args: Prisma.MinistryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MinistryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>[]
          }
          delete: {
            args: Prisma.MinistryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          update: {
            args: Prisma.MinistryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          deleteMany: {
            args: Prisma.MinistryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MinistryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MinistryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>[]
          }
          upsert: {
            args: Prisma.MinistryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          aggregate: {
            args: Prisma.MinistryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMinistry>
          }
          groupBy: {
            args: Prisma.MinistryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MinistryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MinistryCountArgs<ExtArgs>
            result: $Utils.Optional<MinistryCountAggregateOutputType> | number
          }
        }
      }
      FinancialReport: {
        payload: Prisma.$FinancialReportPayload<ExtArgs>
        fields: Prisma.FinancialReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportPayload>
          }
          findFirst: {
            args: Prisma.FinancialReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportPayload>
          }
          findMany: {
            args: Prisma.FinancialReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportPayload>[]
          }
          create: {
            args: Prisma.FinancialReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportPayload>
          }
          createMany: {
            args: Prisma.FinancialReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportPayload>[]
          }
          delete: {
            args: Prisma.FinancialReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportPayload>
          }
          update: {
            args: Prisma.FinancialReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportPayload>
          }
          deleteMany: {
            args: Prisma.FinancialReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportPayload>[]
          }
          upsert: {
            args: Prisma.FinancialReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportPayload>
          }
          aggregate: {
            args: Prisma.FinancialReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialReport>
          }
          groupBy: {
            args: Prisma.FinancialReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialReportCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialReportCountAggregateOutputType> | number
          }
        }
      }
      Homily: {
        payload: Prisma.$HomilyPayload<ExtArgs>
        fields: Prisma.HomilyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomilyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomilyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyPayload>
          }
          findFirst: {
            args: Prisma.HomilyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomilyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyPayload>
          }
          findMany: {
            args: Prisma.HomilyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyPayload>[]
          }
          create: {
            args: Prisma.HomilyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyPayload>
          }
          createMany: {
            args: Prisma.HomilyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomilyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyPayload>[]
          }
          delete: {
            args: Prisma.HomilyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyPayload>
          }
          update: {
            args: Prisma.HomilyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyPayload>
          }
          deleteMany: {
            args: Prisma.HomilyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomilyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomilyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyPayload>[]
          }
          upsert: {
            args: Prisma.HomilyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyPayload>
          }
          aggregate: {
            args: Prisma.HomilyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomily>
          }
          groupBy: {
            args: Prisma.HomilyGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomilyGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomilyCountArgs<ExtArgs>
            result: $Utils.Optional<HomilyCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      AppointmentDocument: {
        payload: Prisma.$AppointmentDocumentPayload<ExtArgs>
        fields: Prisma.AppointmentDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentDocumentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentDocumentPayload>
          }
          findMany: {
            args: Prisma.AppointmentDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentDocumentPayload>[]
          }
          create: {
            args: Prisma.AppointmentDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentDocumentPayload>
          }
          createMany: {
            args: Prisma.AppointmentDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentDocumentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentDocumentPayload>
          }
          update: {
            args: Prisma.AppointmentDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentDocumentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentDocumentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentDocumentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointmentDocument>
          }
          groupBy: {
            args: Prisma.AppointmentDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentDocumentCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      NewsMedia: {
        payload: Prisma.$NewsMediaPayload<ExtArgs>
        fields: Prisma.NewsMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsMediaPayload>
          }
          findFirst: {
            args: Prisma.NewsMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsMediaPayload>
          }
          findMany: {
            args: Prisma.NewsMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsMediaPayload>[]
          }
          create: {
            args: Prisma.NewsMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsMediaPayload>
          }
          createMany: {
            args: Prisma.NewsMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsMediaPayload>[]
          }
          delete: {
            args: Prisma.NewsMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsMediaPayload>
          }
          update: {
            args: Prisma.NewsMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsMediaPayload>
          }
          deleteMany: {
            args: Prisma.NewsMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsMediaPayload>[]
          }
          upsert: {
            args: Prisma.NewsMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsMediaPayload>
          }
          aggregate: {
            args: Prisma.NewsMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsMedia>
          }
          groupBy: {
            args: Prisma.NewsMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsMediaCountArgs<ExtArgs>
            result: $Utils.Optional<NewsMediaCountAggregateOutputType> | number
          }
        }
      }
      MinistryMedia: {
        payload: Prisma.$MinistryMediaPayload<ExtArgs>
        fields: Prisma.MinistryMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MinistryMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MinistryMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryMediaPayload>
          }
          findFirst: {
            args: Prisma.MinistryMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MinistryMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryMediaPayload>
          }
          findMany: {
            args: Prisma.MinistryMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryMediaPayload>[]
          }
          create: {
            args: Prisma.MinistryMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryMediaPayload>
          }
          createMany: {
            args: Prisma.MinistryMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MinistryMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryMediaPayload>[]
          }
          delete: {
            args: Prisma.MinistryMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryMediaPayload>
          }
          update: {
            args: Prisma.MinistryMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryMediaPayload>
          }
          deleteMany: {
            args: Prisma.MinistryMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MinistryMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MinistryMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryMediaPayload>[]
          }
          upsert: {
            args: Prisma.MinistryMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinistryMediaPayload>
          }
          aggregate: {
            args: Prisma.MinistryMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMinistryMedia>
          }
          groupBy: {
            args: Prisma.MinistryMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MinistryMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MinistryMediaCountArgs<ExtArgs>
            result: $Utils.Optional<MinistryMediaCountAggregateOutputType> | number
          }
        }
      }
      FinancialReportMedia: {
        payload: Prisma.$FinancialReportMediaPayload<ExtArgs>
        fields: Prisma.FinancialReportMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialReportMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialReportMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportMediaPayload>
          }
          findFirst: {
            args: Prisma.FinancialReportMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialReportMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportMediaPayload>
          }
          findMany: {
            args: Prisma.FinancialReportMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportMediaPayload>[]
          }
          create: {
            args: Prisma.FinancialReportMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportMediaPayload>
          }
          createMany: {
            args: Prisma.FinancialReportMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialReportMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportMediaPayload>[]
          }
          delete: {
            args: Prisma.FinancialReportMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportMediaPayload>
          }
          update: {
            args: Prisma.FinancialReportMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportMediaPayload>
          }
          deleteMany: {
            args: Prisma.FinancialReportMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialReportMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialReportMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportMediaPayload>[]
          }
          upsert: {
            args: Prisma.FinancialReportMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialReportMediaPayload>
          }
          aggregate: {
            args: Prisma.FinancialReportMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialReportMedia>
          }
          groupBy: {
            args: Prisma.FinancialReportMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialReportMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialReportMediaCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialReportMediaCountAggregateOutputType> | number
          }
        }
      }
      HomilyMedia: {
        payload: Prisma.$HomilyMediaPayload<ExtArgs>
        fields: Prisma.HomilyMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomilyMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomilyMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyMediaPayload>
          }
          findFirst: {
            args: Prisma.HomilyMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomilyMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyMediaPayload>
          }
          findMany: {
            args: Prisma.HomilyMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyMediaPayload>[]
          }
          create: {
            args: Prisma.HomilyMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyMediaPayload>
          }
          createMany: {
            args: Prisma.HomilyMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomilyMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyMediaPayload>[]
          }
          delete: {
            args: Prisma.HomilyMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyMediaPayload>
          }
          update: {
            args: Prisma.HomilyMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyMediaPayload>
          }
          deleteMany: {
            args: Prisma.HomilyMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomilyMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomilyMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyMediaPayload>[]
          }
          upsert: {
            args: Prisma.HomilyMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomilyMediaPayload>
          }
          aggregate: {
            args: Prisma.HomilyMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomilyMedia>
          }
          groupBy: {
            args: Prisma.HomilyMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomilyMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomilyMediaCountArgs<ExtArgs>
            result: $Utils.Optional<HomilyMediaCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    newsCategory?: NewsCategoryOmit
    news?: NewsOmit
    church?: ChurchOmit
    massSchedule?: MassScheduleOmit
    ministry?: MinistryOmit
    financialReport?: FinancialReportOmit
    homily?: HomilyOmit
    appointment?: AppointmentOmit
    appointmentDocument?: AppointmentDocumentOmit
    media?: MediaOmit
    newsMedia?: NewsMediaOmit
    ministryMedia?: MinistryMediaOmit
    financialReportMedia?: FinancialReportMediaOmit
    homilyMedia?: HomilyMediaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    news: number
    financialReports: number
    homilies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | UserCountOutputTypeCountNewsArgs
    financialReports?: boolean | UserCountOutputTypeCountFinancialReportsArgs
    homilies?: boolean | UserCountOutputTypeCountHomiliesArgs
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
  export type UserCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinancialReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHomiliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomilyWhereInput
  }


  /**
   * Count Type NewsCategoryCountOutputType
   */

  export type NewsCategoryCountOutputType = {
    news: number
  }

  export type NewsCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsCategoryCountOutputTypeCountNewsArgs
  }

  // Custom InputTypes
  /**
   * NewsCategoryCountOutputType without action
   */
  export type NewsCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryCountOutputType
     */
    select?: NewsCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCategoryCountOutputType without action
   */
  export type NewsCategoryCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }


  /**
   * Count Type NewsCountOutputType
   */

  export type NewsCountOutputType = {
    media: number
  }

  export type NewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | NewsCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCountOutputType
     */
    select?: NewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsMediaWhereInput
  }


  /**
   * Count Type ChurchCountOutputType
   */

  export type ChurchCountOutputType = {
    massSchedules: number
  }

  export type ChurchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    massSchedules?: boolean | ChurchCountOutputTypeCountMassSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ChurchCountOutputType without action
   */
  export type ChurchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChurchCountOutputType
     */
    select?: ChurchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChurchCountOutputType without action
   */
  export type ChurchCountOutputTypeCountMassSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MassScheduleWhereInput
  }


  /**
   * Count Type MinistryCountOutputType
   */

  export type MinistryCountOutputType = {
    media: number
  }

  export type MinistryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MinistryCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * MinistryCountOutputType without action
   */
  export type MinistryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryCountOutputType
     */
    select?: MinistryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MinistryCountOutputType without action
   */
  export type MinistryCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MinistryMediaWhereInput
  }


  /**
   * Count Type FinancialReportCountOutputType
   */

  export type FinancialReportCountOutputType = {
    media: number
  }

  export type FinancialReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | FinancialReportCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * FinancialReportCountOutputType without action
   */
  export type FinancialReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportCountOutputType
     */
    select?: FinancialReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FinancialReportCountOutputType without action
   */
  export type FinancialReportCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialReportMediaWhereInput
  }


  /**
   * Count Type HomilyCountOutputType
   */

  export type HomilyCountOutputType = {
    media: number
  }

  export type HomilyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | HomilyCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * HomilyCountOutputType without action
   */
  export type HomilyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyCountOutputType
     */
    select?: HomilyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HomilyCountOutputType without action
   */
  export type HomilyCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomilyMediaWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    documents: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | AppointmentCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentDocumentWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    news: number
    ministries: number
    financialReports: number
    homilies: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | MediaCountOutputTypeCountNewsArgs
    ministries?: boolean | MediaCountOutputTypeCountMinistriesArgs
    financialReports?: boolean | MediaCountOutputTypeCountFinancialReportsArgs
    homilies?: boolean | MediaCountOutputTypeCountHomiliesArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsMediaWhereInput
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountMinistriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MinistryMediaWhereInput
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountFinancialReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialReportMediaWhereInput
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountHomiliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomilyMediaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | User$newsArgs<ExtArgs>
    financialReports?: boolean | User$financialReportsArgs<ExtArgs>
    homilies?: boolean | User$homiliesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | User$newsArgs<ExtArgs>
    financialReports?: boolean | User$financialReportsArgs<ExtArgs>
    homilies?: boolean | User$homiliesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
      financialReports: Prisma.$FinancialReportPayload<ExtArgs>[]
      homilies: Prisma.$HomilyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
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
    news<T extends User$newsArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialReports<T extends User$financialReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$financialReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    homilies<T extends User$homiliesArgs<ExtArgs> = {}>(args?: Subset<T, User$homiliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.news
   */
  export type User$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * User.financialReports
   */
  export type User$financialReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportInclude<ExtArgs> | null
    where?: FinancialReportWhereInput
    orderBy?: FinancialReportOrderByWithRelationInput | FinancialReportOrderByWithRelationInput[]
    cursor?: FinancialReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialReportScalarFieldEnum | FinancialReportScalarFieldEnum[]
  }

  /**
   * User.homilies
   */
  export type User$homiliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyInclude<ExtArgs> | null
    where?: HomilyWhereInput
    orderBy?: HomilyOrderByWithRelationInput | HomilyOrderByWithRelationInput[]
    cursor?: HomilyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HomilyScalarFieldEnum | HomilyScalarFieldEnum[]
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
   * Model NewsCategory
   */

  export type AggregateNewsCategory = {
    _count: NewsCategoryCountAggregateOutputType | null
    _min: NewsCategoryMinAggregateOutputType | null
    _max: NewsCategoryMaxAggregateOutputType | null
  }

  export type NewsCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type NewsCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type NewsCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    _all: number
  }


  export type NewsCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type NewsCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type NewsCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    _all?: true
  }

  export type NewsCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsCategory to aggregate.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsCategories
    **/
    _count?: true | NewsCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsCategoryMaxAggregateInputType
  }

  export type GetNewsCategoryAggregateType<T extends NewsCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsCategory[P]>
      : GetScalarType<T[P], AggregateNewsCategory[P]>
  }




  export type NewsCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsCategoryWhereInput
    orderBy?: NewsCategoryOrderByWithAggregationInput | NewsCategoryOrderByWithAggregationInput[]
    by: NewsCategoryScalarFieldEnum[] | NewsCategoryScalarFieldEnum
    having?: NewsCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCategoryCountAggregateInputType | true
    _min?: NewsCategoryMinAggregateInputType
    _max?: NewsCategoryMaxAggregateInputType
  }

  export type NewsCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    _count: NewsCategoryCountAggregateOutputType | null
    _min: NewsCategoryMinAggregateOutputType | null
    _max: NewsCategoryMaxAggregateOutputType | null
  }

  type GetNewsCategoryGroupByPayload<T extends NewsCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], NewsCategoryGroupByOutputType[P]>
        }
      >
    >


  export type NewsCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    news?: boolean | NewsCategory$newsArgs<ExtArgs>
    _count?: boolean | NewsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsCategory"]>

  export type NewsCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsCategory"]>

  export type NewsCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsCategory"]>

  export type NewsCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }

  export type NewsCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt", ExtArgs["result"]["newsCategory"]>
  export type NewsCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsCategory$newsArgs<ExtArgs>
    _count?: boolean | NewsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsCategory"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
    }, ExtArgs["result"]["newsCategory"]>
    composites: {}
  }

  type NewsCategoryGetPayload<S extends boolean | null | undefined | NewsCategoryDefaultArgs> = $Result.GetResult<Prisma.$NewsCategoryPayload, S>

  type NewsCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCategoryCountAggregateInputType | true
    }

  export interface NewsCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsCategory'], meta: { name: 'NewsCategory' } }
    /**
     * Find zero or one NewsCategory that matches the filter.
     * @param {NewsCategoryFindUniqueArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsCategoryFindUniqueArgs>(args: SelectSubset<T, NewsCategoryFindUniqueArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsCategoryFindUniqueOrThrowArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindFirstArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsCategoryFindFirstArgs>(args?: SelectSubset<T, NewsCategoryFindFirstArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindFirstOrThrowArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsCategories
     * const newsCategories = await prisma.newsCategory.findMany()
     * 
     * // Get first 10 NewsCategories
     * const newsCategories = await prisma.newsCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsCategoryWithIdOnly = await prisma.newsCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsCategoryFindManyArgs>(args?: SelectSubset<T, NewsCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsCategory.
     * @param {NewsCategoryCreateArgs} args - Arguments to create a NewsCategory.
     * @example
     * // Create one NewsCategory
     * const NewsCategory = await prisma.newsCategory.create({
     *   data: {
     *     // ... data to create a NewsCategory
     *   }
     * })
     * 
     */
    create<T extends NewsCategoryCreateArgs>(args: SelectSubset<T, NewsCategoryCreateArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsCategories.
     * @param {NewsCategoryCreateManyArgs} args - Arguments to create many NewsCategories.
     * @example
     * // Create many NewsCategories
     * const newsCategory = await prisma.newsCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCategoryCreateManyArgs>(args?: SelectSubset<T, NewsCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsCategories and returns the data saved in the database.
     * @param {NewsCategoryCreateManyAndReturnArgs} args - Arguments to create many NewsCategories.
     * @example
     * // Create many NewsCategories
     * const newsCategory = await prisma.newsCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsCategories and only return the `id`
     * const newsCategoryWithIdOnly = await prisma.newsCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsCategory.
     * @param {NewsCategoryDeleteArgs} args - Arguments to delete one NewsCategory.
     * @example
     * // Delete one NewsCategory
     * const NewsCategory = await prisma.newsCategory.delete({
     *   where: {
     *     // ... filter to delete one NewsCategory
     *   }
     * })
     * 
     */
    delete<T extends NewsCategoryDeleteArgs>(args: SelectSubset<T, NewsCategoryDeleteArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsCategory.
     * @param {NewsCategoryUpdateArgs} args - Arguments to update one NewsCategory.
     * @example
     * // Update one NewsCategory
     * const newsCategory = await prisma.newsCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsCategoryUpdateArgs>(args: SelectSubset<T, NewsCategoryUpdateArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsCategories.
     * @param {NewsCategoryDeleteManyArgs} args - Arguments to filter NewsCategories to delete.
     * @example
     * // Delete a few NewsCategories
     * const { count } = await prisma.newsCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsCategoryDeleteManyArgs>(args?: SelectSubset<T, NewsCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsCategories
     * const newsCategory = await prisma.newsCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsCategoryUpdateManyArgs>(args: SelectSubset<T, NewsCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsCategories and returns the data updated in the database.
     * @param {NewsCategoryUpdateManyAndReturnArgs} args - Arguments to update many NewsCategories.
     * @example
     * // Update many NewsCategories
     * const newsCategory = await prisma.newsCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsCategories and only return the `id`
     * const newsCategoryWithIdOnly = await prisma.newsCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsCategory.
     * @param {NewsCategoryUpsertArgs} args - Arguments to update or create a NewsCategory.
     * @example
     * // Update or create a NewsCategory
     * const newsCategory = await prisma.newsCategory.upsert({
     *   create: {
     *     // ... data to create a NewsCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsCategory we want to update
     *   }
     * })
     */
    upsert<T extends NewsCategoryUpsertArgs>(args: SelectSubset<T, NewsCategoryUpsertArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryCountArgs} args - Arguments to filter NewsCategories to count.
     * @example
     * // Count the number of NewsCategories
     * const count = await prisma.newsCategory.count({
     *   where: {
     *     // ... the filter for the NewsCategories we want to count
     *   }
     * })
    **/
    count<T extends NewsCategoryCountArgs>(
      args?: Subset<T, NewsCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsCategoryAggregateArgs>(args: Subset<T, NewsCategoryAggregateArgs>): Prisma.PrismaPromise<GetNewsCategoryAggregateType<T>>

    /**
     * Group by NewsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryGroupByArgs} args - Group by arguments.
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
      T extends NewsCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsCategoryGroupByArgs['orderBy'] }
        : { orderBy?: NewsCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsCategory model
   */
  readonly fields: NewsCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsCategory$newsArgs<ExtArgs> = {}>(args?: Subset<T, NewsCategory$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NewsCategory model
   */
  interface NewsCategoryFieldRefs {
    readonly id: FieldRef<"NewsCategory", 'String'>
    readonly name: FieldRef<"NewsCategory", 'String'>
    readonly slug: FieldRef<"NewsCategory", 'String'>
    readonly createdAt: FieldRef<"NewsCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsCategory findUnique
   */
  export type NewsCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory findUniqueOrThrow
   */
  export type NewsCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory findFirst
   */
  export type NewsCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsCategories.
     */
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory findFirstOrThrow
   */
  export type NewsCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsCategories.
     */
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory findMany
   */
  export type NewsCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategories to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory create
   */
  export type NewsCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsCategory.
     */
    data: XOR<NewsCategoryCreateInput, NewsCategoryUncheckedCreateInput>
  }

  /**
   * NewsCategory createMany
   */
  export type NewsCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsCategories.
     */
    data: NewsCategoryCreateManyInput | NewsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsCategory createManyAndReturn
   */
  export type NewsCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many NewsCategories.
     */
    data: NewsCategoryCreateManyInput | NewsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsCategory update
   */
  export type NewsCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsCategory.
     */
    data: XOR<NewsCategoryUpdateInput, NewsCategoryUncheckedUpdateInput>
    /**
     * Choose, which NewsCategory to update.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory updateMany
   */
  export type NewsCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsCategories.
     */
    data: XOR<NewsCategoryUpdateManyMutationInput, NewsCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NewsCategories to update
     */
    where?: NewsCategoryWhereInput
    /**
     * Limit how many NewsCategories to update.
     */
    limit?: number
  }

  /**
   * NewsCategory updateManyAndReturn
   */
  export type NewsCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * The data used to update NewsCategories.
     */
    data: XOR<NewsCategoryUpdateManyMutationInput, NewsCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NewsCategories to update
     */
    where?: NewsCategoryWhereInput
    /**
     * Limit how many NewsCategories to update.
     */
    limit?: number
  }

  /**
   * NewsCategory upsert
   */
  export type NewsCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsCategory to update in case it exists.
     */
    where: NewsCategoryWhereUniqueInput
    /**
     * In case the NewsCategory found by the `where` argument doesn't exist, create a new NewsCategory with this data.
     */
    create: XOR<NewsCategoryCreateInput, NewsCategoryUncheckedCreateInput>
    /**
     * In case the NewsCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsCategoryUpdateInput, NewsCategoryUncheckedUpdateInput>
  }

  /**
   * NewsCategory delete
   */
  export type NewsCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter which NewsCategory to delete.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory deleteMany
   */
  export type NewsCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsCategories to delete
     */
    where?: NewsCategoryWhereInput
    /**
     * Limit how many NewsCategories to delete.
     */
    limit?: number
  }

  /**
   * NewsCategory.news
   */
  export type NewsCategory$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * NewsCategory without action
   */
  export type NewsCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    imageUrl: string | null
    published: boolean | null
    publishedAt: Date | null
    categoryId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    imageUrl: string | null
    published: boolean | null
    publishedAt: Date | null
    categoryId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    imageUrl: number
    published: number
    publishedAt: number
    categoryId: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    imageUrl?: true
    published?: true
    publishedAt?: true
    categoryId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    imageUrl?: true
    published?: true
    publishedAt?: true
    categoryId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    imageUrl?: true
    published?: true
    publishedAt?: true
    categoryId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string
    imageUrl: string | null
    published: boolean
    publishedAt: Date | null
    categoryId: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    imageUrl?: boolean
    published?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | News$mediaArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    imageUrl?: boolean
    published?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    imageUrl?: boolean
    published?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    imageUrl?: boolean
    published?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "imageUrl" | "published" | "publishedAt" | "categoryId" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | News$mediaArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      category: Prisma.$NewsCategoryPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      media: Prisma.$NewsMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string
      imageUrl: string | null
      published: boolean
      publishedAt: Date | null
      categoryId: string
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends NewsCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsCategoryDefaultArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends News$mediaArgs<ExtArgs> = {}>(args?: Subset<T, News$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly slug: FieldRef<"News", 'String'>
    readonly content: FieldRef<"News", 'String'>
    readonly imageUrl: FieldRef<"News", 'String'>
    readonly published: FieldRef<"News", 'Boolean'>
    readonly publishedAt: FieldRef<"News", 'DateTime'>
    readonly categoryId: FieldRef<"News", 'String'>
    readonly createdById: FieldRef<"News", 'String'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News.media
   */
  export type News$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
    where?: NewsMediaWhereInput
    orderBy?: NewsMediaOrderByWithRelationInput | NewsMediaOrderByWithRelationInput[]
    cursor?: NewsMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsMediaScalarFieldEnum | NewsMediaScalarFieldEnum[]
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model Church
   */

  export type AggregateChurch = {
    _count: ChurchCountAggregateOutputType | null
    _avg: ChurchAvgAggregateOutputType | null
    _sum: ChurchSumAggregateOutputType | null
    _min: ChurchMinAggregateOutputType | null
    _max: ChurchMaxAggregateOutputType | null
  }

  export type ChurchAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ChurchSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ChurchMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChurchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChurchCountAggregateOutputType = {
    id: number
    name: number
    address: number
    description: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChurchAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ChurchSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ChurchMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChurchMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChurchCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChurchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Church to aggregate.
     */
    where?: ChurchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Churches to fetch.
     */
    orderBy?: ChurchOrderByWithRelationInput | ChurchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChurchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Churches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Churches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Churches
    **/
    _count?: true | ChurchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChurchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChurchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChurchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChurchMaxAggregateInputType
  }

  export type GetChurchAggregateType<T extends ChurchAggregateArgs> = {
        [P in keyof T & keyof AggregateChurch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChurch[P]>
      : GetScalarType<T[P], AggregateChurch[P]>
  }




  export type ChurchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChurchWhereInput
    orderBy?: ChurchOrderByWithAggregationInput | ChurchOrderByWithAggregationInput[]
    by: ChurchScalarFieldEnum[] | ChurchScalarFieldEnum
    having?: ChurchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChurchCountAggregateInputType | true
    _avg?: ChurchAvgAggregateInputType
    _sum?: ChurchSumAggregateInputType
    _min?: ChurchMinAggregateInputType
    _max?: ChurchMaxAggregateInputType
  }

  export type ChurchGroupByOutputType = {
    id: string
    name: string
    address: string
    description: string | null
    latitude: number
    longitude: number
    createdAt: Date
    updatedAt: Date
    _count: ChurchCountAggregateOutputType | null
    _avg: ChurchAvgAggregateOutputType | null
    _sum: ChurchSumAggregateOutputType | null
    _min: ChurchMinAggregateOutputType | null
    _max: ChurchMaxAggregateOutputType | null
  }

  type GetChurchGroupByPayload<T extends ChurchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChurchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChurchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChurchGroupByOutputType[P]>
            : GetScalarType<T[P], ChurchGroupByOutputType[P]>
        }
      >
    >


  export type ChurchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    massSchedules?: boolean | Church$massSchedulesArgs<ExtArgs>
    _count?: boolean | ChurchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["church"]>

  export type ChurchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["church"]>

  export type ChurchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["church"]>

  export type ChurchSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChurchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "description" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["church"]>
  export type ChurchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    massSchedules?: boolean | Church$massSchedulesArgs<ExtArgs>
    _count?: boolean | ChurchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChurchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChurchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChurchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Church"
    objects: {
      massSchedules: Prisma.$MassSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      description: string | null
      latitude: number
      longitude: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["church"]>
    composites: {}
  }

  type ChurchGetPayload<S extends boolean | null | undefined | ChurchDefaultArgs> = $Result.GetResult<Prisma.$ChurchPayload, S>

  type ChurchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChurchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChurchCountAggregateInputType | true
    }

  export interface ChurchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Church'], meta: { name: 'Church' } }
    /**
     * Find zero or one Church that matches the filter.
     * @param {ChurchFindUniqueArgs} args - Arguments to find a Church
     * @example
     * // Get one Church
     * const church = await prisma.church.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChurchFindUniqueArgs>(args: SelectSubset<T, ChurchFindUniqueArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Church that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChurchFindUniqueOrThrowArgs} args - Arguments to find a Church
     * @example
     * // Get one Church
     * const church = await prisma.church.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChurchFindUniqueOrThrowArgs>(args: SelectSubset<T, ChurchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Church that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchFindFirstArgs} args - Arguments to find a Church
     * @example
     * // Get one Church
     * const church = await prisma.church.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChurchFindFirstArgs>(args?: SelectSubset<T, ChurchFindFirstArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Church that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchFindFirstOrThrowArgs} args - Arguments to find a Church
     * @example
     * // Get one Church
     * const church = await prisma.church.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChurchFindFirstOrThrowArgs>(args?: SelectSubset<T, ChurchFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Churches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Churches
     * const churches = await prisma.church.findMany()
     * 
     * // Get first 10 Churches
     * const churches = await prisma.church.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const churchWithIdOnly = await prisma.church.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChurchFindManyArgs>(args?: SelectSubset<T, ChurchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Church.
     * @param {ChurchCreateArgs} args - Arguments to create a Church.
     * @example
     * // Create one Church
     * const Church = await prisma.church.create({
     *   data: {
     *     // ... data to create a Church
     *   }
     * })
     * 
     */
    create<T extends ChurchCreateArgs>(args: SelectSubset<T, ChurchCreateArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Churches.
     * @param {ChurchCreateManyArgs} args - Arguments to create many Churches.
     * @example
     * // Create many Churches
     * const church = await prisma.church.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChurchCreateManyArgs>(args?: SelectSubset<T, ChurchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Churches and returns the data saved in the database.
     * @param {ChurchCreateManyAndReturnArgs} args - Arguments to create many Churches.
     * @example
     * // Create many Churches
     * const church = await prisma.church.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Churches and only return the `id`
     * const churchWithIdOnly = await prisma.church.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChurchCreateManyAndReturnArgs>(args?: SelectSubset<T, ChurchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Church.
     * @param {ChurchDeleteArgs} args - Arguments to delete one Church.
     * @example
     * // Delete one Church
     * const Church = await prisma.church.delete({
     *   where: {
     *     // ... filter to delete one Church
     *   }
     * })
     * 
     */
    delete<T extends ChurchDeleteArgs>(args: SelectSubset<T, ChurchDeleteArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Church.
     * @param {ChurchUpdateArgs} args - Arguments to update one Church.
     * @example
     * // Update one Church
     * const church = await prisma.church.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChurchUpdateArgs>(args: SelectSubset<T, ChurchUpdateArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Churches.
     * @param {ChurchDeleteManyArgs} args - Arguments to filter Churches to delete.
     * @example
     * // Delete a few Churches
     * const { count } = await prisma.church.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChurchDeleteManyArgs>(args?: SelectSubset<T, ChurchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Churches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Churches
     * const church = await prisma.church.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChurchUpdateManyArgs>(args: SelectSubset<T, ChurchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Churches and returns the data updated in the database.
     * @param {ChurchUpdateManyAndReturnArgs} args - Arguments to update many Churches.
     * @example
     * // Update many Churches
     * const church = await prisma.church.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Churches and only return the `id`
     * const churchWithIdOnly = await prisma.church.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChurchUpdateManyAndReturnArgs>(args: SelectSubset<T, ChurchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Church.
     * @param {ChurchUpsertArgs} args - Arguments to update or create a Church.
     * @example
     * // Update or create a Church
     * const church = await prisma.church.upsert({
     *   create: {
     *     // ... data to create a Church
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Church we want to update
     *   }
     * })
     */
    upsert<T extends ChurchUpsertArgs>(args: SelectSubset<T, ChurchUpsertArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Churches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchCountArgs} args - Arguments to filter Churches to count.
     * @example
     * // Count the number of Churches
     * const count = await prisma.church.count({
     *   where: {
     *     // ... the filter for the Churches we want to count
     *   }
     * })
    **/
    count<T extends ChurchCountArgs>(
      args?: Subset<T, ChurchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChurchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Church.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChurchAggregateArgs>(args: Subset<T, ChurchAggregateArgs>): Prisma.PrismaPromise<GetChurchAggregateType<T>>

    /**
     * Group by Church.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchGroupByArgs} args - Group by arguments.
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
      T extends ChurchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChurchGroupByArgs['orderBy'] }
        : { orderBy?: ChurchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChurchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChurchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Church model
   */
  readonly fields: ChurchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Church.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChurchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    massSchedules<T extends Church$massSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Church$massSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Church model
   */
  interface ChurchFieldRefs {
    readonly id: FieldRef<"Church", 'String'>
    readonly name: FieldRef<"Church", 'String'>
    readonly address: FieldRef<"Church", 'String'>
    readonly description: FieldRef<"Church", 'String'>
    readonly latitude: FieldRef<"Church", 'Float'>
    readonly longitude: FieldRef<"Church", 'Float'>
    readonly createdAt: FieldRef<"Church", 'DateTime'>
    readonly updatedAt: FieldRef<"Church", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Church findUnique
   */
  export type ChurchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter, which Church to fetch.
     */
    where: ChurchWhereUniqueInput
  }

  /**
   * Church findUniqueOrThrow
   */
  export type ChurchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter, which Church to fetch.
     */
    where: ChurchWhereUniqueInput
  }

  /**
   * Church findFirst
   */
  export type ChurchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter, which Church to fetch.
     */
    where?: ChurchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Churches to fetch.
     */
    orderBy?: ChurchOrderByWithRelationInput | ChurchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Churches.
     */
    cursor?: ChurchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Churches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Churches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Churches.
     */
    distinct?: ChurchScalarFieldEnum | ChurchScalarFieldEnum[]
  }

  /**
   * Church findFirstOrThrow
   */
  export type ChurchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter, which Church to fetch.
     */
    where?: ChurchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Churches to fetch.
     */
    orderBy?: ChurchOrderByWithRelationInput | ChurchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Churches.
     */
    cursor?: ChurchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Churches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Churches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Churches.
     */
    distinct?: ChurchScalarFieldEnum | ChurchScalarFieldEnum[]
  }

  /**
   * Church findMany
   */
  export type ChurchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter, which Churches to fetch.
     */
    where?: ChurchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Churches to fetch.
     */
    orderBy?: ChurchOrderByWithRelationInput | ChurchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Churches.
     */
    cursor?: ChurchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Churches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Churches.
     */
    skip?: number
    distinct?: ChurchScalarFieldEnum | ChurchScalarFieldEnum[]
  }

  /**
   * Church create
   */
  export type ChurchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * The data needed to create a Church.
     */
    data: XOR<ChurchCreateInput, ChurchUncheckedCreateInput>
  }

  /**
   * Church createMany
   */
  export type ChurchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Churches.
     */
    data: ChurchCreateManyInput | ChurchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Church createManyAndReturn
   */
  export type ChurchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * The data used to create many Churches.
     */
    data: ChurchCreateManyInput | ChurchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Church update
   */
  export type ChurchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * The data needed to update a Church.
     */
    data: XOR<ChurchUpdateInput, ChurchUncheckedUpdateInput>
    /**
     * Choose, which Church to update.
     */
    where: ChurchWhereUniqueInput
  }

  /**
   * Church updateMany
   */
  export type ChurchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Churches.
     */
    data: XOR<ChurchUpdateManyMutationInput, ChurchUncheckedUpdateManyInput>
    /**
     * Filter which Churches to update
     */
    where?: ChurchWhereInput
    /**
     * Limit how many Churches to update.
     */
    limit?: number
  }

  /**
   * Church updateManyAndReturn
   */
  export type ChurchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * The data used to update Churches.
     */
    data: XOR<ChurchUpdateManyMutationInput, ChurchUncheckedUpdateManyInput>
    /**
     * Filter which Churches to update
     */
    where?: ChurchWhereInput
    /**
     * Limit how many Churches to update.
     */
    limit?: number
  }

  /**
   * Church upsert
   */
  export type ChurchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * The filter to search for the Church to update in case it exists.
     */
    where: ChurchWhereUniqueInput
    /**
     * In case the Church found by the `where` argument doesn't exist, create a new Church with this data.
     */
    create: XOR<ChurchCreateInput, ChurchUncheckedCreateInput>
    /**
     * In case the Church was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChurchUpdateInput, ChurchUncheckedUpdateInput>
  }

  /**
   * Church delete
   */
  export type ChurchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter which Church to delete.
     */
    where: ChurchWhereUniqueInput
  }

  /**
   * Church deleteMany
   */
  export type ChurchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Churches to delete
     */
    where?: ChurchWhereInput
    /**
     * Limit how many Churches to delete.
     */
    limit?: number
  }

  /**
   * Church.massSchedules
   */
  export type Church$massSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleInclude<ExtArgs> | null
    where?: MassScheduleWhereInput
    orderBy?: MassScheduleOrderByWithRelationInput | MassScheduleOrderByWithRelationInput[]
    cursor?: MassScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MassScheduleScalarFieldEnum | MassScheduleScalarFieldEnum[]
  }

  /**
   * Church without action
   */
  export type ChurchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
  }


  /**
   * Model MassSchedule
   */

  export type AggregateMassSchedule = {
    _count: MassScheduleCountAggregateOutputType | null
    _avg: MassScheduleAvgAggregateOutputType | null
    _sum: MassScheduleSumAggregateOutputType | null
    _min: MassScheduleMinAggregateOutputType | null
    _max: MassScheduleMaxAggregateOutputType | null
  }

  export type MassScheduleAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type MassScheduleSumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type MassScheduleMinAggregateOutputType = {
    id: string | null
    churchId: string | null
    dayOfWeek: number | null
    time: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MassScheduleMaxAggregateOutputType = {
    id: string | null
    churchId: string | null
    dayOfWeek: number | null
    time: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MassScheduleCountAggregateOutputType = {
    id: number
    churchId: number
    dayOfWeek: number
    time: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MassScheduleAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type MassScheduleSumAggregateInputType = {
    dayOfWeek?: true
  }

  export type MassScheduleMinAggregateInputType = {
    id?: true
    churchId?: true
    dayOfWeek?: true
    time?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MassScheduleMaxAggregateInputType = {
    id?: true
    churchId?: true
    dayOfWeek?: true
    time?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MassScheduleCountAggregateInputType = {
    id?: true
    churchId?: true
    dayOfWeek?: true
    time?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MassScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MassSchedule to aggregate.
     */
    where?: MassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MassSchedules to fetch.
     */
    orderBy?: MassScheduleOrderByWithRelationInput | MassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MassSchedules
    **/
    _count?: true | MassScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MassScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MassScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MassScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MassScheduleMaxAggregateInputType
  }

  export type GetMassScheduleAggregateType<T extends MassScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateMassSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMassSchedule[P]>
      : GetScalarType<T[P], AggregateMassSchedule[P]>
  }




  export type MassScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MassScheduleWhereInput
    orderBy?: MassScheduleOrderByWithAggregationInput | MassScheduleOrderByWithAggregationInput[]
    by: MassScheduleScalarFieldEnum[] | MassScheduleScalarFieldEnum
    having?: MassScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MassScheduleCountAggregateInputType | true
    _avg?: MassScheduleAvgAggregateInputType
    _sum?: MassScheduleSumAggregateInputType
    _min?: MassScheduleMinAggregateInputType
    _max?: MassScheduleMaxAggregateInputType
  }

  export type MassScheduleGroupByOutputType = {
    id: string
    churchId: string
    dayOfWeek: number
    time: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MassScheduleCountAggregateOutputType | null
    _avg: MassScheduleAvgAggregateOutputType | null
    _sum: MassScheduleSumAggregateOutputType | null
    _min: MassScheduleMinAggregateOutputType | null
    _max: MassScheduleMaxAggregateOutputType | null
  }

  type GetMassScheduleGroupByPayload<T extends MassScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MassScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MassScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MassScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], MassScheduleGroupByOutputType[P]>
        }
      >
    >


  export type MassScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    churchId?: boolean
    dayOfWeek?: boolean
    time?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    church?: boolean | ChurchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["massSchedule"]>

  export type MassScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    churchId?: boolean
    dayOfWeek?: boolean
    time?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    church?: boolean | ChurchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["massSchedule"]>

  export type MassScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    churchId?: boolean
    dayOfWeek?: boolean
    time?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    church?: boolean | ChurchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["massSchedule"]>

  export type MassScheduleSelectScalar = {
    id?: boolean
    churchId?: boolean
    dayOfWeek?: boolean
    time?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MassScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "churchId" | "dayOfWeek" | "time" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["massSchedule"]>
  export type MassScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    church?: boolean | ChurchDefaultArgs<ExtArgs>
  }
  export type MassScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    church?: boolean | ChurchDefaultArgs<ExtArgs>
  }
  export type MassScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    church?: boolean | ChurchDefaultArgs<ExtArgs>
  }

  export type $MassSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MassSchedule"
    objects: {
      church: Prisma.$ChurchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      churchId: string
      dayOfWeek: number
      time: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["massSchedule"]>
    composites: {}
  }

  type MassScheduleGetPayload<S extends boolean | null | undefined | MassScheduleDefaultArgs> = $Result.GetResult<Prisma.$MassSchedulePayload, S>

  type MassScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MassScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MassScheduleCountAggregateInputType | true
    }

  export interface MassScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MassSchedule'], meta: { name: 'MassSchedule' } }
    /**
     * Find zero or one MassSchedule that matches the filter.
     * @param {MassScheduleFindUniqueArgs} args - Arguments to find a MassSchedule
     * @example
     * // Get one MassSchedule
     * const massSchedule = await prisma.massSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MassScheduleFindUniqueArgs>(args: SelectSubset<T, MassScheduleFindUniqueArgs<ExtArgs>>): Prisma__MassScheduleClient<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MassSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MassScheduleFindUniqueOrThrowArgs} args - Arguments to find a MassSchedule
     * @example
     * // Get one MassSchedule
     * const massSchedule = await prisma.massSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MassScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, MassScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MassScheduleClient<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MassSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassScheduleFindFirstArgs} args - Arguments to find a MassSchedule
     * @example
     * // Get one MassSchedule
     * const massSchedule = await prisma.massSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MassScheduleFindFirstArgs>(args?: SelectSubset<T, MassScheduleFindFirstArgs<ExtArgs>>): Prisma__MassScheduleClient<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MassSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassScheduleFindFirstOrThrowArgs} args - Arguments to find a MassSchedule
     * @example
     * // Get one MassSchedule
     * const massSchedule = await prisma.massSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MassScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, MassScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MassScheduleClient<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MassSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MassSchedules
     * const massSchedules = await prisma.massSchedule.findMany()
     * 
     * // Get first 10 MassSchedules
     * const massSchedules = await prisma.massSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const massScheduleWithIdOnly = await prisma.massSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MassScheduleFindManyArgs>(args?: SelectSubset<T, MassScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MassSchedule.
     * @param {MassScheduleCreateArgs} args - Arguments to create a MassSchedule.
     * @example
     * // Create one MassSchedule
     * const MassSchedule = await prisma.massSchedule.create({
     *   data: {
     *     // ... data to create a MassSchedule
     *   }
     * })
     * 
     */
    create<T extends MassScheduleCreateArgs>(args: SelectSubset<T, MassScheduleCreateArgs<ExtArgs>>): Prisma__MassScheduleClient<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MassSchedules.
     * @param {MassScheduleCreateManyArgs} args - Arguments to create many MassSchedules.
     * @example
     * // Create many MassSchedules
     * const massSchedule = await prisma.massSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MassScheduleCreateManyArgs>(args?: SelectSubset<T, MassScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MassSchedules and returns the data saved in the database.
     * @param {MassScheduleCreateManyAndReturnArgs} args - Arguments to create many MassSchedules.
     * @example
     * // Create many MassSchedules
     * const massSchedule = await prisma.massSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MassSchedules and only return the `id`
     * const massScheduleWithIdOnly = await prisma.massSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MassScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, MassScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MassSchedule.
     * @param {MassScheduleDeleteArgs} args - Arguments to delete one MassSchedule.
     * @example
     * // Delete one MassSchedule
     * const MassSchedule = await prisma.massSchedule.delete({
     *   where: {
     *     // ... filter to delete one MassSchedule
     *   }
     * })
     * 
     */
    delete<T extends MassScheduleDeleteArgs>(args: SelectSubset<T, MassScheduleDeleteArgs<ExtArgs>>): Prisma__MassScheduleClient<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MassSchedule.
     * @param {MassScheduleUpdateArgs} args - Arguments to update one MassSchedule.
     * @example
     * // Update one MassSchedule
     * const massSchedule = await prisma.massSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MassScheduleUpdateArgs>(args: SelectSubset<T, MassScheduleUpdateArgs<ExtArgs>>): Prisma__MassScheduleClient<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MassSchedules.
     * @param {MassScheduleDeleteManyArgs} args - Arguments to filter MassSchedules to delete.
     * @example
     * // Delete a few MassSchedules
     * const { count } = await prisma.massSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MassScheduleDeleteManyArgs>(args?: SelectSubset<T, MassScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MassSchedules
     * const massSchedule = await prisma.massSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MassScheduleUpdateManyArgs>(args: SelectSubset<T, MassScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MassSchedules and returns the data updated in the database.
     * @param {MassScheduleUpdateManyAndReturnArgs} args - Arguments to update many MassSchedules.
     * @example
     * // Update many MassSchedules
     * const massSchedule = await prisma.massSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MassSchedules and only return the `id`
     * const massScheduleWithIdOnly = await prisma.massSchedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends MassScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, MassScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MassSchedule.
     * @param {MassScheduleUpsertArgs} args - Arguments to update or create a MassSchedule.
     * @example
     * // Update or create a MassSchedule
     * const massSchedule = await prisma.massSchedule.upsert({
     *   create: {
     *     // ... data to create a MassSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MassSchedule we want to update
     *   }
     * })
     */
    upsert<T extends MassScheduleUpsertArgs>(args: SelectSubset<T, MassScheduleUpsertArgs<ExtArgs>>): Prisma__MassScheduleClient<$Result.GetResult<Prisma.$MassSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassScheduleCountArgs} args - Arguments to filter MassSchedules to count.
     * @example
     * // Count the number of MassSchedules
     * const count = await prisma.massSchedule.count({
     *   where: {
     *     // ... the filter for the MassSchedules we want to count
     *   }
     * })
    **/
    count<T extends MassScheduleCountArgs>(
      args?: Subset<T, MassScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MassScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MassSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MassScheduleAggregateArgs>(args: Subset<T, MassScheduleAggregateArgs>): Prisma.PrismaPromise<GetMassScheduleAggregateType<T>>

    /**
     * Group by MassSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MassScheduleGroupByArgs} args - Group by arguments.
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
      T extends MassScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MassScheduleGroupByArgs['orderBy'] }
        : { orderBy?: MassScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MassScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMassScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MassSchedule model
   */
  readonly fields: MassScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MassSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MassScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    church<T extends ChurchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChurchDefaultArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MassSchedule model
   */
  interface MassScheduleFieldRefs {
    readonly id: FieldRef<"MassSchedule", 'String'>
    readonly churchId: FieldRef<"MassSchedule", 'String'>
    readonly dayOfWeek: FieldRef<"MassSchedule", 'Int'>
    readonly time: FieldRef<"MassSchedule", 'String'>
    readonly notes: FieldRef<"MassSchedule", 'String'>
    readonly createdAt: FieldRef<"MassSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"MassSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MassSchedule findUnique
   */
  export type MassScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MassSchedule to fetch.
     */
    where: MassScheduleWhereUniqueInput
  }

  /**
   * MassSchedule findUniqueOrThrow
   */
  export type MassScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MassSchedule to fetch.
     */
    where: MassScheduleWhereUniqueInput
  }

  /**
   * MassSchedule findFirst
   */
  export type MassScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MassSchedule to fetch.
     */
    where?: MassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MassSchedules to fetch.
     */
    orderBy?: MassScheduleOrderByWithRelationInput | MassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MassSchedules.
     */
    cursor?: MassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MassSchedules.
     */
    distinct?: MassScheduleScalarFieldEnum | MassScheduleScalarFieldEnum[]
  }

  /**
   * MassSchedule findFirstOrThrow
   */
  export type MassScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MassSchedule to fetch.
     */
    where?: MassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MassSchedules to fetch.
     */
    orderBy?: MassScheduleOrderByWithRelationInput | MassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MassSchedules.
     */
    cursor?: MassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MassSchedules.
     */
    distinct?: MassScheduleScalarFieldEnum | MassScheduleScalarFieldEnum[]
  }

  /**
   * MassSchedule findMany
   */
  export type MassScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MassSchedules to fetch.
     */
    where?: MassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MassSchedules to fetch.
     */
    orderBy?: MassScheduleOrderByWithRelationInput | MassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MassSchedules.
     */
    cursor?: MassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MassSchedules.
     */
    skip?: number
    distinct?: MassScheduleScalarFieldEnum | MassScheduleScalarFieldEnum[]
  }

  /**
   * MassSchedule create
   */
  export type MassScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a MassSchedule.
     */
    data: XOR<MassScheduleCreateInput, MassScheduleUncheckedCreateInput>
  }

  /**
   * MassSchedule createMany
   */
  export type MassScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MassSchedules.
     */
    data: MassScheduleCreateManyInput | MassScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MassSchedule createManyAndReturn
   */
  export type MassScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many MassSchedules.
     */
    data: MassScheduleCreateManyInput | MassScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MassSchedule update
   */
  export type MassScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a MassSchedule.
     */
    data: XOR<MassScheduleUpdateInput, MassScheduleUncheckedUpdateInput>
    /**
     * Choose, which MassSchedule to update.
     */
    where: MassScheduleWhereUniqueInput
  }

  /**
   * MassSchedule updateMany
   */
  export type MassScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MassSchedules.
     */
    data: XOR<MassScheduleUpdateManyMutationInput, MassScheduleUncheckedUpdateManyInput>
    /**
     * Filter which MassSchedules to update
     */
    where?: MassScheduleWhereInput
    /**
     * Limit how many MassSchedules to update.
     */
    limit?: number
  }

  /**
   * MassSchedule updateManyAndReturn
   */
  export type MassScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * The data used to update MassSchedules.
     */
    data: XOR<MassScheduleUpdateManyMutationInput, MassScheduleUncheckedUpdateManyInput>
    /**
     * Filter which MassSchedules to update
     */
    where?: MassScheduleWhereInput
    /**
     * Limit how many MassSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MassSchedule upsert
   */
  export type MassScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the MassSchedule to update in case it exists.
     */
    where: MassScheduleWhereUniqueInput
    /**
     * In case the MassSchedule found by the `where` argument doesn't exist, create a new MassSchedule with this data.
     */
    create: XOR<MassScheduleCreateInput, MassScheduleUncheckedCreateInput>
    /**
     * In case the MassSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MassScheduleUpdateInput, MassScheduleUncheckedUpdateInput>
  }

  /**
   * MassSchedule delete
   */
  export type MassScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleInclude<ExtArgs> | null
    /**
     * Filter which MassSchedule to delete.
     */
    where: MassScheduleWhereUniqueInput
  }

  /**
   * MassSchedule deleteMany
   */
  export type MassScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MassSchedules to delete
     */
    where?: MassScheduleWhereInput
    /**
     * Limit how many MassSchedules to delete.
     */
    limit?: number
  }

  /**
   * MassSchedule without action
   */
  export type MassScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MassSchedule
     */
    select?: MassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MassSchedule
     */
    omit?: MassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MassScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Ministry
   */

  export type AggregateMinistry = {
    _count: MinistryCountAggregateOutputType | null
    _min: MinistryMinAggregateOutputType | null
    _max: MinistryMaxAggregateOutputType | null
  }

  export type MinistryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    contactName: string | null
    contactPhone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MinistryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    contactName: string | null
    contactPhone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MinistryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    imageUrl: number
    contactName: number
    contactPhone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MinistryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    contactName?: true
    contactPhone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MinistryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    contactName?: true
    contactPhone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MinistryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    contactName?: true
    contactPhone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MinistryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ministry to aggregate.
     */
    where?: MinistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ministries to fetch.
     */
    orderBy?: MinistryOrderByWithRelationInput | MinistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MinistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ministries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ministries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ministries
    **/
    _count?: true | MinistryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MinistryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MinistryMaxAggregateInputType
  }

  export type GetMinistryAggregateType<T extends MinistryAggregateArgs> = {
        [P in keyof T & keyof AggregateMinistry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMinistry[P]>
      : GetScalarType<T[P], AggregateMinistry[P]>
  }




  export type MinistryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MinistryWhereInput
    orderBy?: MinistryOrderByWithAggregationInput | MinistryOrderByWithAggregationInput[]
    by: MinistryScalarFieldEnum[] | MinistryScalarFieldEnum
    having?: MinistryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MinistryCountAggregateInputType | true
    _min?: MinistryMinAggregateInputType
    _max?: MinistryMaxAggregateInputType
  }

  export type MinistryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    imageUrl: string | null
    contactName: string | null
    contactPhone: string | null
    createdAt: Date
    updatedAt: Date
    _count: MinistryCountAggregateOutputType | null
    _min: MinistryMinAggregateOutputType | null
    _max: MinistryMaxAggregateOutputType | null
  }

  type GetMinistryGroupByPayload<T extends MinistryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MinistryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MinistryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MinistryGroupByOutputType[P]>
            : GetScalarType<T[P], MinistryGroupByOutputType[P]>
        }
      >
    >


  export type MinistrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    contactName?: boolean
    contactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    media?: boolean | Ministry$mediaArgs<ExtArgs>
    _count?: boolean | MinistryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ministry"]>

  export type MinistrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    contactName?: boolean
    contactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ministry"]>

  export type MinistrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    contactName?: boolean
    contactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ministry"]>

  export type MinistrySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    contactName?: boolean
    contactPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MinistryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "imageUrl" | "contactName" | "contactPhone" | "createdAt" | "updatedAt", ExtArgs["result"]["ministry"]>
  export type MinistryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | Ministry$mediaArgs<ExtArgs>
    _count?: boolean | MinistryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MinistryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MinistryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MinistryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ministry"
    objects: {
      media: Prisma.$MinistryMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      imageUrl: string | null
      contactName: string | null
      contactPhone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ministry"]>
    composites: {}
  }

  type MinistryGetPayload<S extends boolean | null | undefined | MinistryDefaultArgs> = $Result.GetResult<Prisma.$MinistryPayload, S>

  type MinistryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MinistryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MinistryCountAggregateInputType | true
    }

  export interface MinistryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ministry'], meta: { name: 'Ministry' } }
    /**
     * Find zero or one Ministry that matches the filter.
     * @param {MinistryFindUniqueArgs} args - Arguments to find a Ministry
     * @example
     * // Get one Ministry
     * const ministry = await prisma.ministry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MinistryFindUniqueArgs>(args: SelectSubset<T, MinistryFindUniqueArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ministry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MinistryFindUniqueOrThrowArgs} args - Arguments to find a Ministry
     * @example
     * // Get one Ministry
     * const ministry = await prisma.ministry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MinistryFindUniqueOrThrowArgs>(args: SelectSubset<T, MinistryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ministry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryFindFirstArgs} args - Arguments to find a Ministry
     * @example
     * // Get one Ministry
     * const ministry = await prisma.ministry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MinistryFindFirstArgs>(args?: SelectSubset<T, MinistryFindFirstArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ministry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryFindFirstOrThrowArgs} args - Arguments to find a Ministry
     * @example
     * // Get one Ministry
     * const ministry = await prisma.ministry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MinistryFindFirstOrThrowArgs>(args?: SelectSubset<T, MinistryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ministries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ministries
     * const ministries = await prisma.ministry.findMany()
     * 
     * // Get first 10 Ministries
     * const ministries = await prisma.ministry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ministryWithIdOnly = await prisma.ministry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MinistryFindManyArgs>(args?: SelectSubset<T, MinistryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ministry.
     * @param {MinistryCreateArgs} args - Arguments to create a Ministry.
     * @example
     * // Create one Ministry
     * const Ministry = await prisma.ministry.create({
     *   data: {
     *     // ... data to create a Ministry
     *   }
     * })
     * 
     */
    create<T extends MinistryCreateArgs>(args: SelectSubset<T, MinistryCreateArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ministries.
     * @param {MinistryCreateManyArgs} args - Arguments to create many Ministries.
     * @example
     * // Create many Ministries
     * const ministry = await prisma.ministry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MinistryCreateManyArgs>(args?: SelectSubset<T, MinistryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ministries and returns the data saved in the database.
     * @param {MinistryCreateManyAndReturnArgs} args - Arguments to create many Ministries.
     * @example
     * // Create many Ministries
     * const ministry = await prisma.ministry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ministries and only return the `id`
     * const ministryWithIdOnly = await prisma.ministry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MinistryCreateManyAndReturnArgs>(args?: SelectSubset<T, MinistryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ministry.
     * @param {MinistryDeleteArgs} args - Arguments to delete one Ministry.
     * @example
     * // Delete one Ministry
     * const Ministry = await prisma.ministry.delete({
     *   where: {
     *     // ... filter to delete one Ministry
     *   }
     * })
     * 
     */
    delete<T extends MinistryDeleteArgs>(args: SelectSubset<T, MinistryDeleteArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ministry.
     * @param {MinistryUpdateArgs} args - Arguments to update one Ministry.
     * @example
     * // Update one Ministry
     * const ministry = await prisma.ministry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MinistryUpdateArgs>(args: SelectSubset<T, MinistryUpdateArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ministries.
     * @param {MinistryDeleteManyArgs} args - Arguments to filter Ministries to delete.
     * @example
     * // Delete a few Ministries
     * const { count } = await prisma.ministry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MinistryDeleteManyArgs>(args?: SelectSubset<T, MinistryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ministries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ministries
     * const ministry = await prisma.ministry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MinistryUpdateManyArgs>(args: SelectSubset<T, MinistryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ministries and returns the data updated in the database.
     * @param {MinistryUpdateManyAndReturnArgs} args - Arguments to update many Ministries.
     * @example
     * // Update many Ministries
     * const ministry = await prisma.ministry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ministries and only return the `id`
     * const ministryWithIdOnly = await prisma.ministry.updateManyAndReturn({
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
    updateManyAndReturn<T extends MinistryUpdateManyAndReturnArgs>(args: SelectSubset<T, MinistryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ministry.
     * @param {MinistryUpsertArgs} args - Arguments to update or create a Ministry.
     * @example
     * // Update or create a Ministry
     * const ministry = await prisma.ministry.upsert({
     *   create: {
     *     // ... data to create a Ministry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ministry we want to update
     *   }
     * })
     */
    upsert<T extends MinistryUpsertArgs>(args: SelectSubset<T, MinistryUpsertArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ministries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryCountArgs} args - Arguments to filter Ministries to count.
     * @example
     * // Count the number of Ministries
     * const count = await prisma.ministry.count({
     *   where: {
     *     // ... the filter for the Ministries we want to count
     *   }
     * })
    **/
    count<T extends MinistryCountArgs>(
      args?: Subset<T, MinistryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MinistryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ministry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MinistryAggregateArgs>(args: Subset<T, MinistryAggregateArgs>): Prisma.PrismaPromise<GetMinistryAggregateType<T>>

    /**
     * Group by Ministry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryGroupByArgs} args - Group by arguments.
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
      T extends MinistryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MinistryGroupByArgs['orderBy'] }
        : { orderBy?: MinistryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MinistryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMinistryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ministry model
   */
  readonly fields: MinistryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ministry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MinistryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends Ministry$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Ministry$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ministry model
   */
  interface MinistryFieldRefs {
    readonly id: FieldRef<"Ministry", 'String'>
    readonly name: FieldRef<"Ministry", 'String'>
    readonly slug: FieldRef<"Ministry", 'String'>
    readonly description: FieldRef<"Ministry", 'String'>
    readonly imageUrl: FieldRef<"Ministry", 'String'>
    readonly contactName: FieldRef<"Ministry", 'String'>
    readonly contactPhone: FieldRef<"Ministry", 'String'>
    readonly createdAt: FieldRef<"Ministry", 'DateTime'>
    readonly updatedAt: FieldRef<"Ministry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ministry findUnique
   */
  export type MinistryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter, which Ministry to fetch.
     */
    where: MinistryWhereUniqueInput
  }

  /**
   * Ministry findUniqueOrThrow
   */
  export type MinistryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter, which Ministry to fetch.
     */
    where: MinistryWhereUniqueInput
  }

  /**
   * Ministry findFirst
   */
  export type MinistryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter, which Ministry to fetch.
     */
    where?: MinistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ministries to fetch.
     */
    orderBy?: MinistryOrderByWithRelationInput | MinistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ministries.
     */
    cursor?: MinistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ministries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ministries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ministries.
     */
    distinct?: MinistryScalarFieldEnum | MinistryScalarFieldEnum[]
  }

  /**
   * Ministry findFirstOrThrow
   */
  export type MinistryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter, which Ministry to fetch.
     */
    where?: MinistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ministries to fetch.
     */
    orderBy?: MinistryOrderByWithRelationInput | MinistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ministries.
     */
    cursor?: MinistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ministries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ministries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ministries.
     */
    distinct?: MinistryScalarFieldEnum | MinistryScalarFieldEnum[]
  }

  /**
   * Ministry findMany
   */
  export type MinistryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter, which Ministries to fetch.
     */
    where?: MinistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ministries to fetch.
     */
    orderBy?: MinistryOrderByWithRelationInput | MinistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ministries.
     */
    cursor?: MinistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ministries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ministries.
     */
    skip?: number
    distinct?: MinistryScalarFieldEnum | MinistryScalarFieldEnum[]
  }

  /**
   * Ministry create
   */
  export type MinistryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * The data needed to create a Ministry.
     */
    data: XOR<MinistryCreateInput, MinistryUncheckedCreateInput>
  }

  /**
   * Ministry createMany
   */
  export type MinistryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ministries.
     */
    data: MinistryCreateManyInput | MinistryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ministry createManyAndReturn
   */
  export type MinistryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * The data used to create many Ministries.
     */
    data: MinistryCreateManyInput | MinistryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ministry update
   */
  export type MinistryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * The data needed to update a Ministry.
     */
    data: XOR<MinistryUpdateInput, MinistryUncheckedUpdateInput>
    /**
     * Choose, which Ministry to update.
     */
    where: MinistryWhereUniqueInput
  }

  /**
   * Ministry updateMany
   */
  export type MinistryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ministries.
     */
    data: XOR<MinistryUpdateManyMutationInput, MinistryUncheckedUpdateManyInput>
    /**
     * Filter which Ministries to update
     */
    where?: MinistryWhereInput
    /**
     * Limit how many Ministries to update.
     */
    limit?: number
  }

  /**
   * Ministry updateManyAndReturn
   */
  export type MinistryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * The data used to update Ministries.
     */
    data: XOR<MinistryUpdateManyMutationInput, MinistryUncheckedUpdateManyInput>
    /**
     * Filter which Ministries to update
     */
    where?: MinistryWhereInput
    /**
     * Limit how many Ministries to update.
     */
    limit?: number
  }

  /**
   * Ministry upsert
   */
  export type MinistryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * The filter to search for the Ministry to update in case it exists.
     */
    where: MinistryWhereUniqueInput
    /**
     * In case the Ministry found by the `where` argument doesn't exist, create a new Ministry with this data.
     */
    create: XOR<MinistryCreateInput, MinistryUncheckedCreateInput>
    /**
     * In case the Ministry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MinistryUpdateInput, MinistryUncheckedUpdateInput>
  }

  /**
   * Ministry delete
   */
  export type MinistryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter which Ministry to delete.
     */
    where: MinistryWhereUniqueInput
  }

  /**
   * Ministry deleteMany
   */
  export type MinistryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ministries to delete
     */
    where?: MinistryWhereInput
    /**
     * Limit how many Ministries to delete.
     */
    limit?: number
  }

  /**
   * Ministry.media
   */
  export type Ministry$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
    where?: MinistryMediaWhereInput
    orderBy?: MinistryMediaOrderByWithRelationInput | MinistryMediaOrderByWithRelationInput[]
    cursor?: MinistryMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MinistryMediaScalarFieldEnum | MinistryMediaScalarFieldEnum[]
  }

  /**
   * Ministry without action
   */
  export type MinistryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ministry
     */
    omit?: MinistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryInclude<ExtArgs> | null
  }


  /**
   * Model FinancialReport
   */

  export type AggregateFinancialReport = {
    _count: FinancialReportCountAggregateOutputType | null
    _avg: FinancialReportAvgAggregateOutputType | null
    _sum: FinancialReportSumAggregateOutputType | null
    _min: FinancialReportMinAggregateOutputType | null
    _max: FinancialReportMaxAggregateOutputType | null
  }

  export type FinancialReportAvgAggregateOutputType = {
    progressPercentage: number | null
    totalCost: number | null
    amountRaised: number | null
    amountRemaining: number | null
  }

  export type FinancialReportSumAggregateOutputType = {
    progressPercentage: number | null
    totalCost: number | null
    amountRaised: number | null
    amountRemaining: number | null
  }

  export type FinancialReportMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    progressPercentage: number | null
    totalCost: number | null
    amountRaised: number | null
    amountRemaining: number | null
    published: boolean | null
    publishedAt: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialReportMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    progressPercentage: number | null
    totalCost: number | null
    amountRaised: number | null
    amountRemaining: number | null
    published: boolean | null
    publishedAt: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialReportCountAggregateOutputType = {
    id: number
    title: number
    description: number
    progressPercentage: number
    totalCost: number
    amountRaised: number
    amountRemaining: number
    published: number
    publishedAt: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinancialReportAvgAggregateInputType = {
    progressPercentage?: true
    totalCost?: true
    amountRaised?: true
    amountRemaining?: true
  }

  export type FinancialReportSumAggregateInputType = {
    progressPercentage?: true
    totalCost?: true
    amountRaised?: true
    amountRemaining?: true
  }

  export type FinancialReportMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    progressPercentage?: true
    totalCost?: true
    amountRaised?: true
    amountRemaining?: true
    published?: true
    publishedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialReportMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    progressPercentage?: true
    totalCost?: true
    amountRaised?: true
    amountRemaining?: true
    published?: true
    publishedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialReportCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    progressPercentage?: true
    totalCost?: true
    amountRaised?: true
    amountRemaining?: true
    published?: true
    publishedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinancialReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialReport to aggregate.
     */
    where?: FinancialReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialReports to fetch.
     */
    orderBy?: FinancialReportOrderByWithRelationInput | FinancialReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialReports
    **/
    _count?: true | FinancialReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialReportMaxAggregateInputType
  }

  export type GetFinancialReportAggregateType<T extends FinancialReportAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialReport[P]>
      : GetScalarType<T[P], AggregateFinancialReport[P]>
  }




  export type FinancialReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialReportWhereInput
    orderBy?: FinancialReportOrderByWithAggregationInput | FinancialReportOrderByWithAggregationInput[]
    by: FinancialReportScalarFieldEnum[] | FinancialReportScalarFieldEnum
    having?: FinancialReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialReportCountAggregateInputType | true
    _avg?: FinancialReportAvgAggregateInputType
    _sum?: FinancialReportSumAggregateInputType
    _min?: FinancialReportMinAggregateInputType
    _max?: FinancialReportMaxAggregateInputType
  }

  export type FinancialReportGroupByOutputType = {
    id: string
    title: string
    description: string
    progressPercentage: number
    totalCost: number
    amountRaised: number
    amountRemaining: number
    published: boolean
    publishedAt: Date | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: FinancialReportCountAggregateOutputType | null
    _avg: FinancialReportAvgAggregateOutputType | null
    _sum: FinancialReportSumAggregateOutputType | null
    _min: FinancialReportMinAggregateOutputType | null
    _max: FinancialReportMaxAggregateOutputType | null
  }

  type GetFinancialReportGroupByPayload<T extends FinancialReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialReportGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialReportGroupByOutputType[P]>
        }
      >
    >


  export type FinancialReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    progressPercentage?: boolean
    totalCost?: boolean
    amountRaised?: boolean
    amountRemaining?: boolean
    published?: boolean
    publishedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | FinancialReport$mediaArgs<ExtArgs>
    _count?: boolean | FinancialReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialReport"]>

  export type FinancialReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    progressPercentage?: boolean
    totalCost?: boolean
    amountRaised?: boolean
    amountRemaining?: boolean
    published?: boolean
    publishedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialReport"]>

  export type FinancialReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    progressPercentage?: boolean
    totalCost?: boolean
    amountRaised?: boolean
    amountRemaining?: boolean
    published?: boolean
    publishedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialReport"]>

  export type FinancialReportSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    progressPercentage?: boolean
    totalCost?: boolean
    amountRaised?: boolean
    amountRemaining?: boolean
    published?: boolean
    publishedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinancialReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "progressPercentage" | "totalCost" | "amountRaised" | "amountRemaining" | "published" | "publishedAt" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["financialReport"]>
  export type FinancialReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | FinancialReport$mediaArgs<ExtArgs>
    _count?: boolean | FinancialReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FinancialReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinancialReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FinancialReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialReport"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      media: Prisma.$FinancialReportMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      progressPercentage: number
      totalCost: number
      amountRaised: number
      amountRemaining: number
      published: boolean
      publishedAt: Date | null
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["financialReport"]>
    composites: {}
  }

  type FinancialReportGetPayload<S extends boolean | null | undefined | FinancialReportDefaultArgs> = $Result.GetResult<Prisma.$FinancialReportPayload, S>

  type FinancialReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialReportCountAggregateInputType | true
    }

  export interface FinancialReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialReport'], meta: { name: 'FinancialReport' } }
    /**
     * Find zero or one FinancialReport that matches the filter.
     * @param {FinancialReportFindUniqueArgs} args - Arguments to find a FinancialReport
     * @example
     * // Get one FinancialReport
     * const financialReport = await prisma.financialReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialReportFindUniqueArgs>(args: SelectSubset<T, FinancialReportFindUniqueArgs<ExtArgs>>): Prisma__FinancialReportClient<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialReportFindUniqueOrThrowArgs} args - Arguments to find a FinancialReport
     * @example
     * // Get one FinancialReport
     * const financialReport = await prisma.financialReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialReportFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialReportClient<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportFindFirstArgs} args - Arguments to find a FinancialReport
     * @example
     * // Get one FinancialReport
     * const financialReport = await prisma.financialReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialReportFindFirstArgs>(args?: SelectSubset<T, FinancialReportFindFirstArgs<ExtArgs>>): Prisma__FinancialReportClient<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportFindFirstOrThrowArgs} args - Arguments to find a FinancialReport
     * @example
     * // Get one FinancialReport
     * const financialReport = await prisma.financialReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialReportFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialReportClient<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialReports
     * const financialReports = await prisma.financialReport.findMany()
     * 
     * // Get first 10 FinancialReports
     * const financialReports = await prisma.financialReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialReportWithIdOnly = await prisma.financialReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialReportFindManyArgs>(args?: SelectSubset<T, FinancialReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialReport.
     * @param {FinancialReportCreateArgs} args - Arguments to create a FinancialReport.
     * @example
     * // Create one FinancialReport
     * const FinancialReport = await prisma.financialReport.create({
     *   data: {
     *     // ... data to create a FinancialReport
     *   }
     * })
     * 
     */
    create<T extends FinancialReportCreateArgs>(args: SelectSubset<T, FinancialReportCreateArgs<ExtArgs>>): Prisma__FinancialReportClient<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialReports.
     * @param {FinancialReportCreateManyArgs} args - Arguments to create many FinancialReports.
     * @example
     * // Create many FinancialReports
     * const financialReport = await prisma.financialReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialReportCreateManyArgs>(args?: SelectSubset<T, FinancialReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialReports and returns the data saved in the database.
     * @param {FinancialReportCreateManyAndReturnArgs} args - Arguments to create many FinancialReports.
     * @example
     * // Create many FinancialReports
     * const financialReport = await prisma.financialReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialReports and only return the `id`
     * const financialReportWithIdOnly = await prisma.financialReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialReportCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialReport.
     * @param {FinancialReportDeleteArgs} args - Arguments to delete one FinancialReport.
     * @example
     * // Delete one FinancialReport
     * const FinancialReport = await prisma.financialReport.delete({
     *   where: {
     *     // ... filter to delete one FinancialReport
     *   }
     * })
     * 
     */
    delete<T extends FinancialReportDeleteArgs>(args: SelectSubset<T, FinancialReportDeleteArgs<ExtArgs>>): Prisma__FinancialReportClient<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialReport.
     * @param {FinancialReportUpdateArgs} args - Arguments to update one FinancialReport.
     * @example
     * // Update one FinancialReport
     * const financialReport = await prisma.financialReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialReportUpdateArgs>(args: SelectSubset<T, FinancialReportUpdateArgs<ExtArgs>>): Prisma__FinancialReportClient<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialReports.
     * @param {FinancialReportDeleteManyArgs} args - Arguments to filter FinancialReports to delete.
     * @example
     * // Delete a few FinancialReports
     * const { count } = await prisma.financialReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialReportDeleteManyArgs>(args?: SelectSubset<T, FinancialReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialReports
     * const financialReport = await prisma.financialReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialReportUpdateManyArgs>(args: SelectSubset<T, FinancialReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialReports and returns the data updated in the database.
     * @param {FinancialReportUpdateManyAndReturnArgs} args - Arguments to update many FinancialReports.
     * @example
     * // Update many FinancialReports
     * const financialReport = await prisma.financialReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialReports and only return the `id`
     * const financialReportWithIdOnly = await prisma.financialReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends FinancialReportUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialReport.
     * @param {FinancialReportUpsertArgs} args - Arguments to update or create a FinancialReport.
     * @example
     * // Update or create a FinancialReport
     * const financialReport = await prisma.financialReport.upsert({
     *   create: {
     *     // ... data to create a FinancialReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialReport we want to update
     *   }
     * })
     */
    upsert<T extends FinancialReportUpsertArgs>(args: SelectSubset<T, FinancialReportUpsertArgs<ExtArgs>>): Prisma__FinancialReportClient<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportCountArgs} args - Arguments to filter FinancialReports to count.
     * @example
     * // Count the number of FinancialReports
     * const count = await prisma.financialReport.count({
     *   where: {
     *     // ... the filter for the FinancialReports we want to count
     *   }
     * })
    **/
    count<T extends FinancialReportCountArgs>(
      args?: Subset<T, FinancialReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialReportAggregateArgs>(args: Subset<T, FinancialReportAggregateArgs>): Prisma.PrismaPromise<GetFinancialReportAggregateType<T>>

    /**
     * Group by FinancialReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportGroupByArgs} args - Group by arguments.
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
      T extends FinancialReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialReportGroupByArgs['orderBy'] }
        : { orderBy?: FinancialReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialReport model
   */
  readonly fields: FinancialReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends FinancialReport$mediaArgs<ExtArgs> = {}>(args?: Subset<T, FinancialReport$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FinancialReport model
   */
  interface FinancialReportFieldRefs {
    readonly id: FieldRef<"FinancialReport", 'String'>
    readonly title: FieldRef<"FinancialReport", 'String'>
    readonly description: FieldRef<"FinancialReport", 'String'>
    readonly progressPercentage: FieldRef<"FinancialReport", 'Int'>
    readonly totalCost: FieldRef<"FinancialReport", 'Float'>
    readonly amountRaised: FieldRef<"FinancialReport", 'Float'>
    readonly amountRemaining: FieldRef<"FinancialReport", 'Float'>
    readonly published: FieldRef<"FinancialReport", 'Boolean'>
    readonly publishedAt: FieldRef<"FinancialReport", 'DateTime'>
    readonly createdById: FieldRef<"FinancialReport", 'String'>
    readonly createdAt: FieldRef<"FinancialReport", 'DateTime'>
    readonly updatedAt: FieldRef<"FinancialReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinancialReport findUnique
   */
  export type FinancialReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportInclude<ExtArgs> | null
    /**
     * Filter, which FinancialReport to fetch.
     */
    where: FinancialReportWhereUniqueInput
  }

  /**
   * FinancialReport findUniqueOrThrow
   */
  export type FinancialReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportInclude<ExtArgs> | null
    /**
     * Filter, which FinancialReport to fetch.
     */
    where: FinancialReportWhereUniqueInput
  }

  /**
   * FinancialReport findFirst
   */
  export type FinancialReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportInclude<ExtArgs> | null
    /**
     * Filter, which FinancialReport to fetch.
     */
    where?: FinancialReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialReports to fetch.
     */
    orderBy?: FinancialReportOrderByWithRelationInput | FinancialReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialReports.
     */
    cursor?: FinancialReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialReports.
     */
    distinct?: FinancialReportScalarFieldEnum | FinancialReportScalarFieldEnum[]
  }

  /**
   * FinancialReport findFirstOrThrow
   */
  export type FinancialReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportInclude<ExtArgs> | null
    /**
     * Filter, which FinancialReport to fetch.
     */
    where?: FinancialReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialReports to fetch.
     */
    orderBy?: FinancialReportOrderByWithRelationInput | FinancialReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialReports.
     */
    cursor?: FinancialReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialReports.
     */
    distinct?: FinancialReportScalarFieldEnum | FinancialReportScalarFieldEnum[]
  }

  /**
   * FinancialReport findMany
   */
  export type FinancialReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportInclude<ExtArgs> | null
    /**
     * Filter, which FinancialReports to fetch.
     */
    where?: FinancialReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialReports to fetch.
     */
    orderBy?: FinancialReportOrderByWithRelationInput | FinancialReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialReports.
     */
    cursor?: FinancialReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialReports.
     */
    skip?: number
    distinct?: FinancialReportScalarFieldEnum | FinancialReportScalarFieldEnum[]
  }

  /**
   * FinancialReport create
   */
  export type FinancialReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialReport.
     */
    data: XOR<FinancialReportCreateInput, FinancialReportUncheckedCreateInput>
  }

  /**
   * FinancialReport createMany
   */
  export type FinancialReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialReports.
     */
    data: FinancialReportCreateManyInput | FinancialReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialReport createManyAndReturn
   */
  export type FinancialReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialReports.
     */
    data: FinancialReportCreateManyInput | FinancialReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialReport update
   */
  export type FinancialReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialReport.
     */
    data: XOR<FinancialReportUpdateInput, FinancialReportUncheckedUpdateInput>
    /**
     * Choose, which FinancialReport to update.
     */
    where: FinancialReportWhereUniqueInput
  }

  /**
   * FinancialReport updateMany
   */
  export type FinancialReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialReports.
     */
    data: XOR<FinancialReportUpdateManyMutationInput, FinancialReportUncheckedUpdateManyInput>
    /**
     * Filter which FinancialReports to update
     */
    where?: FinancialReportWhereInput
    /**
     * Limit how many FinancialReports to update.
     */
    limit?: number
  }

  /**
   * FinancialReport updateManyAndReturn
   */
  export type FinancialReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * The data used to update FinancialReports.
     */
    data: XOR<FinancialReportUpdateManyMutationInput, FinancialReportUncheckedUpdateManyInput>
    /**
     * Filter which FinancialReports to update
     */
    where?: FinancialReportWhereInput
    /**
     * Limit how many FinancialReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialReport upsert
   */
  export type FinancialReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialReport to update in case it exists.
     */
    where: FinancialReportWhereUniqueInput
    /**
     * In case the FinancialReport found by the `where` argument doesn't exist, create a new FinancialReport with this data.
     */
    create: XOR<FinancialReportCreateInput, FinancialReportUncheckedCreateInput>
    /**
     * In case the FinancialReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialReportUpdateInput, FinancialReportUncheckedUpdateInput>
  }

  /**
   * FinancialReport delete
   */
  export type FinancialReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportInclude<ExtArgs> | null
    /**
     * Filter which FinancialReport to delete.
     */
    where: FinancialReportWhereUniqueInput
  }

  /**
   * FinancialReport deleteMany
   */
  export type FinancialReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialReports to delete
     */
    where?: FinancialReportWhereInput
    /**
     * Limit how many FinancialReports to delete.
     */
    limit?: number
  }

  /**
   * FinancialReport.media
   */
  export type FinancialReport$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
    where?: FinancialReportMediaWhereInput
    orderBy?: FinancialReportMediaOrderByWithRelationInput | FinancialReportMediaOrderByWithRelationInput[]
    cursor?: FinancialReportMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialReportMediaScalarFieldEnum | FinancialReportMediaScalarFieldEnum[]
  }

  /**
   * FinancialReport without action
   */
  export type FinancialReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReport
     */
    select?: FinancialReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReport
     */
    omit?: FinancialReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportInclude<ExtArgs> | null
  }


  /**
   * Model Homily
   */

  export type AggregateHomily = {
    _count: HomilyCountAggregateOutputType | null
    _min: HomilyMinAggregateOutputType | null
    _max: HomilyMaxAggregateOutputType | null
  }

  export type HomilyMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    content: string | null
    date: Date | null
    published: boolean | null
    publishedAt: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomilyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    content: string | null
    date: Date | null
    published: boolean | null
    publishedAt: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomilyCountAggregateOutputType = {
    id: number
    title: number
    description: number
    content: number
    date: number
    published: number
    publishedAt: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomilyMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    content?: true
    date?: true
    published?: true
    publishedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomilyMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    content?: true
    date?: true
    published?: true
    publishedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomilyCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    content?: true
    date?: true
    published?: true
    publishedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomilyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Homily to aggregate.
     */
    where?: HomilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homilies to fetch.
     */
    orderBy?: HomilyOrderByWithRelationInput | HomilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homilies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Homilies
    **/
    _count?: true | HomilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomilyMaxAggregateInputType
  }

  export type GetHomilyAggregateType<T extends HomilyAggregateArgs> = {
        [P in keyof T & keyof AggregateHomily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomily[P]>
      : GetScalarType<T[P], AggregateHomily[P]>
  }




  export type HomilyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomilyWhereInput
    orderBy?: HomilyOrderByWithAggregationInput | HomilyOrderByWithAggregationInput[]
    by: HomilyScalarFieldEnum[] | HomilyScalarFieldEnum
    having?: HomilyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomilyCountAggregateInputType | true
    _min?: HomilyMinAggregateInputType
    _max?: HomilyMaxAggregateInputType
  }

  export type HomilyGroupByOutputType = {
    id: string
    title: string
    description: string | null
    content: string | null
    date: Date
    published: boolean
    publishedAt: Date | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: HomilyCountAggregateOutputType | null
    _min: HomilyMinAggregateOutputType | null
    _max: HomilyMaxAggregateOutputType | null
  }

  type GetHomilyGroupByPayload<T extends HomilyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomilyGroupByOutputType[P]>
            : GetScalarType<T[P], HomilyGroupByOutputType[P]>
        }
      >
    >


  export type HomilySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    date?: boolean
    published?: boolean
    publishedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | Homily$mediaArgs<ExtArgs>
    _count?: boolean | HomilyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homily"]>

  export type HomilySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    date?: boolean
    published?: boolean
    publishedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homily"]>

  export type HomilySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    date?: boolean
    published?: boolean
    publishedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homily"]>

  export type HomilySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    date?: boolean
    published?: boolean
    publishedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomilyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "content" | "date" | "published" | "publishedAt" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["homily"]>
  export type HomilyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | Homily$mediaArgs<ExtArgs>
    _count?: boolean | HomilyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HomilyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HomilyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HomilyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Homily"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      media: Prisma.$HomilyMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      content: string | null
      date: Date
      published: boolean
      publishedAt: Date | null
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homily"]>
    composites: {}
  }

  type HomilyGetPayload<S extends boolean | null | undefined | HomilyDefaultArgs> = $Result.GetResult<Prisma.$HomilyPayload, S>

  type HomilyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomilyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomilyCountAggregateInputType | true
    }

  export interface HomilyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Homily'], meta: { name: 'Homily' } }
    /**
     * Find zero or one Homily that matches the filter.
     * @param {HomilyFindUniqueArgs} args - Arguments to find a Homily
     * @example
     * // Get one Homily
     * const homily = await prisma.homily.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomilyFindUniqueArgs>(args: SelectSubset<T, HomilyFindUniqueArgs<ExtArgs>>): Prisma__HomilyClient<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Homily that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomilyFindUniqueOrThrowArgs} args - Arguments to find a Homily
     * @example
     * // Get one Homily
     * const homily = await prisma.homily.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomilyFindUniqueOrThrowArgs>(args: SelectSubset<T, HomilyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomilyClient<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homily that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyFindFirstArgs} args - Arguments to find a Homily
     * @example
     * // Get one Homily
     * const homily = await prisma.homily.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomilyFindFirstArgs>(args?: SelectSubset<T, HomilyFindFirstArgs<ExtArgs>>): Prisma__HomilyClient<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homily that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyFindFirstOrThrowArgs} args - Arguments to find a Homily
     * @example
     * // Get one Homily
     * const homily = await prisma.homily.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomilyFindFirstOrThrowArgs>(args?: SelectSubset<T, HomilyFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomilyClient<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Homilies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Homilies
     * const homilies = await prisma.homily.findMany()
     * 
     * // Get first 10 Homilies
     * const homilies = await prisma.homily.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homilyWithIdOnly = await prisma.homily.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomilyFindManyArgs>(args?: SelectSubset<T, HomilyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Homily.
     * @param {HomilyCreateArgs} args - Arguments to create a Homily.
     * @example
     * // Create one Homily
     * const Homily = await prisma.homily.create({
     *   data: {
     *     // ... data to create a Homily
     *   }
     * })
     * 
     */
    create<T extends HomilyCreateArgs>(args: SelectSubset<T, HomilyCreateArgs<ExtArgs>>): Prisma__HomilyClient<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Homilies.
     * @param {HomilyCreateManyArgs} args - Arguments to create many Homilies.
     * @example
     * // Create many Homilies
     * const homily = await prisma.homily.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomilyCreateManyArgs>(args?: SelectSubset<T, HomilyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Homilies and returns the data saved in the database.
     * @param {HomilyCreateManyAndReturnArgs} args - Arguments to create many Homilies.
     * @example
     * // Create many Homilies
     * const homily = await prisma.homily.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Homilies and only return the `id`
     * const homilyWithIdOnly = await prisma.homily.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomilyCreateManyAndReturnArgs>(args?: SelectSubset<T, HomilyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Homily.
     * @param {HomilyDeleteArgs} args - Arguments to delete one Homily.
     * @example
     * // Delete one Homily
     * const Homily = await prisma.homily.delete({
     *   where: {
     *     // ... filter to delete one Homily
     *   }
     * })
     * 
     */
    delete<T extends HomilyDeleteArgs>(args: SelectSubset<T, HomilyDeleteArgs<ExtArgs>>): Prisma__HomilyClient<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Homily.
     * @param {HomilyUpdateArgs} args - Arguments to update one Homily.
     * @example
     * // Update one Homily
     * const homily = await prisma.homily.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomilyUpdateArgs>(args: SelectSubset<T, HomilyUpdateArgs<ExtArgs>>): Prisma__HomilyClient<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Homilies.
     * @param {HomilyDeleteManyArgs} args - Arguments to filter Homilies to delete.
     * @example
     * // Delete a few Homilies
     * const { count } = await prisma.homily.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomilyDeleteManyArgs>(args?: SelectSubset<T, HomilyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homilies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Homilies
     * const homily = await prisma.homily.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomilyUpdateManyArgs>(args: SelectSubset<T, HomilyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homilies and returns the data updated in the database.
     * @param {HomilyUpdateManyAndReturnArgs} args - Arguments to update many Homilies.
     * @example
     * // Update many Homilies
     * const homily = await prisma.homily.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Homilies and only return the `id`
     * const homilyWithIdOnly = await prisma.homily.updateManyAndReturn({
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
    updateManyAndReturn<T extends HomilyUpdateManyAndReturnArgs>(args: SelectSubset<T, HomilyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Homily.
     * @param {HomilyUpsertArgs} args - Arguments to update or create a Homily.
     * @example
     * // Update or create a Homily
     * const homily = await prisma.homily.upsert({
     *   create: {
     *     // ... data to create a Homily
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Homily we want to update
     *   }
     * })
     */
    upsert<T extends HomilyUpsertArgs>(args: SelectSubset<T, HomilyUpsertArgs<ExtArgs>>): Prisma__HomilyClient<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Homilies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyCountArgs} args - Arguments to filter Homilies to count.
     * @example
     * // Count the number of Homilies
     * const count = await prisma.homily.count({
     *   where: {
     *     // ... the filter for the Homilies we want to count
     *   }
     * })
    **/
    count<T extends HomilyCountArgs>(
      args?: Subset<T, HomilyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Homily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomilyAggregateArgs>(args: Subset<T, HomilyAggregateArgs>): Prisma.PrismaPromise<GetHomilyAggregateType<T>>

    /**
     * Group by Homily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyGroupByArgs} args - Group by arguments.
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
      T extends HomilyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomilyGroupByArgs['orderBy'] }
        : { orderBy?: HomilyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Homily model
   */
  readonly fields: HomilyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Homily.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomilyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends Homily$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Homily$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Homily model
   */
  interface HomilyFieldRefs {
    readonly id: FieldRef<"Homily", 'String'>
    readonly title: FieldRef<"Homily", 'String'>
    readonly description: FieldRef<"Homily", 'String'>
    readonly content: FieldRef<"Homily", 'String'>
    readonly date: FieldRef<"Homily", 'DateTime'>
    readonly published: FieldRef<"Homily", 'Boolean'>
    readonly publishedAt: FieldRef<"Homily", 'DateTime'>
    readonly createdById: FieldRef<"Homily", 'String'>
    readonly createdAt: FieldRef<"Homily", 'DateTime'>
    readonly updatedAt: FieldRef<"Homily", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Homily findUnique
   */
  export type HomilyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyInclude<ExtArgs> | null
    /**
     * Filter, which Homily to fetch.
     */
    where: HomilyWhereUniqueInput
  }

  /**
   * Homily findUniqueOrThrow
   */
  export type HomilyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyInclude<ExtArgs> | null
    /**
     * Filter, which Homily to fetch.
     */
    where: HomilyWhereUniqueInput
  }

  /**
   * Homily findFirst
   */
  export type HomilyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyInclude<ExtArgs> | null
    /**
     * Filter, which Homily to fetch.
     */
    where?: HomilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homilies to fetch.
     */
    orderBy?: HomilyOrderByWithRelationInput | HomilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Homilies.
     */
    cursor?: HomilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homilies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homilies.
     */
    distinct?: HomilyScalarFieldEnum | HomilyScalarFieldEnum[]
  }

  /**
   * Homily findFirstOrThrow
   */
  export type HomilyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyInclude<ExtArgs> | null
    /**
     * Filter, which Homily to fetch.
     */
    where?: HomilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homilies to fetch.
     */
    orderBy?: HomilyOrderByWithRelationInput | HomilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Homilies.
     */
    cursor?: HomilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homilies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homilies.
     */
    distinct?: HomilyScalarFieldEnum | HomilyScalarFieldEnum[]
  }

  /**
   * Homily findMany
   */
  export type HomilyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyInclude<ExtArgs> | null
    /**
     * Filter, which Homilies to fetch.
     */
    where?: HomilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homilies to fetch.
     */
    orderBy?: HomilyOrderByWithRelationInput | HomilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Homilies.
     */
    cursor?: HomilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homilies.
     */
    skip?: number
    distinct?: HomilyScalarFieldEnum | HomilyScalarFieldEnum[]
  }

  /**
   * Homily create
   */
  export type HomilyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyInclude<ExtArgs> | null
    /**
     * The data needed to create a Homily.
     */
    data: XOR<HomilyCreateInput, HomilyUncheckedCreateInput>
  }

  /**
   * Homily createMany
   */
  export type HomilyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Homilies.
     */
    data: HomilyCreateManyInput | HomilyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Homily createManyAndReturn
   */
  export type HomilyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * The data used to create many Homilies.
     */
    data: HomilyCreateManyInput | HomilyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Homily update
   */
  export type HomilyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyInclude<ExtArgs> | null
    /**
     * The data needed to update a Homily.
     */
    data: XOR<HomilyUpdateInput, HomilyUncheckedUpdateInput>
    /**
     * Choose, which Homily to update.
     */
    where: HomilyWhereUniqueInput
  }

  /**
   * Homily updateMany
   */
  export type HomilyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Homilies.
     */
    data: XOR<HomilyUpdateManyMutationInput, HomilyUncheckedUpdateManyInput>
    /**
     * Filter which Homilies to update
     */
    where?: HomilyWhereInput
    /**
     * Limit how many Homilies to update.
     */
    limit?: number
  }

  /**
   * Homily updateManyAndReturn
   */
  export type HomilyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * The data used to update Homilies.
     */
    data: XOR<HomilyUpdateManyMutationInput, HomilyUncheckedUpdateManyInput>
    /**
     * Filter which Homilies to update
     */
    where?: HomilyWhereInput
    /**
     * Limit how many Homilies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Homily upsert
   */
  export type HomilyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyInclude<ExtArgs> | null
    /**
     * The filter to search for the Homily to update in case it exists.
     */
    where: HomilyWhereUniqueInput
    /**
     * In case the Homily found by the `where` argument doesn't exist, create a new Homily with this data.
     */
    create: XOR<HomilyCreateInput, HomilyUncheckedCreateInput>
    /**
     * In case the Homily was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomilyUpdateInput, HomilyUncheckedUpdateInput>
  }

  /**
   * Homily delete
   */
  export type HomilyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyInclude<ExtArgs> | null
    /**
     * Filter which Homily to delete.
     */
    where: HomilyWhereUniqueInput
  }

  /**
   * Homily deleteMany
   */
  export type HomilyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Homilies to delete
     */
    where?: HomilyWhereInput
    /**
     * Limit how many Homilies to delete.
     */
    limit?: number
  }

  /**
   * Homily.media
   */
  export type Homily$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
    where?: HomilyMediaWhereInput
    orderBy?: HomilyMediaOrderByWithRelationInput | HomilyMediaOrderByWithRelationInput[]
    cursor?: HomilyMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HomilyMediaScalarFieldEnum | HomilyMediaScalarFieldEnum[]
  }

  /**
   * Homily without action
   */
  export type HomilyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homily
     */
    select?: HomilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homily
     */
    omit?: HomilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    type: $Enums.AppointmentType | null
    name: string | null
    phone: string | null
    email: string | null
    preferredDate: Date | null
    notes: string | null
    status: $Enums.AppointmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    type: $Enums.AppointmentType | null
    name: string | null
    phone: string | null
    email: string | null
    preferredDate: Date | null
    notes: string | null
    status: $Enums.AppointmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    type: number
    name: number
    phone: number
    email: number
    preferredDate: number
    notes: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    phone?: true
    email?: true
    preferredDate?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    phone?: true
    email?: true
    preferredDate?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    phone?: true
    email?: true
    preferredDate?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    type: $Enums.AppointmentType
    name: string
    phone: string
    email: string
    preferredDate: Date | null
    notes: string | null
    status: $Enums.AppointmentStatus
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    preferredDate?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documents?: boolean | Appointment$documentsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    preferredDate?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    preferredDate?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    preferredDate?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "phone" | "email" | "preferredDate" | "notes" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Appointment$documentsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      documents: Prisma.$AppointmentDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.AppointmentType
      name: string
      phone: string
      email: string
      preferredDate: Date | null
      notes: string | null
      status: $Enums.AppointmentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends Appointment$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly type: FieldRef<"Appointment", 'AppointmentType'>
    readonly name: FieldRef<"Appointment", 'String'>
    readonly phone: FieldRef<"Appointment", 'String'>
    readonly email: FieldRef<"Appointment", 'String'>
    readonly preferredDate: FieldRef<"Appointment", 'DateTime'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.documents
   */
  export type Appointment$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentInclude<ExtArgs> | null
    where?: AppointmentDocumentWhereInput
    orderBy?: AppointmentDocumentOrderByWithRelationInput | AppointmentDocumentOrderByWithRelationInput[]
    cursor?: AppointmentDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentDocumentScalarFieldEnum | AppointmentDocumentScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model AppointmentDocument
   */

  export type AggregateAppointmentDocument = {
    _count: AppointmentDocumentCountAggregateOutputType | null
    _min: AppointmentDocumentMinAggregateOutputType | null
    _max: AppointmentDocumentMaxAggregateOutputType | null
  }

  export type AppointmentDocumentMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    fileUrl: string | null
    createdAt: Date | null
  }

  export type AppointmentDocumentMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    fileUrl: string | null
    createdAt: Date | null
  }

  export type AppointmentDocumentCountAggregateOutputType = {
    id: number
    appointmentId: number
    fileUrl: number
    createdAt: number
    _all: number
  }


  export type AppointmentDocumentMinAggregateInputType = {
    id?: true
    appointmentId?: true
    fileUrl?: true
    createdAt?: true
  }

  export type AppointmentDocumentMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    fileUrl?: true
    createdAt?: true
  }

  export type AppointmentDocumentCountAggregateInputType = {
    id?: true
    appointmentId?: true
    fileUrl?: true
    createdAt?: true
    _all?: true
  }

  export type AppointmentDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentDocument to aggregate.
     */
    where?: AppointmentDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentDocuments to fetch.
     */
    orderBy?: AppointmentDocumentOrderByWithRelationInput | AppointmentDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointmentDocuments
    **/
    _count?: true | AppointmentDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentDocumentMaxAggregateInputType
  }

  export type GetAppointmentDocumentAggregateType<T extends AppointmentDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointmentDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointmentDocument[P]>
      : GetScalarType<T[P], AggregateAppointmentDocument[P]>
  }




  export type AppointmentDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentDocumentWhereInput
    orderBy?: AppointmentDocumentOrderByWithAggregationInput | AppointmentDocumentOrderByWithAggregationInput[]
    by: AppointmentDocumentScalarFieldEnum[] | AppointmentDocumentScalarFieldEnum
    having?: AppointmentDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentDocumentCountAggregateInputType | true
    _min?: AppointmentDocumentMinAggregateInputType
    _max?: AppointmentDocumentMaxAggregateInputType
  }

  export type AppointmentDocumentGroupByOutputType = {
    id: string
    appointmentId: string
    fileUrl: string
    createdAt: Date
    _count: AppointmentDocumentCountAggregateOutputType | null
    _min: AppointmentDocumentMinAggregateOutputType | null
    _max: AppointmentDocumentMaxAggregateOutputType | null
  }

  type GetAppointmentDocumentGroupByPayload<T extends AppointmentDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentDocumentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentDocument"]>

  export type AppointmentDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentDocument"]>

  export type AppointmentDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentDocument"]>

  export type AppointmentDocumentSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    fileUrl?: boolean
    createdAt?: boolean
  }

  export type AppointmentDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "fileUrl" | "createdAt", ExtArgs["result"]["appointmentDocument"]>
  export type AppointmentDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }
  export type AppointmentDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }
  export type AppointmentDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $AppointmentDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppointmentDocument"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string
      fileUrl: string
      createdAt: Date
    }, ExtArgs["result"]["appointmentDocument"]>
    composites: {}
  }

  type AppointmentDocumentGetPayload<S extends boolean | null | undefined | AppointmentDocumentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentDocumentPayload, S>

  type AppointmentDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentDocumentCountAggregateInputType | true
    }

  export interface AppointmentDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppointmentDocument'], meta: { name: 'AppointmentDocument' } }
    /**
     * Find zero or one AppointmentDocument that matches the filter.
     * @param {AppointmentDocumentFindUniqueArgs} args - Arguments to find a AppointmentDocument
     * @example
     * // Get one AppointmentDocument
     * const appointmentDocument = await prisma.appointmentDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentDocumentFindUniqueArgs>(args: SelectSubset<T, AppointmentDocumentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentDocumentClient<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppointmentDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentDocumentFindUniqueOrThrowArgs} args - Arguments to find a AppointmentDocument
     * @example
     * // Get one AppointmentDocument
     * const appointmentDocument = await prisma.appointmentDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentDocumentClient<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDocumentFindFirstArgs} args - Arguments to find a AppointmentDocument
     * @example
     * // Get one AppointmentDocument
     * const appointmentDocument = await prisma.appointmentDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentDocumentFindFirstArgs>(args?: SelectSubset<T, AppointmentDocumentFindFirstArgs<ExtArgs>>): Prisma__AppointmentDocumentClient<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDocumentFindFirstOrThrowArgs} args - Arguments to find a AppointmentDocument
     * @example
     * // Get one AppointmentDocument
     * const appointmentDocument = await prisma.appointmentDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentDocumentClient<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppointmentDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointmentDocuments
     * const appointmentDocuments = await prisma.appointmentDocument.findMany()
     * 
     * // Get first 10 AppointmentDocuments
     * const appointmentDocuments = await prisma.appointmentDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentDocumentWithIdOnly = await prisma.appointmentDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentDocumentFindManyArgs>(args?: SelectSubset<T, AppointmentDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppointmentDocument.
     * @param {AppointmentDocumentCreateArgs} args - Arguments to create a AppointmentDocument.
     * @example
     * // Create one AppointmentDocument
     * const AppointmentDocument = await prisma.appointmentDocument.create({
     *   data: {
     *     // ... data to create a AppointmentDocument
     *   }
     * })
     * 
     */
    create<T extends AppointmentDocumentCreateArgs>(args: SelectSubset<T, AppointmentDocumentCreateArgs<ExtArgs>>): Prisma__AppointmentDocumentClient<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppointmentDocuments.
     * @param {AppointmentDocumentCreateManyArgs} args - Arguments to create many AppointmentDocuments.
     * @example
     * // Create many AppointmentDocuments
     * const appointmentDocument = await prisma.appointmentDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentDocumentCreateManyArgs>(args?: SelectSubset<T, AppointmentDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppointmentDocuments and returns the data saved in the database.
     * @param {AppointmentDocumentCreateManyAndReturnArgs} args - Arguments to create many AppointmentDocuments.
     * @example
     * // Create many AppointmentDocuments
     * const appointmentDocument = await prisma.appointmentDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppointmentDocuments and only return the `id`
     * const appointmentDocumentWithIdOnly = await prisma.appointmentDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppointmentDocument.
     * @param {AppointmentDocumentDeleteArgs} args - Arguments to delete one AppointmentDocument.
     * @example
     * // Delete one AppointmentDocument
     * const AppointmentDocument = await prisma.appointmentDocument.delete({
     *   where: {
     *     // ... filter to delete one AppointmentDocument
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDocumentDeleteArgs>(args: SelectSubset<T, AppointmentDocumentDeleteArgs<ExtArgs>>): Prisma__AppointmentDocumentClient<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppointmentDocument.
     * @param {AppointmentDocumentUpdateArgs} args - Arguments to update one AppointmentDocument.
     * @example
     * // Update one AppointmentDocument
     * const appointmentDocument = await prisma.appointmentDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentDocumentUpdateArgs>(args: SelectSubset<T, AppointmentDocumentUpdateArgs<ExtArgs>>): Prisma__AppointmentDocumentClient<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppointmentDocuments.
     * @param {AppointmentDocumentDeleteManyArgs} args - Arguments to filter AppointmentDocuments to delete.
     * @example
     * // Delete a few AppointmentDocuments
     * const { count } = await prisma.appointmentDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDocumentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointmentDocuments
     * const appointmentDocument = await prisma.appointmentDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentDocumentUpdateManyArgs>(args: SelectSubset<T, AppointmentDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentDocuments and returns the data updated in the database.
     * @param {AppointmentDocumentUpdateManyAndReturnArgs} args - Arguments to update many AppointmentDocuments.
     * @example
     * // Update many AppointmentDocuments
     * const appointmentDocument = await prisma.appointmentDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppointmentDocuments and only return the `id`
     * const appointmentDocumentWithIdOnly = await prisma.appointmentDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppointmentDocument.
     * @param {AppointmentDocumentUpsertArgs} args - Arguments to update or create a AppointmentDocument.
     * @example
     * // Update or create a AppointmentDocument
     * const appointmentDocument = await prisma.appointmentDocument.upsert({
     *   create: {
     *     // ... data to create a AppointmentDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointmentDocument we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentDocumentUpsertArgs>(args: SelectSubset<T, AppointmentDocumentUpsertArgs<ExtArgs>>): Prisma__AppointmentDocumentClient<$Result.GetResult<Prisma.$AppointmentDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppointmentDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDocumentCountArgs} args - Arguments to filter AppointmentDocuments to count.
     * @example
     * // Count the number of AppointmentDocuments
     * const count = await prisma.appointmentDocument.count({
     *   where: {
     *     // ... the filter for the AppointmentDocuments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentDocumentCountArgs>(
      args?: Subset<T, AppointmentDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointmentDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentDocumentAggregateArgs>(args: Subset<T, AppointmentDocumentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentDocumentAggregateType<T>>

    /**
     * Group by AppointmentDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentDocumentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentDocumentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppointmentDocument model
   */
  readonly fields: AppointmentDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointmentDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AppointmentDocument model
   */
  interface AppointmentDocumentFieldRefs {
    readonly id: FieldRef<"AppointmentDocument", 'String'>
    readonly appointmentId: FieldRef<"AppointmentDocument", 'String'>
    readonly fileUrl: FieldRef<"AppointmentDocument", 'String'>
    readonly createdAt: FieldRef<"AppointmentDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppointmentDocument findUnique
   */
  export type AppointmentDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentDocument to fetch.
     */
    where: AppointmentDocumentWhereUniqueInput
  }

  /**
   * AppointmentDocument findUniqueOrThrow
   */
  export type AppointmentDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentDocument to fetch.
     */
    where: AppointmentDocumentWhereUniqueInput
  }

  /**
   * AppointmentDocument findFirst
   */
  export type AppointmentDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentDocument to fetch.
     */
    where?: AppointmentDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentDocuments to fetch.
     */
    orderBy?: AppointmentDocumentOrderByWithRelationInput | AppointmentDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentDocuments.
     */
    cursor?: AppointmentDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentDocuments.
     */
    distinct?: AppointmentDocumentScalarFieldEnum | AppointmentDocumentScalarFieldEnum[]
  }

  /**
   * AppointmentDocument findFirstOrThrow
   */
  export type AppointmentDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentDocument to fetch.
     */
    where?: AppointmentDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentDocuments to fetch.
     */
    orderBy?: AppointmentDocumentOrderByWithRelationInput | AppointmentDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentDocuments.
     */
    cursor?: AppointmentDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentDocuments.
     */
    distinct?: AppointmentDocumentScalarFieldEnum | AppointmentDocumentScalarFieldEnum[]
  }

  /**
   * AppointmentDocument findMany
   */
  export type AppointmentDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentDocuments to fetch.
     */
    where?: AppointmentDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentDocuments to fetch.
     */
    orderBy?: AppointmentDocumentOrderByWithRelationInput | AppointmentDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointmentDocuments.
     */
    cursor?: AppointmentDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentDocuments.
     */
    skip?: number
    distinct?: AppointmentDocumentScalarFieldEnum | AppointmentDocumentScalarFieldEnum[]
  }

  /**
   * AppointmentDocument create
   */
  export type AppointmentDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a AppointmentDocument.
     */
    data: XOR<AppointmentDocumentCreateInput, AppointmentDocumentUncheckedCreateInput>
  }

  /**
   * AppointmentDocument createMany
   */
  export type AppointmentDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppointmentDocuments.
     */
    data: AppointmentDocumentCreateManyInput | AppointmentDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppointmentDocument createManyAndReturn
   */
  export type AppointmentDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many AppointmentDocuments.
     */
    data: AppointmentDocumentCreateManyInput | AppointmentDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppointmentDocument update
   */
  export type AppointmentDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a AppointmentDocument.
     */
    data: XOR<AppointmentDocumentUpdateInput, AppointmentDocumentUncheckedUpdateInput>
    /**
     * Choose, which AppointmentDocument to update.
     */
    where: AppointmentDocumentWhereUniqueInput
  }

  /**
   * AppointmentDocument updateMany
   */
  export type AppointmentDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppointmentDocuments.
     */
    data: XOR<AppointmentDocumentUpdateManyMutationInput, AppointmentDocumentUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentDocuments to update
     */
    where?: AppointmentDocumentWhereInput
    /**
     * Limit how many AppointmentDocuments to update.
     */
    limit?: number
  }

  /**
   * AppointmentDocument updateManyAndReturn
   */
  export type AppointmentDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * The data used to update AppointmentDocuments.
     */
    data: XOR<AppointmentDocumentUpdateManyMutationInput, AppointmentDocumentUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentDocuments to update
     */
    where?: AppointmentDocumentWhereInput
    /**
     * Limit how many AppointmentDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppointmentDocument upsert
   */
  export type AppointmentDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the AppointmentDocument to update in case it exists.
     */
    where: AppointmentDocumentWhereUniqueInput
    /**
     * In case the AppointmentDocument found by the `where` argument doesn't exist, create a new AppointmentDocument with this data.
     */
    create: XOR<AppointmentDocumentCreateInput, AppointmentDocumentUncheckedCreateInput>
    /**
     * In case the AppointmentDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentDocumentUpdateInput, AppointmentDocumentUncheckedUpdateInput>
  }

  /**
   * AppointmentDocument delete
   */
  export type AppointmentDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentInclude<ExtArgs> | null
    /**
     * Filter which AppointmentDocument to delete.
     */
    where: AppointmentDocumentWhereUniqueInput
  }

  /**
   * AppointmentDocument deleteMany
   */
  export type AppointmentDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentDocuments to delete
     */
    where?: AppointmentDocumentWhereInput
    /**
     * Limit how many AppointmentDocuments to delete.
     */
    limit?: number
  }

  /**
   * AppointmentDocument without action
   */
  export type AppointmentDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentDocument
     */
    select?: AppointmentDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentDocument
     */
    omit?: AppointmentDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentDocumentInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    size: number | null
  }

  export type MediaSumAggregateOutputType = {
    size: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    url: string | null
    type: $Enums.MediaType | null
    altText: string | null
    size: number | null
    createdAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    url: string | null
    type: $Enums.MediaType | null
    altText: string | null
    size: number | null
    createdAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    url: number
    type: number
    altText: number
    size: number
    createdAt: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    size?: true
  }

  export type MediaSumAggregateInputType = {
    size?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    altText?: true
    size?: true
    createdAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    altText?: true
    size?: true
    createdAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    altText?: true
    size?: true
    createdAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    url: string
    type: $Enums.MediaType
    altText: string | null
    size: number | null
    createdAt: Date
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    altText?: boolean
    size?: boolean
    createdAt?: boolean
    news?: boolean | Media$newsArgs<ExtArgs>
    ministries?: boolean | Media$ministriesArgs<ExtArgs>
    financialReports?: boolean | Media$financialReportsArgs<ExtArgs>
    homilies?: boolean | Media$homiliesArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    altText?: boolean
    size?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    altText?: boolean
    size?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    altText?: boolean
    size?: boolean
    createdAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "type" | "altText" | "size" | "createdAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | Media$newsArgs<ExtArgs>
    ministries?: boolean | Media$ministriesArgs<ExtArgs>
    financialReports?: boolean | Media$financialReportsArgs<ExtArgs>
    homilies?: boolean | Media$homiliesArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      news: Prisma.$NewsMediaPayload<ExtArgs>[]
      ministries: Prisma.$MinistryMediaPayload<ExtArgs>[]
      financialReports: Prisma.$FinancialReportMediaPayload<ExtArgs>[]
      homilies: Prisma.$HomilyMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      type: $Enums.MediaType
      altText: string | null
      size: number | null
      createdAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
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
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
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
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends Media$newsArgs<ExtArgs> = {}>(args?: Subset<T, Media$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ministries<T extends Media$ministriesArgs<ExtArgs> = {}>(args?: Subset<T, Media$ministriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialReports<T extends Media$financialReportsArgs<ExtArgs> = {}>(args?: Subset<T, Media$financialReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    homilies<T extends Media$homiliesArgs<ExtArgs> = {}>(args?: Subset<T, Media$homiliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly type: FieldRef<"Media", 'MediaType'>
    readonly altText: FieldRef<"Media", 'String'>
    readonly size: FieldRef<"Media", 'Int'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media.news
   */
  export type Media$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
    where?: NewsMediaWhereInput
    orderBy?: NewsMediaOrderByWithRelationInput | NewsMediaOrderByWithRelationInput[]
    cursor?: NewsMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsMediaScalarFieldEnum | NewsMediaScalarFieldEnum[]
  }

  /**
   * Media.ministries
   */
  export type Media$ministriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
    where?: MinistryMediaWhereInput
    orderBy?: MinistryMediaOrderByWithRelationInput | MinistryMediaOrderByWithRelationInput[]
    cursor?: MinistryMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MinistryMediaScalarFieldEnum | MinistryMediaScalarFieldEnum[]
  }

  /**
   * Media.financialReports
   */
  export type Media$financialReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
    where?: FinancialReportMediaWhereInput
    orderBy?: FinancialReportMediaOrderByWithRelationInput | FinancialReportMediaOrderByWithRelationInput[]
    cursor?: FinancialReportMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialReportMediaScalarFieldEnum | FinancialReportMediaScalarFieldEnum[]
  }

  /**
   * Media.homilies
   */
  export type Media$homiliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
    where?: HomilyMediaWhereInput
    orderBy?: HomilyMediaOrderByWithRelationInput | HomilyMediaOrderByWithRelationInput[]
    cursor?: HomilyMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HomilyMediaScalarFieldEnum | HomilyMediaScalarFieldEnum[]
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model NewsMedia
   */

  export type AggregateNewsMedia = {
    _count: NewsMediaCountAggregateOutputType | null
    _min: NewsMediaMinAggregateOutputType | null
    _max: NewsMediaMaxAggregateOutputType | null
  }

  export type NewsMediaMinAggregateOutputType = {
    newsId: string | null
    mediaId: string | null
  }

  export type NewsMediaMaxAggregateOutputType = {
    newsId: string | null
    mediaId: string | null
  }

  export type NewsMediaCountAggregateOutputType = {
    newsId: number
    mediaId: number
    _all: number
  }


  export type NewsMediaMinAggregateInputType = {
    newsId?: true
    mediaId?: true
  }

  export type NewsMediaMaxAggregateInputType = {
    newsId?: true
    mediaId?: true
  }

  export type NewsMediaCountAggregateInputType = {
    newsId?: true
    mediaId?: true
    _all?: true
  }

  export type NewsMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsMedia to aggregate.
     */
    where?: NewsMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsMedias to fetch.
     */
    orderBy?: NewsMediaOrderByWithRelationInput | NewsMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsMedias
    **/
    _count?: true | NewsMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMediaMaxAggregateInputType
  }

  export type GetNewsMediaAggregateType<T extends NewsMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsMedia[P]>
      : GetScalarType<T[P], AggregateNewsMedia[P]>
  }




  export type NewsMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsMediaWhereInput
    orderBy?: NewsMediaOrderByWithAggregationInput | NewsMediaOrderByWithAggregationInput[]
    by: NewsMediaScalarFieldEnum[] | NewsMediaScalarFieldEnum
    having?: NewsMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsMediaCountAggregateInputType | true
    _min?: NewsMediaMinAggregateInputType
    _max?: NewsMediaMaxAggregateInputType
  }

  export type NewsMediaGroupByOutputType = {
    newsId: string
    mediaId: string
    _count: NewsMediaCountAggregateOutputType | null
    _min: NewsMediaMinAggregateOutputType | null
    _max: NewsMediaMaxAggregateOutputType | null
  }

  type GetNewsMediaGroupByPayload<T extends NewsMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsMediaGroupByOutputType[P]>
            : GetScalarType<T[P], NewsMediaGroupByOutputType[P]>
        }
      >
    >


  export type NewsMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    newsId?: boolean
    mediaId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsMedia"]>

  export type NewsMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    newsId?: boolean
    mediaId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsMedia"]>

  export type NewsMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    newsId?: boolean
    mediaId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsMedia"]>

  export type NewsMediaSelectScalar = {
    newsId?: boolean
    mediaId?: boolean
  }

  export type NewsMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"newsId" | "mediaId", ExtArgs["result"]["newsMedia"]>
  export type NewsMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type NewsMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type NewsMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }

  export type $NewsMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsMedia"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      newsId: string
      mediaId: string
    }, ExtArgs["result"]["newsMedia"]>
    composites: {}
  }

  type NewsMediaGetPayload<S extends boolean | null | undefined | NewsMediaDefaultArgs> = $Result.GetResult<Prisma.$NewsMediaPayload, S>

  type NewsMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsMediaCountAggregateInputType | true
    }

  export interface NewsMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsMedia'], meta: { name: 'NewsMedia' } }
    /**
     * Find zero or one NewsMedia that matches the filter.
     * @param {NewsMediaFindUniqueArgs} args - Arguments to find a NewsMedia
     * @example
     * // Get one NewsMedia
     * const newsMedia = await prisma.newsMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsMediaFindUniqueArgs>(args: SelectSubset<T, NewsMediaFindUniqueArgs<ExtArgs>>): Prisma__NewsMediaClient<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsMediaFindUniqueOrThrowArgs} args - Arguments to find a NewsMedia
     * @example
     * // Get one NewsMedia
     * const newsMedia = await prisma.newsMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsMediaClient<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsMediaFindFirstArgs} args - Arguments to find a NewsMedia
     * @example
     * // Get one NewsMedia
     * const newsMedia = await prisma.newsMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsMediaFindFirstArgs>(args?: SelectSubset<T, NewsMediaFindFirstArgs<ExtArgs>>): Prisma__NewsMediaClient<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsMediaFindFirstOrThrowArgs} args - Arguments to find a NewsMedia
     * @example
     * // Get one NewsMedia
     * const newsMedia = await prisma.newsMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsMediaClient<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsMedias
     * const newsMedias = await prisma.newsMedia.findMany()
     * 
     * // Get first 10 NewsMedias
     * const newsMedias = await prisma.newsMedia.findMany({ take: 10 })
     * 
     * // Only select the `newsId`
     * const newsMediaWithNewsIdOnly = await prisma.newsMedia.findMany({ select: { newsId: true } })
     * 
     */
    findMany<T extends NewsMediaFindManyArgs>(args?: SelectSubset<T, NewsMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsMedia.
     * @param {NewsMediaCreateArgs} args - Arguments to create a NewsMedia.
     * @example
     * // Create one NewsMedia
     * const NewsMedia = await prisma.newsMedia.create({
     *   data: {
     *     // ... data to create a NewsMedia
     *   }
     * })
     * 
     */
    create<T extends NewsMediaCreateArgs>(args: SelectSubset<T, NewsMediaCreateArgs<ExtArgs>>): Prisma__NewsMediaClient<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsMedias.
     * @param {NewsMediaCreateManyArgs} args - Arguments to create many NewsMedias.
     * @example
     * // Create many NewsMedias
     * const newsMedia = await prisma.newsMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsMediaCreateManyArgs>(args?: SelectSubset<T, NewsMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsMedias and returns the data saved in the database.
     * @param {NewsMediaCreateManyAndReturnArgs} args - Arguments to create many NewsMedias.
     * @example
     * // Create many NewsMedias
     * const newsMedia = await prisma.newsMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsMedias and only return the `newsId`
     * const newsMediaWithNewsIdOnly = await prisma.newsMedia.createManyAndReturn({
     *   select: { newsId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsMedia.
     * @param {NewsMediaDeleteArgs} args - Arguments to delete one NewsMedia.
     * @example
     * // Delete one NewsMedia
     * const NewsMedia = await prisma.newsMedia.delete({
     *   where: {
     *     // ... filter to delete one NewsMedia
     *   }
     * })
     * 
     */
    delete<T extends NewsMediaDeleteArgs>(args: SelectSubset<T, NewsMediaDeleteArgs<ExtArgs>>): Prisma__NewsMediaClient<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsMedia.
     * @param {NewsMediaUpdateArgs} args - Arguments to update one NewsMedia.
     * @example
     * // Update one NewsMedia
     * const newsMedia = await prisma.newsMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsMediaUpdateArgs>(args: SelectSubset<T, NewsMediaUpdateArgs<ExtArgs>>): Prisma__NewsMediaClient<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsMedias.
     * @param {NewsMediaDeleteManyArgs} args - Arguments to filter NewsMedias to delete.
     * @example
     * // Delete a few NewsMedias
     * const { count } = await prisma.newsMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsMediaDeleteManyArgs>(args?: SelectSubset<T, NewsMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsMedias
     * const newsMedia = await prisma.newsMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsMediaUpdateManyArgs>(args: SelectSubset<T, NewsMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsMedias and returns the data updated in the database.
     * @param {NewsMediaUpdateManyAndReturnArgs} args - Arguments to update many NewsMedias.
     * @example
     * // Update many NewsMedias
     * const newsMedia = await prisma.newsMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsMedias and only return the `newsId`
     * const newsMediaWithNewsIdOnly = await prisma.newsMedia.updateManyAndReturn({
     *   select: { newsId: true },
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
    updateManyAndReturn<T extends NewsMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsMedia.
     * @param {NewsMediaUpsertArgs} args - Arguments to update or create a NewsMedia.
     * @example
     * // Update or create a NewsMedia
     * const newsMedia = await prisma.newsMedia.upsert({
     *   create: {
     *     // ... data to create a NewsMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsMedia we want to update
     *   }
     * })
     */
    upsert<T extends NewsMediaUpsertArgs>(args: SelectSubset<T, NewsMediaUpsertArgs<ExtArgs>>): Prisma__NewsMediaClient<$Result.GetResult<Prisma.$NewsMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsMediaCountArgs} args - Arguments to filter NewsMedias to count.
     * @example
     * // Count the number of NewsMedias
     * const count = await prisma.newsMedia.count({
     *   where: {
     *     // ... the filter for the NewsMedias we want to count
     *   }
     * })
    **/
    count<T extends NewsMediaCountArgs>(
      args?: Subset<T, NewsMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsMediaAggregateArgs>(args: Subset<T, NewsMediaAggregateArgs>): Prisma.PrismaPromise<GetNewsMediaAggregateType<T>>

    /**
     * Group by NewsMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsMediaGroupByArgs} args - Group by arguments.
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
      T extends NewsMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsMediaGroupByArgs['orderBy'] }
        : { orderBy?: NewsMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsMedia model
   */
  readonly fields: NewsMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NewsMedia model
   */
  interface NewsMediaFieldRefs {
    readonly newsId: FieldRef<"NewsMedia", 'String'>
    readonly mediaId: FieldRef<"NewsMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsMedia findUnique
   */
  export type NewsMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
    /**
     * Filter, which NewsMedia to fetch.
     */
    where: NewsMediaWhereUniqueInput
  }

  /**
   * NewsMedia findUniqueOrThrow
   */
  export type NewsMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
    /**
     * Filter, which NewsMedia to fetch.
     */
    where: NewsMediaWhereUniqueInput
  }

  /**
   * NewsMedia findFirst
   */
  export type NewsMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
    /**
     * Filter, which NewsMedia to fetch.
     */
    where?: NewsMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsMedias to fetch.
     */
    orderBy?: NewsMediaOrderByWithRelationInput | NewsMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsMedias.
     */
    cursor?: NewsMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsMedias.
     */
    distinct?: NewsMediaScalarFieldEnum | NewsMediaScalarFieldEnum[]
  }

  /**
   * NewsMedia findFirstOrThrow
   */
  export type NewsMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
    /**
     * Filter, which NewsMedia to fetch.
     */
    where?: NewsMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsMedias to fetch.
     */
    orderBy?: NewsMediaOrderByWithRelationInput | NewsMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsMedias.
     */
    cursor?: NewsMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsMedias.
     */
    distinct?: NewsMediaScalarFieldEnum | NewsMediaScalarFieldEnum[]
  }

  /**
   * NewsMedia findMany
   */
  export type NewsMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
    /**
     * Filter, which NewsMedias to fetch.
     */
    where?: NewsMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsMedias to fetch.
     */
    orderBy?: NewsMediaOrderByWithRelationInput | NewsMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsMedias.
     */
    cursor?: NewsMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsMedias.
     */
    skip?: number
    distinct?: NewsMediaScalarFieldEnum | NewsMediaScalarFieldEnum[]
  }

  /**
   * NewsMedia create
   */
  export type NewsMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsMedia.
     */
    data: XOR<NewsMediaCreateInput, NewsMediaUncheckedCreateInput>
  }

  /**
   * NewsMedia createMany
   */
  export type NewsMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsMedias.
     */
    data: NewsMediaCreateManyInput | NewsMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsMedia createManyAndReturn
   */
  export type NewsMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * The data used to create many NewsMedias.
     */
    data: NewsMediaCreateManyInput | NewsMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsMedia update
   */
  export type NewsMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsMedia.
     */
    data: XOR<NewsMediaUpdateInput, NewsMediaUncheckedUpdateInput>
    /**
     * Choose, which NewsMedia to update.
     */
    where: NewsMediaWhereUniqueInput
  }

  /**
   * NewsMedia updateMany
   */
  export type NewsMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsMedias.
     */
    data: XOR<NewsMediaUpdateManyMutationInput, NewsMediaUncheckedUpdateManyInput>
    /**
     * Filter which NewsMedias to update
     */
    where?: NewsMediaWhereInput
    /**
     * Limit how many NewsMedias to update.
     */
    limit?: number
  }

  /**
   * NewsMedia updateManyAndReturn
   */
  export type NewsMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * The data used to update NewsMedias.
     */
    data: XOR<NewsMediaUpdateManyMutationInput, NewsMediaUncheckedUpdateManyInput>
    /**
     * Filter which NewsMedias to update
     */
    where?: NewsMediaWhereInput
    /**
     * Limit how many NewsMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsMedia upsert
   */
  export type NewsMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsMedia to update in case it exists.
     */
    where: NewsMediaWhereUniqueInput
    /**
     * In case the NewsMedia found by the `where` argument doesn't exist, create a new NewsMedia with this data.
     */
    create: XOR<NewsMediaCreateInput, NewsMediaUncheckedCreateInput>
    /**
     * In case the NewsMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsMediaUpdateInput, NewsMediaUncheckedUpdateInput>
  }

  /**
   * NewsMedia delete
   */
  export type NewsMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
    /**
     * Filter which NewsMedia to delete.
     */
    where: NewsMediaWhereUniqueInput
  }

  /**
   * NewsMedia deleteMany
   */
  export type NewsMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsMedias to delete
     */
    where?: NewsMediaWhereInput
    /**
     * Limit how many NewsMedias to delete.
     */
    limit?: number
  }

  /**
   * NewsMedia without action
   */
  export type NewsMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsMedia
     */
    select?: NewsMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsMedia
     */
    omit?: NewsMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsMediaInclude<ExtArgs> | null
  }


  /**
   * Model MinistryMedia
   */

  export type AggregateMinistryMedia = {
    _count: MinistryMediaCountAggregateOutputType | null
    _min: MinistryMediaMinAggregateOutputType | null
    _max: MinistryMediaMaxAggregateOutputType | null
  }

  export type MinistryMediaMinAggregateOutputType = {
    ministryId: string | null
    mediaId: string | null
  }

  export type MinistryMediaMaxAggregateOutputType = {
    ministryId: string | null
    mediaId: string | null
  }

  export type MinistryMediaCountAggregateOutputType = {
    ministryId: number
    mediaId: number
    _all: number
  }


  export type MinistryMediaMinAggregateInputType = {
    ministryId?: true
    mediaId?: true
  }

  export type MinistryMediaMaxAggregateInputType = {
    ministryId?: true
    mediaId?: true
  }

  export type MinistryMediaCountAggregateInputType = {
    ministryId?: true
    mediaId?: true
    _all?: true
  }

  export type MinistryMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MinistryMedia to aggregate.
     */
    where?: MinistryMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinistryMedias to fetch.
     */
    orderBy?: MinistryMediaOrderByWithRelationInput | MinistryMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MinistryMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinistryMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinistryMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MinistryMedias
    **/
    _count?: true | MinistryMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MinistryMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MinistryMediaMaxAggregateInputType
  }

  export type GetMinistryMediaAggregateType<T extends MinistryMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMinistryMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMinistryMedia[P]>
      : GetScalarType<T[P], AggregateMinistryMedia[P]>
  }




  export type MinistryMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MinistryMediaWhereInput
    orderBy?: MinistryMediaOrderByWithAggregationInput | MinistryMediaOrderByWithAggregationInput[]
    by: MinistryMediaScalarFieldEnum[] | MinistryMediaScalarFieldEnum
    having?: MinistryMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MinistryMediaCountAggregateInputType | true
    _min?: MinistryMediaMinAggregateInputType
    _max?: MinistryMediaMaxAggregateInputType
  }

  export type MinistryMediaGroupByOutputType = {
    ministryId: string
    mediaId: string
    _count: MinistryMediaCountAggregateOutputType | null
    _min: MinistryMediaMinAggregateOutputType | null
    _max: MinistryMediaMaxAggregateOutputType | null
  }

  type GetMinistryMediaGroupByPayload<T extends MinistryMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MinistryMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MinistryMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MinistryMediaGroupByOutputType[P]>
            : GetScalarType<T[P], MinistryMediaGroupByOutputType[P]>
        }
      >
    >


  export type MinistryMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ministryId?: boolean
    mediaId?: boolean
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ministryMedia"]>

  export type MinistryMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ministryId?: boolean
    mediaId?: boolean
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ministryMedia"]>

  export type MinistryMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ministryId?: boolean
    mediaId?: boolean
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ministryMedia"]>

  export type MinistryMediaSelectScalar = {
    ministryId?: boolean
    mediaId?: boolean
  }

  export type MinistryMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ministryId" | "mediaId", ExtArgs["result"]["ministryMedia"]>
  export type MinistryMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type MinistryMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type MinistryMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }

  export type $MinistryMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MinistryMedia"
    objects: {
      ministry: Prisma.$MinistryPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ministryId: string
      mediaId: string
    }, ExtArgs["result"]["ministryMedia"]>
    composites: {}
  }

  type MinistryMediaGetPayload<S extends boolean | null | undefined | MinistryMediaDefaultArgs> = $Result.GetResult<Prisma.$MinistryMediaPayload, S>

  type MinistryMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MinistryMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MinistryMediaCountAggregateInputType | true
    }

  export interface MinistryMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MinistryMedia'], meta: { name: 'MinistryMedia' } }
    /**
     * Find zero or one MinistryMedia that matches the filter.
     * @param {MinistryMediaFindUniqueArgs} args - Arguments to find a MinistryMedia
     * @example
     * // Get one MinistryMedia
     * const ministryMedia = await prisma.ministryMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MinistryMediaFindUniqueArgs>(args: SelectSubset<T, MinistryMediaFindUniqueArgs<ExtArgs>>): Prisma__MinistryMediaClient<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MinistryMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MinistryMediaFindUniqueOrThrowArgs} args - Arguments to find a MinistryMedia
     * @example
     * // Get one MinistryMedia
     * const ministryMedia = await prisma.ministryMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MinistryMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MinistryMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MinistryMediaClient<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MinistryMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMediaFindFirstArgs} args - Arguments to find a MinistryMedia
     * @example
     * // Get one MinistryMedia
     * const ministryMedia = await prisma.ministryMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MinistryMediaFindFirstArgs>(args?: SelectSubset<T, MinistryMediaFindFirstArgs<ExtArgs>>): Prisma__MinistryMediaClient<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MinistryMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMediaFindFirstOrThrowArgs} args - Arguments to find a MinistryMedia
     * @example
     * // Get one MinistryMedia
     * const ministryMedia = await prisma.ministryMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MinistryMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MinistryMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MinistryMediaClient<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MinistryMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MinistryMedias
     * const ministryMedias = await prisma.ministryMedia.findMany()
     * 
     * // Get first 10 MinistryMedias
     * const ministryMedias = await prisma.ministryMedia.findMany({ take: 10 })
     * 
     * // Only select the `ministryId`
     * const ministryMediaWithMinistryIdOnly = await prisma.ministryMedia.findMany({ select: { ministryId: true } })
     * 
     */
    findMany<T extends MinistryMediaFindManyArgs>(args?: SelectSubset<T, MinistryMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MinistryMedia.
     * @param {MinistryMediaCreateArgs} args - Arguments to create a MinistryMedia.
     * @example
     * // Create one MinistryMedia
     * const MinistryMedia = await prisma.ministryMedia.create({
     *   data: {
     *     // ... data to create a MinistryMedia
     *   }
     * })
     * 
     */
    create<T extends MinistryMediaCreateArgs>(args: SelectSubset<T, MinistryMediaCreateArgs<ExtArgs>>): Prisma__MinistryMediaClient<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MinistryMedias.
     * @param {MinistryMediaCreateManyArgs} args - Arguments to create many MinistryMedias.
     * @example
     * // Create many MinistryMedias
     * const ministryMedia = await prisma.ministryMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MinistryMediaCreateManyArgs>(args?: SelectSubset<T, MinistryMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MinistryMedias and returns the data saved in the database.
     * @param {MinistryMediaCreateManyAndReturnArgs} args - Arguments to create many MinistryMedias.
     * @example
     * // Create many MinistryMedias
     * const ministryMedia = await prisma.ministryMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MinistryMedias and only return the `ministryId`
     * const ministryMediaWithMinistryIdOnly = await prisma.ministryMedia.createManyAndReturn({
     *   select: { ministryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MinistryMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MinistryMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MinistryMedia.
     * @param {MinistryMediaDeleteArgs} args - Arguments to delete one MinistryMedia.
     * @example
     * // Delete one MinistryMedia
     * const MinistryMedia = await prisma.ministryMedia.delete({
     *   where: {
     *     // ... filter to delete one MinistryMedia
     *   }
     * })
     * 
     */
    delete<T extends MinistryMediaDeleteArgs>(args: SelectSubset<T, MinistryMediaDeleteArgs<ExtArgs>>): Prisma__MinistryMediaClient<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MinistryMedia.
     * @param {MinistryMediaUpdateArgs} args - Arguments to update one MinistryMedia.
     * @example
     * // Update one MinistryMedia
     * const ministryMedia = await prisma.ministryMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MinistryMediaUpdateArgs>(args: SelectSubset<T, MinistryMediaUpdateArgs<ExtArgs>>): Prisma__MinistryMediaClient<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MinistryMedias.
     * @param {MinistryMediaDeleteManyArgs} args - Arguments to filter MinistryMedias to delete.
     * @example
     * // Delete a few MinistryMedias
     * const { count } = await prisma.ministryMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MinistryMediaDeleteManyArgs>(args?: SelectSubset<T, MinistryMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MinistryMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MinistryMedias
     * const ministryMedia = await prisma.ministryMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MinistryMediaUpdateManyArgs>(args: SelectSubset<T, MinistryMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MinistryMedias and returns the data updated in the database.
     * @param {MinistryMediaUpdateManyAndReturnArgs} args - Arguments to update many MinistryMedias.
     * @example
     * // Update many MinistryMedias
     * const ministryMedia = await prisma.ministryMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MinistryMedias and only return the `ministryId`
     * const ministryMediaWithMinistryIdOnly = await prisma.ministryMedia.updateManyAndReturn({
     *   select: { ministryId: true },
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
    updateManyAndReturn<T extends MinistryMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MinistryMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MinistryMedia.
     * @param {MinistryMediaUpsertArgs} args - Arguments to update or create a MinistryMedia.
     * @example
     * // Update or create a MinistryMedia
     * const ministryMedia = await prisma.ministryMedia.upsert({
     *   create: {
     *     // ... data to create a MinistryMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MinistryMedia we want to update
     *   }
     * })
     */
    upsert<T extends MinistryMediaUpsertArgs>(args: SelectSubset<T, MinistryMediaUpsertArgs<ExtArgs>>): Prisma__MinistryMediaClient<$Result.GetResult<Prisma.$MinistryMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MinistryMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMediaCountArgs} args - Arguments to filter MinistryMedias to count.
     * @example
     * // Count the number of MinistryMedias
     * const count = await prisma.ministryMedia.count({
     *   where: {
     *     // ... the filter for the MinistryMedias we want to count
     *   }
     * })
    **/
    count<T extends MinistryMediaCountArgs>(
      args?: Subset<T, MinistryMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MinistryMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MinistryMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MinistryMediaAggregateArgs>(args: Subset<T, MinistryMediaAggregateArgs>): Prisma.PrismaPromise<GetMinistryMediaAggregateType<T>>

    /**
     * Group by MinistryMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMediaGroupByArgs} args - Group by arguments.
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
      T extends MinistryMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MinistryMediaGroupByArgs['orderBy'] }
        : { orderBy?: MinistryMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MinistryMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMinistryMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MinistryMedia model
   */
  readonly fields: MinistryMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MinistryMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MinistryMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ministry<T extends MinistryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MinistryDefaultArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MinistryMedia model
   */
  interface MinistryMediaFieldRefs {
    readonly ministryId: FieldRef<"MinistryMedia", 'String'>
    readonly mediaId: FieldRef<"MinistryMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MinistryMedia findUnique
   */
  export type MinistryMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
    /**
     * Filter, which MinistryMedia to fetch.
     */
    where: MinistryMediaWhereUniqueInput
  }

  /**
   * MinistryMedia findUniqueOrThrow
   */
  export type MinistryMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
    /**
     * Filter, which MinistryMedia to fetch.
     */
    where: MinistryMediaWhereUniqueInput
  }

  /**
   * MinistryMedia findFirst
   */
  export type MinistryMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
    /**
     * Filter, which MinistryMedia to fetch.
     */
    where?: MinistryMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinistryMedias to fetch.
     */
    orderBy?: MinistryMediaOrderByWithRelationInput | MinistryMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MinistryMedias.
     */
    cursor?: MinistryMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinistryMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinistryMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MinistryMedias.
     */
    distinct?: MinistryMediaScalarFieldEnum | MinistryMediaScalarFieldEnum[]
  }

  /**
   * MinistryMedia findFirstOrThrow
   */
  export type MinistryMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
    /**
     * Filter, which MinistryMedia to fetch.
     */
    where?: MinistryMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinistryMedias to fetch.
     */
    orderBy?: MinistryMediaOrderByWithRelationInput | MinistryMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MinistryMedias.
     */
    cursor?: MinistryMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinistryMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinistryMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MinistryMedias.
     */
    distinct?: MinistryMediaScalarFieldEnum | MinistryMediaScalarFieldEnum[]
  }

  /**
   * MinistryMedia findMany
   */
  export type MinistryMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
    /**
     * Filter, which MinistryMedias to fetch.
     */
    where?: MinistryMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinistryMedias to fetch.
     */
    orderBy?: MinistryMediaOrderByWithRelationInput | MinistryMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MinistryMedias.
     */
    cursor?: MinistryMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinistryMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinistryMedias.
     */
    skip?: number
    distinct?: MinistryMediaScalarFieldEnum | MinistryMediaScalarFieldEnum[]
  }

  /**
   * MinistryMedia create
   */
  export type MinistryMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a MinistryMedia.
     */
    data: XOR<MinistryMediaCreateInput, MinistryMediaUncheckedCreateInput>
  }

  /**
   * MinistryMedia createMany
   */
  export type MinistryMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MinistryMedias.
     */
    data: MinistryMediaCreateManyInput | MinistryMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MinistryMedia createManyAndReturn
   */
  export type MinistryMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * The data used to create many MinistryMedias.
     */
    data: MinistryMediaCreateManyInput | MinistryMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MinistryMedia update
   */
  export type MinistryMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a MinistryMedia.
     */
    data: XOR<MinistryMediaUpdateInput, MinistryMediaUncheckedUpdateInput>
    /**
     * Choose, which MinistryMedia to update.
     */
    where: MinistryMediaWhereUniqueInput
  }

  /**
   * MinistryMedia updateMany
   */
  export type MinistryMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MinistryMedias.
     */
    data: XOR<MinistryMediaUpdateManyMutationInput, MinistryMediaUncheckedUpdateManyInput>
    /**
     * Filter which MinistryMedias to update
     */
    where?: MinistryMediaWhereInput
    /**
     * Limit how many MinistryMedias to update.
     */
    limit?: number
  }

  /**
   * MinistryMedia updateManyAndReturn
   */
  export type MinistryMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * The data used to update MinistryMedias.
     */
    data: XOR<MinistryMediaUpdateManyMutationInput, MinistryMediaUncheckedUpdateManyInput>
    /**
     * Filter which MinistryMedias to update
     */
    where?: MinistryMediaWhereInput
    /**
     * Limit how many MinistryMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MinistryMedia upsert
   */
  export type MinistryMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the MinistryMedia to update in case it exists.
     */
    where: MinistryMediaWhereUniqueInput
    /**
     * In case the MinistryMedia found by the `where` argument doesn't exist, create a new MinistryMedia with this data.
     */
    create: XOR<MinistryMediaCreateInput, MinistryMediaUncheckedCreateInput>
    /**
     * In case the MinistryMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MinistryMediaUpdateInput, MinistryMediaUncheckedUpdateInput>
  }

  /**
   * MinistryMedia delete
   */
  export type MinistryMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
    /**
     * Filter which MinistryMedia to delete.
     */
    where: MinistryMediaWhereUniqueInput
  }

  /**
   * MinistryMedia deleteMany
   */
  export type MinistryMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MinistryMedias to delete
     */
    where?: MinistryMediaWhereInput
    /**
     * Limit how many MinistryMedias to delete.
     */
    limit?: number
  }

  /**
   * MinistryMedia without action
   */
  export type MinistryMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMedia
     */
    select?: MinistryMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinistryMedia
     */
    omit?: MinistryMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinistryMediaInclude<ExtArgs> | null
  }


  /**
   * Model FinancialReportMedia
   */

  export type AggregateFinancialReportMedia = {
    _count: FinancialReportMediaCountAggregateOutputType | null
    _min: FinancialReportMediaMinAggregateOutputType | null
    _max: FinancialReportMediaMaxAggregateOutputType | null
  }

  export type FinancialReportMediaMinAggregateOutputType = {
    reportId: string | null
    mediaId: string | null
  }

  export type FinancialReportMediaMaxAggregateOutputType = {
    reportId: string | null
    mediaId: string | null
  }

  export type FinancialReportMediaCountAggregateOutputType = {
    reportId: number
    mediaId: number
    _all: number
  }


  export type FinancialReportMediaMinAggregateInputType = {
    reportId?: true
    mediaId?: true
  }

  export type FinancialReportMediaMaxAggregateInputType = {
    reportId?: true
    mediaId?: true
  }

  export type FinancialReportMediaCountAggregateInputType = {
    reportId?: true
    mediaId?: true
    _all?: true
  }

  export type FinancialReportMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialReportMedia to aggregate.
     */
    where?: FinancialReportMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialReportMedias to fetch.
     */
    orderBy?: FinancialReportMediaOrderByWithRelationInput | FinancialReportMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialReportMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialReportMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialReportMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialReportMedias
    **/
    _count?: true | FinancialReportMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialReportMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialReportMediaMaxAggregateInputType
  }

  export type GetFinancialReportMediaAggregateType<T extends FinancialReportMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialReportMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialReportMedia[P]>
      : GetScalarType<T[P], AggregateFinancialReportMedia[P]>
  }




  export type FinancialReportMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialReportMediaWhereInput
    orderBy?: FinancialReportMediaOrderByWithAggregationInput | FinancialReportMediaOrderByWithAggregationInput[]
    by: FinancialReportMediaScalarFieldEnum[] | FinancialReportMediaScalarFieldEnum
    having?: FinancialReportMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialReportMediaCountAggregateInputType | true
    _min?: FinancialReportMediaMinAggregateInputType
    _max?: FinancialReportMediaMaxAggregateInputType
  }

  export type FinancialReportMediaGroupByOutputType = {
    reportId: string
    mediaId: string
    _count: FinancialReportMediaCountAggregateOutputType | null
    _min: FinancialReportMediaMinAggregateOutputType | null
    _max: FinancialReportMediaMaxAggregateOutputType | null
  }

  type GetFinancialReportMediaGroupByPayload<T extends FinancialReportMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialReportMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialReportMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialReportMediaGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialReportMediaGroupByOutputType[P]>
        }
      >
    >


  export type FinancialReportMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reportId?: boolean
    mediaId?: boolean
    report?: boolean | FinancialReportDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialReportMedia"]>

  export type FinancialReportMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reportId?: boolean
    mediaId?: boolean
    report?: boolean | FinancialReportDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialReportMedia"]>

  export type FinancialReportMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reportId?: boolean
    mediaId?: boolean
    report?: boolean | FinancialReportDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialReportMedia"]>

  export type FinancialReportMediaSelectScalar = {
    reportId?: boolean
    mediaId?: boolean
  }

  export type FinancialReportMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reportId" | "mediaId", ExtArgs["result"]["financialReportMedia"]>
  export type FinancialReportMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FinancialReportDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type FinancialReportMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FinancialReportDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type FinancialReportMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FinancialReportDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }

  export type $FinancialReportMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialReportMedia"
    objects: {
      report: Prisma.$FinancialReportPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reportId: string
      mediaId: string
    }, ExtArgs["result"]["financialReportMedia"]>
    composites: {}
  }

  type FinancialReportMediaGetPayload<S extends boolean | null | undefined | FinancialReportMediaDefaultArgs> = $Result.GetResult<Prisma.$FinancialReportMediaPayload, S>

  type FinancialReportMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialReportMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialReportMediaCountAggregateInputType | true
    }

  export interface FinancialReportMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialReportMedia'], meta: { name: 'FinancialReportMedia' } }
    /**
     * Find zero or one FinancialReportMedia that matches the filter.
     * @param {FinancialReportMediaFindUniqueArgs} args - Arguments to find a FinancialReportMedia
     * @example
     * // Get one FinancialReportMedia
     * const financialReportMedia = await prisma.financialReportMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialReportMediaFindUniqueArgs>(args: SelectSubset<T, FinancialReportMediaFindUniqueArgs<ExtArgs>>): Prisma__FinancialReportMediaClient<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialReportMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialReportMediaFindUniqueOrThrowArgs} args - Arguments to find a FinancialReportMedia
     * @example
     * // Get one FinancialReportMedia
     * const financialReportMedia = await prisma.financialReportMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialReportMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialReportMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialReportMediaClient<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialReportMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportMediaFindFirstArgs} args - Arguments to find a FinancialReportMedia
     * @example
     * // Get one FinancialReportMedia
     * const financialReportMedia = await prisma.financialReportMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialReportMediaFindFirstArgs>(args?: SelectSubset<T, FinancialReportMediaFindFirstArgs<ExtArgs>>): Prisma__FinancialReportMediaClient<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialReportMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportMediaFindFirstOrThrowArgs} args - Arguments to find a FinancialReportMedia
     * @example
     * // Get one FinancialReportMedia
     * const financialReportMedia = await prisma.financialReportMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialReportMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialReportMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialReportMediaClient<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialReportMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialReportMedias
     * const financialReportMedias = await prisma.financialReportMedia.findMany()
     * 
     * // Get first 10 FinancialReportMedias
     * const financialReportMedias = await prisma.financialReportMedia.findMany({ take: 10 })
     * 
     * // Only select the `reportId`
     * const financialReportMediaWithReportIdOnly = await prisma.financialReportMedia.findMany({ select: { reportId: true } })
     * 
     */
    findMany<T extends FinancialReportMediaFindManyArgs>(args?: SelectSubset<T, FinancialReportMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialReportMedia.
     * @param {FinancialReportMediaCreateArgs} args - Arguments to create a FinancialReportMedia.
     * @example
     * // Create one FinancialReportMedia
     * const FinancialReportMedia = await prisma.financialReportMedia.create({
     *   data: {
     *     // ... data to create a FinancialReportMedia
     *   }
     * })
     * 
     */
    create<T extends FinancialReportMediaCreateArgs>(args: SelectSubset<T, FinancialReportMediaCreateArgs<ExtArgs>>): Prisma__FinancialReportMediaClient<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialReportMedias.
     * @param {FinancialReportMediaCreateManyArgs} args - Arguments to create many FinancialReportMedias.
     * @example
     * // Create many FinancialReportMedias
     * const financialReportMedia = await prisma.financialReportMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialReportMediaCreateManyArgs>(args?: SelectSubset<T, FinancialReportMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialReportMedias and returns the data saved in the database.
     * @param {FinancialReportMediaCreateManyAndReturnArgs} args - Arguments to create many FinancialReportMedias.
     * @example
     * // Create many FinancialReportMedias
     * const financialReportMedia = await prisma.financialReportMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialReportMedias and only return the `reportId`
     * const financialReportMediaWithReportIdOnly = await prisma.financialReportMedia.createManyAndReturn({
     *   select: { reportId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialReportMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialReportMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialReportMedia.
     * @param {FinancialReportMediaDeleteArgs} args - Arguments to delete one FinancialReportMedia.
     * @example
     * // Delete one FinancialReportMedia
     * const FinancialReportMedia = await prisma.financialReportMedia.delete({
     *   where: {
     *     // ... filter to delete one FinancialReportMedia
     *   }
     * })
     * 
     */
    delete<T extends FinancialReportMediaDeleteArgs>(args: SelectSubset<T, FinancialReportMediaDeleteArgs<ExtArgs>>): Prisma__FinancialReportMediaClient<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialReportMedia.
     * @param {FinancialReportMediaUpdateArgs} args - Arguments to update one FinancialReportMedia.
     * @example
     * // Update one FinancialReportMedia
     * const financialReportMedia = await prisma.financialReportMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialReportMediaUpdateArgs>(args: SelectSubset<T, FinancialReportMediaUpdateArgs<ExtArgs>>): Prisma__FinancialReportMediaClient<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialReportMedias.
     * @param {FinancialReportMediaDeleteManyArgs} args - Arguments to filter FinancialReportMedias to delete.
     * @example
     * // Delete a few FinancialReportMedias
     * const { count } = await prisma.financialReportMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialReportMediaDeleteManyArgs>(args?: SelectSubset<T, FinancialReportMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialReportMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialReportMedias
     * const financialReportMedia = await prisma.financialReportMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialReportMediaUpdateManyArgs>(args: SelectSubset<T, FinancialReportMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialReportMedias and returns the data updated in the database.
     * @param {FinancialReportMediaUpdateManyAndReturnArgs} args - Arguments to update many FinancialReportMedias.
     * @example
     * // Update many FinancialReportMedias
     * const financialReportMedia = await prisma.financialReportMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialReportMedias and only return the `reportId`
     * const financialReportMediaWithReportIdOnly = await prisma.financialReportMedia.updateManyAndReturn({
     *   select: { reportId: true },
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
    updateManyAndReturn<T extends FinancialReportMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialReportMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialReportMedia.
     * @param {FinancialReportMediaUpsertArgs} args - Arguments to update or create a FinancialReportMedia.
     * @example
     * // Update or create a FinancialReportMedia
     * const financialReportMedia = await prisma.financialReportMedia.upsert({
     *   create: {
     *     // ... data to create a FinancialReportMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialReportMedia we want to update
     *   }
     * })
     */
    upsert<T extends FinancialReportMediaUpsertArgs>(args: SelectSubset<T, FinancialReportMediaUpsertArgs<ExtArgs>>): Prisma__FinancialReportMediaClient<$Result.GetResult<Prisma.$FinancialReportMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialReportMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportMediaCountArgs} args - Arguments to filter FinancialReportMedias to count.
     * @example
     * // Count the number of FinancialReportMedias
     * const count = await prisma.financialReportMedia.count({
     *   where: {
     *     // ... the filter for the FinancialReportMedias we want to count
     *   }
     * })
    **/
    count<T extends FinancialReportMediaCountArgs>(
      args?: Subset<T, FinancialReportMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialReportMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialReportMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialReportMediaAggregateArgs>(args: Subset<T, FinancialReportMediaAggregateArgs>): Prisma.PrismaPromise<GetFinancialReportMediaAggregateType<T>>

    /**
     * Group by FinancialReportMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialReportMediaGroupByArgs} args - Group by arguments.
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
      T extends FinancialReportMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialReportMediaGroupByArgs['orderBy'] }
        : { orderBy?: FinancialReportMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialReportMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialReportMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialReportMedia model
   */
  readonly fields: FinancialReportMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialReportMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialReportMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends FinancialReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinancialReportDefaultArgs<ExtArgs>>): Prisma__FinancialReportClient<$Result.GetResult<Prisma.$FinancialReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FinancialReportMedia model
   */
  interface FinancialReportMediaFieldRefs {
    readonly reportId: FieldRef<"FinancialReportMedia", 'String'>
    readonly mediaId: FieldRef<"FinancialReportMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FinancialReportMedia findUnique
   */
  export type FinancialReportMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
    /**
     * Filter, which FinancialReportMedia to fetch.
     */
    where: FinancialReportMediaWhereUniqueInput
  }

  /**
   * FinancialReportMedia findUniqueOrThrow
   */
  export type FinancialReportMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
    /**
     * Filter, which FinancialReportMedia to fetch.
     */
    where: FinancialReportMediaWhereUniqueInput
  }

  /**
   * FinancialReportMedia findFirst
   */
  export type FinancialReportMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
    /**
     * Filter, which FinancialReportMedia to fetch.
     */
    where?: FinancialReportMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialReportMedias to fetch.
     */
    orderBy?: FinancialReportMediaOrderByWithRelationInput | FinancialReportMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialReportMedias.
     */
    cursor?: FinancialReportMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialReportMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialReportMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialReportMedias.
     */
    distinct?: FinancialReportMediaScalarFieldEnum | FinancialReportMediaScalarFieldEnum[]
  }

  /**
   * FinancialReportMedia findFirstOrThrow
   */
  export type FinancialReportMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
    /**
     * Filter, which FinancialReportMedia to fetch.
     */
    where?: FinancialReportMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialReportMedias to fetch.
     */
    orderBy?: FinancialReportMediaOrderByWithRelationInput | FinancialReportMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialReportMedias.
     */
    cursor?: FinancialReportMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialReportMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialReportMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialReportMedias.
     */
    distinct?: FinancialReportMediaScalarFieldEnum | FinancialReportMediaScalarFieldEnum[]
  }

  /**
   * FinancialReportMedia findMany
   */
  export type FinancialReportMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
    /**
     * Filter, which FinancialReportMedias to fetch.
     */
    where?: FinancialReportMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialReportMedias to fetch.
     */
    orderBy?: FinancialReportMediaOrderByWithRelationInput | FinancialReportMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialReportMedias.
     */
    cursor?: FinancialReportMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialReportMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialReportMedias.
     */
    skip?: number
    distinct?: FinancialReportMediaScalarFieldEnum | FinancialReportMediaScalarFieldEnum[]
  }

  /**
   * FinancialReportMedia create
   */
  export type FinancialReportMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialReportMedia.
     */
    data: XOR<FinancialReportMediaCreateInput, FinancialReportMediaUncheckedCreateInput>
  }

  /**
   * FinancialReportMedia createMany
   */
  export type FinancialReportMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialReportMedias.
     */
    data: FinancialReportMediaCreateManyInput | FinancialReportMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialReportMedia createManyAndReturn
   */
  export type FinancialReportMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialReportMedias.
     */
    data: FinancialReportMediaCreateManyInput | FinancialReportMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialReportMedia update
   */
  export type FinancialReportMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialReportMedia.
     */
    data: XOR<FinancialReportMediaUpdateInput, FinancialReportMediaUncheckedUpdateInput>
    /**
     * Choose, which FinancialReportMedia to update.
     */
    where: FinancialReportMediaWhereUniqueInput
  }

  /**
   * FinancialReportMedia updateMany
   */
  export type FinancialReportMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialReportMedias.
     */
    data: XOR<FinancialReportMediaUpdateManyMutationInput, FinancialReportMediaUncheckedUpdateManyInput>
    /**
     * Filter which FinancialReportMedias to update
     */
    where?: FinancialReportMediaWhereInput
    /**
     * Limit how many FinancialReportMedias to update.
     */
    limit?: number
  }

  /**
   * FinancialReportMedia updateManyAndReturn
   */
  export type FinancialReportMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * The data used to update FinancialReportMedias.
     */
    data: XOR<FinancialReportMediaUpdateManyMutationInput, FinancialReportMediaUncheckedUpdateManyInput>
    /**
     * Filter which FinancialReportMedias to update
     */
    where?: FinancialReportMediaWhereInput
    /**
     * Limit how many FinancialReportMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialReportMedia upsert
   */
  export type FinancialReportMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialReportMedia to update in case it exists.
     */
    where: FinancialReportMediaWhereUniqueInput
    /**
     * In case the FinancialReportMedia found by the `where` argument doesn't exist, create a new FinancialReportMedia with this data.
     */
    create: XOR<FinancialReportMediaCreateInput, FinancialReportMediaUncheckedCreateInput>
    /**
     * In case the FinancialReportMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialReportMediaUpdateInput, FinancialReportMediaUncheckedUpdateInput>
  }

  /**
   * FinancialReportMedia delete
   */
  export type FinancialReportMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
    /**
     * Filter which FinancialReportMedia to delete.
     */
    where: FinancialReportMediaWhereUniqueInput
  }

  /**
   * FinancialReportMedia deleteMany
   */
  export type FinancialReportMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialReportMedias to delete
     */
    where?: FinancialReportMediaWhereInput
    /**
     * Limit how many FinancialReportMedias to delete.
     */
    limit?: number
  }

  /**
   * FinancialReportMedia without action
   */
  export type FinancialReportMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialReportMedia
     */
    select?: FinancialReportMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialReportMedia
     */
    omit?: FinancialReportMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialReportMediaInclude<ExtArgs> | null
  }


  /**
   * Model HomilyMedia
   */

  export type AggregateHomilyMedia = {
    _count: HomilyMediaCountAggregateOutputType | null
    _min: HomilyMediaMinAggregateOutputType | null
    _max: HomilyMediaMaxAggregateOutputType | null
  }

  export type HomilyMediaMinAggregateOutputType = {
    homilyId: string | null
    mediaId: string | null
  }

  export type HomilyMediaMaxAggregateOutputType = {
    homilyId: string | null
    mediaId: string | null
  }

  export type HomilyMediaCountAggregateOutputType = {
    homilyId: number
    mediaId: number
    _all: number
  }


  export type HomilyMediaMinAggregateInputType = {
    homilyId?: true
    mediaId?: true
  }

  export type HomilyMediaMaxAggregateInputType = {
    homilyId?: true
    mediaId?: true
  }

  export type HomilyMediaCountAggregateInputType = {
    homilyId?: true
    mediaId?: true
    _all?: true
  }

  export type HomilyMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomilyMedia to aggregate.
     */
    where?: HomilyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomilyMedias to fetch.
     */
    orderBy?: HomilyMediaOrderByWithRelationInput | HomilyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomilyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomilyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomilyMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomilyMedias
    **/
    _count?: true | HomilyMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomilyMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomilyMediaMaxAggregateInputType
  }

  export type GetHomilyMediaAggregateType<T extends HomilyMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateHomilyMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomilyMedia[P]>
      : GetScalarType<T[P], AggregateHomilyMedia[P]>
  }




  export type HomilyMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomilyMediaWhereInput
    orderBy?: HomilyMediaOrderByWithAggregationInput | HomilyMediaOrderByWithAggregationInput[]
    by: HomilyMediaScalarFieldEnum[] | HomilyMediaScalarFieldEnum
    having?: HomilyMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomilyMediaCountAggregateInputType | true
    _min?: HomilyMediaMinAggregateInputType
    _max?: HomilyMediaMaxAggregateInputType
  }

  export type HomilyMediaGroupByOutputType = {
    homilyId: string
    mediaId: string
    _count: HomilyMediaCountAggregateOutputType | null
    _min: HomilyMediaMinAggregateOutputType | null
    _max: HomilyMediaMaxAggregateOutputType | null
  }

  type GetHomilyMediaGroupByPayload<T extends HomilyMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomilyMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomilyMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomilyMediaGroupByOutputType[P]>
            : GetScalarType<T[P], HomilyMediaGroupByOutputType[P]>
        }
      >
    >


  export type HomilyMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    homilyId?: boolean
    mediaId?: boolean
    homily?: boolean | HomilyDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homilyMedia"]>

  export type HomilyMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    homilyId?: boolean
    mediaId?: boolean
    homily?: boolean | HomilyDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homilyMedia"]>

  export type HomilyMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    homilyId?: boolean
    mediaId?: boolean
    homily?: boolean | HomilyDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homilyMedia"]>

  export type HomilyMediaSelectScalar = {
    homilyId?: boolean
    mediaId?: boolean
  }

  export type HomilyMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"homilyId" | "mediaId", ExtArgs["result"]["homilyMedia"]>
  export type HomilyMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homily?: boolean | HomilyDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type HomilyMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homily?: boolean | HomilyDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type HomilyMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homily?: boolean | HomilyDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }

  export type $HomilyMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomilyMedia"
    objects: {
      homily: Prisma.$HomilyPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      homilyId: string
      mediaId: string
    }, ExtArgs["result"]["homilyMedia"]>
    composites: {}
  }

  type HomilyMediaGetPayload<S extends boolean | null | undefined | HomilyMediaDefaultArgs> = $Result.GetResult<Prisma.$HomilyMediaPayload, S>

  type HomilyMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomilyMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomilyMediaCountAggregateInputType | true
    }

  export interface HomilyMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomilyMedia'], meta: { name: 'HomilyMedia' } }
    /**
     * Find zero or one HomilyMedia that matches the filter.
     * @param {HomilyMediaFindUniqueArgs} args - Arguments to find a HomilyMedia
     * @example
     * // Get one HomilyMedia
     * const homilyMedia = await prisma.homilyMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomilyMediaFindUniqueArgs>(args: SelectSubset<T, HomilyMediaFindUniqueArgs<ExtArgs>>): Prisma__HomilyMediaClient<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomilyMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomilyMediaFindUniqueOrThrowArgs} args - Arguments to find a HomilyMedia
     * @example
     * // Get one HomilyMedia
     * const homilyMedia = await prisma.homilyMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomilyMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, HomilyMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomilyMediaClient<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomilyMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyMediaFindFirstArgs} args - Arguments to find a HomilyMedia
     * @example
     * // Get one HomilyMedia
     * const homilyMedia = await prisma.homilyMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomilyMediaFindFirstArgs>(args?: SelectSubset<T, HomilyMediaFindFirstArgs<ExtArgs>>): Prisma__HomilyMediaClient<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomilyMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyMediaFindFirstOrThrowArgs} args - Arguments to find a HomilyMedia
     * @example
     * // Get one HomilyMedia
     * const homilyMedia = await prisma.homilyMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomilyMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, HomilyMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomilyMediaClient<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomilyMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomilyMedias
     * const homilyMedias = await prisma.homilyMedia.findMany()
     * 
     * // Get first 10 HomilyMedias
     * const homilyMedias = await prisma.homilyMedia.findMany({ take: 10 })
     * 
     * // Only select the `homilyId`
     * const homilyMediaWithHomilyIdOnly = await prisma.homilyMedia.findMany({ select: { homilyId: true } })
     * 
     */
    findMany<T extends HomilyMediaFindManyArgs>(args?: SelectSubset<T, HomilyMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomilyMedia.
     * @param {HomilyMediaCreateArgs} args - Arguments to create a HomilyMedia.
     * @example
     * // Create one HomilyMedia
     * const HomilyMedia = await prisma.homilyMedia.create({
     *   data: {
     *     // ... data to create a HomilyMedia
     *   }
     * })
     * 
     */
    create<T extends HomilyMediaCreateArgs>(args: SelectSubset<T, HomilyMediaCreateArgs<ExtArgs>>): Prisma__HomilyMediaClient<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomilyMedias.
     * @param {HomilyMediaCreateManyArgs} args - Arguments to create many HomilyMedias.
     * @example
     * // Create many HomilyMedias
     * const homilyMedia = await prisma.homilyMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomilyMediaCreateManyArgs>(args?: SelectSubset<T, HomilyMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomilyMedias and returns the data saved in the database.
     * @param {HomilyMediaCreateManyAndReturnArgs} args - Arguments to create many HomilyMedias.
     * @example
     * // Create many HomilyMedias
     * const homilyMedia = await prisma.homilyMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomilyMedias and only return the `homilyId`
     * const homilyMediaWithHomilyIdOnly = await prisma.homilyMedia.createManyAndReturn({
     *   select: { homilyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomilyMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, HomilyMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HomilyMedia.
     * @param {HomilyMediaDeleteArgs} args - Arguments to delete one HomilyMedia.
     * @example
     * // Delete one HomilyMedia
     * const HomilyMedia = await prisma.homilyMedia.delete({
     *   where: {
     *     // ... filter to delete one HomilyMedia
     *   }
     * })
     * 
     */
    delete<T extends HomilyMediaDeleteArgs>(args: SelectSubset<T, HomilyMediaDeleteArgs<ExtArgs>>): Prisma__HomilyMediaClient<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomilyMedia.
     * @param {HomilyMediaUpdateArgs} args - Arguments to update one HomilyMedia.
     * @example
     * // Update one HomilyMedia
     * const homilyMedia = await prisma.homilyMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomilyMediaUpdateArgs>(args: SelectSubset<T, HomilyMediaUpdateArgs<ExtArgs>>): Prisma__HomilyMediaClient<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomilyMedias.
     * @param {HomilyMediaDeleteManyArgs} args - Arguments to filter HomilyMedias to delete.
     * @example
     * // Delete a few HomilyMedias
     * const { count } = await prisma.homilyMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomilyMediaDeleteManyArgs>(args?: SelectSubset<T, HomilyMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomilyMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomilyMedias
     * const homilyMedia = await prisma.homilyMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomilyMediaUpdateManyArgs>(args: SelectSubset<T, HomilyMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomilyMedias and returns the data updated in the database.
     * @param {HomilyMediaUpdateManyAndReturnArgs} args - Arguments to update many HomilyMedias.
     * @example
     * // Update many HomilyMedias
     * const homilyMedia = await prisma.homilyMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomilyMedias and only return the `homilyId`
     * const homilyMediaWithHomilyIdOnly = await prisma.homilyMedia.updateManyAndReturn({
     *   select: { homilyId: true },
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
    updateManyAndReturn<T extends HomilyMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, HomilyMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HomilyMedia.
     * @param {HomilyMediaUpsertArgs} args - Arguments to update or create a HomilyMedia.
     * @example
     * // Update or create a HomilyMedia
     * const homilyMedia = await prisma.homilyMedia.upsert({
     *   create: {
     *     // ... data to create a HomilyMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomilyMedia we want to update
     *   }
     * })
     */
    upsert<T extends HomilyMediaUpsertArgs>(args: SelectSubset<T, HomilyMediaUpsertArgs<ExtArgs>>): Prisma__HomilyMediaClient<$Result.GetResult<Prisma.$HomilyMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HomilyMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyMediaCountArgs} args - Arguments to filter HomilyMedias to count.
     * @example
     * // Count the number of HomilyMedias
     * const count = await prisma.homilyMedia.count({
     *   where: {
     *     // ... the filter for the HomilyMedias we want to count
     *   }
     * })
    **/
    count<T extends HomilyMediaCountArgs>(
      args?: Subset<T, HomilyMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomilyMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomilyMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomilyMediaAggregateArgs>(args: Subset<T, HomilyMediaAggregateArgs>): Prisma.PrismaPromise<GetHomilyMediaAggregateType<T>>

    /**
     * Group by HomilyMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomilyMediaGroupByArgs} args - Group by arguments.
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
      T extends HomilyMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomilyMediaGroupByArgs['orderBy'] }
        : { orderBy?: HomilyMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomilyMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomilyMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomilyMedia model
   */
  readonly fields: HomilyMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomilyMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomilyMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homily<T extends HomilyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HomilyDefaultArgs<ExtArgs>>): Prisma__HomilyClient<$Result.GetResult<Prisma.$HomilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HomilyMedia model
   */
  interface HomilyMediaFieldRefs {
    readonly homilyId: FieldRef<"HomilyMedia", 'String'>
    readonly mediaId: FieldRef<"HomilyMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HomilyMedia findUnique
   */
  export type HomilyMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
    /**
     * Filter, which HomilyMedia to fetch.
     */
    where: HomilyMediaWhereUniqueInput
  }

  /**
   * HomilyMedia findUniqueOrThrow
   */
  export type HomilyMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
    /**
     * Filter, which HomilyMedia to fetch.
     */
    where: HomilyMediaWhereUniqueInput
  }

  /**
   * HomilyMedia findFirst
   */
  export type HomilyMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
    /**
     * Filter, which HomilyMedia to fetch.
     */
    where?: HomilyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomilyMedias to fetch.
     */
    orderBy?: HomilyMediaOrderByWithRelationInput | HomilyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomilyMedias.
     */
    cursor?: HomilyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomilyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomilyMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomilyMedias.
     */
    distinct?: HomilyMediaScalarFieldEnum | HomilyMediaScalarFieldEnum[]
  }

  /**
   * HomilyMedia findFirstOrThrow
   */
  export type HomilyMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
    /**
     * Filter, which HomilyMedia to fetch.
     */
    where?: HomilyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomilyMedias to fetch.
     */
    orderBy?: HomilyMediaOrderByWithRelationInput | HomilyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomilyMedias.
     */
    cursor?: HomilyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomilyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomilyMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomilyMedias.
     */
    distinct?: HomilyMediaScalarFieldEnum | HomilyMediaScalarFieldEnum[]
  }

  /**
   * HomilyMedia findMany
   */
  export type HomilyMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
    /**
     * Filter, which HomilyMedias to fetch.
     */
    where?: HomilyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomilyMedias to fetch.
     */
    orderBy?: HomilyMediaOrderByWithRelationInput | HomilyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomilyMedias.
     */
    cursor?: HomilyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomilyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomilyMedias.
     */
    skip?: number
    distinct?: HomilyMediaScalarFieldEnum | HomilyMediaScalarFieldEnum[]
  }

  /**
   * HomilyMedia create
   */
  export type HomilyMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a HomilyMedia.
     */
    data: XOR<HomilyMediaCreateInput, HomilyMediaUncheckedCreateInput>
  }

  /**
   * HomilyMedia createMany
   */
  export type HomilyMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomilyMedias.
     */
    data: HomilyMediaCreateManyInput | HomilyMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomilyMedia createManyAndReturn
   */
  export type HomilyMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * The data used to create many HomilyMedias.
     */
    data: HomilyMediaCreateManyInput | HomilyMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HomilyMedia update
   */
  export type HomilyMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a HomilyMedia.
     */
    data: XOR<HomilyMediaUpdateInput, HomilyMediaUncheckedUpdateInput>
    /**
     * Choose, which HomilyMedia to update.
     */
    where: HomilyMediaWhereUniqueInput
  }

  /**
   * HomilyMedia updateMany
   */
  export type HomilyMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomilyMedias.
     */
    data: XOR<HomilyMediaUpdateManyMutationInput, HomilyMediaUncheckedUpdateManyInput>
    /**
     * Filter which HomilyMedias to update
     */
    where?: HomilyMediaWhereInput
    /**
     * Limit how many HomilyMedias to update.
     */
    limit?: number
  }

  /**
   * HomilyMedia updateManyAndReturn
   */
  export type HomilyMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * The data used to update HomilyMedias.
     */
    data: XOR<HomilyMediaUpdateManyMutationInput, HomilyMediaUncheckedUpdateManyInput>
    /**
     * Filter which HomilyMedias to update
     */
    where?: HomilyMediaWhereInput
    /**
     * Limit how many HomilyMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HomilyMedia upsert
   */
  export type HomilyMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the HomilyMedia to update in case it exists.
     */
    where: HomilyMediaWhereUniqueInput
    /**
     * In case the HomilyMedia found by the `where` argument doesn't exist, create a new HomilyMedia with this data.
     */
    create: XOR<HomilyMediaCreateInput, HomilyMediaUncheckedCreateInput>
    /**
     * In case the HomilyMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomilyMediaUpdateInput, HomilyMediaUncheckedUpdateInput>
  }

  /**
   * HomilyMedia delete
   */
  export type HomilyMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
    /**
     * Filter which HomilyMedia to delete.
     */
    where: HomilyMediaWhereUniqueInput
  }

  /**
   * HomilyMedia deleteMany
   */
  export type HomilyMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomilyMedias to delete
     */
    where?: HomilyMediaWhereInput
    /**
     * Limit how many HomilyMedias to delete.
     */
    limit?: number
  }

  /**
   * HomilyMedia without action
   */
  export type HomilyMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomilyMedia
     */
    select?: HomilyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomilyMedia
     */
    omit?: HomilyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomilyMediaInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NewsCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt'
  };

  export type NewsCategoryScalarFieldEnum = (typeof NewsCategoryScalarFieldEnum)[keyof typeof NewsCategoryScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    imageUrl: 'imageUrl',
    published: 'published',
    publishedAt: 'publishedAt',
    categoryId: 'categoryId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const ChurchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChurchScalarFieldEnum = (typeof ChurchScalarFieldEnum)[keyof typeof ChurchScalarFieldEnum]


  export const MassScheduleScalarFieldEnum: {
    id: 'id',
    churchId: 'churchId',
    dayOfWeek: 'dayOfWeek',
    time: 'time',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MassScheduleScalarFieldEnum = (typeof MassScheduleScalarFieldEnum)[keyof typeof MassScheduleScalarFieldEnum]


  export const MinistryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    imageUrl: 'imageUrl',
    contactName: 'contactName',
    contactPhone: 'contactPhone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MinistryScalarFieldEnum = (typeof MinistryScalarFieldEnum)[keyof typeof MinistryScalarFieldEnum]


  export const FinancialReportScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    progressPercentage: 'progressPercentage',
    totalCost: 'totalCost',
    amountRaised: 'amountRaised',
    amountRemaining: 'amountRemaining',
    published: 'published',
    publishedAt: 'publishedAt',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinancialReportScalarFieldEnum = (typeof FinancialReportScalarFieldEnum)[keyof typeof FinancialReportScalarFieldEnum]


  export const HomilyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    content: 'content',
    date: 'date',
    published: 'published',
    publishedAt: 'publishedAt',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomilyScalarFieldEnum = (typeof HomilyScalarFieldEnum)[keyof typeof HomilyScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    phone: 'phone',
    email: 'email',
    preferredDate: 'preferredDate',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const AppointmentDocumentScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt'
  };

  export type AppointmentDocumentScalarFieldEnum = (typeof AppointmentDocumentScalarFieldEnum)[keyof typeof AppointmentDocumentScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    altText: 'altText',
    size: 'size',
    createdAt: 'createdAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const NewsMediaScalarFieldEnum: {
    newsId: 'newsId',
    mediaId: 'mediaId'
  };

  export type NewsMediaScalarFieldEnum = (typeof NewsMediaScalarFieldEnum)[keyof typeof NewsMediaScalarFieldEnum]


  export const MinistryMediaScalarFieldEnum: {
    ministryId: 'ministryId',
    mediaId: 'mediaId'
  };

  export type MinistryMediaScalarFieldEnum = (typeof MinistryMediaScalarFieldEnum)[keyof typeof MinistryMediaScalarFieldEnum]


  export const FinancialReportMediaScalarFieldEnum: {
    reportId: 'reportId',
    mediaId: 'mediaId'
  };

  export type FinancialReportMediaScalarFieldEnum = (typeof FinancialReportMediaScalarFieldEnum)[keyof typeof FinancialReportMediaScalarFieldEnum]


  export const HomilyMediaScalarFieldEnum: {
    homilyId: 'homilyId',
    mediaId: 'mediaId'
  };

  export type HomilyMediaScalarFieldEnum = (typeof HomilyMediaScalarFieldEnum)[keyof typeof HomilyMediaScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AppointmentType'
   */
  export type EnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType'>
    


  /**
   * Reference to a field of type 'AppointmentType[]'
   */
  export type ListEnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    news?: NewsListRelationFilter
    financialReports?: FinancialReportListRelationFilter
    homilies?: HomilyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    news?: NewsOrderByRelationAggregateInput
    financialReports?: FinancialReportOrderByRelationAggregateInput
    homilies?: HomilyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    news?: NewsListRelationFilter
    financialReports?: FinancialReportListRelationFilter
    homilies?: HomilyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NewsCategoryWhereInput = {
    AND?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    OR?: NewsCategoryWhereInput[]
    NOT?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    id?: StringFilter<"NewsCategory"> | string
    name?: StringFilter<"NewsCategory"> | string
    slug?: StringFilter<"NewsCategory"> | string
    createdAt?: DateTimeFilter<"NewsCategory"> | Date | string
    news?: NewsListRelationFilter
  }

  export type NewsCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    news?: NewsOrderByRelationAggregateInput
  }

  export type NewsCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    OR?: NewsCategoryWhereInput[]
    NOT?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    name?: StringFilter<"NewsCategory"> | string
    createdAt?: DateTimeFilter<"NewsCategory"> | Date | string
    news?: NewsListRelationFilter
  }, "id" | "slug">

  export type NewsCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    _count?: NewsCategoryCountOrderByAggregateInput
    _max?: NewsCategoryMaxOrderByAggregateInput
    _min?: NewsCategoryMinOrderByAggregateInput
  }

  export type NewsCategoryScalarWhereWithAggregatesInput = {
    AND?: NewsCategoryScalarWhereWithAggregatesInput | NewsCategoryScalarWhereWithAggregatesInput[]
    OR?: NewsCategoryScalarWhereWithAggregatesInput[]
    NOT?: NewsCategoryScalarWhereWithAggregatesInput | NewsCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsCategory"> | string
    name?: StringWithAggregatesFilter<"NewsCategory"> | string
    slug?: StringWithAggregatesFilter<"NewsCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsCategory"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    slug?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    imageUrl?: StringNullableFilter<"News"> | string | null
    published?: BoolFilter<"News"> | boolean
    publishedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    categoryId?: StringFilter<"News"> | string
    createdById?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    category?: XOR<NewsCategoryScalarRelationFilter, NewsCategoryWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: NewsMediaListRelationFilter
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    published?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: NewsCategoryOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    media?: NewsMediaOrderByRelationAggregateInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    imageUrl?: StringNullableFilter<"News"> | string | null
    published?: BoolFilter<"News"> | boolean
    publishedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    categoryId?: StringFilter<"News"> | string
    createdById?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    category?: XOR<NewsCategoryScalarRelationFilter, NewsCategoryWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: NewsMediaListRelationFilter
  }, "id" | "slug">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    published?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    slug?: StringWithAggregatesFilter<"News"> | string
    content?: StringWithAggregatesFilter<"News"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"News"> | string | null
    published?: BoolWithAggregatesFilter<"News"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"News"> | Date | string | null
    categoryId?: StringWithAggregatesFilter<"News"> | string
    createdById?: StringWithAggregatesFilter<"News"> | string
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type ChurchWhereInput = {
    AND?: ChurchWhereInput | ChurchWhereInput[]
    OR?: ChurchWhereInput[]
    NOT?: ChurchWhereInput | ChurchWhereInput[]
    id?: StringFilter<"Church"> | string
    name?: StringFilter<"Church"> | string
    address?: StringFilter<"Church"> | string
    description?: StringNullableFilter<"Church"> | string | null
    latitude?: FloatFilter<"Church"> | number
    longitude?: FloatFilter<"Church"> | number
    createdAt?: DateTimeFilter<"Church"> | Date | string
    updatedAt?: DateTimeFilter<"Church"> | Date | string
    massSchedules?: MassScheduleListRelationFilter
  }

  export type ChurchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    massSchedules?: MassScheduleOrderByRelationAggregateInput
  }

  export type ChurchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChurchWhereInput | ChurchWhereInput[]
    OR?: ChurchWhereInput[]
    NOT?: ChurchWhereInput | ChurchWhereInput[]
    name?: StringFilter<"Church"> | string
    address?: StringFilter<"Church"> | string
    description?: StringNullableFilter<"Church"> | string | null
    latitude?: FloatFilter<"Church"> | number
    longitude?: FloatFilter<"Church"> | number
    createdAt?: DateTimeFilter<"Church"> | Date | string
    updatedAt?: DateTimeFilter<"Church"> | Date | string
    massSchedules?: MassScheduleListRelationFilter
  }, "id">

  export type ChurchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChurchCountOrderByAggregateInput
    _avg?: ChurchAvgOrderByAggregateInput
    _max?: ChurchMaxOrderByAggregateInput
    _min?: ChurchMinOrderByAggregateInput
    _sum?: ChurchSumOrderByAggregateInput
  }

  export type ChurchScalarWhereWithAggregatesInput = {
    AND?: ChurchScalarWhereWithAggregatesInput | ChurchScalarWhereWithAggregatesInput[]
    OR?: ChurchScalarWhereWithAggregatesInput[]
    NOT?: ChurchScalarWhereWithAggregatesInput | ChurchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Church"> | string
    name?: StringWithAggregatesFilter<"Church"> | string
    address?: StringWithAggregatesFilter<"Church"> | string
    description?: StringNullableWithAggregatesFilter<"Church"> | string | null
    latitude?: FloatWithAggregatesFilter<"Church"> | number
    longitude?: FloatWithAggregatesFilter<"Church"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Church"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Church"> | Date | string
  }

  export type MassScheduleWhereInput = {
    AND?: MassScheduleWhereInput | MassScheduleWhereInput[]
    OR?: MassScheduleWhereInput[]
    NOT?: MassScheduleWhereInput | MassScheduleWhereInput[]
    id?: StringFilter<"MassSchedule"> | string
    churchId?: StringFilter<"MassSchedule"> | string
    dayOfWeek?: IntFilter<"MassSchedule"> | number
    time?: StringFilter<"MassSchedule"> | string
    notes?: StringNullableFilter<"MassSchedule"> | string | null
    createdAt?: DateTimeFilter<"MassSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"MassSchedule"> | Date | string
    church?: XOR<ChurchScalarRelationFilter, ChurchWhereInput>
  }

  export type MassScheduleOrderByWithRelationInput = {
    id?: SortOrder
    churchId?: SortOrder
    dayOfWeek?: SortOrder
    time?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    church?: ChurchOrderByWithRelationInput
  }

  export type MassScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MassScheduleWhereInput | MassScheduleWhereInput[]
    OR?: MassScheduleWhereInput[]
    NOT?: MassScheduleWhereInput | MassScheduleWhereInput[]
    churchId?: StringFilter<"MassSchedule"> | string
    dayOfWeek?: IntFilter<"MassSchedule"> | number
    time?: StringFilter<"MassSchedule"> | string
    notes?: StringNullableFilter<"MassSchedule"> | string | null
    createdAt?: DateTimeFilter<"MassSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"MassSchedule"> | Date | string
    church?: XOR<ChurchScalarRelationFilter, ChurchWhereInput>
  }, "id">

  export type MassScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    churchId?: SortOrder
    dayOfWeek?: SortOrder
    time?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MassScheduleCountOrderByAggregateInput
    _avg?: MassScheduleAvgOrderByAggregateInput
    _max?: MassScheduleMaxOrderByAggregateInput
    _min?: MassScheduleMinOrderByAggregateInput
    _sum?: MassScheduleSumOrderByAggregateInput
  }

  export type MassScheduleScalarWhereWithAggregatesInput = {
    AND?: MassScheduleScalarWhereWithAggregatesInput | MassScheduleScalarWhereWithAggregatesInput[]
    OR?: MassScheduleScalarWhereWithAggregatesInput[]
    NOT?: MassScheduleScalarWhereWithAggregatesInput | MassScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MassSchedule"> | string
    churchId?: StringWithAggregatesFilter<"MassSchedule"> | string
    dayOfWeek?: IntWithAggregatesFilter<"MassSchedule"> | number
    time?: StringWithAggregatesFilter<"MassSchedule"> | string
    notes?: StringNullableWithAggregatesFilter<"MassSchedule"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MassSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MassSchedule"> | Date | string
  }

  export type MinistryWhereInput = {
    AND?: MinistryWhereInput | MinistryWhereInput[]
    OR?: MinistryWhereInput[]
    NOT?: MinistryWhereInput | MinistryWhereInput[]
    id?: StringFilter<"Ministry"> | string
    name?: StringFilter<"Ministry"> | string
    slug?: StringFilter<"Ministry"> | string
    description?: StringNullableFilter<"Ministry"> | string | null
    imageUrl?: StringNullableFilter<"Ministry"> | string | null
    contactName?: StringNullableFilter<"Ministry"> | string | null
    contactPhone?: StringNullableFilter<"Ministry"> | string | null
    createdAt?: DateTimeFilter<"Ministry"> | Date | string
    updatedAt?: DateTimeFilter<"Ministry"> | Date | string
    media?: MinistryMediaListRelationFilter
  }

  export type MinistryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    media?: MinistryMediaOrderByRelationAggregateInput
  }

  export type MinistryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: MinistryWhereInput | MinistryWhereInput[]
    OR?: MinistryWhereInput[]
    NOT?: MinistryWhereInput | MinistryWhereInput[]
    name?: StringFilter<"Ministry"> | string
    description?: StringNullableFilter<"Ministry"> | string | null
    imageUrl?: StringNullableFilter<"Ministry"> | string | null
    contactName?: StringNullableFilter<"Ministry"> | string | null
    contactPhone?: StringNullableFilter<"Ministry"> | string | null
    createdAt?: DateTimeFilter<"Ministry"> | Date | string
    updatedAt?: DateTimeFilter<"Ministry"> | Date | string
    media?: MinistryMediaListRelationFilter
  }, "id" | "slug">

  export type MinistryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MinistryCountOrderByAggregateInput
    _max?: MinistryMaxOrderByAggregateInput
    _min?: MinistryMinOrderByAggregateInput
  }

  export type MinistryScalarWhereWithAggregatesInput = {
    AND?: MinistryScalarWhereWithAggregatesInput | MinistryScalarWhereWithAggregatesInput[]
    OR?: MinistryScalarWhereWithAggregatesInput[]
    NOT?: MinistryScalarWhereWithAggregatesInput | MinistryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ministry"> | string
    name?: StringWithAggregatesFilter<"Ministry"> | string
    slug?: StringWithAggregatesFilter<"Ministry"> | string
    description?: StringNullableWithAggregatesFilter<"Ministry"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Ministry"> | string | null
    contactName?: StringNullableWithAggregatesFilter<"Ministry"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"Ministry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ministry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ministry"> | Date | string
  }

  export type FinancialReportWhereInput = {
    AND?: FinancialReportWhereInput | FinancialReportWhereInput[]
    OR?: FinancialReportWhereInput[]
    NOT?: FinancialReportWhereInput | FinancialReportWhereInput[]
    id?: StringFilter<"FinancialReport"> | string
    title?: StringFilter<"FinancialReport"> | string
    description?: StringFilter<"FinancialReport"> | string
    progressPercentage?: IntFilter<"FinancialReport"> | number
    totalCost?: FloatFilter<"FinancialReport"> | number
    amountRaised?: FloatFilter<"FinancialReport"> | number
    amountRemaining?: FloatFilter<"FinancialReport"> | number
    published?: BoolFilter<"FinancialReport"> | boolean
    publishedAt?: DateTimeNullableFilter<"FinancialReport"> | Date | string | null
    createdById?: StringFilter<"FinancialReport"> | string
    createdAt?: DateTimeFilter<"FinancialReport"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialReport"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: FinancialReportMediaListRelationFilter
  }

  export type FinancialReportOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    progressPercentage?: SortOrder
    totalCost?: SortOrder
    amountRaised?: SortOrder
    amountRemaining?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    media?: FinancialReportMediaOrderByRelationAggregateInput
  }

  export type FinancialReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinancialReportWhereInput | FinancialReportWhereInput[]
    OR?: FinancialReportWhereInput[]
    NOT?: FinancialReportWhereInput | FinancialReportWhereInput[]
    title?: StringFilter<"FinancialReport"> | string
    description?: StringFilter<"FinancialReport"> | string
    progressPercentage?: IntFilter<"FinancialReport"> | number
    totalCost?: FloatFilter<"FinancialReport"> | number
    amountRaised?: FloatFilter<"FinancialReport"> | number
    amountRemaining?: FloatFilter<"FinancialReport"> | number
    published?: BoolFilter<"FinancialReport"> | boolean
    publishedAt?: DateTimeNullableFilter<"FinancialReport"> | Date | string | null
    createdById?: StringFilter<"FinancialReport"> | string
    createdAt?: DateTimeFilter<"FinancialReport"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialReport"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: FinancialReportMediaListRelationFilter
  }, "id">

  export type FinancialReportOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    progressPercentage?: SortOrder
    totalCost?: SortOrder
    amountRaised?: SortOrder
    amountRemaining?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinancialReportCountOrderByAggregateInput
    _avg?: FinancialReportAvgOrderByAggregateInput
    _max?: FinancialReportMaxOrderByAggregateInput
    _min?: FinancialReportMinOrderByAggregateInput
    _sum?: FinancialReportSumOrderByAggregateInput
  }

  export type FinancialReportScalarWhereWithAggregatesInput = {
    AND?: FinancialReportScalarWhereWithAggregatesInput | FinancialReportScalarWhereWithAggregatesInput[]
    OR?: FinancialReportScalarWhereWithAggregatesInput[]
    NOT?: FinancialReportScalarWhereWithAggregatesInput | FinancialReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinancialReport"> | string
    title?: StringWithAggregatesFilter<"FinancialReport"> | string
    description?: StringWithAggregatesFilter<"FinancialReport"> | string
    progressPercentage?: IntWithAggregatesFilter<"FinancialReport"> | number
    totalCost?: FloatWithAggregatesFilter<"FinancialReport"> | number
    amountRaised?: FloatWithAggregatesFilter<"FinancialReport"> | number
    amountRemaining?: FloatWithAggregatesFilter<"FinancialReport"> | number
    published?: BoolWithAggregatesFilter<"FinancialReport"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"FinancialReport"> | Date | string | null
    createdById?: StringWithAggregatesFilter<"FinancialReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FinancialReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FinancialReport"> | Date | string
  }

  export type HomilyWhereInput = {
    AND?: HomilyWhereInput | HomilyWhereInput[]
    OR?: HomilyWhereInput[]
    NOT?: HomilyWhereInput | HomilyWhereInput[]
    id?: StringFilter<"Homily"> | string
    title?: StringFilter<"Homily"> | string
    description?: StringNullableFilter<"Homily"> | string | null
    content?: StringNullableFilter<"Homily"> | string | null
    date?: DateTimeFilter<"Homily"> | Date | string
    published?: BoolFilter<"Homily"> | boolean
    publishedAt?: DateTimeNullableFilter<"Homily"> | Date | string | null
    createdById?: StringFilter<"Homily"> | string
    createdAt?: DateTimeFilter<"Homily"> | Date | string
    updatedAt?: DateTimeFilter<"Homily"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: HomilyMediaListRelationFilter
  }

  export type HomilyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    date?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    media?: HomilyMediaOrderByRelationAggregateInput
  }

  export type HomilyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HomilyWhereInput | HomilyWhereInput[]
    OR?: HomilyWhereInput[]
    NOT?: HomilyWhereInput | HomilyWhereInput[]
    title?: StringFilter<"Homily"> | string
    description?: StringNullableFilter<"Homily"> | string | null
    content?: StringNullableFilter<"Homily"> | string | null
    date?: DateTimeFilter<"Homily"> | Date | string
    published?: BoolFilter<"Homily"> | boolean
    publishedAt?: DateTimeNullableFilter<"Homily"> | Date | string | null
    createdById?: StringFilter<"Homily"> | string
    createdAt?: DateTimeFilter<"Homily"> | Date | string
    updatedAt?: DateTimeFilter<"Homily"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: HomilyMediaListRelationFilter
  }, "id">

  export type HomilyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    date?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomilyCountOrderByAggregateInput
    _max?: HomilyMaxOrderByAggregateInput
    _min?: HomilyMinOrderByAggregateInput
  }

  export type HomilyScalarWhereWithAggregatesInput = {
    AND?: HomilyScalarWhereWithAggregatesInput | HomilyScalarWhereWithAggregatesInput[]
    OR?: HomilyScalarWhereWithAggregatesInput[]
    NOT?: HomilyScalarWhereWithAggregatesInput | HomilyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Homily"> | string
    title?: StringWithAggregatesFilter<"Homily"> | string
    description?: StringNullableWithAggregatesFilter<"Homily"> | string | null
    content?: StringNullableWithAggregatesFilter<"Homily"> | string | null
    date?: DateTimeWithAggregatesFilter<"Homily"> | Date | string
    published?: BoolWithAggregatesFilter<"Homily"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Homily"> | Date | string | null
    createdById?: StringWithAggregatesFilter<"Homily"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Homily"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Homily"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    name?: StringFilter<"Appointment"> | string
    phone?: StringFilter<"Appointment"> | string
    email?: StringFilter<"Appointment"> | string
    preferredDate?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    documents?: AppointmentDocumentListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    preferredDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documents?: AppointmentDocumentOrderByRelationAggregateInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    name?: StringFilter<"Appointment"> | string
    phone?: StringFilter<"Appointment"> | string
    email?: StringFilter<"Appointment"> | string
    preferredDate?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    documents?: AppointmentDocumentListRelationFilter
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    preferredDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    type?: EnumAppointmentTypeWithAggregatesFilter<"Appointment"> | $Enums.AppointmentType
    name?: StringWithAggregatesFilter<"Appointment"> | string
    phone?: StringWithAggregatesFilter<"Appointment"> | string
    email?: StringWithAggregatesFilter<"Appointment"> | string
    preferredDate?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type AppointmentDocumentWhereInput = {
    AND?: AppointmentDocumentWhereInput | AppointmentDocumentWhereInput[]
    OR?: AppointmentDocumentWhereInput[]
    NOT?: AppointmentDocumentWhereInput | AppointmentDocumentWhereInput[]
    id?: StringFilter<"AppointmentDocument"> | string
    appointmentId?: StringFilter<"AppointmentDocument"> | string
    fileUrl?: StringFilter<"AppointmentDocument"> | string
    createdAt?: DateTimeFilter<"AppointmentDocument"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type AppointmentDocumentOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
  }

  export type AppointmentDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentDocumentWhereInput | AppointmentDocumentWhereInput[]
    OR?: AppointmentDocumentWhereInput[]
    NOT?: AppointmentDocumentWhereInput | AppointmentDocumentWhereInput[]
    appointmentId?: StringFilter<"AppointmentDocument"> | string
    fileUrl?: StringFilter<"AppointmentDocument"> | string
    createdAt?: DateTimeFilter<"AppointmentDocument"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id">

  export type AppointmentDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    _count?: AppointmentDocumentCountOrderByAggregateInput
    _max?: AppointmentDocumentMaxOrderByAggregateInput
    _min?: AppointmentDocumentMinOrderByAggregateInput
  }

  export type AppointmentDocumentScalarWhereWithAggregatesInput = {
    AND?: AppointmentDocumentScalarWhereWithAggregatesInput | AppointmentDocumentScalarWhereWithAggregatesInput[]
    OR?: AppointmentDocumentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentDocumentScalarWhereWithAggregatesInput | AppointmentDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppointmentDocument"> | string
    appointmentId?: StringWithAggregatesFilter<"AppointmentDocument"> | string
    fileUrl?: StringWithAggregatesFilter<"AppointmentDocument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AppointmentDocument"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    altText?: StringNullableFilter<"Media"> | string | null
    size?: IntNullableFilter<"Media"> | number | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    news?: NewsMediaListRelationFilter
    ministries?: MinistryMediaListRelationFilter
    financialReports?: FinancialReportMediaListRelationFilter
    homilies?: HomilyMediaListRelationFilter
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    altText?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    news?: NewsMediaOrderByRelationAggregateInput
    ministries?: MinistryMediaOrderByRelationAggregateInput
    financialReports?: FinancialReportMediaOrderByRelationAggregateInput
    homilies?: HomilyMediaOrderByRelationAggregateInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    url?: StringFilter<"Media"> | string
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    altText?: StringNullableFilter<"Media"> | string | null
    size?: IntNullableFilter<"Media"> | number | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    news?: NewsMediaListRelationFilter
    ministries?: MinistryMediaListRelationFilter
    financialReports?: FinancialReportMediaListRelationFilter
    homilies?: HomilyMediaListRelationFilter
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    altText?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    url?: StringWithAggregatesFilter<"Media"> | string
    type?: EnumMediaTypeWithAggregatesFilter<"Media"> | $Enums.MediaType
    altText?: StringNullableWithAggregatesFilter<"Media"> | string | null
    size?: IntNullableWithAggregatesFilter<"Media"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type NewsMediaWhereInput = {
    AND?: NewsMediaWhereInput | NewsMediaWhereInput[]
    OR?: NewsMediaWhereInput[]
    NOT?: NewsMediaWhereInput | NewsMediaWhereInput[]
    newsId?: StringFilter<"NewsMedia"> | string
    mediaId?: StringFilter<"NewsMedia"> | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }

  export type NewsMediaOrderByWithRelationInput = {
    newsId?: SortOrder
    mediaId?: SortOrder
    news?: NewsOrderByWithRelationInput
    media?: MediaOrderByWithRelationInput
  }

  export type NewsMediaWhereUniqueInput = Prisma.AtLeast<{
    newsId_mediaId?: NewsMediaNewsIdMediaIdCompoundUniqueInput
    AND?: NewsMediaWhereInput | NewsMediaWhereInput[]
    OR?: NewsMediaWhereInput[]
    NOT?: NewsMediaWhereInput | NewsMediaWhereInput[]
    newsId?: StringFilter<"NewsMedia"> | string
    mediaId?: StringFilter<"NewsMedia"> | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }, "newsId_mediaId">

  export type NewsMediaOrderByWithAggregationInput = {
    newsId?: SortOrder
    mediaId?: SortOrder
    _count?: NewsMediaCountOrderByAggregateInput
    _max?: NewsMediaMaxOrderByAggregateInput
    _min?: NewsMediaMinOrderByAggregateInput
  }

  export type NewsMediaScalarWhereWithAggregatesInput = {
    AND?: NewsMediaScalarWhereWithAggregatesInput | NewsMediaScalarWhereWithAggregatesInput[]
    OR?: NewsMediaScalarWhereWithAggregatesInput[]
    NOT?: NewsMediaScalarWhereWithAggregatesInput | NewsMediaScalarWhereWithAggregatesInput[]
    newsId?: StringWithAggregatesFilter<"NewsMedia"> | string
    mediaId?: StringWithAggregatesFilter<"NewsMedia"> | string
  }

  export type MinistryMediaWhereInput = {
    AND?: MinistryMediaWhereInput | MinistryMediaWhereInput[]
    OR?: MinistryMediaWhereInput[]
    NOT?: MinistryMediaWhereInput | MinistryMediaWhereInput[]
    ministryId?: StringFilter<"MinistryMedia"> | string
    mediaId?: StringFilter<"MinistryMedia"> | string
    ministry?: XOR<MinistryScalarRelationFilter, MinistryWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }

  export type MinistryMediaOrderByWithRelationInput = {
    ministryId?: SortOrder
    mediaId?: SortOrder
    ministry?: MinistryOrderByWithRelationInput
    media?: MediaOrderByWithRelationInput
  }

  export type MinistryMediaWhereUniqueInput = Prisma.AtLeast<{
    ministryId_mediaId?: MinistryMediaMinistryIdMediaIdCompoundUniqueInput
    AND?: MinistryMediaWhereInput | MinistryMediaWhereInput[]
    OR?: MinistryMediaWhereInput[]
    NOT?: MinistryMediaWhereInput | MinistryMediaWhereInput[]
    ministryId?: StringFilter<"MinistryMedia"> | string
    mediaId?: StringFilter<"MinistryMedia"> | string
    ministry?: XOR<MinistryScalarRelationFilter, MinistryWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }, "ministryId_mediaId">

  export type MinistryMediaOrderByWithAggregationInput = {
    ministryId?: SortOrder
    mediaId?: SortOrder
    _count?: MinistryMediaCountOrderByAggregateInput
    _max?: MinistryMediaMaxOrderByAggregateInput
    _min?: MinistryMediaMinOrderByAggregateInput
  }

  export type MinistryMediaScalarWhereWithAggregatesInput = {
    AND?: MinistryMediaScalarWhereWithAggregatesInput | MinistryMediaScalarWhereWithAggregatesInput[]
    OR?: MinistryMediaScalarWhereWithAggregatesInput[]
    NOT?: MinistryMediaScalarWhereWithAggregatesInput | MinistryMediaScalarWhereWithAggregatesInput[]
    ministryId?: StringWithAggregatesFilter<"MinistryMedia"> | string
    mediaId?: StringWithAggregatesFilter<"MinistryMedia"> | string
  }

  export type FinancialReportMediaWhereInput = {
    AND?: FinancialReportMediaWhereInput | FinancialReportMediaWhereInput[]
    OR?: FinancialReportMediaWhereInput[]
    NOT?: FinancialReportMediaWhereInput | FinancialReportMediaWhereInput[]
    reportId?: StringFilter<"FinancialReportMedia"> | string
    mediaId?: StringFilter<"FinancialReportMedia"> | string
    report?: XOR<FinancialReportScalarRelationFilter, FinancialReportWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }

  export type FinancialReportMediaOrderByWithRelationInput = {
    reportId?: SortOrder
    mediaId?: SortOrder
    report?: FinancialReportOrderByWithRelationInput
    media?: MediaOrderByWithRelationInput
  }

  export type FinancialReportMediaWhereUniqueInput = Prisma.AtLeast<{
    reportId_mediaId?: FinancialReportMediaReportIdMediaIdCompoundUniqueInput
    AND?: FinancialReportMediaWhereInput | FinancialReportMediaWhereInput[]
    OR?: FinancialReportMediaWhereInput[]
    NOT?: FinancialReportMediaWhereInput | FinancialReportMediaWhereInput[]
    reportId?: StringFilter<"FinancialReportMedia"> | string
    mediaId?: StringFilter<"FinancialReportMedia"> | string
    report?: XOR<FinancialReportScalarRelationFilter, FinancialReportWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }, "reportId_mediaId">

  export type FinancialReportMediaOrderByWithAggregationInput = {
    reportId?: SortOrder
    mediaId?: SortOrder
    _count?: FinancialReportMediaCountOrderByAggregateInput
    _max?: FinancialReportMediaMaxOrderByAggregateInput
    _min?: FinancialReportMediaMinOrderByAggregateInput
  }

  export type FinancialReportMediaScalarWhereWithAggregatesInput = {
    AND?: FinancialReportMediaScalarWhereWithAggregatesInput | FinancialReportMediaScalarWhereWithAggregatesInput[]
    OR?: FinancialReportMediaScalarWhereWithAggregatesInput[]
    NOT?: FinancialReportMediaScalarWhereWithAggregatesInput | FinancialReportMediaScalarWhereWithAggregatesInput[]
    reportId?: StringWithAggregatesFilter<"FinancialReportMedia"> | string
    mediaId?: StringWithAggregatesFilter<"FinancialReportMedia"> | string
  }

  export type HomilyMediaWhereInput = {
    AND?: HomilyMediaWhereInput | HomilyMediaWhereInput[]
    OR?: HomilyMediaWhereInput[]
    NOT?: HomilyMediaWhereInput | HomilyMediaWhereInput[]
    homilyId?: StringFilter<"HomilyMedia"> | string
    mediaId?: StringFilter<"HomilyMedia"> | string
    homily?: XOR<HomilyScalarRelationFilter, HomilyWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }

  export type HomilyMediaOrderByWithRelationInput = {
    homilyId?: SortOrder
    mediaId?: SortOrder
    homily?: HomilyOrderByWithRelationInput
    media?: MediaOrderByWithRelationInput
  }

  export type HomilyMediaWhereUniqueInput = Prisma.AtLeast<{
    homilyId_mediaId?: HomilyMediaHomilyIdMediaIdCompoundUniqueInput
    AND?: HomilyMediaWhereInput | HomilyMediaWhereInput[]
    OR?: HomilyMediaWhereInput[]
    NOT?: HomilyMediaWhereInput | HomilyMediaWhereInput[]
    homilyId?: StringFilter<"HomilyMedia"> | string
    mediaId?: StringFilter<"HomilyMedia"> | string
    homily?: XOR<HomilyScalarRelationFilter, HomilyWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }, "homilyId_mediaId">

  export type HomilyMediaOrderByWithAggregationInput = {
    homilyId?: SortOrder
    mediaId?: SortOrder
    _count?: HomilyMediaCountOrderByAggregateInput
    _max?: HomilyMediaMaxOrderByAggregateInput
    _min?: HomilyMediaMinOrderByAggregateInput
  }

  export type HomilyMediaScalarWhereWithAggregatesInput = {
    AND?: HomilyMediaScalarWhereWithAggregatesInput | HomilyMediaScalarWhereWithAggregatesInput[]
    OR?: HomilyMediaScalarWhereWithAggregatesInput[]
    NOT?: HomilyMediaScalarWhereWithAggregatesInput | HomilyMediaScalarWhereWithAggregatesInput[]
    homilyId?: StringWithAggregatesFilter<"HomilyMedia"> | string
    mediaId?: StringWithAggregatesFilter<"HomilyMedia"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutCreatedByInput
    financialReports?: FinancialReportCreateNestedManyWithoutCreatedByInput
    homilies?: HomilyCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutCreatedByInput
    financialReports?: FinancialReportUncheckedCreateNestedManyWithoutCreatedByInput
    homilies?: HomilyUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutCreatedByNestedInput
    financialReports?: FinancialReportUpdateManyWithoutCreatedByNestedInput
    homilies?: HomilyUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutCreatedByNestedInput
    financialReports?: FinancialReportUncheckedUpdateManyWithoutCreatedByNestedInput
    homilies?: HomilyUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    news?: NewsCreateNestedManyWithoutCategoryInput
  }

  export type NewsCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type NewsCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutCategoryNestedInput
  }

  export type NewsCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type NewsCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type NewsCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    imageUrl?: string | null
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: NewsCategoryCreateNestedOneWithoutNewsInput
    createdBy: UserCreateNestedOneWithoutNewsInput
    media?: NewsMediaCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    imageUrl?: string | null
    published?: boolean
    publishedAt?: Date | string | null
    categoryId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: NewsMediaUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NewsCategoryUpdateOneRequiredWithoutNewsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutNewsNestedInput
    media?: NewsMediaUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: NewsMediaUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCreateManyInput = {
    id?: string
    title: string
    slug: string
    content: string
    imageUrl?: string | null
    published?: boolean
    publishedAt?: Date | string | null
    categoryId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChurchCreateInput = {
    id?: string
    name: string
    address: string
    description?: string | null
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    massSchedules?: MassScheduleCreateNestedManyWithoutChurchInput
  }

  export type ChurchUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    description?: string | null
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    massSchedules?: MassScheduleUncheckedCreateNestedManyWithoutChurchInput
  }

  export type ChurchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    massSchedules?: MassScheduleUpdateManyWithoutChurchNestedInput
  }

  export type ChurchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    massSchedules?: MassScheduleUncheckedUpdateManyWithoutChurchNestedInput
  }

  export type ChurchCreateManyInput = {
    id?: string
    name: string
    address: string
    description?: string | null
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChurchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChurchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MassScheduleCreateInput = {
    id?: string
    dayOfWeek: number
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    church: ChurchCreateNestedOneWithoutMassSchedulesInput
  }

  export type MassScheduleUncheckedCreateInput = {
    id?: string
    churchId: string
    dayOfWeek: number
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MassScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    church?: ChurchUpdateOneRequiredWithoutMassSchedulesNestedInput
  }

  export type MassScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    churchId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MassScheduleCreateManyInput = {
    id?: string
    churchId: string
    dayOfWeek: number
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MassScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MassScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    churchId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    contactName?: string | null
    contactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MinistryMediaCreateNestedManyWithoutMinistryInput
  }

  export type MinistryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    contactName?: string | null
    contactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MinistryMediaUncheckedCreateNestedManyWithoutMinistryInput
  }

  export type MinistryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MinistryMediaUpdateManyWithoutMinistryNestedInput
  }

  export type MinistryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MinistryMediaUncheckedUpdateManyWithoutMinistryNestedInput
  }

  export type MinistryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    contactName?: string | null
    contactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MinistryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialReportCreateInput = {
    id?: string
    title: string
    description: string
    progressPercentage: number
    totalCost: number
    amountRaised: number
    amountRemaining: number
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutFinancialReportsInput
    media?: FinancialReportMediaCreateNestedManyWithoutReportInput
  }

  export type FinancialReportUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    progressPercentage: number
    totalCost: number
    amountRaised: number
    amountRemaining: number
    published?: boolean
    publishedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: FinancialReportMediaUncheckedCreateNestedManyWithoutReportInput
  }

  export type FinancialReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    amountRaised?: FloatFieldUpdateOperationsInput | number
    amountRemaining?: FloatFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutFinancialReportsNestedInput
    media?: FinancialReportMediaUpdateManyWithoutReportNestedInput
  }

  export type FinancialReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    amountRaised?: FloatFieldUpdateOperationsInput | number
    amountRemaining?: FloatFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: FinancialReportMediaUncheckedUpdateManyWithoutReportNestedInput
  }

  export type FinancialReportCreateManyInput = {
    id?: string
    title: string
    description: string
    progressPercentage: number
    totalCost: number
    amountRaised: number
    amountRemaining: number
    published?: boolean
    publishedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    amountRaised?: FloatFieldUpdateOperationsInput | number
    amountRemaining?: FloatFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    amountRaised?: FloatFieldUpdateOperationsInput | number
    amountRemaining?: FloatFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomilyCreateInput = {
    id?: string
    title: string
    description?: string | null
    content?: string | null
    date: Date | string
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutHomiliesInput
    media?: HomilyMediaCreateNestedManyWithoutHomilyInput
  }

  export type HomilyUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    content?: string | null
    date: Date | string
    published?: boolean
    publishedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: HomilyMediaUncheckedCreateNestedManyWithoutHomilyInput
  }

  export type HomilyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutHomiliesNestedInput
    media?: HomilyMediaUpdateManyWithoutHomilyNestedInput
  }

  export type HomilyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: HomilyMediaUncheckedUpdateManyWithoutHomilyNestedInput
  }

  export type HomilyCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    content?: string | null
    date: Date | string
    published?: boolean
    publishedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomilyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomilyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    type: $Enums.AppointmentType
    name: string
    phone: string
    email: string
    preferredDate?: Date | string | null
    notes?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: AppointmentDocumentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    type: $Enums.AppointmentType
    name: string
    phone: string
    email: string
    preferredDate?: Date | string | null
    notes?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: AppointmentDocumentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: AppointmentDocumentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: AppointmentDocumentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    type: $Enums.AppointmentType
    name: string
    phone: string
    email: string
    preferredDate?: Date | string | null
    notes?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentDocumentCreateInput = {
    id?: string
    fileUrl: string
    createdAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutDocumentsInput
  }

  export type AppointmentDocumentUncheckedCreateInput = {
    id?: string
    appointmentId: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type AppointmentDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type AppointmentDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentDocumentCreateManyInput = {
    id?: string
    appointmentId: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type AppointmentDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    altText?: string | null
    size?: number | null
    createdAt?: Date | string
    news?: NewsMediaCreateNestedManyWithoutMediaInput
    ministries?: MinistryMediaCreateNestedManyWithoutMediaInput
    financialReports?: FinancialReportMediaCreateNestedManyWithoutMediaInput
    homilies?: HomilyMediaCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    altText?: string | null
    size?: number | null
    createdAt?: Date | string
    news?: NewsMediaUncheckedCreateNestedManyWithoutMediaInput
    ministries?: MinistryMediaUncheckedCreateNestedManyWithoutMediaInput
    financialReports?: FinancialReportMediaUncheckedCreateNestedManyWithoutMediaInput
    homilies?: HomilyMediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsMediaUpdateManyWithoutMediaNestedInput
    ministries?: MinistryMediaUpdateManyWithoutMediaNestedInput
    financialReports?: FinancialReportMediaUpdateManyWithoutMediaNestedInput
    homilies?: HomilyMediaUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsMediaUncheckedUpdateManyWithoutMediaNestedInput
    ministries?: MinistryMediaUncheckedUpdateManyWithoutMediaNestedInput
    financialReports?: FinancialReportMediaUncheckedUpdateManyWithoutMediaNestedInput
    homilies?: HomilyMediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaCreateManyInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    altText?: string | null
    size?: number | null
    createdAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsMediaCreateInput = {
    news: NewsCreateNestedOneWithoutMediaInput
    media: MediaCreateNestedOneWithoutNewsInput
  }

  export type NewsMediaUncheckedCreateInput = {
    newsId: string
    mediaId: string
  }

  export type NewsMediaUpdateInput = {
    news?: NewsUpdateOneRequiredWithoutMediaNestedInput
    media?: MediaUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsMediaUncheckedUpdateInput = {
    newsId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsMediaCreateManyInput = {
    newsId: string
    mediaId: string
  }

  export type NewsMediaUpdateManyMutationInput = {

  }

  export type NewsMediaUncheckedUpdateManyInput = {
    newsId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type MinistryMediaCreateInput = {
    ministry: MinistryCreateNestedOneWithoutMediaInput
    media: MediaCreateNestedOneWithoutMinistriesInput
  }

  export type MinistryMediaUncheckedCreateInput = {
    ministryId: string
    mediaId: string
  }

  export type MinistryMediaUpdateInput = {
    ministry?: MinistryUpdateOneRequiredWithoutMediaNestedInput
    media?: MediaUpdateOneRequiredWithoutMinistriesNestedInput
  }

  export type MinistryMediaUncheckedUpdateInput = {
    ministryId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type MinistryMediaCreateManyInput = {
    ministryId: string
    mediaId: string
  }

  export type MinistryMediaUpdateManyMutationInput = {

  }

  export type MinistryMediaUncheckedUpdateManyInput = {
    ministryId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialReportMediaCreateInput = {
    report: FinancialReportCreateNestedOneWithoutMediaInput
    media: MediaCreateNestedOneWithoutFinancialReportsInput
  }

  export type FinancialReportMediaUncheckedCreateInput = {
    reportId: string
    mediaId: string
  }

  export type FinancialReportMediaUpdateInput = {
    report?: FinancialReportUpdateOneRequiredWithoutMediaNestedInput
    media?: MediaUpdateOneRequiredWithoutFinancialReportsNestedInput
  }

  export type FinancialReportMediaUncheckedUpdateInput = {
    reportId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialReportMediaCreateManyInput = {
    reportId: string
    mediaId: string
  }

  export type FinancialReportMediaUpdateManyMutationInput = {

  }

  export type FinancialReportMediaUncheckedUpdateManyInput = {
    reportId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type HomilyMediaCreateInput = {
    homily: HomilyCreateNestedOneWithoutMediaInput
    media: MediaCreateNestedOneWithoutHomiliesInput
  }

  export type HomilyMediaUncheckedCreateInput = {
    homilyId: string
    mediaId: string
  }

  export type HomilyMediaUpdateInput = {
    homily?: HomilyUpdateOneRequiredWithoutMediaNestedInput
    media?: MediaUpdateOneRequiredWithoutHomiliesNestedInput
  }

  export type HomilyMediaUncheckedUpdateInput = {
    homilyId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type HomilyMediaCreateManyInput = {
    homilyId: string
    mediaId: string
  }

  export type HomilyMediaUpdateManyMutationInput = {

  }

  export type HomilyMediaUncheckedUpdateManyInput = {
    homilyId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type FinancialReportListRelationFilter = {
    every?: FinancialReportWhereInput
    some?: FinancialReportWhereInput
    none?: FinancialReportWhereInput
  }

  export type HomilyListRelationFilter = {
    every?: HomilyWhereInput
    some?: HomilyWhereInput
    none?: HomilyWhereInput
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomilyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NewsCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
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

  export type NewsCategoryScalarRelationFilter = {
    is?: NewsCategoryWhereInput
    isNot?: NewsCategoryWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NewsMediaListRelationFilter = {
    every?: NewsMediaWhereInput
    some?: NewsMediaWhereInput
    none?: NewsMediaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NewsMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    categoryId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    categoryId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    categoryId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MassScheduleListRelationFilter = {
    every?: MassScheduleWhereInput
    some?: MassScheduleWhereInput
    none?: MassScheduleWhereInput
  }

  export type MassScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChurchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChurchAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ChurchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChurchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChurchSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ChurchScalarRelationFilter = {
    is?: ChurchWhereInput
    isNot?: ChurchWhereInput
  }

  export type MassScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    churchId?: SortOrder
    dayOfWeek?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MassScheduleAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type MassScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    churchId?: SortOrder
    dayOfWeek?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MassScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    churchId?: SortOrder
    dayOfWeek?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MassScheduleSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
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

  export type MinistryMediaListRelationFilter = {
    every?: MinistryMediaWhereInput
    some?: MinistryMediaWhereInput
    none?: MinistryMediaWhereInput
  }

  export type MinistryMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MinistryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MinistryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MinistryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialReportMediaListRelationFilter = {
    every?: FinancialReportMediaWhereInput
    some?: FinancialReportMediaWhereInput
    none?: FinancialReportMediaWhereInput
  }

  export type FinancialReportMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialReportCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    progressPercentage?: SortOrder
    totalCost?: SortOrder
    amountRaised?: SortOrder
    amountRemaining?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialReportAvgOrderByAggregateInput = {
    progressPercentage?: SortOrder
    totalCost?: SortOrder
    amountRaised?: SortOrder
    amountRemaining?: SortOrder
  }

  export type FinancialReportMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    progressPercentage?: SortOrder
    totalCost?: SortOrder
    amountRaised?: SortOrder
    amountRemaining?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialReportMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    progressPercentage?: SortOrder
    totalCost?: SortOrder
    amountRaised?: SortOrder
    amountRemaining?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialReportSumOrderByAggregateInput = {
    progressPercentage?: SortOrder
    totalCost?: SortOrder
    amountRaised?: SortOrder
    amountRemaining?: SortOrder
  }

  export type HomilyMediaListRelationFilter = {
    every?: HomilyMediaWhereInput
    some?: HomilyMediaWhereInput
    none?: HomilyMediaWhereInput
  }

  export type HomilyMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomilyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    date?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomilyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    date?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomilyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    date?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type AppointmentDocumentListRelationFilter = {
    every?: AppointmentDocumentWhereInput
    some?: AppointmentDocumentWhereInput
    none?: AppointmentDocumentWhereInput
  }

  export type AppointmentDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    preferredDate?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    preferredDate?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    preferredDate?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type AppointmentDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    altText?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    altText?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    altText?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NewsScalarRelationFilter = {
    is?: NewsWhereInput
    isNot?: NewsWhereInput
  }

  export type MediaScalarRelationFilter = {
    is?: MediaWhereInput
    isNot?: MediaWhereInput
  }

  export type NewsMediaNewsIdMediaIdCompoundUniqueInput = {
    newsId: string
    mediaId: string
  }

  export type NewsMediaCountOrderByAggregateInput = {
    newsId?: SortOrder
    mediaId?: SortOrder
  }

  export type NewsMediaMaxOrderByAggregateInput = {
    newsId?: SortOrder
    mediaId?: SortOrder
  }

  export type NewsMediaMinOrderByAggregateInput = {
    newsId?: SortOrder
    mediaId?: SortOrder
  }

  export type MinistryScalarRelationFilter = {
    is?: MinistryWhereInput
    isNot?: MinistryWhereInput
  }

  export type MinistryMediaMinistryIdMediaIdCompoundUniqueInput = {
    ministryId: string
    mediaId: string
  }

  export type MinistryMediaCountOrderByAggregateInput = {
    ministryId?: SortOrder
    mediaId?: SortOrder
  }

  export type MinistryMediaMaxOrderByAggregateInput = {
    ministryId?: SortOrder
    mediaId?: SortOrder
  }

  export type MinistryMediaMinOrderByAggregateInput = {
    ministryId?: SortOrder
    mediaId?: SortOrder
  }

  export type FinancialReportScalarRelationFilter = {
    is?: FinancialReportWhereInput
    isNot?: FinancialReportWhereInput
  }

  export type FinancialReportMediaReportIdMediaIdCompoundUniqueInput = {
    reportId: string
    mediaId: string
  }

  export type FinancialReportMediaCountOrderByAggregateInput = {
    reportId?: SortOrder
    mediaId?: SortOrder
  }

  export type FinancialReportMediaMaxOrderByAggregateInput = {
    reportId?: SortOrder
    mediaId?: SortOrder
  }

  export type FinancialReportMediaMinOrderByAggregateInput = {
    reportId?: SortOrder
    mediaId?: SortOrder
  }

  export type HomilyScalarRelationFilter = {
    is?: HomilyWhereInput
    isNot?: HomilyWhereInput
  }

  export type HomilyMediaHomilyIdMediaIdCompoundUniqueInput = {
    homilyId: string
    mediaId: string
  }

  export type HomilyMediaCountOrderByAggregateInput = {
    homilyId?: SortOrder
    mediaId?: SortOrder
  }

  export type HomilyMediaMaxOrderByAggregateInput = {
    homilyId?: SortOrder
    mediaId?: SortOrder
  }

  export type HomilyMediaMinOrderByAggregateInput = {
    homilyId?: SortOrder
    mediaId?: SortOrder
  }

  export type NewsCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NewsCreateWithoutCreatedByInput, NewsUncheckedCreateWithoutCreatedByInput> | NewsCreateWithoutCreatedByInput[] | NewsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCreatedByInput | NewsCreateOrConnectWithoutCreatedByInput[]
    createMany?: NewsCreateManyCreatedByInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type FinancialReportCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FinancialReportCreateWithoutCreatedByInput, FinancialReportUncheckedCreateWithoutCreatedByInput> | FinancialReportCreateWithoutCreatedByInput[] | FinancialReportUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FinancialReportCreateOrConnectWithoutCreatedByInput | FinancialReportCreateOrConnectWithoutCreatedByInput[]
    createMany?: FinancialReportCreateManyCreatedByInputEnvelope
    connect?: FinancialReportWhereUniqueInput | FinancialReportWhereUniqueInput[]
  }

  export type HomilyCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<HomilyCreateWithoutCreatedByInput, HomilyUncheckedCreateWithoutCreatedByInput> | HomilyCreateWithoutCreatedByInput[] | HomilyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: HomilyCreateOrConnectWithoutCreatedByInput | HomilyCreateOrConnectWithoutCreatedByInput[]
    createMany?: HomilyCreateManyCreatedByInputEnvelope
    connect?: HomilyWhereUniqueInput | HomilyWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NewsCreateWithoutCreatedByInput, NewsUncheckedCreateWithoutCreatedByInput> | NewsCreateWithoutCreatedByInput[] | NewsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCreatedByInput | NewsCreateOrConnectWithoutCreatedByInput[]
    createMany?: NewsCreateManyCreatedByInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type FinancialReportUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FinancialReportCreateWithoutCreatedByInput, FinancialReportUncheckedCreateWithoutCreatedByInput> | FinancialReportCreateWithoutCreatedByInput[] | FinancialReportUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FinancialReportCreateOrConnectWithoutCreatedByInput | FinancialReportCreateOrConnectWithoutCreatedByInput[]
    createMany?: FinancialReportCreateManyCreatedByInputEnvelope
    connect?: FinancialReportWhereUniqueInput | FinancialReportWhereUniqueInput[]
  }

  export type HomilyUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<HomilyCreateWithoutCreatedByInput, HomilyUncheckedCreateWithoutCreatedByInput> | HomilyCreateWithoutCreatedByInput[] | HomilyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: HomilyCreateOrConnectWithoutCreatedByInput | HomilyCreateOrConnectWithoutCreatedByInput[]
    createMany?: HomilyCreateManyCreatedByInputEnvelope
    connect?: HomilyWhereUniqueInput | HomilyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NewsUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NewsCreateWithoutCreatedByInput, NewsUncheckedCreateWithoutCreatedByInput> | NewsCreateWithoutCreatedByInput[] | NewsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCreatedByInput | NewsCreateOrConnectWithoutCreatedByInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutCreatedByInput | NewsUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NewsCreateManyCreatedByInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutCreatedByInput | NewsUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutCreatedByInput | NewsUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type FinancialReportUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FinancialReportCreateWithoutCreatedByInput, FinancialReportUncheckedCreateWithoutCreatedByInput> | FinancialReportCreateWithoutCreatedByInput[] | FinancialReportUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FinancialReportCreateOrConnectWithoutCreatedByInput | FinancialReportCreateOrConnectWithoutCreatedByInput[]
    upsert?: FinancialReportUpsertWithWhereUniqueWithoutCreatedByInput | FinancialReportUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FinancialReportCreateManyCreatedByInputEnvelope
    set?: FinancialReportWhereUniqueInput | FinancialReportWhereUniqueInput[]
    disconnect?: FinancialReportWhereUniqueInput | FinancialReportWhereUniqueInput[]
    delete?: FinancialReportWhereUniqueInput | FinancialReportWhereUniqueInput[]
    connect?: FinancialReportWhereUniqueInput | FinancialReportWhereUniqueInput[]
    update?: FinancialReportUpdateWithWhereUniqueWithoutCreatedByInput | FinancialReportUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FinancialReportUpdateManyWithWhereWithoutCreatedByInput | FinancialReportUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FinancialReportScalarWhereInput | FinancialReportScalarWhereInput[]
  }

  export type HomilyUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<HomilyCreateWithoutCreatedByInput, HomilyUncheckedCreateWithoutCreatedByInput> | HomilyCreateWithoutCreatedByInput[] | HomilyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: HomilyCreateOrConnectWithoutCreatedByInput | HomilyCreateOrConnectWithoutCreatedByInput[]
    upsert?: HomilyUpsertWithWhereUniqueWithoutCreatedByInput | HomilyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: HomilyCreateManyCreatedByInputEnvelope
    set?: HomilyWhereUniqueInput | HomilyWhereUniqueInput[]
    disconnect?: HomilyWhereUniqueInput | HomilyWhereUniqueInput[]
    delete?: HomilyWhereUniqueInput | HomilyWhereUniqueInput[]
    connect?: HomilyWhereUniqueInput | HomilyWhereUniqueInput[]
    update?: HomilyUpdateWithWhereUniqueWithoutCreatedByInput | HomilyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: HomilyUpdateManyWithWhereWithoutCreatedByInput | HomilyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: HomilyScalarWhereInput | HomilyScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NewsCreateWithoutCreatedByInput, NewsUncheckedCreateWithoutCreatedByInput> | NewsCreateWithoutCreatedByInput[] | NewsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCreatedByInput | NewsCreateOrConnectWithoutCreatedByInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutCreatedByInput | NewsUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NewsCreateManyCreatedByInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutCreatedByInput | NewsUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutCreatedByInput | NewsUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type FinancialReportUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FinancialReportCreateWithoutCreatedByInput, FinancialReportUncheckedCreateWithoutCreatedByInput> | FinancialReportCreateWithoutCreatedByInput[] | FinancialReportUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FinancialReportCreateOrConnectWithoutCreatedByInput | FinancialReportCreateOrConnectWithoutCreatedByInput[]
    upsert?: FinancialReportUpsertWithWhereUniqueWithoutCreatedByInput | FinancialReportUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FinancialReportCreateManyCreatedByInputEnvelope
    set?: FinancialReportWhereUniqueInput | FinancialReportWhereUniqueInput[]
    disconnect?: FinancialReportWhereUniqueInput | FinancialReportWhereUniqueInput[]
    delete?: FinancialReportWhereUniqueInput | FinancialReportWhereUniqueInput[]
    connect?: FinancialReportWhereUniqueInput | FinancialReportWhereUniqueInput[]
    update?: FinancialReportUpdateWithWhereUniqueWithoutCreatedByInput | FinancialReportUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FinancialReportUpdateManyWithWhereWithoutCreatedByInput | FinancialReportUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FinancialReportScalarWhereInput | FinancialReportScalarWhereInput[]
  }

  export type HomilyUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<HomilyCreateWithoutCreatedByInput, HomilyUncheckedCreateWithoutCreatedByInput> | HomilyCreateWithoutCreatedByInput[] | HomilyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: HomilyCreateOrConnectWithoutCreatedByInput | HomilyCreateOrConnectWithoutCreatedByInput[]
    upsert?: HomilyUpsertWithWhereUniqueWithoutCreatedByInput | HomilyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: HomilyCreateManyCreatedByInputEnvelope
    set?: HomilyWhereUniqueInput | HomilyWhereUniqueInput[]
    disconnect?: HomilyWhereUniqueInput | HomilyWhereUniqueInput[]
    delete?: HomilyWhereUniqueInput | HomilyWhereUniqueInput[]
    connect?: HomilyWhereUniqueInput | HomilyWhereUniqueInput[]
    update?: HomilyUpdateWithWhereUniqueWithoutCreatedByInput | HomilyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: HomilyUpdateManyWithWhereWithoutCreatedByInput | HomilyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: HomilyScalarWhereInput | HomilyScalarWhereInput[]
  }

  export type NewsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutCategoryInput | NewsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutCategoryInput | NewsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutCategoryInput | NewsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutCategoryInput | NewsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutCategoryInput | NewsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutCategoryInput | NewsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NewsCategoryCreateNestedOneWithoutNewsInput = {
    create?: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: NewsCategoryCreateOrConnectWithoutNewsInput
    connect?: NewsCategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNewsInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    connect?: UserWhereUniqueInput
  }

  export type NewsMediaCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsMediaCreateWithoutNewsInput, NewsMediaUncheckedCreateWithoutNewsInput> | NewsMediaCreateWithoutNewsInput[] | NewsMediaUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsMediaCreateOrConnectWithoutNewsInput | NewsMediaCreateOrConnectWithoutNewsInput[]
    createMany?: NewsMediaCreateManyNewsInputEnvelope
    connect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
  }

  export type NewsMediaUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsMediaCreateWithoutNewsInput, NewsMediaUncheckedCreateWithoutNewsInput> | NewsMediaCreateWithoutNewsInput[] | NewsMediaUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsMediaCreateOrConnectWithoutNewsInput | NewsMediaCreateOrConnectWithoutNewsInput[]
    createMany?: NewsMediaCreateManyNewsInputEnvelope
    connect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NewsCategoryUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: NewsCategoryCreateOrConnectWithoutNewsInput
    upsert?: NewsCategoryUpsertWithoutNewsInput
    connect?: NewsCategoryWhereUniqueInput
    update?: XOR<XOR<NewsCategoryUpdateToOneWithWhereWithoutNewsInput, NewsCategoryUpdateWithoutNewsInput>, NewsCategoryUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    upsert?: UserUpsertWithoutNewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsInput, UserUpdateWithoutNewsInput>, UserUncheckedUpdateWithoutNewsInput>
  }

  export type NewsMediaUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsMediaCreateWithoutNewsInput, NewsMediaUncheckedCreateWithoutNewsInput> | NewsMediaCreateWithoutNewsInput[] | NewsMediaUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsMediaCreateOrConnectWithoutNewsInput | NewsMediaCreateOrConnectWithoutNewsInput[]
    upsert?: NewsMediaUpsertWithWhereUniqueWithoutNewsInput | NewsMediaUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsMediaCreateManyNewsInputEnvelope
    set?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    disconnect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    delete?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    connect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    update?: NewsMediaUpdateWithWhereUniqueWithoutNewsInput | NewsMediaUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsMediaUpdateManyWithWhereWithoutNewsInput | NewsMediaUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsMediaScalarWhereInput | NewsMediaScalarWhereInput[]
  }

  export type NewsMediaUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsMediaCreateWithoutNewsInput, NewsMediaUncheckedCreateWithoutNewsInput> | NewsMediaCreateWithoutNewsInput[] | NewsMediaUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsMediaCreateOrConnectWithoutNewsInput | NewsMediaCreateOrConnectWithoutNewsInput[]
    upsert?: NewsMediaUpsertWithWhereUniqueWithoutNewsInput | NewsMediaUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsMediaCreateManyNewsInputEnvelope
    set?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    disconnect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    delete?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    connect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    update?: NewsMediaUpdateWithWhereUniqueWithoutNewsInput | NewsMediaUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsMediaUpdateManyWithWhereWithoutNewsInput | NewsMediaUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsMediaScalarWhereInput | NewsMediaScalarWhereInput[]
  }

  export type MassScheduleCreateNestedManyWithoutChurchInput = {
    create?: XOR<MassScheduleCreateWithoutChurchInput, MassScheduleUncheckedCreateWithoutChurchInput> | MassScheduleCreateWithoutChurchInput[] | MassScheduleUncheckedCreateWithoutChurchInput[]
    connectOrCreate?: MassScheduleCreateOrConnectWithoutChurchInput | MassScheduleCreateOrConnectWithoutChurchInput[]
    createMany?: MassScheduleCreateManyChurchInputEnvelope
    connect?: MassScheduleWhereUniqueInput | MassScheduleWhereUniqueInput[]
  }

  export type MassScheduleUncheckedCreateNestedManyWithoutChurchInput = {
    create?: XOR<MassScheduleCreateWithoutChurchInput, MassScheduleUncheckedCreateWithoutChurchInput> | MassScheduleCreateWithoutChurchInput[] | MassScheduleUncheckedCreateWithoutChurchInput[]
    connectOrCreate?: MassScheduleCreateOrConnectWithoutChurchInput | MassScheduleCreateOrConnectWithoutChurchInput[]
    createMany?: MassScheduleCreateManyChurchInputEnvelope
    connect?: MassScheduleWhereUniqueInput | MassScheduleWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MassScheduleUpdateManyWithoutChurchNestedInput = {
    create?: XOR<MassScheduleCreateWithoutChurchInput, MassScheduleUncheckedCreateWithoutChurchInput> | MassScheduleCreateWithoutChurchInput[] | MassScheduleUncheckedCreateWithoutChurchInput[]
    connectOrCreate?: MassScheduleCreateOrConnectWithoutChurchInput | MassScheduleCreateOrConnectWithoutChurchInput[]
    upsert?: MassScheduleUpsertWithWhereUniqueWithoutChurchInput | MassScheduleUpsertWithWhereUniqueWithoutChurchInput[]
    createMany?: MassScheduleCreateManyChurchInputEnvelope
    set?: MassScheduleWhereUniqueInput | MassScheduleWhereUniqueInput[]
    disconnect?: MassScheduleWhereUniqueInput | MassScheduleWhereUniqueInput[]
    delete?: MassScheduleWhereUniqueInput | MassScheduleWhereUniqueInput[]
    connect?: MassScheduleWhereUniqueInput | MassScheduleWhereUniqueInput[]
    update?: MassScheduleUpdateWithWhereUniqueWithoutChurchInput | MassScheduleUpdateWithWhereUniqueWithoutChurchInput[]
    updateMany?: MassScheduleUpdateManyWithWhereWithoutChurchInput | MassScheduleUpdateManyWithWhereWithoutChurchInput[]
    deleteMany?: MassScheduleScalarWhereInput | MassScheduleScalarWhereInput[]
  }

  export type MassScheduleUncheckedUpdateManyWithoutChurchNestedInput = {
    create?: XOR<MassScheduleCreateWithoutChurchInput, MassScheduleUncheckedCreateWithoutChurchInput> | MassScheduleCreateWithoutChurchInput[] | MassScheduleUncheckedCreateWithoutChurchInput[]
    connectOrCreate?: MassScheduleCreateOrConnectWithoutChurchInput | MassScheduleCreateOrConnectWithoutChurchInput[]
    upsert?: MassScheduleUpsertWithWhereUniqueWithoutChurchInput | MassScheduleUpsertWithWhereUniqueWithoutChurchInput[]
    createMany?: MassScheduleCreateManyChurchInputEnvelope
    set?: MassScheduleWhereUniqueInput | MassScheduleWhereUniqueInput[]
    disconnect?: MassScheduleWhereUniqueInput | MassScheduleWhereUniqueInput[]
    delete?: MassScheduleWhereUniqueInput | MassScheduleWhereUniqueInput[]
    connect?: MassScheduleWhereUniqueInput | MassScheduleWhereUniqueInput[]
    update?: MassScheduleUpdateWithWhereUniqueWithoutChurchInput | MassScheduleUpdateWithWhereUniqueWithoutChurchInput[]
    updateMany?: MassScheduleUpdateManyWithWhereWithoutChurchInput | MassScheduleUpdateManyWithWhereWithoutChurchInput[]
    deleteMany?: MassScheduleScalarWhereInput | MassScheduleScalarWhereInput[]
  }

  export type ChurchCreateNestedOneWithoutMassSchedulesInput = {
    create?: XOR<ChurchCreateWithoutMassSchedulesInput, ChurchUncheckedCreateWithoutMassSchedulesInput>
    connectOrCreate?: ChurchCreateOrConnectWithoutMassSchedulesInput
    connect?: ChurchWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChurchUpdateOneRequiredWithoutMassSchedulesNestedInput = {
    create?: XOR<ChurchCreateWithoutMassSchedulesInput, ChurchUncheckedCreateWithoutMassSchedulesInput>
    connectOrCreate?: ChurchCreateOrConnectWithoutMassSchedulesInput
    upsert?: ChurchUpsertWithoutMassSchedulesInput
    connect?: ChurchWhereUniqueInput
    update?: XOR<XOR<ChurchUpdateToOneWithWhereWithoutMassSchedulesInput, ChurchUpdateWithoutMassSchedulesInput>, ChurchUncheckedUpdateWithoutMassSchedulesInput>
  }

  export type MinistryMediaCreateNestedManyWithoutMinistryInput = {
    create?: XOR<MinistryMediaCreateWithoutMinistryInput, MinistryMediaUncheckedCreateWithoutMinistryInput> | MinistryMediaCreateWithoutMinistryInput[] | MinistryMediaUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: MinistryMediaCreateOrConnectWithoutMinistryInput | MinistryMediaCreateOrConnectWithoutMinistryInput[]
    createMany?: MinistryMediaCreateManyMinistryInputEnvelope
    connect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
  }

  export type MinistryMediaUncheckedCreateNestedManyWithoutMinistryInput = {
    create?: XOR<MinistryMediaCreateWithoutMinistryInput, MinistryMediaUncheckedCreateWithoutMinistryInput> | MinistryMediaCreateWithoutMinistryInput[] | MinistryMediaUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: MinistryMediaCreateOrConnectWithoutMinistryInput | MinistryMediaCreateOrConnectWithoutMinistryInput[]
    createMany?: MinistryMediaCreateManyMinistryInputEnvelope
    connect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
  }

  export type MinistryMediaUpdateManyWithoutMinistryNestedInput = {
    create?: XOR<MinistryMediaCreateWithoutMinistryInput, MinistryMediaUncheckedCreateWithoutMinistryInput> | MinistryMediaCreateWithoutMinistryInput[] | MinistryMediaUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: MinistryMediaCreateOrConnectWithoutMinistryInput | MinistryMediaCreateOrConnectWithoutMinistryInput[]
    upsert?: MinistryMediaUpsertWithWhereUniqueWithoutMinistryInput | MinistryMediaUpsertWithWhereUniqueWithoutMinistryInput[]
    createMany?: MinistryMediaCreateManyMinistryInputEnvelope
    set?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    disconnect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    delete?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    connect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    update?: MinistryMediaUpdateWithWhereUniqueWithoutMinistryInput | MinistryMediaUpdateWithWhereUniqueWithoutMinistryInput[]
    updateMany?: MinistryMediaUpdateManyWithWhereWithoutMinistryInput | MinistryMediaUpdateManyWithWhereWithoutMinistryInput[]
    deleteMany?: MinistryMediaScalarWhereInput | MinistryMediaScalarWhereInput[]
  }

  export type MinistryMediaUncheckedUpdateManyWithoutMinistryNestedInput = {
    create?: XOR<MinistryMediaCreateWithoutMinistryInput, MinistryMediaUncheckedCreateWithoutMinistryInput> | MinistryMediaCreateWithoutMinistryInput[] | MinistryMediaUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: MinistryMediaCreateOrConnectWithoutMinistryInput | MinistryMediaCreateOrConnectWithoutMinistryInput[]
    upsert?: MinistryMediaUpsertWithWhereUniqueWithoutMinistryInput | MinistryMediaUpsertWithWhereUniqueWithoutMinistryInput[]
    createMany?: MinistryMediaCreateManyMinistryInputEnvelope
    set?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    disconnect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    delete?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    connect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    update?: MinistryMediaUpdateWithWhereUniqueWithoutMinistryInput | MinistryMediaUpdateWithWhereUniqueWithoutMinistryInput[]
    updateMany?: MinistryMediaUpdateManyWithWhereWithoutMinistryInput | MinistryMediaUpdateManyWithWhereWithoutMinistryInput[]
    deleteMany?: MinistryMediaScalarWhereInput | MinistryMediaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFinancialReportsInput = {
    create?: XOR<UserCreateWithoutFinancialReportsInput, UserUncheckedCreateWithoutFinancialReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialReportsInput
    connect?: UserWhereUniqueInput
  }

  export type FinancialReportMediaCreateNestedManyWithoutReportInput = {
    create?: XOR<FinancialReportMediaCreateWithoutReportInput, FinancialReportMediaUncheckedCreateWithoutReportInput> | FinancialReportMediaCreateWithoutReportInput[] | FinancialReportMediaUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FinancialReportMediaCreateOrConnectWithoutReportInput | FinancialReportMediaCreateOrConnectWithoutReportInput[]
    createMany?: FinancialReportMediaCreateManyReportInputEnvelope
    connect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
  }

  export type FinancialReportMediaUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<FinancialReportMediaCreateWithoutReportInput, FinancialReportMediaUncheckedCreateWithoutReportInput> | FinancialReportMediaCreateWithoutReportInput[] | FinancialReportMediaUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FinancialReportMediaCreateOrConnectWithoutReportInput | FinancialReportMediaCreateOrConnectWithoutReportInput[]
    createMany?: FinancialReportMediaCreateManyReportInputEnvelope
    connect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFinancialReportsNestedInput = {
    create?: XOR<UserCreateWithoutFinancialReportsInput, UserUncheckedCreateWithoutFinancialReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialReportsInput
    upsert?: UserUpsertWithoutFinancialReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinancialReportsInput, UserUpdateWithoutFinancialReportsInput>, UserUncheckedUpdateWithoutFinancialReportsInput>
  }

  export type FinancialReportMediaUpdateManyWithoutReportNestedInput = {
    create?: XOR<FinancialReportMediaCreateWithoutReportInput, FinancialReportMediaUncheckedCreateWithoutReportInput> | FinancialReportMediaCreateWithoutReportInput[] | FinancialReportMediaUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FinancialReportMediaCreateOrConnectWithoutReportInput | FinancialReportMediaCreateOrConnectWithoutReportInput[]
    upsert?: FinancialReportMediaUpsertWithWhereUniqueWithoutReportInput | FinancialReportMediaUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: FinancialReportMediaCreateManyReportInputEnvelope
    set?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    disconnect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    delete?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    connect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    update?: FinancialReportMediaUpdateWithWhereUniqueWithoutReportInput | FinancialReportMediaUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: FinancialReportMediaUpdateManyWithWhereWithoutReportInput | FinancialReportMediaUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: FinancialReportMediaScalarWhereInput | FinancialReportMediaScalarWhereInput[]
  }

  export type FinancialReportMediaUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<FinancialReportMediaCreateWithoutReportInput, FinancialReportMediaUncheckedCreateWithoutReportInput> | FinancialReportMediaCreateWithoutReportInput[] | FinancialReportMediaUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FinancialReportMediaCreateOrConnectWithoutReportInput | FinancialReportMediaCreateOrConnectWithoutReportInput[]
    upsert?: FinancialReportMediaUpsertWithWhereUniqueWithoutReportInput | FinancialReportMediaUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: FinancialReportMediaCreateManyReportInputEnvelope
    set?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    disconnect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    delete?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    connect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    update?: FinancialReportMediaUpdateWithWhereUniqueWithoutReportInput | FinancialReportMediaUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: FinancialReportMediaUpdateManyWithWhereWithoutReportInput | FinancialReportMediaUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: FinancialReportMediaScalarWhereInput | FinancialReportMediaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHomiliesInput = {
    create?: XOR<UserCreateWithoutHomiliesInput, UserUncheckedCreateWithoutHomiliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHomiliesInput
    connect?: UserWhereUniqueInput
  }

  export type HomilyMediaCreateNestedManyWithoutHomilyInput = {
    create?: XOR<HomilyMediaCreateWithoutHomilyInput, HomilyMediaUncheckedCreateWithoutHomilyInput> | HomilyMediaCreateWithoutHomilyInput[] | HomilyMediaUncheckedCreateWithoutHomilyInput[]
    connectOrCreate?: HomilyMediaCreateOrConnectWithoutHomilyInput | HomilyMediaCreateOrConnectWithoutHomilyInput[]
    createMany?: HomilyMediaCreateManyHomilyInputEnvelope
    connect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
  }

  export type HomilyMediaUncheckedCreateNestedManyWithoutHomilyInput = {
    create?: XOR<HomilyMediaCreateWithoutHomilyInput, HomilyMediaUncheckedCreateWithoutHomilyInput> | HomilyMediaCreateWithoutHomilyInput[] | HomilyMediaUncheckedCreateWithoutHomilyInput[]
    connectOrCreate?: HomilyMediaCreateOrConnectWithoutHomilyInput | HomilyMediaCreateOrConnectWithoutHomilyInput[]
    createMany?: HomilyMediaCreateManyHomilyInputEnvelope
    connect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutHomiliesNestedInput = {
    create?: XOR<UserCreateWithoutHomiliesInput, UserUncheckedCreateWithoutHomiliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHomiliesInput
    upsert?: UserUpsertWithoutHomiliesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHomiliesInput, UserUpdateWithoutHomiliesInput>, UserUncheckedUpdateWithoutHomiliesInput>
  }

  export type HomilyMediaUpdateManyWithoutHomilyNestedInput = {
    create?: XOR<HomilyMediaCreateWithoutHomilyInput, HomilyMediaUncheckedCreateWithoutHomilyInput> | HomilyMediaCreateWithoutHomilyInput[] | HomilyMediaUncheckedCreateWithoutHomilyInput[]
    connectOrCreate?: HomilyMediaCreateOrConnectWithoutHomilyInput | HomilyMediaCreateOrConnectWithoutHomilyInput[]
    upsert?: HomilyMediaUpsertWithWhereUniqueWithoutHomilyInput | HomilyMediaUpsertWithWhereUniqueWithoutHomilyInput[]
    createMany?: HomilyMediaCreateManyHomilyInputEnvelope
    set?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    disconnect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    delete?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    connect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    update?: HomilyMediaUpdateWithWhereUniqueWithoutHomilyInput | HomilyMediaUpdateWithWhereUniqueWithoutHomilyInput[]
    updateMany?: HomilyMediaUpdateManyWithWhereWithoutHomilyInput | HomilyMediaUpdateManyWithWhereWithoutHomilyInput[]
    deleteMany?: HomilyMediaScalarWhereInput | HomilyMediaScalarWhereInput[]
  }

  export type HomilyMediaUncheckedUpdateManyWithoutHomilyNestedInput = {
    create?: XOR<HomilyMediaCreateWithoutHomilyInput, HomilyMediaUncheckedCreateWithoutHomilyInput> | HomilyMediaCreateWithoutHomilyInput[] | HomilyMediaUncheckedCreateWithoutHomilyInput[]
    connectOrCreate?: HomilyMediaCreateOrConnectWithoutHomilyInput | HomilyMediaCreateOrConnectWithoutHomilyInput[]
    upsert?: HomilyMediaUpsertWithWhereUniqueWithoutHomilyInput | HomilyMediaUpsertWithWhereUniqueWithoutHomilyInput[]
    createMany?: HomilyMediaCreateManyHomilyInputEnvelope
    set?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    disconnect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    delete?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    connect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    update?: HomilyMediaUpdateWithWhereUniqueWithoutHomilyInput | HomilyMediaUpdateWithWhereUniqueWithoutHomilyInput[]
    updateMany?: HomilyMediaUpdateManyWithWhereWithoutHomilyInput | HomilyMediaUpdateManyWithWhereWithoutHomilyInput[]
    deleteMany?: HomilyMediaScalarWhereInput | HomilyMediaScalarWhereInput[]
  }

  export type AppointmentDocumentCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<AppointmentDocumentCreateWithoutAppointmentInput, AppointmentDocumentUncheckedCreateWithoutAppointmentInput> | AppointmentDocumentCreateWithoutAppointmentInput[] | AppointmentDocumentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentDocumentCreateOrConnectWithoutAppointmentInput | AppointmentDocumentCreateOrConnectWithoutAppointmentInput[]
    createMany?: AppointmentDocumentCreateManyAppointmentInputEnvelope
    connect?: AppointmentDocumentWhereUniqueInput | AppointmentDocumentWhereUniqueInput[]
  }

  export type AppointmentDocumentUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<AppointmentDocumentCreateWithoutAppointmentInput, AppointmentDocumentUncheckedCreateWithoutAppointmentInput> | AppointmentDocumentCreateWithoutAppointmentInput[] | AppointmentDocumentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentDocumentCreateOrConnectWithoutAppointmentInput | AppointmentDocumentCreateOrConnectWithoutAppointmentInput[]
    createMany?: AppointmentDocumentCreateManyAppointmentInputEnvelope
    connect?: AppointmentDocumentWhereUniqueInput | AppointmentDocumentWhereUniqueInput[]
  }

  export type EnumAppointmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentType
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type AppointmentDocumentUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentDocumentCreateWithoutAppointmentInput, AppointmentDocumentUncheckedCreateWithoutAppointmentInput> | AppointmentDocumentCreateWithoutAppointmentInput[] | AppointmentDocumentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentDocumentCreateOrConnectWithoutAppointmentInput | AppointmentDocumentCreateOrConnectWithoutAppointmentInput[]
    upsert?: AppointmentDocumentUpsertWithWhereUniqueWithoutAppointmentInput | AppointmentDocumentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: AppointmentDocumentCreateManyAppointmentInputEnvelope
    set?: AppointmentDocumentWhereUniqueInput | AppointmentDocumentWhereUniqueInput[]
    disconnect?: AppointmentDocumentWhereUniqueInput | AppointmentDocumentWhereUniqueInput[]
    delete?: AppointmentDocumentWhereUniqueInput | AppointmentDocumentWhereUniqueInput[]
    connect?: AppointmentDocumentWhereUniqueInput | AppointmentDocumentWhereUniqueInput[]
    update?: AppointmentDocumentUpdateWithWhereUniqueWithoutAppointmentInput | AppointmentDocumentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: AppointmentDocumentUpdateManyWithWhereWithoutAppointmentInput | AppointmentDocumentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: AppointmentDocumentScalarWhereInput | AppointmentDocumentScalarWhereInput[]
  }

  export type AppointmentDocumentUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentDocumentCreateWithoutAppointmentInput, AppointmentDocumentUncheckedCreateWithoutAppointmentInput> | AppointmentDocumentCreateWithoutAppointmentInput[] | AppointmentDocumentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentDocumentCreateOrConnectWithoutAppointmentInput | AppointmentDocumentCreateOrConnectWithoutAppointmentInput[]
    upsert?: AppointmentDocumentUpsertWithWhereUniqueWithoutAppointmentInput | AppointmentDocumentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: AppointmentDocumentCreateManyAppointmentInputEnvelope
    set?: AppointmentDocumentWhereUniqueInput | AppointmentDocumentWhereUniqueInput[]
    disconnect?: AppointmentDocumentWhereUniqueInput | AppointmentDocumentWhereUniqueInput[]
    delete?: AppointmentDocumentWhereUniqueInput | AppointmentDocumentWhereUniqueInput[]
    connect?: AppointmentDocumentWhereUniqueInput | AppointmentDocumentWhereUniqueInput[]
    update?: AppointmentDocumentUpdateWithWhereUniqueWithoutAppointmentInput | AppointmentDocumentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: AppointmentDocumentUpdateManyWithWhereWithoutAppointmentInput | AppointmentDocumentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: AppointmentDocumentScalarWhereInput | AppointmentDocumentScalarWhereInput[]
  }

  export type AppointmentCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<AppointmentCreateWithoutDocumentsInput, AppointmentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutDocumentsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type AppointmentUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<AppointmentCreateWithoutDocumentsInput, AppointmentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutDocumentsInput
    upsert?: AppointmentUpsertWithoutDocumentsInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutDocumentsInput, AppointmentUpdateWithoutDocumentsInput>, AppointmentUncheckedUpdateWithoutDocumentsInput>
  }

  export type NewsMediaCreateNestedManyWithoutMediaInput = {
    create?: XOR<NewsMediaCreateWithoutMediaInput, NewsMediaUncheckedCreateWithoutMediaInput> | NewsMediaCreateWithoutMediaInput[] | NewsMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: NewsMediaCreateOrConnectWithoutMediaInput | NewsMediaCreateOrConnectWithoutMediaInput[]
    createMany?: NewsMediaCreateManyMediaInputEnvelope
    connect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
  }

  export type MinistryMediaCreateNestedManyWithoutMediaInput = {
    create?: XOR<MinistryMediaCreateWithoutMediaInput, MinistryMediaUncheckedCreateWithoutMediaInput> | MinistryMediaCreateWithoutMediaInput[] | MinistryMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: MinistryMediaCreateOrConnectWithoutMediaInput | MinistryMediaCreateOrConnectWithoutMediaInput[]
    createMany?: MinistryMediaCreateManyMediaInputEnvelope
    connect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
  }

  export type FinancialReportMediaCreateNestedManyWithoutMediaInput = {
    create?: XOR<FinancialReportMediaCreateWithoutMediaInput, FinancialReportMediaUncheckedCreateWithoutMediaInput> | FinancialReportMediaCreateWithoutMediaInput[] | FinancialReportMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: FinancialReportMediaCreateOrConnectWithoutMediaInput | FinancialReportMediaCreateOrConnectWithoutMediaInput[]
    createMany?: FinancialReportMediaCreateManyMediaInputEnvelope
    connect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
  }

  export type HomilyMediaCreateNestedManyWithoutMediaInput = {
    create?: XOR<HomilyMediaCreateWithoutMediaInput, HomilyMediaUncheckedCreateWithoutMediaInput> | HomilyMediaCreateWithoutMediaInput[] | HomilyMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: HomilyMediaCreateOrConnectWithoutMediaInput | HomilyMediaCreateOrConnectWithoutMediaInput[]
    createMany?: HomilyMediaCreateManyMediaInputEnvelope
    connect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
  }

  export type NewsMediaUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<NewsMediaCreateWithoutMediaInput, NewsMediaUncheckedCreateWithoutMediaInput> | NewsMediaCreateWithoutMediaInput[] | NewsMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: NewsMediaCreateOrConnectWithoutMediaInput | NewsMediaCreateOrConnectWithoutMediaInput[]
    createMany?: NewsMediaCreateManyMediaInputEnvelope
    connect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
  }

  export type MinistryMediaUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<MinistryMediaCreateWithoutMediaInput, MinistryMediaUncheckedCreateWithoutMediaInput> | MinistryMediaCreateWithoutMediaInput[] | MinistryMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: MinistryMediaCreateOrConnectWithoutMediaInput | MinistryMediaCreateOrConnectWithoutMediaInput[]
    createMany?: MinistryMediaCreateManyMediaInputEnvelope
    connect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
  }

  export type FinancialReportMediaUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<FinancialReportMediaCreateWithoutMediaInput, FinancialReportMediaUncheckedCreateWithoutMediaInput> | FinancialReportMediaCreateWithoutMediaInput[] | FinancialReportMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: FinancialReportMediaCreateOrConnectWithoutMediaInput | FinancialReportMediaCreateOrConnectWithoutMediaInput[]
    createMany?: FinancialReportMediaCreateManyMediaInputEnvelope
    connect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
  }

  export type HomilyMediaUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<HomilyMediaCreateWithoutMediaInput, HomilyMediaUncheckedCreateWithoutMediaInput> | HomilyMediaCreateWithoutMediaInput[] | HomilyMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: HomilyMediaCreateOrConnectWithoutMediaInput | HomilyMediaCreateOrConnectWithoutMediaInput[]
    createMany?: HomilyMediaCreateManyMediaInputEnvelope
    connect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NewsMediaUpdateManyWithoutMediaNestedInput = {
    create?: XOR<NewsMediaCreateWithoutMediaInput, NewsMediaUncheckedCreateWithoutMediaInput> | NewsMediaCreateWithoutMediaInput[] | NewsMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: NewsMediaCreateOrConnectWithoutMediaInput | NewsMediaCreateOrConnectWithoutMediaInput[]
    upsert?: NewsMediaUpsertWithWhereUniqueWithoutMediaInput | NewsMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: NewsMediaCreateManyMediaInputEnvelope
    set?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    disconnect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    delete?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    connect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    update?: NewsMediaUpdateWithWhereUniqueWithoutMediaInput | NewsMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: NewsMediaUpdateManyWithWhereWithoutMediaInput | NewsMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: NewsMediaScalarWhereInput | NewsMediaScalarWhereInput[]
  }

  export type MinistryMediaUpdateManyWithoutMediaNestedInput = {
    create?: XOR<MinistryMediaCreateWithoutMediaInput, MinistryMediaUncheckedCreateWithoutMediaInput> | MinistryMediaCreateWithoutMediaInput[] | MinistryMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: MinistryMediaCreateOrConnectWithoutMediaInput | MinistryMediaCreateOrConnectWithoutMediaInput[]
    upsert?: MinistryMediaUpsertWithWhereUniqueWithoutMediaInput | MinistryMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: MinistryMediaCreateManyMediaInputEnvelope
    set?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    disconnect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    delete?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    connect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    update?: MinistryMediaUpdateWithWhereUniqueWithoutMediaInput | MinistryMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: MinistryMediaUpdateManyWithWhereWithoutMediaInput | MinistryMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: MinistryMediaScalarWhereInput | MinistryMediaScalarWhereInput[]
  }

  export type FinancialReportMediaUpdateManyWithoutMediaNestedInput = {
    create?: XOR<FinancialReportMediaCreateWithoutMediaInput, FinancialReportMediaUncheckedCreateWithoutMediaInput> | FinancialReportMediaCreateWithoutMediaInput[] | FinancialReportMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: FinancialReportMediaCreateOrConnectWithoutMediaInput | FinancialReportMediaCreateOrConnectWithoutMediaInput[]
    upsert?: FinancialReportMediaUpsertWithWhereUniqueWithoutMediaInput | FinancialReportMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: FinancialReportMediaCreateManyMediaInputEnvelope
    set?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    disconnect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    delete?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    connect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    update?: FinancialReportMediaUpdateWithWhereUniqueWithoutMediaInput | FinancialReportMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: FinancialReportMediaUpdateManyWithWhereWithoutMediaInput | FinancialReportMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: FinancialReportMediaScalarWhereInput | FinancialReportMediaScalarWhereInput[]
  }

  export type HomilyMediaUpdateManyWithoutMediaNestedInput = {
    create?: XOR<HomilyMediaCreateWithoutMediaInput, HomilyMediaUncheckedCreateWithoutMediaInput> | HomilyMediaCreateWithoutMediaInput[] | HomilyMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: HomilyMediaCreateOrConnectWithoutMediaInput | HomilyMediaCreateOrConnectWithoutMediaInput[]
    upsert?: HomilyMediaUpsertWithWhereUniqueWithoutMediaInput | HomilyMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: HomilyMediaCreateManyMediaInputEnvelope
    set?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    disconnect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    delete?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    connect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    update?: HomilyMediaUpdateWithWhereUniqueWithoutMediaInput | HomilyMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: HomilyMediaUpdateManyWithWhereWithoutMediaInput | HomilyMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: HomilyMediaScalarWhereInput | HomilyMediaScalarWhereInput[]
  }

  export type NewsMediaUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<NewsMediaCreateWithoutMediaInput, NewsMediaUncheckedCreateWithoutMediaInput> | NewsMediaCreateWithoutMediaInput[] | NewsMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: NewsMediaCreateOrConnectWithoutMediaInput | NewsMediaCreateOrConnectWithoutMediaInput[]
    upsert?: NewsMediaUpsertWithWhereUniqueWithoutMediaInput | NewsMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: NewsMediaCreateManyMediaInputEnvelope
    set?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    disconnect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    delete?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    connect?: NewsMediaWhereUniqueInput | NewsMediaWhereUniqueInput[]
    update?: NewsMediaUpdateWithWhereUniqueWithoutMediaInput | NewsMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: NewsMediaUpdateManyWithWhereWithoutMediaInput | NewsMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: NewsMediaScalarWhereInput | NewsMediaScalarWhereInput[]
  }

  export type MinistryMediaUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<MinistryMediaCreateWithoutMediaInput, MinistryMediaUncheckedCreateWithoutMediaInput> | MinistryMediaCreateWithoutMediaInput[] | MinistryMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: MinistryMediaCreateOrConnectWithoutMediaInput | MinistryMediaCreateOrConnectWithoutMediaInput[]
    upsert?: MinistryMediaUpsertWithWhereUniqueWithoutMediaInput | MinistryMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: MinistryMediaCreateManyMediaInputEnvelope
    set?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    disconnect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    delete?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    connect?: MinistryMediaWhereUniqueInput | MinistryMediaWhereUniqueInput[]
    update?: MinistryMediaUpdateWithWhereUniqueWithoutMediaInput | MinistryMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: MinistryMediaUpdateManyWithWhereWithoutMediaInput | MinistryMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: MinistryMediaScalarWhereInput | MinistryMediaScalarWhereInput[]
  }

  export type FinancialReportMediaUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<FinancialReportMediaCreateWithoutMediaInput, FinancialReportMediaUncheckedCreateWithoutMediaInput> | FinancialReportMediaCreateWithoutMediaInput[] | FinancialReportMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: FinancialReportMediaCreateOrConnectWithoutMediaInput | FinancialReportMediaCreateOrConnectWithoutMediaInput[]
    upsert?: FinancialReportMediaUpsertWithWhereUniqueWithoutMediaInput | FinancialReportMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: FinancialReportMediaCreateManyMediaInputEnvelope
    set?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    disconnect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    delete?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    connect?: FinancialReportMediaWhereUniqueInput | FinancialReportMediaWhereUniqueInput[]
    update?: FinancialReportMediaUpdateWithWhereUniqueWithoutMediaInput | FinancialReportMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: FinancialReportMediaUpdateManyWithWhereWithoutMediaInput | FinancialReportMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: FinancialReportMediaScalarWhereInput | FinancialReportMediaScalarWhereInput[]
  }

  export type HomilyMediaUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<HomilyMediaCreateWithoutMediaInput, HomilyMediaUncheckedCreateWithoutMediaInput> | HomilyMediaCreateWithoutMediaInput[] | HomilyMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: HomilyMediaCreateOrConnectWithoutMediaInput | HomilyMediaCreateOrConnectWithoutMediaInput[]
    upsert?: HomilyMediaUpsertWithWhereUniqueWithoutMediaInput | HomilyMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: HomilyMediaCreateManyMediaInputEnvelope
    set?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    disconnect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    delete?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    connect?: HomilyMediaWhereUniqueInput | HomilyMediaWhereUniqueInput[]
    update?: HomilyMediaUpdateWithWhereUniqueWithoutMediaInput | HomilyMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: HomilyMediaUpdateManyWithWhereWithoutMediaInput | HomilyMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: HomilyMediaScalarWhereInput | HomilyMediaScalarWhereInput[]
  }

  export type NewsCreateNestedOneWithoutMediaInput = {
    create?: XOR<NewsCreateWithoutMediaInput, NewsUncheckedCreateWithoutMediaInput>
    connectOrCreate?: NewsCreateOrConnectWithoutMediaInput
    connect?: NewsWhereUniqueInput
  }

  export type MediaCreateNestedOneWithoutNewsInput = {
    create?: XOR<MediaCreateWithoutNewsInput, MediaUncheckedCreateWithoutNewsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutNewsInput
    connect?: MediaWhereUniqueInput
  }

  export type NewsUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<NewsCreateWithoutMediaInput, NewsUncheckedCreateWithoutMediaInput>
    connectOrCreate?: NewsCreateOrConnectWithoutMediaInput
    upsert?: NewsUpsertWithoutMediaInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutMediaInput, NewsUpdateWithoutMediaInput>, NewsUncheckedUpdateWithoutMediaInput>
  }

  export type MediaUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<MediaCreateWithoutNewsInput, MediaUncheckedCreateWithoutNewsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutNewsInput
    upsert?: MediaUpsertWithoutNewsInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutNewsInput, MediaUpdateWithoutNewsInput>, MediaUncheckedUpdateWithoutNewsInput>
  }

  export type MinistryCreateNestedOneWithoutMediaInput = {
    create?: XOR<MinistryCreateWithoutMediaInput, MinistryUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MinistryCreateOrConnectWithoutMediaInput
    connect?: MinistryWhereUniqueInput
  }

  export type MediaCreateNestedOneWithoutMinistriesInput = {
    create?: XOR<MediaCreateWithoutMinistriesInput, MediaUncheckedCreateWithoutMinistriesInput>
    connectOrCreate?: MediaCreateOrConnectWithoutMinistriesInput
    connect?: MediaWhereUniqueInput
  }

  export type MinistryUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<MinistryCreateWithoutMediaInput, MinistryUncheckedCreateWithoutMediaInput>
    connectOrCreate?: MinistryCreateOrConnectWithoutMediaInput
    upsert?: MinistryUpsertWithoutMediaInput
    connect?: MinistryWhereUniqueInput
    update?: XOR<XOR<MinistryUpdateToOneWithWhereWithoutMediaInput, MinistryUpdateWithoutMediaInput>, MinistryUncheckedUpdateWithoutMediaInput>
  }

  export type MediaUpdateOneRequiredWithoutMinistriesNestedInput = {
    create?: XOR<MediaCreateWithoutMinistriesInput, MediaUncheckedCreateWithoutMinistriesInput>
    connectOrCreate?: MediaCreateOrConnectWithoutMinistriesInput
    upsert?: MediaUpsertWithoutMinistriesInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutMinistriesInput, MediaUpdateWithoutMinistriesInput>, MediaUncheckedUpdateWithoutMinistriesInput>
  }

  export type FinancialReportCreateNestedOneWithoutMediaInput = {
    create?: XOR<FinancialReportCreateWithoutMediaInput, FinancialReportUncheckedCreateWithoutMediaInput>
    connectOrCreate?: FinancialReportCreateOrConnectWithoutMediaInput
    connect?: FinancialReportWhereUniqueInput
  }

  export type MediaCreateNestedOneWithoutFinancialReportsInput = {
    create?: XOR<MediaCreateWithoutFinancialReportsInput, MediaUncheckedCreateWithoutFinancialReportsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutFinancialReportsInput
    connect?: MediaWhereUniqueInput
  }

  export type FinancialReportUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<FinancialReportCreateWithoutMediaInput, FinancialReportUncheckedCreateWithoutMediaInput>
    connectOrCreate?: FinancialReportCreateOrConnectWithoutMediaInput
    upsert?: FinancialReportUpsertWithoutMediaInput
    connect?: FinancialReportWhereUniqueInput
    update?: XOR<XOR<FinancialReportUpdateToOneWithWhereWithoutMediaInput, FinancialReportUpdateWithoutMediaInput>, FinancialReportUncheckedUpdateWithoutMediaInput>
  }

  export type MediaUpdateOneRequiredWithoutFinancialReportsNestedInput = {
    create?: XOR<MediaCreateWithoutFinancialReportsInput, MediaUncheckedCreateWithoutFinancialReportsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutFinancialReportsInput
    upsert?: MediaUpsertWithoutFinancialReportsInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutFinancialReportsInput, MediaUpdateWithoutFinancialReportsInput>, MediaUncheckedUpdateWithoutFinancialReportsInput>
  }

  export type HomilyCreateNestedOneWithoutMediaInput = {
    create?: XOR<HomilyCreateWithoutMediaInput, HomilyUncheckedCreateWithoutMediaInput>
    connectOrCreate?: HomilyCreateOrConnectWithoutMediaInput
    connect?: HomilyWhereUniqueInput
  }

  export type MediaCreateNestedOneWithoutHomiliesInput = {
    create?: XOR<MediaCreateWithoutHomiliesInput, MediaUncheckedCreateWithoutHomiliesInput>
    connectOrCreate?: MediaCreateOrConnectWithoutHomiliesInput
    connect?: MediaWhereUniqueInput
  }

  export type HomilyUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<HomilyCreateWithoutMediaInput, HomilyUncheckedCreateWithoutMediaInput>
    connectOrCreate?: HomilyCreateOrConnectWithoutMediaInput
    upsert?: HomilyUpsertWithoutMediaInput
    connect?: HomilyWhereUniqueInput
    update?: XOR<XOR<HomilyUpdateToOneWithWhereWithoutMediaInput, HomilyUpdateWithoutMediaInput>, HomilyUncheckedUpdateWithoutMediaInput>
  }

  export type MediaUpdateOneRequiredWithoutHomiliesNestedInput = {
    create?: XOR<MediaCreateWithoutHomiliesInput, MediaUncheckedCreateWithoutHomiliesInput>
    connectOrCreate?: MediaCreateOrConnectWithoutHomiliesInput
    upsert?: MediaUpsertWithoutHomiliesInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutHomiliesInput, MediaUpdateWithoutHomiliesInput>, MediaUncheckedUpdateWithoutHomiliesInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NewsCreateWithoutCreatedByInput = {
    id?: string
    title: string
    slug: string
    content: string
    imageUrl?: string | null
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: NewsCategoryCreateNestedOneWithoutNewsInput
    media?: NewsMediaCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    slug: string
    content: string
    imageUrl?: string | null
    published?: boolean
    publishedAt?: Date | string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: NewsMediaUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutCreatedByInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutCreatedByInput, NewsUncheckedCreateWithoutCreatedByInput>
  }

  export type NewsCreateManyCreatedByInputEnvelope = {
    data: NewsCreateManyCreatedByInput | NewsCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type FinancialReportCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    progressPercentage: number
    totalCost: number
    amountRaised: number
    amountRemaining: number
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: FinancialReportMediaCreateNestedManyWithoutReportInput
  }

  export type FinancialReportUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    progressPercentage: number
    totalCost: number
    amountRaised: number
    amountRemaining: number
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: FinancialReportMediaUncheckedCreateNestedManyWithoutReportInput
  }

  export type FinancialReportCreateOrConnectWithoutCreatedByInput = {
    where: FinancialReportWhereUniqueInput
    create: XOR<FinancialReportCreateWithoutCreatedByInput, FinancialReportUncheckedCreateWithoutCreatedByInput>
  }

  export type FinancialReportCreateManyCreatedByInputEnvelope = {
    data: FinancialReportCreateManyCreatedByInput | FinancialReportCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type HomilyCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    content?: string | null
    date: Date | string
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: HomilyMediaCreateNestedManyWithoutHomilyInput
  }

  export type HomilyUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    content?: string | null
    date: Date | string
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: HomilyMediaUncheckedCreateNestedManyWithoutHomilyInput
  }

  export type HomilyCreateOrConnectWithoutCreatedByInput = {
    where: HomilyWhereUniqueInput
    create: XOR<HomilyCreateWithoutCreatedByInput, HomilyUncheckedCreateWithoutCreatedByInput>
  }

  export type HomilyCreateManyCreatedByInputEnvelope = {
    data: HomilyCreateManyCreatedByInput | HomilyCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutCreatedByInput, NewsUncheckedUpdateWithoutCreatedByInput>
    create: XOR<NewsCreateWithoutCreatedByInput, NewsUncheckedCreateWithoutCreatedByInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutCreatedByInput, NewsUncheckedUpdateWithoutCreatedByInput>
  }

  export type NewsUpdateManyWithWhereWithoutCreatedByInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    slug?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    imageUrl?: StringNullableFilter<"News"> | string | null
    published?: BoolFilter<"News"> | boolean
    publishedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    categoryId?: StringFilter<"News"> | string
    createdById?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type FinancialReportUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: FinancialReportWhereUniqueInput
    update: XOR<FinancialReportUpdateWithoutCreatedByInput, FinancialReportUncheckedUpdateWithoutCreatedByInput>
    create: XOR<FinancialReportCreateWithoutCreatedByInput, FinancialReportUncheckedCreateWithoutCreatedByInput>
  }

  export type FinancialReportUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: FinancialReportWhereUniqueInput
    data: XOR<FinancialReportUpdateWithoutCreatedByInput, FinancialReportUncheckedUpdateWithoutCreatedByInput>
  }

  export type FinancialReportUpdateManyWithWhereWithoutCreatedByInput = {
    where: FinancialReportScalarWhereInput
    data: XOR<FinancialReportUpdateManyMutationInput, FinancialReportUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type FinancialReportScalarWhereInput = {
    AND?: FinancialReportScalarWhereInput | FinancialReportScalarWhereInput[]
    OR?: FinancialReportScalarWhereInput[]
    NOT?: FinancialReportScalarWhereInput | FinancialReportScalarWhereInput[]
    id?: StringFilter<"FinancialReport"> | string
    title?: StringFilter<"FinancialReport"> | string
    description?: StringFilter<"FinancialReport"> | string
    progressPercentage?: IntFilter<"FinancialReport"> | number
    totalCost?: FloatFilter<"FinancialReport"> | number
    amountRaised?: FloatFilter<"FinancialReport"> | number
    amountRemaining?: FloatFilter<"FinancialReport"> | number
    published?: BoolFilter<"FinancialReport"> | boolean
    publishedAt?: DateTimeNullableFilter<"FinancialReport"> | Date | string | null
    createdById?: StringFilter<"FinancialReport"> | string
    createdAt?: DateTimeFilter<"FinancialReport"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialReport"> | Date | string
  }

  export type HomilyUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: HomilyWhereUniqueInput
    update: XOR<HomilyUpdateWithoutCreatedByInput, HomilyUncheckedUpdateWithoutCreatedByInput>
    create: XOR<HomilyCreateWithoutCreatedByInput, HomilyUncheckedCreateWithoutCreatedByInput>
  }

  export type HomilyUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: HomilyWhereUniqueInput
    data: XOR<HomilyUpdateWithoutCreatedByInput, HomilyUncheckedUpdateWithoutCreatedByInput>
  }

  export type HomilyUpdateManyWithWhereWithoutCreatedByInput = {
    where: HomilyScalarWhereInput
    data: XOR<HomilyUpdateManyMutationInput, HomilyUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type HomilyScalarWhereInput = {
    AND?: HomilyScalarWhereInput | HomilyScalarWhereInput[]
    OR?: HomilyScalarWhereInput[]
    NOT?: HomilyScalarWhereInput | HomilyScalarWhereInput[]
    id?: StringFilter<"Homily"> | string
    title?: StringFilter<"Homily"> | string
    description?: StringNullableFilter<"Homily"> | string | null
    content?: StringNullableFilter<"Homily"> | string | null
    date?: DateTimeFilter<"Homily"> | Date | string
    published?: BoolFilter<"Homily"> | boolean
    publishedAt?: DateTimeNullableFilter<"Homily"> | Date | string | null
    createdById?: StringFilter<"Homily"> | string
    createdAt?: DateTimeFilter<"Homily"> | Date | string
    updatedAt?: DateTimeFilter<"Homily"> | Date | string
  }

  export type NewsCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    content: string
    imageUrl?: string | null
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutNewsInput
    media?: NewsMediaCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    content: string
    imageUrl?: string | null
    published?: boolean
    publishedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: NewsMediaUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutCategoryInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput>
  }

  export type NewsCreateManyCategoryInputEnvelope = {
    data: NewsCreateManyCategoryInput | NewsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutCategoryInput, NewsUncheckedUpdateWithoutCategoryInput>
    create: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutCategoryInput, NewsUncheckedUpdateWithoutCategoryInput>
  }

  export type NewsUpdateManyWithWhereWithoutCategoryInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type NewsCategoryCreateWithoutNewsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type NewsCategoryUncheckedCreateWithoutNewsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type NewsCategoryCreateOrConnectWithoutNewsInput = {
    where: NewsCategoryWhereUniqueInput
    create: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
  }

  export type UserCreateWithoutNewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    financialReports?: FinancialReportCreateNestedManyWithoutCreatedByInput
    homilies?: HomilyCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutNewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    financialReports?: FinancialReportUncheckedCreateNestedManyWithoutCreatedByInput
    homilies?: HomilyUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutNewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
  }

  export type NewsMediaCreateWithoutNewsInput = {
    media: MediaCreateNestedOneWithoutNewsInput
  }

  export type NewsMediaUncheckedCreateWithoutNewsInput = {
    mediaId: string
  }

  export type NewsMediaCreateOrConnectWithoutNewsInput = {
    where: NewsMediaWhereUniqueInput
    create: XOR<NewsMediaCreateWithoutNewsInput, NewsMediaUncheckedCreateWithoutNewsInput>
  }

  export type NewsMediaCreateManyNewsInputEnvelope = {
    data: NewsMediaCreateManyNewsInput | NewsMediaCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type NewsCategoryUpsertWithoutNewsInput = {
    update: XOR<NewsCategoryUpdateWithoutNewsInput, NewsCategoryUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
    where?: NewsCategoryWhereInput
  }

  export type NewsCategoryUpdateToOneWithWhereWithoutNewsInput = {
    where?: NewsCategoryWhereInput
    data: XOR<NewsCategoryUpdateWithoutNewsInput, NewsCategoryUncheckedUpdateWithoutNewsInput>
  }

  export type NewsCategoryUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCategoryUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutNewsInput = {
    update: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialReports?: FinancialReportUpdateManyWithoutCreatedByNestedInput
    homilies?: HomilyUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialReports?: FinancialReportUncheckedUpdateManyWithoutCreatedByNestedInput
    homilies?: HomilyUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type NewsMediaUpsertWithWhereUniqueWithoutNewsInput = {
    where: NewsMediaWhereUniqueInput
    update: XOR<NewsMediaUpdateWithoutNewsInput, NewsMediaUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsMediaCreateWithoutNewsInput, NewsMediaUncheckedCreateWithoutNewsInput>
  }

  export type NewsMediaUpdateWithWhereUniqueWithoutNewsInput = {
    where: NewsMediaWhereUniqueInput
    data: XOR<NewsMediaUpdateWithoutNewsInput, NewsMediaUncheckedUpdateWithoutNewsInput>
  }

  export type NewsMediaUpdateManyWithWhereWithoutNewsInput = {
    where: NewsMediaScalarWhereInput
    data: XOR<NewsMediaUpdateManyMutationInput, NewsMediaUncheckedUpdateManyWithoutNewsInput>
  }

  export type NewsMediaScalarWhereInput = {
    AND?: NewsMediaScalarWhereInput | NewsMediaScalarWhereInput[]
    OR?: NewsMediaScalarWhereInput[]
    NOT?: NewsMediaScalarWhereInput | NewsMediaScalarWhereInput[]
    newsId?: StringFilter<"NewsMedia"> | string
    mediaId?: StringFilter<"NewsMedia"> | string
  }

  export type MassScheduleCreateWithoutChurchInput = {
    id?: string
    dayOfWeek: number
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MassScheduleUncheckedCreateWithoutChurchInput = {
    id?: string
    dayOfWeek: number
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MassScheduleCreateOrConnectWithoutChurchInput = {
    where: MassScheduleWhereUniqueInput
    create: XOR<MassScheduleCreateWithoutChurchInput, MassScheduleUncheckedCreateWithoutChurchInput>
  }

  export type MassScheduleCreateManyChurchInputEnvelope = {
    data: MassScheduleCreateManyChurchInput | MassScheduleCreateManyChurchInput[]
    skipDuplicates?: boolean
  }

  export type MassScheduleUpsertWithWhereUniqueWithoutChurchInput = {
    where: MassScheduleWhereUniqueInput
    update: XOR<MassScheduleUpdateWithoutChurchInput, MassScheduleUncheckedUpdateWithoutChurchInput>
    create: XOR<MassScheduleCreateWithoutChurchInput, MassScheduleUncheckedCreateWithoutChurchInput>
  }

  export type MassScheduleUpdateWithWhereUniqueWithoutChurchInput = {
    where: MassScheduleWhereUniqueInput
    data: XOR<MassScheduleUpdateWithoutChurchInput, MassScheduleUncheckedUpdateWithoutChurchInput>
  }

  export type MassScheduleUpdateManyWithWhereWithoutChurchInput = {
    where: MassScheduleScalarWhereInput
    data: XOR<MassScheduleUpdateManyMutationInput, MassScheduleUncheckedUpdateManyWithoutChurchInput>
  }

  export type MassScheduleScalarWhereInput = {
    AND?: MassScheduleScalarWhereInput | MassScheduleScalarWhereInput[]
    OR?: MassScheduleScalarWhereInput[]
    NOT?: MassScheduleScalarWhereInput | MassScheduleScalarWhereInput[]
    id?: StringFilter<"MassSchedule"> | string
    churchId?: StringFilter<"MassSchedule"> | string
    dayOfWeek?: IntFilter<"MassSchedule"> | number
    time?: StringFilter<"MassSchedule"> | string
    notes?: StringNullableFilter<"MassSchedule"> | string | null
    createdAt?: DateTimeFilter<"MassSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"MassSchedule"> | Date | string
  }

  export type ChurchCreateWithoutMassSchedulesInput = {
    id?: string
    name: string
    address: string
    description?: string | null
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChurchUncheckedCreateWithoutMassSchedulesInput = {
    id?: string
    name: string
    address: string
    description?: string | null
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChurchCreateOrConnectWithoutMassSchedulesInput = {
    where: ChurchWhereUniqueInput
    create: XOR<ChurchCreateWithoutMassSchedulesInput, ChurchUncheckedCreateWithoutMassSchedulesInput>
  }

  export type ChurchUpsertWithoutMassSchedulesInput = {
    update: XOR<ChurchUpdateWithoutMassSchedulesInput, ChurchUncheckedUpdateWithoutMassSchedulesInput>
    create: XOR<ChurchCreateWithoutMassSchedulesInput, ChurchUncheckedCreateWithoutMassSchedulesInput>
    where?: ChurchWhereInput
  }

  export type ChurchUpdateToOneWithWhereWithoutMassSchedulesInput = {
    where?: ChurchWhereInput
    data: XOR<ChurchUpdateWithoutMassSchedulesInput, ChurchUncheckedUpdateWithoutMassSchedulesInput>
  }

  export type ChurchUpdateWithoutMassSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChurchUncheckedUpdateWithoutMassSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryMediaCreateWithoutMinistryInput = {
    media: MediaCreateNestedOneWithoutMinistriesInput
  }

  export type MinistryMediaUncheckedCreateWithoutMinistryInput = {
    mediaId: string
  }

  export type MinistryMediaCreateOrConnectWithoutMinistryInput = {
    where: MinistryMediaWhereUniqueInput
    create: XOR<MinistryMediaCreateWithoutMinistryInput, MinistryMediaUncheckedCreateWithoutMinistryInput>
  }

  export type MinistryMediaCreateManyMinistryInputEnvelope = {
    data: MinistryMediaCreateManyMinistryInput | MinistryMediaCreateManyMinistryInput[]
    skipDuplicates?: boolean
  }

  export type MinistryMediaUpsertWithWhereUniqueWithoutMinistryInput = {
    where: MinistryMediaWhereUniqueInput
    update: XOR<MinistryMediaUpdateWithoutMinistryInput, MinistryMediaUncheckedUpdateWithoutMinistryInput>
    create: XOR<MinistryMediaCreateWithoutMinistryInput, MinistryMediaUncheckedCreateWithoutMinistryInput>
  }

  export type MinistryMediaUpdateWithWhereUniqueWithoutMinistryInput = {
    where: MinistryMediaWhereUniqueInput
    data: XOR<MinistryMediaUpdateWithoutMinistryInput, MinistryMediaUncheckedUpdateWithoutMinistryInput>
  }

  export type MinistryMediaUpdateManyWithWhereWithoutMinistryInput = {
    where: MinistryMediaScalarWhereInput
    data: XOR<MinistryMediaUpdateManyMutationInput, MinistryMediaUncheckedUpdateManyWithoutMinistryInput>
  }

  export type MinistryMediaScalarWhereInput = {
    AND?: MinistryMediaScalarWhereInput | MinistryMediaScalarWhereInput[]
    OR?: MinistryMediaScalarWhereInput[]
    NOT?: MinistryMediaScalarWhereInput | MinistryMediaScalarWhereInput[]
    ministryId?: StringFilter<"MinistryMedia"> | string
    mediaId?: StringFilter<"MinistryMedia"> | string
  }

  export type UserCreateWithoutFinancialReportsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutCreatedByInput
    homilies?: HomilyCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutFinancialReportsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutCreatedByInput
    homilies?: HomilyUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutFinancialReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinancialReportsInput, UserUncheckedCreateWithoutFinancialReportsInput>
  }

  export type FinancialReportMediaCreateWithoutReportInput = {
    media: MediaCreateNestedOneWithoutFinancialReportsInput
  }

  export type FinancialReportMediaUncheckedCreateWithoutReportInput = {
    mediaId: string
  }

  export type FinancialReportMediaCreateOrConnectWithoutReportInput = {
    where: FinancialReportMediaWhereUniqueInput
    create: XOR<FinancialReportMediaCreateWithoutReportInput, FinancialReportMediaUncheckedCreateWithoutReportInput>
  }

  export type FinancialReportMediaCreateManyReportInputEnvelope = {
    data: FinancialReportMediaCreateManyReportInput | FinancialReportMediaCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFinancialReportsInput = {
    update: XOR<UserUpdateWithoutFinancialReportsInput, UserUncheckedUpdateWithoutFinancialReportsInput>
    create: XOR<UserCreateWithoutFinancialReportsInput, UserUncheckedCreateWithoutFinancialReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinancialReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinancialReportsInput, UserUncheckedUpdateWithoutFinancialReportsInput>
  }

  export type UserUpdateWithoutFinancialReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutCreatedByNestedInput
    homilies?: HomilyUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFinancialReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutCreatedByNestedInput
    homilies?: HomilyUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type FinancialReportMediaUpsertWithWhereUniqueWithoutReportInput = {
    where: FinancialReportMediaWhereUniqueInput
    update: XOR<FinancialReportMediaUpdateWithoutReportInput, FinancialReportMediaUncheckedUpdateWithoutReportInput>
    create: XOR<FinancialReportMediaCreateWithoutReportInput, FinancialReportMediaUncheckedCreateWithoutReportInput>
  }

  export type FinancialReportMediaUpdateWithWhereUniqueWithoutReportInput = {
    where: FinancialReportMediaWhereUniqueInput
    data: XOR<FinancialReportMediaUpdateWithoutReportInput, FinancialReportMediaUncheckedUpdateWithoutReportInput>
  }

  export type FinancialReportMediaUpdateManyWithWhereWithoutReportInput = {
    where: FinancialReportMediaScalarWhereInput
    data: XOR<FinancialReportMediaUpdateManyMutationInput, FinancialReportMediaUncheckedUpdateManyWithoutReportInput>
  }

  export type FinancialReportMediaScalarWhereInput = {
    AND?: FinancialReportMediaScalarWhereInput | FinancialReportMediaScalarWhereInput[]
    OR?: FinancialReportMediaScalarWhereInput[]
    NOT?: FinancialReportMediaScalarWhereInput | FinancialReportMediaScalarWhereInput[]
    reportId?: StringFilter<"FinancialReportMedia"> | string
    mediaId?: StringFilter<"FinancialReportMedia"> | string
  }

  export type UserCreateWithoutHomiliesInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutCreatedByInput
    financialReports?: FinancialReportCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutHomiliesInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutCreatedByInput
    financialReports?: FinancialReportUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutHomiliesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHomiliesInput, UserUncheckedCreateWithoutHomiliesInput>
  }

  export type HomilyMediaCreateWithoutHomilyInput = {
    media: MediaCreateNestedOneWithoutHomiliesInput
  }

  export type HomilyMediaUncheckedCreateWithoutHomilyInput = {
    mediaId: string
  }

  export type HomilyMediaCreateOrConnectWithoutHomilyInput = {
    where: HomilyMediaWhereUniqueInput
    create: XOR<HomilyMediaCreateWithoutHomilyInput, HomilyMediaUncheckedCreateWithoutHomilyInput>
  }

  export type HomilyMediaCreateManyHomilyInputEnvelope = {
    data: HomilyMediaCreateManyHomilyInput | HomilyMediaCreateManyHomilyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHomiliesInput = {
    update: XOR<UserUpdateWithoutHomiliesInput, UserUncheckedUpdateWithoutHomiliesInput>
    create: XOR<UserCreateWithoutHomiliesInput, UserUncheckedCreateWithoutHomiliesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHomiliesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHomiliesInput, UserUncheckedUpdateWithoutHomiliesInput>
  }

  export type UserUpdateWithoutHomiliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutCreatedByNestedInput
    financialReports?: FinancialReportUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutHomiliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutCreatedByNestedInput
    financialReports?: FinancialReportUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type HomilyMediaUpsertWithWhereUniqueWithoutHomilyInput = {
    where: HomilyMediaWhereUniqueInput
    update: XOR<HomilyMediaUpdateWithoutHomilyInput, HomilyMediaUncheckedUpdateWithoutHomilyInput>
    create: XOR<HomilyMediaCreateWithoutHomilyInput, HomilyMediaUncheckedCreateWithoutHomilyInput>
  }

  export type HomilyMediaUpdateWithWhereUniqueWithoutHomilyInput = {
    where: HomilyMediaWhereUniqueInput
    data: XOR<HomilyMediaUpdateWithoutHomilyInput, HomilyMediaUncheckedUpdateWithoutHomilyInput>
  }

  export type HomilyMediaUpdateManyWithWhereWithoutHomilyInput = {
    where: HomilyMediaScalarWhereInput
    data: XOR<HomilyMediaUpdateManyMutationInput, HomilyMediaUncheckedUpdateManyWithoutHomilyInput>
  }

  export type HomilyMediaScalarWhereInput = {
    AND?: HomilyMediaScalarWhereInput | HomilyMediaScalarWhereInput[]
    OR?: HomilyMediaScalarWhereInput[]
    NOT?: HomilyMediaScalarWhereInput | HomilyMediaScalarWhereInput[]
    homilyId?: StringFilter<"HomilyMedia"> | string
    mediaId?: StringFilter<"HomilyMedia"> | string
  }

  export type AppointmentDocumentCreateWithoutAppointmentInput = {
    id?: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type AppointmentDocumentUncheckedCreateWithoutAppointmentInput = {
    id?: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type AppointmentDocumentCreateOrConnectWithoutAppointmentInput = {
    where: AppointmentDocumentWhereUniqueInput
    create: XOR<AppointmentDocumentCreateWithoutAppointmentInput, AppointmentDocumentUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentDocumentCreateManyAppointmentInputEnvelope = {
    data: AppointmentDocumentCreateManyAppointmentInput | AppointmentDocumentCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentDocumentUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: AppointmentDocumentWhereUniqueInput
    update: XOR<AppointmentDocumentUpdateWithoutAppointmentInput, AppointmentDocumentUncheckedUpdateWithoutAppointmentInput>
    create: XOR<AppointmentDocumentCreateWithoutAppointmentInput, AppointmentDocumentUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentDocumentUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: AppointmentDocumentWhereUniqueInput
    data: XOR<AppointmentDocumentUpdateWithoutAppointmentInput, AppointmentDocumentUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentDocumentUpdateManyWithWhereWithoutAppointmentInput = {
    where: AppointmentDocumentScalarWhereInput
    data: XOR<AppointmentDocumentUpdateManyMutationInput, AppointmentDocumentUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type AppointmentDocumentScalarWhereInput = {
    AND?: AppointmentDocumentScalarWhereInput | AppointmentDocumentScalarWhereInput[]
    OR?: AppointmentDocumentScalarWhereInput[]
    NOT?: AppointmentDocumentScalarWhereInput | AppointmentDocumentScalarWhereInput[]
    id?: StringFilter<"AppointmentDocument"> | string
    appointmentId?: StringFilter<"AppointmentDocument"> | string
    fileUrl?: StringFilter<"AppointmentDocument"> | string
    createdAt?: DateTimeFilter<"AppointmentDocument"> | Date | string
  }

  export type AppointmentCreateWithoutDocumentsInput = {
    id?: string
    type: $Enums.AppointmentType
    name: string
    phone: string
    email: string
    preferredDate?: Date | string | null
    notes?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUncheckedCreateWithoutDocumentsInput = {
    id?: string
    type: $Enums.AppointmentType
    name: string
    phone: string
    email: string
    preferredDate?: Date | string | null
    notes?: string | null
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutDocumentsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDocumentsInput, AppointmentUncheckedCreateWithoutDocumentsInput>
  }

  export type AppointmentUpsertWithoutDocumentsInput = {
    update: XOR<AppointmentUpdateWithoutDocumentsInput, AppointmentUncheckedUpdateWithoutDocumentsInput>
    create: XOR<AppointmentCreateWithoutDocumentsInput, AppointmentUncheckedCreateWithoutDocumentsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutDocumentsInput, AppointmentUncheckedUpdateWithoutDocumentsInput>
  }

  export type AppointmentUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsMediaCreateWithoutMediaInput = {
    news: NewsCreateNestedOneWithoutMediaInput
  }

  export type NewsMediaUncheckedCreateWithoutMediaInput = {
    newsId: string
  }

  export type NewsMediaCreateOrConnectWithoutMediaInput = {
    where: NewsMediaWhereUniqueInput
    create: XOR<NewsMediaCreateWithoutMediaInput, NewsMediaUncheckedCreateWithoutMediaInput>
  }

  export type NewsMediaCreateManyMediaInputEnvelope = {
    data: NewsMediaCreateManyMediaInput | NewsMediaCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type MinistryMediaCreateWithoutMediaInput = {
    ministry: MinistryCreateNestedOneWithoutMediaInput
  }

  export type MinistryMediaUncheckedCreateWithoutMediaInput = {
    ministryId: string
  }

  export type MinistryMediaCreateOrConnectWithoutMediaInput = {
    where: MinistryMediaWhereUniqueInput
    create: XOR<MinistryMediaCreateWithoutMediaInput, MinistryMediaUncheckedCreateWithoutMediaInput>
  }

  export type MinistryMediaCreateManyMediaInputEnvelope = {
    data: MinistryMediaCreateManyMediaInput | MinistryMediaCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type FinancialReportMediaCreateWithoutMediaInput = {
    report: FinancialReportCreateNestedOneWithoutMediaInput
  }

  export type FinancialReportMediaUncheckedCreateWithoutMediaInput = {
    reportId: string
  }

  export type FinancialReportMediaCreateOrConnectWithoutMediaInput = {
    where: FinancialReportMediaWhereUniqueInput
    create: XOR<FinancialReportMediaCreateWithoutMediaInput, FinancialReportMediaUncheckedCreateWithoutMediaInput>
  }

  export type FinancialReportMediaCreateManyMediaInputEnvelope = {
    data: FinancialReportMediaCreateManyMediaInput | FinancialReportMediaCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type HomilyMediaCreateWithoutMediaInput = {
    homily: HomilyCreateNestedOneWithoutMediaInput
  }

  export type HomilyMediaUncheckedCreateWithoutMediaInput = {
    homilyId: string
  }

  export type HomilyMediaCreateOrConnectWithoutMediaInput = {
    where: HomilyMediaWhereUniqueInput
    create: XOR<HomilyMediaCreateWithoutMediaInput, HomilyMediaUncheckedCreateWithoutMediaInput>
  }

  export type HomilyMediaCreateManyMediaInputEnvelope = {
    data: HomilyMediaCreateManyMediaInput | HomilyMediaCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type NewsMediaUpsertWithWhereUniqueWithoutMediaInput = {
    where: NewsMediaWhereUniqueInput
    update: XOR<NewsMediaUpdateWithoutMediaInput, NewsMediaUncheckedUpdateWithoutMediaInput>
    create: XOR<NewsMediaCreateWithoutMediaInput, NewsMediaUncheckedCreateWithoutMediaInput>
  }

  export type NewsMediaUpdateWithWhereUniqueWithoutMediaInput = {
    where: NewsMediaWhereUniqueInput
    data: XOR<NewsMediaUpdateWithoutMediaInput, NewsMediaUncheckedUpdateWithoutMediaInput>
  }

  export type NewsMediaUpdateManyWithWhereWithoutMediaInput = {
    where: NewsMediaScalarWhereInput
    data: XOR<NewsMediaUpdateManyMutationInput, NewsMediaUncheckedUpdateManyWithoutMediaInput>
  }

  export type MinistryMediaUpsertWithWhereUniqueWithoutMediaInput = {
    where: MinistryMediaWhereUniqueInput
    update: XOR<MinistryMediaUpdateWithoutMediaInput, MinistryMediaUncheckedUpdateWithoutMediaInput>
    create: XOR<MinistryMediaCreateWithoutMediaInput, MinistryMediaUncheckedCreateWithoutMediaInput>
  }

  export type MinistryMediaUpdateWithWhereUniqueWithoutMediaInput = {
    where: MinistryMediaWhereUniqueInput
    data: XOR<MinistryMediaUpdateWithoutMediaInput, MinistryMediaUncheckedUpdateWithoutMediaInput>
  }

  export type MinistryMediaUpdateManyWithWhereWithoutMediaInput = {
    where: MinistryMediaScalarWhereInput
    data: XOR<MinistryMediaUpdateManyMutationInput, MinistryMediaUncheckedUpdateManyWithoutMediaInput>
  }

  export type FinancialReportMediaUpsertWithWhereUniqueWithoutMediaInput = {
    where: FinancialReportMediaWhereUniqueInput
    update: XOR<FinancialReportMediaUpdateWithoutMediaInput, FinancialReportMediaUncheckedUpdateWithoutMediaInput>
    create: XOR<FinancialReportMediaCreateWithoutMediaInput, FinancialReportMediaUncheckedCreateWithoutMediaInput>
  }

  export type FinancialReportMediaUpdateWithWhereUniqueWithoutMediaInput = {
    where: FinancialReportMediaWhereUniqueInput
    data: XOR<FinancialReportMediaUpdateWithoutMediaInput, FinancialReportMediaUncheckedUpdateWithoutMediaInput>
  }

  export type FinancialReportMediaUpdateManyWithWhereWithoutMediaInput = {
    where: FinancialReportMediaScalarWhereInput
    data: XOR<FinancialReportMediaUpdateManyMutationInput, FinancialReportMediaUncheckedUpdateManyWithoutMediaInput>
  }

  export type HomilyMediaUpsertWithWhereUniqueWithoutMediaInput = {
    where: HomilyMediaWhereUniqueInput
    update: XOR<HomilyMediaUpdateWithoutMediaInput, HomilyMediaUncheckedUpdateWithoutMediaInput>
    create: XOR<HomilyMediaCreateWithoutMediaInput, HomilyMediaUncheckedCreateWithoutMediaInput>
  }

  export type HomilyMediaUpdateWithWhereUniqueWithoutMediaInput = {
    where: HomilyMediaWhereUniqueInput
    data: XOR<HomilyMediaUpdateWithoutMediaInput, HomilyMediaUncheckedUpdateWithoutMediaInput>
  }

  export type HomilyMediaUpdateManyWithWhereWithoutMediaInput = {
    where: HomilyMediaScalarWhereInput
    data: XOR<HomilyMediaUpdateManyMutationInput, HomilyMediaUncheckedUpdateManyWithoutMediaInput>
  }

  export type NewsCreateWithoutMediaInput = {
    id?: string
    title: string
    slug: string
    content: string
    imageUrl?: string | null
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: NewsCategoryCreateNestedOneWithoutNewsInput
    createdBy: UserCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutMediaInput = {
    id?: string
    title: string
    slug: string
    content: string
    imageUrl?: string | null
    published?: boolean
    publishedAt?: Date | string | null
    categoryId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCreateOrConnectWithoutMediaInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutMediaInput, NewsUncheckedCreateWithoutMediaInput>
  }

  export type MediaCreateWithoutNewsInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    altText?: string | null
    size?: number | null
    createdAt?: Date | string
    ministries?: MinistryMediaCreateNestedManyWithoutMediaInput
    financialReports?: FinancialReportMediaCreateNestedManyWithoutMediaInput
    homilies?: HomilyMediaCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutNewsInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    altText?: string | null
    size?: number | null
    createdAt?: Date | string
    ministries?: MinistryMediaUncheckedCreateNestedManyWithoutMediaInput
    financialReports?: FinancialReportMediaUncheckedCreateNestedManyWithoutMediaInput
    homilies?: HomilyMediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutNewsInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutNewsInput, MediaUncheckedCreateWithoutNewsInput>
  }

  export type NewsUpsertWithoutMediaInput = {
    update: XOR<NewsUpdateWithoutMediaInput, NewsUncheckedUpdateWithoutMediaInput>
    create: XOR<NewsCreateWithoutMediaInput, NewsUncheckedCreateWithoutMediaInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutMediaInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutMediaInput, NewsUncheckedUpdateWithoutMediaInput>
  }

  export type NewsUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NewsCategoryUpdateOneRequiredWithoutNewsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpsertWithoutNewsInput = {
    update: XOR<MediaUpdateWithoutNewsInput, MediaUncheckedUpdateWithoutNewsInput>
    create: XOR<MediaCreateWithoutNewsInput, MediaUncheckedCreateWithoutNewsInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutNewsInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutNewsInput, MediaUncheckedUpdateWithoutNewsInput>
  }

  export type MediaUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministries?: MinistryMediaUpdateManyWithoutMediaNestedInput
    financialReports?: FinancialReportMediaUpdateManyWithoutMediaNestedInput
    homilies?: HomilyMediaUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministries?: MinistryMediaUncheckedUpdateManyWithoutMediaNestedInput
    financialReports?: FinancialReportMediaUncheckedUpdateManyWithoutMediaNestedInput
    homilies?: HomilyMediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MinistryCreateWithoutMediaInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    contactName?: string | null
    contactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MinistryUncheckedCreateWithoutMediaInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    contactName?: string | null
    contactPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MinistryCreateOrConnectWithoutMediaInput = {
    where: MinistryWhereUniqueInput
    create: XOR<MinistryCreateWithoutMediaInput, MinistryUncheckedCreateWithoutMediaInput>
  }

  export type MediaCreateWithoutMinistriesInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    altText?: string | null
    size?: number | null
    createdAt?: Date | string
    news?: NewsMediaCreateNestedManyWithoutMediaInput
    financialReports?: FinancialReportMediaCreateNestedManyWithoutMediaInput
    homilies?: HomilyMediaCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutMinistriesInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    altText?: string | null
    size?: number | null
    createdAt?: Date | string
    news?: NewsMediaUncheckedCreateNestedManyWithoutMediaInput
    financialReports?: FinancialReportMediaUncheckedCreateNestedManyWithoutMediaInput
    homilies?: HomilyMediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutMinistriesInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutMinistriesInput, MediaUncheckedCreateWithoutMinistriesInput>
  }

  export type MinistryUpsertWithoutMediaInput = {
    update: XOR<MinistryUpdateWithoutMediaInput, MinistryUncheckedUpdateWithoutMediaInput>
    create: XOR<MinistryCreateWithoutMediaInput, MinistryUncheckedCreateWithoutMediaInput>
    where?: MinistryWhereInput
  }

  export type MinistryUpdateToOneWithWhereWithoutMediaInput = {
    where?: MinistryWhereInput
    data: XOR<MinistryUpdateWithoutMediaInput, MinistryUncheckedUpdateWithoutMediaInput>
  }

  export type MinistryUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpsertWithoutMinistriesInput = {
    update: XOR<MediaUpdateWithoutMinistriesInput, MediaUncheckedUpdateWithoutMinistriesInput>
    create: XOR<MediaCreateWithoutMinistriesInput, MediaUncheckedCreateWithoutMinistriesInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutMinistriesInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutMinistriesInput, MediaUncheckedUpdateWithoutMinistriesInput>
  }

  export type MediaUpdateWithoutMinistriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsMediaUpdateManyWithoutMediaNestedInput
    financialReports?: FinancialReportMediaUpdateManyWithoutMediaNestedInput
    homilies?: HomilyMediaUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutMinistriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsMediaUncheckedUpdateManyWithoutMediaNestedInput
    financialReports?: FinancialReportMediaUncheckedUpdateManyWithoutMediaNestedInput
    homilies?: HomilyMediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type FinancialReportCreateWithoutMediaInput = {
    id?: string
    title: string
    description: string
    progressPercentage: number
    totalCost: number
    amountRaised: number
    amountRemaining: number
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutFinancialReportsInput
  }

  export type FinancialReportUncheckedCreateWithoutMediaInput = {
    id?: string
    title: string
    description: string
    progressPercentage: number
    totalCost: number
    amountRaised: number
    amountRemaining: number
    published?: boolean
    publishedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialReportCreateOrConnectWithoutMediaInput = {
    where: FinancialReportWhereUniqueInput
    create: XOR<FinancialReportCreateWithoutMediaInput, FinancialReportUncheckedCreateWithoutMediaInput>
  }

  export type MediaCreateWithoutFinancialReportsInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    altText?: string | null
    size?: number | null
    createdAt?: Date | string
    news?: NewsMediaCreateNestedManyWithoutMediaInput
    ministries?: MinistryMediaCreateNestedManyWithoutMediaInput
    homilies?: HomilyMediaCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutFinancialReportsInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    altText?: string | null
    size?: number | null
    createdAt?: Date | string
    news?: NewsMediaUncheckedCreateNestedManyWithoutMediaInput
    ministries?: MinistryMediaUncheckedCreateNestedManyWithoutMediaInput
    homilies?: HomilyMediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutFinancialReportsInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutFinancialReportsInput, MediaUncheckedCreateWithoutFinancialReportsInput>
  }

  export type FinancialReportUpsertWithoutMediaInput = {
    update: XOR<FinancialReportUpdateWithoutMediaInput, FinancialReportUncheckedUpdateWithoutMediaInput>
    create: XOR<FinancialReportCreateWithoutMediaInput, FinancialReportUncheckedCreateWithoutMediaInput>
    where?: FinancialReportWhereInput
  }

  export type FinancialReportUpdateToOneWithWhereWithoutMediaInput = {
    where?: FinancialReportWhereInput
    data: XOR<FinancialReportUpdateWithoutMediaInput, FinancialReportUncheckedUpdateWithoutMediaInput>
  }

  export type FinancialReportUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    amountRaised?: FloatFieldUpdateOperationsInput | number
    amountRemaining?: FloatFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutFinancialReportsNestedInput
  }

  export type FinancialReportUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    amountRaised?: FloatFieldUpdateOperationsInput | number
    amountRemaining?: FloatFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpsertWithoutFinancialReportsInput = {
    update: XOR<MediaUpdateWithoutFinancialReportsInput, MediaUncheckedUpdateWithoutFinancialReportsInput>
    create: XOR<MediaCreateWithoutFinancialReportsInput, MediaUncheckedCreateWithoutFinancialReportsInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutFinancialReportsInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutFinancialReportsInput, MediaUncheckedUpdateWithoutFinancialReportsInput>
  }

  export type MediaUpdateWithoutFinancialReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsMediaUpdateManyWithoutMediaNestedInput
    ministries?: MinistryMediaUpdateManyWithoutMediaNestedInput
    homilies?: HomilyMediaUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutFinancialReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsMediaUncheckedUpdateManyWithoutMediaNestedInput
    ministries?: MinistryMediaUncheckedUpdateManyWithoutMediaNestedInput
    homilies?: HomilyMediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type HomilyCreateWithoutMediaInput = {
    id?: string
    title: string
    description?: string | null
    content?: string | null
    date: Date | string
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutHomiliesInput
  }

  export type HomilyUncheckedCreateWithoutMediaInput = {
    id?: string
    title: string
    description?: string | null
    content?: string | null
    date: Date | string
    published?: boolean
    publishedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomilyCreateOrConnectWithoutMediaInput = {
    where: HomilyWhereUniqueInput
    create: XOR<HomilyCreateWithoutMediaInput, HomilyUncheckedCreateWithoutMediaInput>
  }

  export type MediaCreateWithoutHomiliesInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    altText?: string | null
    size?: number | null
    createdAt?: Date | string
    news?: NewsMediaCreateNestedManyWithoutMediaInput
    ministries?: MinistryMediaCreateNestedManyWithoutMediaInput
    financialReports?: FinancialReportMediaCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutHomiliesInput = {
    id?: string
    url: string
    type: $Enums.MediaType
    altText?: string | null
    size?: number | null
    createdAt?: Date | string
    news?: NewsMediaUncheckedCreateNestedManyWithoutMediaInput
    ministries?: MinistryMediaUncheckedCreateNestedManyWithoutMediaInput
    financialReports?: FinancialReportMediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutHomiliesInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutHomiliesInput, MediaUncheckedCreateWithoutHomiliesInput>
  }

  export type HomilyUpsertWithoutMediaInput = {
    update: XOR<HomilyUpdateWithoutMediaInput, HomilyUncheckedUpdateWithoutMediaInput>
    create: XOR<HomilyCreateWithoutMediaInput, HomilyUncheckedCreateWithoutMediaInput>
    where?: HomilyWhereInput
  }

  export type HomilyUpdateToOneWithWhereWithoutMediaInput = {
    where?: HomilyWhereInput
    data: XOR<HomilyUpdateWithoutMediaInput, HomilyUncheckedUpdateWithoutMediaInput>
  }

  export type HomilyUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutHomiliesNestedInput
  }

  export type HomilyUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpsertWithoutHomiliesInput = {
    update: XOR<MediaUpdateWithoutHomiliesInput, MediaUncheckedUpdateWithoutHomiliesInput>
    create: XOR<MediaCreateWithoutHomiliesInput, MediaUncheckedCreateWithoutHomiliesInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutHomiliesInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutHomiliesInput, MediaUncheckedUpdateWithoutHomiliesInput>
  }

  export type MediaUpdateWithoutHomiliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsMediaUpdateManyWithoutMediaNestedInput
    ministries?: MinistryMediaUpdateManyWithoutMediaNestedInput
    financialReports?: FinancialReportMediaUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutHomiliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsMediaUncheckedUpdateManyWithoutMediaNestedInput
    ministries?: MinistryMediaUncheckedUpdateManyWithoutMediaNestedInput
    financialReports?: FinancialReportMediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type NewsCreateManyCreatedByInput = {
    id?: string
    title: string
    slug: string
    content: string
    imageUrl?: string | null
    published?: boolean
    publishedAt?: Date | string | null
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialReportCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    progressPercentage: number
    totalCost: number
    amountRaised: number
    amountRemaining: number
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomilyCreateManyCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    content?: string | null
    date: Date | string
    published?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NewsCategoryUpdateOneRequiredWithoutNewsNestedInput
    media?: NewsMediaUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: NewsMediaUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialReportUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    amountRaised?: FloatFieldUpdateOperationsInput | number
    amountRemaining?: FloatFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: FinancialReportMediaUpdateManyWithoutReportNestedInput
  }

  export type FinancialReportUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    amountRaised?: FloatFieldUpdateOperationsInput | number
    amountRemaining?: FloatFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: FinancialReportMediaUncheckedUpdateManyWithoutReportNestedInput
  }

  export type FinancialReportUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progressPercentage?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    amountRaised?: FloatFieldUpdateOperationsInput | number
    amountRemaining?: FloatFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomilyUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: HomilyMediaUpdateManyWithoutHomilyNestedInput
  }

  export type HomilyUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: HomilyMediaUncheckedUpdateManyWithoutHomilyNestedInput
  }

  export type HomilyUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyCategoryInput = {
    id?: string
    title: string
    slug: string
    content: string
    imageUrl?: string | null
    published?: boolean
    publishedAt?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutNewsNestedInput
    media?: NewsMediaUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: NewsMediaUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsMediaCreateManyNewsInput = {
    mediaId: string
  }

  export type NewsMediaUpdateWithoutNewsInput = {
    media?: MediaUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsMediaUncheckedUpdateWithoutNewsInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsMediaUncheckedUpdateManyWithoutNewsInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type MassScheduleCreateManyChurchInput = {
    id?: string
    dayOfWeek: number
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MassScheduleUpdateWithoutChurchInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MassScheduleUncheckedUpdateWithoutChurchInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MassScheduleUncheckedUpdateManyWithoutChurchInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryMediaCreateManyMinistryInput = {
    mediaId: string
  }

  export type MinistryMediaUpdateWithoutMinistryInput = {
    media?: MediaUpdateOneRequiredWithoutMinistriesNestedInput
  }

  export type MinistryMediaUncheckedUpdateWithoutMinistryInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type MinistryMediaUncheckedUpdateManyWithoutMinistryInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialReportMediaCreateManyReportInput = {
    mediaId: string
  }

  export type FinancialReportMediaUpdateWithoutReportInput = {
    media?: MediaUpdateOneRequiredWithoutFinancialReportsNestedInput
  }

  export type FinancialReportMediaUncheckedUpdateWithoutReportInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialReportMediaUncheckedUpdateManyWithoutReportInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type HomilyMediaCreateManyHomilyInput = {
    mediaId: string
  }

  export type HomilyMediaUpdateWithoutHomilyInput = {
    media?: MediaUpdateOneRequiredWithoutHomiliesNestedInput
  }

  export type HomilyMediaUncheckedUpdateWithoutHomilyInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type HomilyMediaUncheckedUpdateManyWithoutHomilyInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentDocumentCreateManyAppointmentInput = {
    id?: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type AppointmentDocumentUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentDocumentUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentDocumentUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsMediaCreateManyMediaInput = {
    newsId: string
  }

  export type MinistryMediaCreateManyMediaInput = {
    ministryId: string
  }

  export type FinancialReportMediaCreateManyMediaInput = {
    reportId: string
  }

  export type HomilyMediaCreateManyMediaInput = {
    homilyId: string
  }

  export type NewsMediaUpdateWithoutMediaInput = {
    news?: NewsUpdateOneRequiredWithoutMediaNestedInput
  }

  export type NewsMediaUncheckedUpdateWithoutMediaInput = {
    newsId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsMediaUncheckedUpdateManyWithoutMediaInput = {
    newsId?: StringFieldUpdateOperationsInput | string
  }

  export type MinistryMediaUpdateWithoutMediaInput = {
    ministry?: MinistryUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MinistryMediaUncheckedUpdateWithoutMediaInput = {
    ministryId?: StringFieldUpdateOperationsInput | string
  }

  export type MinistryMediaUncheckedUpdateManyWithoutMediaInput = {
    ministryId?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialReportMediaUpdateWithoutMediaInput = {
    report?: FinancialReportUpdateOneRequiredWithoutMediaNestedInput
  }

  export type FinancialReportMediaUncheckedUpdateWithoutMediaInput = {
    reportId?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialReportMediaUncheckedUpdateManyWithoutMediaInput = {
    reportId?: StringFieldUpdateOperationsInput | string
  }

  export type HomilyMediaUpdateWithoutMediaInput = {
    homily?: HomilyUpdateOneRequiredWithoutMediaNestedInput
  }

  export type HomilyMediaUncheckedUpdateWithoutMediaInput = {
    homilyId?: StringFieldUpdateOperationsInput | string
  }

  export type HomilyMediaUncheckedUpdateManyWithoutMediaInput = {
    homilyId?: StringFieldUpdateOperationsInput | string
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