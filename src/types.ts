import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Address = {
  __typename?: "Address";
  id: Scalars["ID"];
  postalcode: Scalars["String"];
  street: Scalars["String"];
  country: Scalars["String"];
};

export type AddressOperations = {
  create?: Maybe<CreateAddress>;
  connect?: Maybe<ConnectAddress>;
  update?: Maybe<CreateAddress>;
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token: Scalars["String"];
  user: User;
};

export type Branch = {
  __typename?: "Branch";
  id: Scalars["ID"];
  name: Scalars["String"];
  address: Address;
  buisness?: Maybe<Buisness>;
};

export type BranchesCreateOperations = {
  create?: Maybe<Array<Maybe<CreateBranches>>>;
  connect?: Maybe<Array<Maybe<ConnectBranches>>>;
};

export type Buisness = {
  __typename?: "Buisness";
  id: Scalars["ID"];
  title: Scalars["String"];
  shortDescription: Scalars["String"];
  longDescription?: Maybe<Scalars["String"]>;
};

export type BuisnessOperations = {
  create?: Maybe<CreateBuisness>;
  update?: Maybe<UpdateBuisness>;
  connect?: Maybe<ConnectBuisness>;
};

export type ConnectAddress = {
  id: Scalars["ID"];
};

export type ConnectBranches = {
  id?: Maybe<Scalars["ID"]>;
};

export type ConnectBuisness = {
  id?: Maybe<Scalars["ID"]>;
};

export type Contact = {
  __typename?: "Contact";
  id: Scalars["ID"];
  email?: Maybe<Scalars["String"]>;
  firstname: Scalars["String"];
  lastname?: Maybe<Scalars["String"]>;
  nickname?: Maybe<Scalars["String"]>;
  address?: Maybe<Address>;
  telephone: Array<Maybe<Scalars["String"]>>;
  mobile?: Maybe<Array<Maybe<Scalars["String"]>>>;
  position?: Maybe<Scalars["String"]>;
  notes?: Maybe<Scalars["String"]>;
};

export type ContactOperations = {
  id?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  lastname?: Maybe<Scalars["String"]>;
  nickname?: Maybe<Scalars["String"]>;
  address?: Maybe<AddressOperations>;
  telephone?: Maybe<Array<Maybe<Scalars["String"]>>>;
  mobile?: Maybe<Array<Maybe<Scalars["String"]>>>;
  position?: Maybe<Scalars["String"]>;
  notes?: Maybe<Scalars["String"]>;
};

export type CreateAddress = {
  id?: Maybe<Scalars["ID"]>;
  postalCode?: Maybe<Scalars["String"]>;
  street?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
};

export type CreateBranches = {
  id?: Maybe<Scalars["ID"]>;
  name: Scalars["String"];
  address?: Maybe<AddressOperations>;
  buisness?: Maybe<BuisnessOperations>;
};

export type CreateBuisness = {
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  shortDescription?: Maybe<Scalars["String"]>;
  longDescription?: Maybe<Scalars["String"]>;
};

export type CreateCustomer = {
  name: Scalars["String"];
  branch: BranchesCreateOperations;
};

export type Customer = {
  __typename?: "Customer";
  id: Scalars["ID"];
  name: Scalars["String"];
  branch?: Maybe<Array<Maybe<Branch>>>;
};

export type Lead = {
  __typename?: "Lead";
  id?: Maybe<Scalars["ID"]>;
  customerName: Scalars["String"];
  address: Address;
  notes?: Maybe<Scalars["String"]>;
  products: Array<Maybe<Products>>;
};

export type Mutation = {
  __typename?: "Mutation";
  signup: AuthPayload;
  login: AuthPayload;
  createCustomer?: Maybe<Customer>;
  updateCustomer?: Maybe<Customer>;
};

export type MutationSignupArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  name: Scalars["String"];
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateCustomerArgs = {
  customer: CreateCustomer;
};

export type MutationUpdateCustomerArgs = {
  customer: UpdateCustomer;
};

export type Products = {
  __typename?: "Products";
  id?: Maybe<Scalars["ID"]>;
  name: Scalars["String"];
  shortDescription: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type Project = {
  __typename?: "Project";
  id?: Maybe<Scalars["ID"]>;
  customer?: Maybe<Customer>;
  notes?: Maybe<Scalars["String"]>;
  dispatcher: User;
  products: Array<Maybe<Products>>;
};

export type Query = {
  __typename?: "Query";
  getCustomerById: Customer;
  me?: Maybe<User>;
};

export type QueryGetCustomerByIdArgs = {
  id: Scalars["ID"];
};

export type Subscription = {
  __typename?: "Subscription";
  newCustomerSubscription?: Maybe<Customer>;
  projectSubscription?: Maybe<Project>;
};

export type UpdateAddress = {
  data?: Maybe<CreateAddress>;
  where?: Maybe<CreateAddress>;
};

export type UpdateBranches = {
  data?: Maybe<CreateBranches>;
  where?: Maybe<CreateBranches>;
};

export type UpdateBuisness = {
  data?: Maybe<CreateBuisness>;
  where?: Maybe<CreateBuisness>;
};

export type UpdateCustomer = {
  data?: Maybe<CreateCustomer>;
  where?: Maybe<CreateCustomer>;
};

export type User = {
  __typename?: "User";
  id?: Maybe<Scalars["ID"]>;
  email: Scalars["String"];
  password: Scalars["String"];
  firstname: Scalars["String"];
  lastname: Scalars["String"];
  nickname?: Maybe<Scalars["String"]>;
  telephone?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Customer: ResolverTypeWrapper<Customer>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Branch: ResolverTypeWrapper<Branch>;
  Address: ResolverTypeWrapper<Address>;
  Buisness: ResolverTypeWrapper<Buisness>;
  User: ResolverTypeWrapper<User>;
  Mutation: ResolverTypeWrapper<{}>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  CreateCustomer: CreateCustomer;
  BranchesCreateOperations: BranchesCreateOperations;
  CreateBranches: CreateBranches;
  AddressOperations: AddressOperations;
  CreateAddress: CreateAddress;
  ConnectAddress: ConnectAddress;
  BuisnessOperations: BuisnessOperations;
  CreateBuisness: CreateBuisness;
  UpdateBuisness: UpdateBuisness;
  ConnectBuisness: ConnectBuisness;
  ConnectBranches: ConnectBranches;
  UpdateCustomer: UpdateCustomer;
  Subscription: ResolverTypeWrapper<{}>;
  Project: ResolverTypeWrapper<Project>;
  Products: ResolverTypeWrapper<Products>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  UpdateBranches: UpdateBranches;
  Contact: ResolverTypeWrapper<Contact>;
  ContactOperations: ContactOperations;
  UpdateAddress: UpdateAddress;
  Lead: ResolverTypeWrapper<Lead>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars["ID"];
  Customer: Customer;
  String: Scalars["String"];
  Branch: Branch;
  Address: Address;
  Buisness: Buisness;
  User: User;
  Mutation: {};
  AuthPayload: AuthPayload;
  CreateCustomer: CreateCustomer;
  BranchesCreateOperations: BranchesCreateOperations;
  CreateBranches: CreateBranches;
  AddressOperations: AddressOperations;
  CreateAddress: CreateAddress;
  ConnectAddress: ConnectAddress;
  BuisnessOperations: BuisnessOperations;
  CreateBuisness: CreateBuisness;
  UpdateBuisness: UpdateBuisness;
  ConnectBuisness: ConnectBuisness;
  ConnectBranches: ConnectBranches;
  UpdateCustomer: UpdateCustomer;
  Subscription: {};
  Project: Project;
  Products: Products;
  Boolean: Scalars["Boolean"];
  UpdateBranches: UpdateBranches;
  Contact: Contact;
  ContactOperations: ContactOperations;
  UpdateAddress: UpdateAddress;
  Lead: Lead;
};

export type AddressResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Address"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  postalcode?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  street?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  country?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type AuthPayloadResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["AuthPayload"]
> = {
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
};

export type BranchResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Branch"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  buisness?: Resolver<
    Maybe<ResolversTypes["Buisness"]>,
    ParentType,
    ContextType
  >;
};

export type BuisnessResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Buisness"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shortDescription?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  longDescription?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
};

export type ContactResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Contact"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes["Address"]>, ParentType, ContextType>;
  telephone?: Resolver<
    Array<Maybe<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  mobile?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  position?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type CustomerResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Customer"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  branch?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Branch"]>>>,
    ParentType,
    ContextType
  >;
};

export type LeadResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Lead"]
> = {
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  customerName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  products?: Resolver<
    Array<Maybe<ResolversTypes["Products"]>>,
    ParentType,
    ContextType
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Mutation"]
> = {
  signup?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    MutationSignupArgs
  >;
  login?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    MutationLoginArgs
  >;
  createCustomer?: Resolver<
    Maybe<ResolversTypes["Customer"]>,
    ParentType,
    ContextType,
    MutationCreateCustomerArgs
  >;
  updateCustomer?: Resolver<
    Maybe<ResolversTypes["Customer"]>,
    ParentType,
    ContextType,
    MutationUpdateCustomerArgs
  >;
};

export type ProductsResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Products"]
> = {
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shortDescription?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
};

export type ProjectResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Project"]
> = {
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  customer?: Resolver<
    Maybe<ResolversTypes["Customer"]>,
    ParentType,
    ContextType
  >;
  notes?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  dispatcher?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  products?: Resolver<
    Array<Maybe<ResolversTypes["Products"]>>,
    ParentType,
    ContextType
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Query"]
> = {
  getCustomerById?: Resolver<
    ResolversTypes["Customer"],
    ParentType,
    ContextType,
    QueryGetCustomerByIdArgs
  >;
  me?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Subscription"]
> = {
  newCustomerSubscription?: SubscriptionResolver<
    Maybe<ResolversTypes["Customer"]>,
    ParentType,
    ContextType
  >;
  projectSubscription?: SubscriptionResolver<
    Maybe<ResolversTypes["Project"]>,
    ParentType,
    ContextType
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["User"]
> = {
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  telephone?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  mobile?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  roles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Branch?: BranchResolvers<ContextType>;
  Buisness?: BuisnessResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  Lead?: LeadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Products?: ProductsResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
