module.exports = {
        typeDefs: /* GraphQL */ `type AggregateListing {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Listing {
  id: ID!
  name: String!
  description: String!
  price: Int!
  imageUrl: String!
  owner: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ListingConnection {
  pageInfo: PageInfo!
  edges: [ListingEdge]!
  aggregate: AggregateListing!
}

input ListingCreateInput {
  name: String!
  description: String!
  price: Int!
  imageUrl: String!
  owner: UserCreateOneWithoutListingsInput!
}

input ListingCreateManyWithoutOwnerInput {
  create: [ListingCreateWithoutOwnerInput!]
  connect: [ListingWhereUniqueInput!]
}

input ListingCreateOneInput {
  create: ListingCreateInput
  connect: ListingWhereUniqueInput
}

input ListingCreateWithoutOwnerInput {
  name: String!
  description: String!
  price: Int!
  imageUrl: String!
}

type ListingEdge {
  node: Listing!
  cursor: String!
}

enum ListingOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  imageUrl_ASC
  imageUrl_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ListingPreviousValues {
  id: ID!
  name: String!
  description: String!
  price: Int!
  imageUrl: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ListingSubscriptionPayload {
  mutation: MutationType!
  node: Listing
  updatedFields: [String!]
  previousValues: ListingPreviousValues
}

input ListingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ListingWhereInput
  AND: [ListingSubscriptionWhereInput!]
  OR: [ListingSubscriptionWhereInput!]
  NOT: [ListingSubscriptionWhereInput!]
}

input ListingUpdateDataInput {
  name: String
  description: String
  price: Int
  imageUrl: String
  owner: UserUpdateOneRequiredWithoutListingsInput
}

input ListingUpdateInput {
  name: String
  description: String
  price: Int
  imageUrl: String
  owner: UserUpdateOneRequiredWithoutListingsInput
}

input ListingUpdateManyWithoutOwnerInput {
  create: [ListingCreateWithoutOwnerInput!]
  delete: [ListingWhereUniqueInput!]
  connect: [ListingWhereUniqueInput!]
  disconnect: [ListingWhereUniqueInput!]
  update: [ListingUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ListingUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ListingUpdateOneRequiredInput {
  create: ListingCreateInput
  update: ListingUpdateDataInput
  upsert: ListingUpsertNestedInput
  connect: ListingWhereUniqueInput
}

input ListingUpdateWithoutOwnerDataInput {
  name: String
  description: String
  price: Int
  imageUrl: String
}

input ListingUpdateWithWhereUniqueWithoutOwnerInput {
  where: ListingWhereUniqueInput!
  data: ListingUpdateWithoutOwnerDataInput!
}

input ListingUpsertNestedInput {
  update: ListingUpdateDataInput!
  create: ListingCreateInput!
}

input ListingUpsertWithWhereUniqueWithoutOwnerInput {
  where: ListingWhereUniqueInput!
  update: ListingUpdateWithoutOwnerDataInput!
  create: ListingCreateWithoutOwnerInput!
}

input ListingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  owner: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ListingWhereInput!]
  OR: [ListingWhereInput!]
  NOT: [ListingWhereInput!]
}

input ListingWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  title: String!
  text: String!
  author: User!
  listing: Listing!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  title: String!
  text: String!
  author: UserCreateOneWithoutMessagesInput!
  listing: ListingCreateOneInput!
}

input MessageCreateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutAuthorInput {
  title: String!
  text: String!
  listing: ListingCreateOneInput!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  title: String!
  text: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  title: String
  text: String
  author: UserUpdateOneRequiredWithoutMessagesInput
  listing: ListingUpdateOneRequiredInput
}

input MessageUpdateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutAuthorInput!]
}

input MessageUpdateWithoutAuthorDataInput {
  title: String
  text: String
  listing: ListingUpdateOneRequiredInput
}

input MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutAuthorDataInput!
}

input MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutAuthorDataInput!
  create: MessageCreateWithoutAuthorInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  author: UserWhereInput
  listing: ListingWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createListing(data: ListingCreateInput!): Listing!
  updateListing(data: ListingUpdateInput!, where: ListingWhereUniqueInput!): Listing
  updateManyListings(data: ListingUpdateInput!, where: ListingWhereInput): BatchPayload!
  upsertListing(where: ListingWhereUniqueInput!, create: ListingCreateInput!, update: ListingUpdateInput!): Listing!
  deleteListing(where: ListingWhereUniqueInput!): Listing
  deleteManyListings(where: ListingWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  listing(where: ListingWhereUniqueInput!): Listing
  listings(where: ListingWhereInput, orderBy: ListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Listing]!
  listingsConnection(where: ListingWhereInput, orderBy: ListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ListingConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  listing(where: ListingSubscriptionWhereInput): ListingSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  listings(where: ListingWhereInput, orderBy: ListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Listing!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  listings: ListingCreateManyWithoutOwnerInput
  messages: MessageCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutListingsInput {
  create: UserCreateWithoutListingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutListingsInput {
  name: String!
  email: String!
  password: String!
  messages: MessageCreateManyWithoutAuthorInput
}

input UserCreateWithoutMessagesInput {
  name: String!
  email: String!
  password: String!
  listings: ListingCreateManyWithoutOwnerInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  listings: ListingUpdateManyWithoutOwnerInput
  messages: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateOneRequiredWithoutListingsInput {
  create: UserCreateWithoutListingsInput
  update: UserUpdateWithoutListingsDataInput
  upsert: UserUpsertWithoutListingsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutListingsDataInput {
  name: String
  email: String
  password: String
  messages: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutMessagesDataInput {
  name: String
  email: String
  password: String
  listings: ListingUpdateManyWithoutOwnerInput
}

input UserUpsertWithoutListingsInput {
  update: UserUpdateWithoutListingsDataInput!
  create: UserCreateWithoutListingsInput!
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  listings_every: ListingWhereInput
  listings_some: ListingWhereInput
  listings_none: ListingWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    