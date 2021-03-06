// Code generated by Prisma (prisma@1.19.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  listing: (where?: ListingWhereInput) => Promise<boolean>;
  message: (where?: MessageWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  listing: (where: ListingWhereUniqueInput) => Listing;
  listings: (
    args?: {
      where?: ListingWhereInput;
      orderBy?: ListingOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<ListingNode>;
  listingsConnection: (
    args?: {
      where?: ListingWhereInput;
      orderBy?: ListingOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ListingConnection;
  message: (where: MessageWhereUniqueInput) => Message;
  messages: (
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<MessageNode>;
  messagesConnection: (
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => MessageConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<UserNode>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createListing: (data: ListingCreateInput) => Listing;
  updateListing: (
    args: { data: ListingUpdateInput; where: ListingWhereUniqueInput }
  ) => Listing;
  updateManyListings: (
    args: { data: ListingUpdateInput; where?: ListingWhereInput }
  ) => BatchPayload;
  upsertListing: (
    args: {
      where: ListingWhereUniqueInput;
      create: ListingCreateInput;
      update: ListingUpdateInput;
    }
  ) => Listing;
  deleteListing: (where: ListingWhereUniqueInput) => Listing;
  deleteManyListings: (where?: ListingWhereInput) => BatchPayload;
  createMessage: (data: MessageCreateInput) => Message;
  updateMessage: (
    args: { data: MessageUpdateInput; where: MessageWhereUniqueInput }
  ) => Message;
  updateManyMessages: (
    args: { data: MessageUpdateInput; where?: MessageWhereInput }
  ) => BatchPayload;
  upsertMessage: (
    args: {
      where: MessageWhereUniqueInput;
      create: MessageCreateInput;
      update: MessageUpdateInput;
    }
  ) => Message;
  deleteMessage: (where: MessageWhereUniqueInput) => Message;
  deleteManyMessages: (where?: MessageWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  listing: (
    where?: ListingSubscriptionWhereInput
  ) => ListingSubscriptionPayloadSubscription;
  message: (
    where?: MessageSubscriptionWhereInput
  ) => MessageSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ListingOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "price_ASC"
  | "price_DESC"
  | "imageUrl_ASC"
  | "imageUrl_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MessageOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "text_ASC"
  | "text_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateWithoutListingsDataInput {
  name?: String;
  email?: String;
  password?: String;
  messages?: MessageUpdateManyWithoutAuthorInput;
}

export type ListingWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface MessageUpdateWithoutAuthorDataInput {
  title?: String;
  text?: String;
  listing?: ListingUpdateOneRequiredInput;
}

export interface ListingWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  price?: Int;
  price_not?: Int;
  price_in?: Int[] | Int;
  price_not_in?: Int[] | Int;
  price_lt?: Int;
  price_lte?: Int;
  price_gt?: Int;
  price_gte?: Int;
  imageUrl?: String;
  imageUrl_not?: String;
  imageUrl_in?: String[] | String;
  imageUrl_not_in?: String[] | String;
  imageUrl_lt?: String;
  imageUrl_lte?: String;
  imageUrl_gt?: String;
  imageUrl_gte?: String;
  imageUrl_contains?: String;
  imageUrl_not_contains?: String;
  imageUrl_starts_with?: String;
  imageUrl_not_starts_with?: String;
  imageUrl_ends_with?: String;
  imageUrl_not_ends_with?: String;
  owner?: UserWhereInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: ListingWhereInput[] | ListingWhereInput;
  OR?: ListingWhereInput[] | ListingWhereInput;
  NOT?: ListingWhereInput[] | ListingWhereInput;
}

export interface ListingUpdateOneRequiredInput {
  create?: ListingCreateInput;
  update?: ListingUpdateDataInput;
  upsert?: ListingUpsertNestedInput;
  connect?: ListingWhereUniqueInput;
}

export interface MessageWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  author?: UserWhereInput;
  listing?: ListingWhereInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: MessageWhereInput[] | MessageWhereInput;
  OR?: MessageWhereInput[] | MessageWhereInput;
  NOT?: MessageWhereInput[] | MessageWhereInput;
}

export interface UserCreateOneWithoutListingsInput {
  create?: UserCreateWithoutListingsInput;
  connect?: UserWhereUniqueInput;
}

export interface MessageCreateInput {
  title: String;
  text: String;
  author: UserCreateOneWithoutMessagesInput;
  listing: ListingCreateOneInput;
}

export interface UserCreateWithoutListingsInput {
  name: String;
  email: String;
  password: String;
  messages?: MessageCreateManyWithoutAuthorInput;
}

export interface ListingUpdateDataInput {
  name?: String;
  description?: String;
  price?: Int;
  imageUrl?: String;
  owner?: UserUpdateOneRequiredWithoutListingsInput;
}

export interface MessageCreateManyWithoutAuthorInput {
  create?: MessageCreateWithoutAuthorInput[] | MessageCreateWithoutAuthorInput;
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
}

export interface MessageSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: MessageWhereInput;
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
}

export interface MessageCreateWithoutAuthorInput {
  title: String;
  text: String;
  listing: ListingCreateOneInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  listings?: ListingUpdateManyWithoutOwnerInput;
  messages?: MessageUpdateManyWithoutAuthorInput;
}

export interface ListingCreateOneInput {
  create?: ListingCreateInput;
  connect?: ListingWhereUniqueInput;
}

export interface UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput;
  create: UserCreateWithoutMessagesInput;
}

export interface ListingUpdateInput {
  name?: String;
  description?: String;
  price?: Int;
  imageUrl?: String;
  owner?: UserUpdateOneRequiredWithoutListingsInput;
}

export interface ListingUpsertWithWhereUniqueWithoutOwnerInput {
  where: ListingWhereUniqueInput;
  update: ListingUpdateWithoutOwnerDataInput;
  create: ListingCreateWithoutOwnerInput;
}

export interface UserUpdateOneRequiredWithoutListingsInput {
  create?: UserCreateWithoutListingsInput;
  update?: UserUpdateWithoutListingsDataInput;
  upsert?: UserUpsertWithoutListingsInput;
  connect?: UserWhereUniqueInput;
}

export interface ListingUpdateWithWhereUniqueWithoutOwnerInput {
  where: ListingWhereUniqueInput;
  data: ListingUpdateWithoutOwnerDataInput;
}

export interface ListingCreateWithoutOwnerInput {
  name: String;
  description: String;
  price: Int;
  imageUrl: String;
}

export interface ListingUpdateManyWithoutOwnerInput {
  create?: ListingCreateWithoutOwnerInput[] | ListingCreateWithoutOwnerInput;
  delete?: ListingWhereUniqueInput[] | ListingWhereUniqueInput;
  connect?: ListingWhereUniqueInput[] | ListingWhereUniqueInput;
  disconnect?: ListingWhereUniqueInput[] | ListingWhereUniqueInput;
  update?:
    | ListingUpdateWithWhereUniqueWithoutOwnerInput[]
    | ListingUpdateWithWhereUniqueWithoutOwnerInput;
  upsert?:
    | ListingUpsertWithWhereUniqueWithoutOwnerInput[]
    | ListingUpsertWithWhereUniqueWithoutOwnerInput;
}

export interface MessageUpdateManyWithoutAuthorInput {
  create?: MessageCreateWithoutAuthorInput[] | MessageCreateWithoutAuthorInput;
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
  update?:
    | MessageUpdateWithWhereUniqueWithoutAuthorInput[]
    | MessageUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | MessageUpsertWithWhereUniqueWithoutAuthorInput[]
    | MessageUpsertWithWhereUniqueWithoutAuthorInput;
}

export interface UserUpdateOneRequiredWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput;
  update?: UserUpdateWithoutMessagesDataInput;
  upsert?: UserUpsertWithoutMessagesInput;
  connect?: UserWhereUniqueInput;
}

export interface MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutAuthorDataInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  listings_every?: ListingWhereInput;
  listings_some?: ListingWhereInput;
  listings_none?: ListingWhereInput;
  messages_every?: MessageWhereInput;
  messages_some?: MessageWhereInput;
  messages_none?: MessageWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface UserCreateInput {
  name: String;
  email: String;
  password: String;
  listings?: ListingCreateManyWithoutOwnerInput;
  messages?: MessageCreateManyWithoutAuthorInput;
}

export interface ListingCreateManyWithoutOwnerInput {
  create?: ListingCreateWithoutOwnerInput[] | ListingCreateWithoutOwnerInput;
  connect?: ListingWhereUniqueInput[] | ListingWhereUniqueInput;
}

export interface ListingUpdateWithoutOwnerDataInput {
  name?: String;
  description?: String;
  price?: Int;
  imageUrl?: String;
}

export interface UserCreateWithoutMessagesInput {
  name: String;
  email: String;
  password: String;
  listings?: ListingCreateManyWithoutOwnerInput;
}

export interface UserUpdateWithoutMessagesDataInput {
  name?: String;
  email?: String;
  password?: String;
  listings?: ListingUpdateManyWithoutOwnerInput;
}

export interface UserCreateOneWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpsertWithoutListingsInput {
  update: UserUpdateWithoutListingsDataInput;
  create: UserCreateWithoutListingsInput;
}

export interface MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutAuthorDataInput;
  create: MessageCreateWithoutAuthorInput;
}

export interface ListingUpsertNestedInput {
  update: ListingUpdateDataInput;
  create: ListingCreateInput;
}

export interface MessageUpdateInput {
  title?: String;
  text?: String;
  author?: UserUpdateOneRequiredWithoutMessagesInput;
  listing?: ListingUpdateOneRequiredInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export type MessageWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ListingSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ListingWhereInput;
  AND?: ListingSubscriptionWhereInput[] | ListingSubscriptionWhereInput;
  OR?: ListingSubscriptionWhereInput[] | ListingSubscriptionWhereInput;
  NOT?: ListingSubscriptionWhereInput[] | ListingSubscriptionWhereInput;
}

export interface ListingCreateInput {
  name: String;
  description: String;
  price: Int;
  imageUrl: String;
  owner: UserCreateOneWithoutListingsInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface AggregateListingNode {
  count: Int;
}

export interface AggregateListing
  extends Promise<AggregateListingNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateListingSubscription
  extends Promise<AsyncIterator<AggregateListingNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserNode {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  listings: <T = FragmentableArray<ListingNode>>(
    args?: {
      where?: ListingWhereInput;
      orderBy?: ListingOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  messages: <T = FragmentableArray<MessageNode>>(
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  listings: <T = Promise<AsyncIterator<ListingSubscription>>>(
    args?: {
      where?: ListingWhereInput;
      orderBy?: ListingOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  messages: <T = Promise<AsyncIterator<MessageSubscription>>>(
    args?: {
      where?: MessageWhereInput;
      orderBy?: MessageOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface MessageConnectionNode {}

export interface MessageConnection
  extends Promise<MessageConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<MessageEdgeNode>>() => T;
  aggregate: <T = AggregateMessage>() => T;
}

export interface MessageConnectionSubscription
  extends Promise<AsyncIterator<MessageConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MessageEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMessageSubscription>() => T;
}

export interface ListingConnectionNode {}

export interface ListingConnection
  extends Promise<ListingConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<ListingEdgeNode>>() => T;
  aggregate: <T = AggregateListing>() => T;
}

export interface ListingConnectionSubscription
  extends Promise<AsyncIterator<ListingConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ListingEdgeSubscription>>>() => T;
  aggregate: <T = AggregateListingSubscription>() => T;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ListingEdgeNode {
  cursor: String;
}

export interface ListingEdge extends Promise<ListingEdgeNode>, Fragmentable {
  node: <T = Listing>() => T;
  cursor: () => Promise<String>;
}

export interface ListingEdgeSubscription
  extends Promise<AsyncIterator<ListingEdgeNode>>,
    Fragmentable {
  node: <T = ListingSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface MessagePreviousValuesNode {
  id: ID_Output;
  title: String;
  text: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface MessagePreviousValues
  extends Promise<MessagePreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  text: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface MessagePreviousValuesSubscription
  extends Promise<AsyncIterator<MessagePreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  text: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface MessageSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface MessageSubscriptionPayload
  extends Promise<MessageSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Message>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MessagePreviousValues>() => T;
}

export interface MessageSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MessageSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MessageSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MessagePreviousValuesSubscription>() => T;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<UserEdgeNode>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateMessageNode {
  count: Int;
}

export interface AggregateMessage
  extends Promise<AggregateMessageNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMessageSubscription
  extends Promise<AsyncIterator<AggregateMessageNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ListingPreviousValuesNode {
  id: ID_Output;
  name: String;
  description: String;
  price: Int;
  imageUrl: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ListingPreviousValues
  extends Promise<ListingPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  price: () => Promise<Int>;
  imageUrl: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ListingPreviousValuesSubscription
  extends Promise<AsyncIterator<ListingPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  imageUrl: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ListingSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ListingSubscriptionPayload
  extends Promise<ListingSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Listing>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ListingPreviousValues>() => T;
}

export interface ListingSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ListingSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ListingSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ListingPreviousValuesSubscription>() => T;
}

export interface ListingNode {
  id: ID_Output;
  name: String;
  description: String;
  price: Int;
  imageUrl: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface Listing extends Promise<ListingNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  price: () => Promise<Int>;
  imageUrl: () => Promise<String>;
  owner: <T = User>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ListingSubscription
  extends Promise<AsyncIterator<ListingNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  imageUrl: () => Promise<AsyncIterator<String>>;
  owner: <T = UserSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface MessageEdgeNode {
  cursor: String;
}

export interface MessageEdge extends Promise<MessageEdgeNode>, Fragmentable {
  node: <T = Message>() => T;
  cursor: () => Promise<String>;
}

export interface MessageEdgeSubscription
  extends Promise<AsyncIterator<MessageEdgeNode>>,
    Fragmentable {
  node: <T = MessageSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface MessageNode {
  id: ID_Output;
  title: String;
  text: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface Message extends Promise<MessageNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  text: () => Promise<String>;
  author: <T = User>() => T;
  listing: <T = Listing>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface MessageSubscription
  extends Promise<AsyncIterator<MessageNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  text: () => Promise<AsyncIterator<String>>;
  author: <T = UserSubscription>() => T;
  listing: <T = ListingSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Type Defs
 */

export const prisma: Prisma;
