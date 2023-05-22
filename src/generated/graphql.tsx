import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "journeys" */
export type Journeys = {
  __typename?: 'journeys';
  Departure: Scalars['timestamp'];
  Return: Scalars['timestamp'];
  covered_distance_m: Scalars['Float'];
  departure_station_id: Scalars['Int'];
  departure_station_name: Scalars['String'];
  duration_sec: Scalars['Int'];
  id: Scalars['Int'];
  return_station_id: Scalars['Int'];
  return_station_name: Scalars['String'];
};

/** aggregated selection of "journeys" */
export type Journeys_Aggregate = {
  __typename?: 'journeys_aggregate';
  aggregate?: Maybe<Journeys_Aggregate_Fields>;
  nodes: Array<Journeys>;
};

/** aggregate fields of "journeys" */
export type Journeys_Aggregate_Fields = {
  __typename?: 'journeys_aggregate_fields';
  avg?: Maybe<Journeys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Journeys_Max_Fields>;
  min?: Maybe<Journeys_Min_Fields>;
  stddev?: Maybe<Journeys_Stddev_Fields>;
  stddev_pop?: Maybe<Journeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Journeys_Stddev_Samp_Fields>;
  sum?: Maybe<Journeys_Sum_Fields>;
  var_pop?: Maybe<Journeys_Var_Pop_Fields>;
  var_samp?: Maybe<Journeys_Var_Samp_Fields>;
  variance?: Maybe<Journeys_Variance_Fields>;
};


/** aggregate fields of "journeys" */
export type Journeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Journeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Journeys_Avg_Fields = {
  __typename?: 'journeys_avg_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "journeys". All fields are combined with a logical 'AND'. */
export type Journeys_Bool_Exp = {
  Departure?: InputMaybe<Timestamp_Comparison_Exp>;
  Return?: InputMaybe<Timestamp_Comparison_Exp>;
  _and?: InputMaybe<Array<Journeys_Bool_Exp>>;
  _not?: InputMaybe<Journeys_Bool_Exp>;
  _or?: InputMaybe<Array<Journeys_Bool_Exp>>;
  covered_distance_m?: InputMaybe<Float_Comparison_Exp>;
  departure_station_id?: InputMaybe<Int_Comparison_Exp>;
  departure_station_name?: InputMaybe<String_Comparison_Exp>;
  duration_sec?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  return_station_id?: InputMaybe<Int_Comparison_Exp>;
  return_station_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "journeys" */
export enum Journeys_Constraint {
  /** unique or primary key constraint on columns "id" */
  JourneysDistinctPkey = 'journeys_distinct_pkey'
}

/** input type for incrementing numeric columns in table "journeys" */
export type Journeys_Inc_Input = {
  covered_distance_m?: InputMaybe<Scalars['Float']>;
  departure_station_id?: InputMaybe<Scalars['Int']>;
  duration_sec?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  return_station_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "journeys" */
export type Journeys_Insert_Input = {
  Departure?: InputMaybe<Scalars['timestamp']>;
  Return?: InputMaybe<Scalars['timestamp']>;
  covered_distance_m?: InputMaybe<Scalars['Float']>;
  departure_station_id?: InputMaybe<Scalars['Int']>;
  departure_station_name?: InputMaybe<Scalars['String']>;
  duration_sec?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  return_station_id?: InputMaybe<Scalars['Int']>;
  return_station_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Journeys_Max_Fields = {
  __typename?: 'journeys_max_fields';
  Departure?: Maybe<Scalars['timestamp']>;
  Return?: Maybe<Scalars['timestamp']>;
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Int']>;
  departure_station_name?: Maybe<Scalars['String']>;
  duration_sec?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  return_station_id?: Maybe<Scalars['Int']>;
  return_station_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Journeys_Min_Fields = {
  __typename?: 'journeys_min_fields';
  Departure?: Maybe<Scalars['timestamp']>;
  Return?: Maybe<Scalars['timestamp']>;
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Int']>;
  departure_station_name?: Maybe<Scalars['String']>;
  duration_sec?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  return_station_id?: Maybe<Scalars['Int']>;
  return_station_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "journeys" */
export type Journeys_Mutation_Response = {
  __typename?: 'journeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Journeys>;
};

/** on_conflict condition type for table "journeys" */
export type Journeys_On_Conflict = {
  constraint: Journeys_Constraint;
  update_columns?: Array<Journeys_Update_Column>;
  where?: InputMaybe<Journeys_Bool_Exp>;
};

/** Ordering options when selecting data from "journeys". */
export type Journeys_Order_By = {
  Departure?: InputMaybe<Order_By>;
  Return?: InputMaybe<Order_By>;
  covered_distance_m?: InputMaybe<Order_By>;
  departure_station_id?: InputMaybe<Order_By>;
  departure_station_name?: InputMaybe<Order_By>;
  duration_sec?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  return_station_id?: InputMaybe<Order_By>;
  return_station_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: journeys */
export type Journeys_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "journeys" */
export enum Journeys_Select_Column {
  /** column name */
  Departure = 'Departure',
  /** column name */
  Return = 'Return',
  /** column name */
  CoveredDistanceM = 'covered_distance_m',
  /** column name */
  DepartureStationId = 'departure_station_id',
  /** column name */
  DepartureStationName = 'departure_station_name',
  /** column name */
  DurationSec = 'duration_sec',
  /** column name */
  Id = 'id',
  /** column name */
  ReturnStationId = 'return_station_id',
  /** column name */
  ReturnStationName = 'return_station_name'
}

/** input type for updating data in table "journeys" */
export type Journeys_Set_Input = {
  Departure?: InputMaybe<Scalars['timestamp']>;
  Return?: InputMaybe<Scalars['timestamp']>;
  covered_distance_m?: InputMaybe<Scalars['Float']>;
  departure_station_id?: InputMaybe<Scalars['Int']>;
  departure_station_name?: InputMaybe<Scalars['String']>;
  duration_sec?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  return_station_id?: InputMaybe<Scalars['Int']>;
  return_station_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Journeys_Stddev_Fields = {
  __typename?: 'journeys_stddev_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Journeys_Stddev_Pop_Fields = {
  __typename?: 'journeys_stddev_pop_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Journeys_Stddev_Samp_Fields = {
  __typename?: 'journeys_stddev_samp_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "journeys" */
export type Journeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Journeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Journeys_Stream_Cursor_Value_Input = {
  Departure?: InputMaybe<Scalars['timestamp']>;
  Return?: InputMaybe<Scalars['timestamp']>;
  covered_distance_m?: InputMaybe<Scalars['Float']>;
  departure_station_id?: InputMaybe<Scalars['Int']>;
  departure_station_name?: InputMaybe<Scalars['String']>;
  duration_sec?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  return_station_id?: InputMaybe<Scalars['Int']>;
  return_station_name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Journeys_Sum_Fields = {
  __typename?: 'journeys_sum_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Int']>;
  duration_sec?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  return_station_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "journeys" */
export enum Journeys_Update_Column {
  /** column name */
  Departure = 'Departure',
  /** column name */
  Return = 'Return',
  /** column name */
  CoveredDistanceM = 'covered_distance_m',
  /** column name */
  DepartureStationId = 'departure_station_id',
  /** column name */
  DepartureStationName = 'departure_station_name',
  /** column name */
  DurationSec = 'duration_sec',
  /** column name */
  Id = 'id',
  /** column name */
  ReturnStationId = 'return_station_id',
  /** column name */
  ReturnStationName = 'return_station_name'
}

export type Journeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Journeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Journeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: Journeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Journeys_Var_Pop_Fields = {
  __typename?: 'journeys_var_pop_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Journeys_Var_Samp_Fields = {
  __typename?: 'journeys_var_samp_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Journeys_Variance_Fields = {
  __typename?: 'journeys_variance_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "journeys" */
  delete_journeys?: Maybe<Journeys_Mutation_Response>;
  /** delete single row from the table: "journeys" */
  delete_journeys_by_pk?: Maybe<Journeys>;
  /** delete data from the table: "stations" */
  delete_stations?: Maybe<Stations_Mutation_Response>;
  /** delete data from the table: "test_journeys" */
  delete_test_journeys?: Maybe<Test_Journeys_Mutation_Response>;
  /** insert data into the table: "journeys" */
  insert_journeys?: Maybe<Journeys_Mutation_Response>;
  /** insert a single row into the table: "journeys" */
  insert_journeys_one?: Maybe<Journeys>;
  /** insert data into the table: "stations" */
  insert_stations?: Maybe<Stations_Mutation_Response>;
  /** insert a single row into the table: "stations" */
  insert_stations_one?: Maybe<Stations>;
  /** insert data into the table: "test_journeys" */
  insert_test_journeys?: Maybe<Test_Journeys_Mutation_Response>;
  /** insert a single row into the table: "test_journeys" */
  insert_test_journeys_one?: Maybe<Test_Journeys>;
  /** update data of the table: "journeys" */
  update_journeys?: Maybe<Journeys_Mutation_Response>;
  /** update single row of the table: "journeys" */
  update_journeys_by_pk?: Maybe<Journeys>;
  /** update multiples rows of table: "journeys" */
  update_journeys_many?: Maybe<Array<Maybe<Journeys_Mutation_Response>>>;
  /** update data of the table: "stations" */
  update_stations?: Maybe<Stations_Mutation_Response>;
  /** update multiples rows of table: "stations" */
  update_stations_many?: Maybe<Array<Maybe<Stations_Mutation_Response>>>;
  /** update data of the table: "test_journeys" */
  update_test_journeys?: Maybe<Test_Journeys_Mutation_Response>;
  /** update multiples rows of table: "test_journeys" */
  update_test_journeys_many?: Maybe<Array<Maybe<Test_Journeys_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_JourneysArgs = {
  where: Journeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Journeys_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StationsArgs = {
  where: Stations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_JourneysArgs = {
  where: Test_Journeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_JourneysArgs = {
  objects: Array<Journeys_Insert_Input>;
  on_conflict?: InputMaybe<Journeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Journeys_OneArgs = {
  object: Journeys_Insert_Input;
  on_conflict?: InputMaybe<Journeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StationsArgs = {
  objects: Array<Stations_Insert_Input>;
  on_conflict?: InputMaybe<Stations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stations_OneArgs = {
  object: Stations_Insert_Input;
  on_conflict?: InputMaybe<Stations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_JourneysArgs = {
  objects: Array<Test_Journeys_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Test_Journeys_OneArgs = {
  object: Test_Journeys_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_JourneysArgs = {
  _inc?: InputMaybe<Journeys_Inc_Input>;
  _set?: InputMaybe<Journeys_Set_Input>;
  where: Journeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Journeys_By_PkArgs = {
  _inc?: InputMaybe<Journeys_Inc_Input>;
  _set?: InputMaybe<Journeys_Set_Input>;
  pk_columns: Journeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Journeys_ManyArgs = {
  updates: Array<Journeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StationsArgs = {
  _inc?: InputMaybe<Stations_Inc_Input>;
  _set?: InputMaybe<Stations_Set_Input>;
  where: Stations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stations_ManyArgs = {
  updates: Array<Stations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Test_JourneysArgs = {
  _inc?: InputMaybe<Test_Journeys_Inc_Input>;
  _set?: InputMaybe<Test_Journeys_Set_Input>;
  where: Test_Journeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_Journeys_ManyArgs = {
  updates: Array<Test_Journeys_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "journeys" */
  journeys: Array<Journeys>;
  /** fetch aggregated fields from the table: "journeys" */
  journeys_aggregate: Journeys_Aggregate;
  /** fetch data from the table: "journeys" using primary key columns */
  journeys_by_pk?: Maybe<Journeys>;
  /** fetch data from the table: "stations" */
  stations: Array<Stations>;
  /** fetch aggregated fields from the table: "stations" */
  stations_aggregate: Stations_Aggregate;
  /** fetch data from the table: "test_journeys" */
  test_journeys: Array<Test_Journeys>;
  /** fetch aggregated fields from the table: "test_journeys" */
  test_journeys_aggregate: Test_Journeys_Aggregate;
};


export type Query_RootJourneysArgs = {
  distinct_on?: InputMaybe<Array<Journeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Journeys_Order_By>>;
  where?: InputMaybe<Journeys_Bool_Exp>;
};


export type Query_RootJourneys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Journeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Journeys_Order_By>>;
  where?: InputMaybe<Journeys_Bool_Exp>;
};


export type Query_RootJourneys_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStationsArgs = {
  distinct_on?: InputMaybe<Array<Stations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stations_Order_By>>;
  where?: InputMaybe<Stations_Bool_Exp>;
};


export type Query_RootStations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stations_Order_By>>;
  where?: InputMaybe<Stations_Bool_Exp>;
};


export type Query_RootTest_JourneysArgs = {
  distinct_on?: InputMaybe<Array<Test_Journeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Journeys_Order_By>>;
  where?: InputMaybe<Test_Journeys_Bool_Exp>;
};


export type Query_RootTest_Journeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Journeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Journeys_Order_By>>;
  where?: InputMaybe<Test_Journeys_Bool_Exp>;
};

/** columns and relationships of "stations" */
export type Stations = {
  __typename?: 'stations';
  adress?: Maybe<Scalars['String']>;
  fid: Scalars['Int'];
  id: Scalars['Int'];
  journey_departures?: Maybe<Scalars['Int']>;
  journey_returns?: Maybe<Scalars['Int']>;
  kapasiteetti?: Maybe<Scalars['Int']>;
  kaupunki?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  namn?: Maybe<Scalars['String']>;
  nimi: Scalars['String'];
  operaattori?: Maybe<Scalars['String']>;
  osoite?: Maybe<Scalars['String']>;
  stad?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "stations" */
export type Stations_Aggregate = {
  __typename?: 'stations_aggregate';
  aggregate?: Maybe<Stations_Aggregate_Fields>;
  nodes: Array<Stations>;
};

/** aggregate fields of "stations" */
export type Stations_Aggregate_Fields = {
  __typename?: 'stations_aggregate_fields';
  avg?: Maybe<Stations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stations_Max_Fields>;
  min?: Maybe<Stations_Min_Fields>;
  stddev?: Maybe<Stations_Stddev_Fields>;
  stddev_pop?: Maybe<Stations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stations_Stddev_Samp_Fields>;
  sum?: Maybe<Stations_Sum_Fields>;
  var_pop?: Maybe<Stations_Var_Pop_Fields>;
  var_samp?: Maybe<Stations_Var_Samp_Fields>;
  variance?: Maybe<Stations_Variance_Fields>;
};


/** aggregate fields of "stations" */
export type Stations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Stations_Avg_Fields = {
  __typename?: 'stations_avg_fields';
  fid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  journey_departures?: Maybe<Scalars['Float']>;
  journey_returns?: Maybe<Scalars['Float']>;
  kapasiteetti?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "stations". All fields are combined with a logical 'AND'. */
export type Stations_Bool_Exp = {
  _and?: InputMaybe<Array<Stations_Bool_Exp>>;
  _not?: InputMaybe<Stations_Bool_Exp>;
  _or?: InputMaybe<Array<Stations_Bool_Exp>>;
  adress?: InputMaybe<String_Comparison_Exp>;
  fid?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  journey_departures?: InputMaybe<Int_Comparison_Exp>;
  journey_returns?: InputMaybe<Int_Comparison_Exp>;
  kapasiteetti?: InputMaybe<Int_Comparison_Exp>;
  kaupunki?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  namn?: InputMaybe<String_Comparison_Exp>;
  nimi?: InputMaybe<String_Comparison_Exp>;
  operaattori?: InputMaybe<String_Comparison_Exp>;
  osoite?: InputMaybe<String_Comparison_Exp>;
  stad?: InputMaybe<String_Comparison_Exp>;
  x?: InputMaybe<Float_Comparison_Exp>;
  y?: InputMaybe<Float_Comparison_Exp>;
};

/** unique or primary key constraints on table "stations" */
export enum Stations_Constraint {
  /** unique or primary key constraint on columns "fid" */
  StationsFidKey = 'stations_fid_key',
  /** unique or primary key constraint on columns "id" */
  StationsIdKey = 'stations_id_key'
}

/** input type for incrementing numeric columns in table "stations" */
export type Stations_Inc_Input = {
  fid?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  journey_departures?: InputMaybe<Scalars['Int']>;
  journey_returns?: InputMaybe<Scalars['Int']>;
  kapasiteetti?: InputMaybe<Scalars['Int']>;
  x?: InputMaybe<Scalars['Float']>;
  y?: InputMaybe<Scalars['Float']>;
};

/** input type for inserting data into table "stations" */
export type Stations_Insert_Input = {
  adress?: InputMaybe<Scalars['String']>;
  fid?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  journey_departures?: InputMaybe<Scalars['Int']>;
  journey_returns?: InputMaybe<Scalars['Int']>;
  kapasiteetti?: InputMaybe<Scalars['Int']>;
  kaupunki?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  namn?: InputMaybe<Scalars['String']>;
  nimi?: InputMaybe<Scalars['String']>;
  operaattori?: InputMaybe<Scalars['String']>;
  osoite?: InputMaybe<Scalars['String']>;
  stad?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['Float']>;
  y?: InputMaybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Stations_Max_Fields = {
  __typename?: 'stations_max_fields';
  adress?: Maybe<Scalars['String']>;
  fid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  journey_departures?: Maybe<Scalars['Int']>;
  journey_returns?: Maybe<Scalars['Int']>;
  kapasiteetti?: Maybe<Scalars['Int']>;
  kaupunki?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  namn?: Maybe<Scalars['String']>;
  nimi?: Maybe<Scalars['String']>;
  operaattori?: Maybe<Scalars['String']>;
  osoite?: Maybe<Scalars['String']>;
  stad?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** aggregate min on columns */
export type Stations_Min_Fields = {
  __typename?: 'stations_min_fields';
  adress?: Maybe<Scalars['String']>;
  fid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  journey_departures?: Maybe<Scalars['Int']>;
  journey_returns?: Maybe<Scalars['Int']>;
  kapasiteetti?: Maybe<Scalars['Int']>;
  kaupunki?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  namn?: Maybe<Scalars['String']>;
  nimi?: Maybe<Scalars['String']>;
  operaattori?: Maybe<Scalars['String']>;
  osoite?: Maybe<Scalars['String']>;
  stad?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** response of any mutation on the table "stations" */
export type Stations_Mutation_Response = {
  __typename?: 'stations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stations>;
};

/** on_conflict condition type for table "stations" */
export type Stations_On_Conflict = {
  constraint: Stations_Constraint;
  update_columns?: Array<Stations_Update_Column>;
  where?: InputMaybe<Stations_Bool_Exp>;
};

/** Ordering options when selecting data from "stations". */
export type Stations_Order_By = {
  adress?: InputMaybe<Order_By>;
  fid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  journey_departures?: InputMaybe<Order_By>;
  journey_returns?: InputMaybe<Order_By>;
  kapasiteetti?: InputMaybe<Order_By>;
  kaupunki?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  namn?: InputMaybe<Order_By>;
  nimi?: InputMaybe<Order_By>;
  operaattori?: InputMaybe<Order_By>;
  osoite?: InputMaybe<Order_By>;
  stad?: InputMaybe<Order_By>;
  x?: InputMaybe<Order_By>;
  y?: InputMaybe<Order_By>;
};

/** select columns of table "stations" */
export enum Stations_Select_Column {
  /** column name */
  Adress = 'adress',
  /** column name */
  Fid = 'fid',
  /** column name */
  Id = 'id',
  /** column name */
  JourneyDepartures = 'journey_departures',
  /** column name */
  JourneyReturns = 'journey_returns',
  /** column name */
  Kapasiteetti = 'kapasiteetti',
  /** column name */
  Kaupunki = 'kaupunki',
  /** column name */
  Name = 'name',
  /** column name */
  Namn = 'namn',
  /** column name */
  Nimi = 'nimi',
  /** column name */
  Operaattori = 'operaattori',
  /** column name */
  Osoite = 'osoite',
  /** column name */
  Stad = 'stad',
  /** column name */
  X = 'x',
  /** column name */
  Y = 'y'
}

/** input type for updating data in table "stations" */
export type Stations_Set_Input = {
  adress?: InputMaybe<Scalars['String']>;
  fid?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  journey_departures?: InputMaybe<Scalars['Int']>;
  journey_returns?: InputMaybe<Scalars['Int']>;
  kapasiteetti?: InputMaybe<Scalars['Int']>;
  kaupunki?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  namn?: InputMaybe<Scalars['String']>;
  nimi?: InputMaybe<Scalars['String']>;
  operaattori?: InputMaybe<Scalars['String']>;
  osoite?: InputMaybe<Scalars['String']>;
  stad?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['Float']>;
  y?: InputMaybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Stations_Stddev_Fields = {
  __typename?: 'stations_stddev_fields';
  fid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  journey_departures?: Maybe<Scalars['Float']>;
  journey_returns?: Maybe<Scalars['Float']>;
  kapasiteetti?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Stations_Stddev_Pop_Fields = {
  __typename?: 'stations_stddev_pop_fields';
  fid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  journey_departures?: Maybe<Scalars['Float']>;
  journey_returns?: Maybe<Scalars['Float']>;
  kapasiteetti?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Stations_Stddev_Samp_Fields = {
  __typename?: 'stations_stddev_samp_fields';
  fid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  journey_departures?: Maybe<Scalars['Float']>;
  journey_returns?: Maybe<Scalars['Float']>;
  kapasiteetti?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "stations" */
export type Stations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stations_Stream_Cursor_Value_Input = {
  adress?: InputMaybe<Scalars['String']>;
  fid?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  journey_departures?: InputMaybe<Scalars['Int']>;
  journey_returns?: InputMaybe<Scalars['Int']>;
  kapasiteetti?: InputMaybe<Scalars['Int']>;
  kaupunki?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  namn?: InputMaybe<Scalars['String']>;
  nimi?: InputMaybe<Scalars['String']>;
  operaattori?: InputMaybe<Scalars['String']>;
  osoite?: InputMaybe<Scalars['String']>;
  stad?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['Float']>;
  y?: InputMaybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Stations_Sum_Fields = {
  __typename?: 'stations_sum_fields';
  fid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  journey_departures?: Maybe<Scalars['Int']>;
  journey_returns?: Maybe<Scalars['Int']>;
  kapasiteetti?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** update columns of table "stations" */
export enum Stations_Update_Column {
  /** column name */
  Adress = 'adress',
  /** column name */
  Fid = 'fid',
  /** column name */
  Id = 'id',
  /** column name */
  JourneyDepartures = 'journey_departures',
  /** column name */
  JourneyReturns = 'journey_returns',
  /** column name */
  Kapasiteetti = 'kapasiteetti',
  /** column name */
  Kaupunki = 'kaupunki',
  /** column name */
  Name = 'name',
  /** column name */
  Namn = 'namn',
  /** column name */
  Nimi = 'nimi',
  /** column name */
  Operaattori = 'operaattori',
  /** column name */
  Osoite = 'osoite',
  /** column name */
  Stad = 'stad',
  /** column name */
  X = 'x',
  /** column name */
  Y = 'y'
}

export type Stations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Stations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Stations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Stations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Stations_Var_Pop_Fields = {
  __typename?: 'stations_var_pop_fields';
  fid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  journey_departures?: Maybe<Scalars['Float']>;
  journey_returns?: Maybe<Scalars['Float']>;
  kapasiteetti?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Stations_Var_Samp_Fields = {
  __typename?: 'stations_var_samp_fields';
  fid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  journey_departures?: Maybe<Scalars['Float']>;
  journey_returns?: Maybe<Scalars['Float']>;
  kapasiteetti?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Stations_Variance_Fields = {
  __typename?: 'stations_variance_fields';
  fid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  journey_departures?: Maybe<Scalars['Float']>;
  journey_returns?: Maybe<Scalars['Float']>;
  kapasiteetti?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "journeys" */
  journeys: Array<Journeys>;
  /** fetch aggregated fields from the table: "journeys" */
  journeys_aggregate: Journeys_Aggregate;
  /** fetch data from the table: "journeys" using primary key columns */
  journeys_by_pk?: Maybe<Journeys>;
  /** fetch data from the table in a streaming manner: "journeys" */
  journeys_stream: Array<Journeys>;
  /** fetch data from the table: "stations" */
  stations: Array<Stations>;
  /** fetch aggregated fields from the table: "stations" */
  stations_aggregate: Stations_Aggregate;
  /** fetch data from the table in a streaming manner: "stations" */
  stations_stream: Array<Stations>;
  /** fetch data from the table: "test_journeys" */
  test_journeys: Array<Test_Journeys>;
  /** fetch aggregated fields from the table: "test_journeys" */
  test_journeys_aggregate: Test_Journeys_Aggregate;
  /** fetch data from the table in a streaming manner: "test_journeys" */
  test_journeys_stream: Array<Test_Journeys>;
};


export type Subscription_RootJourneysArgs = {
  distinct_on?: InputMaybe<Array<Journeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Journeys_Order_By>>;
  where?: InputMaybe<Journeys_Bool_Exp>;
};


export type Subscription_RootJourneys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Journeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Journeys_Order_By>>;
  where?: InputMaybe<Journeys_Bool_Exp>;
};


export type Subscription_RootJourneys_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootJourneys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Journeys_Stream_Cursor_Input>>;
  where?: InputMaybe<Journeys_Bool_Exp>;
};


export type Subscription_RootStationsArgs = {
  distinct_on?: InputMaybe<Array<Stations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stations_Order_By>>;
  where?: InputMaybe<Stations_Bool_Exp>;
};


export type Subscription_RootStations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stations_Order_By>>;
  where?: InputMaybe<Stations_Bool_Exp>;
};


export type Subscription_RootStations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Stations_Stream_Cursor_Input>>;
  where?: InputMaybe<Stations_Bool_Exp>;
};


export type Subscription_RootTest_JourneysArgs = {
  distinct_on?: InputMaybe<Array<Test_Journeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Journeys_Order_By>>;
  where?: InputMaybe<Test_Journeys_Bool_Exp>;
};


export type Subscription_RootTest_Journeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Journeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Journeys_Order_By>>;
  where?: InputMaybe<Test_Journeys_Bool_Exp>;
};


export type Subscription_RootTest_Journeys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Test_Journeys_Stream_Cursor_Input>>;
  where?: InputMaybe<Test_Journeys_Bool_Exp>;
};

/** columns and relationships of "test_journeys" */
export type Test_Journeys = {
  __typename?: 'test_journeys';
  Departure?: Maybe<Scalars['timestamp']>;
  Return?: Maybe<Scalars['timestamp']>;
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Int']>;
  departure_station_name?: Maybe<Scalars['String']>;
  duration_sec?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  return_station_id?: Maybe<Scalars['Int']>;
  return_station_name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "test_journeys" */
export type Test_Journeys_Aggregate = {
  __typename?: 'test_journeys_aggregate';
  aggregate?: Maybe<Test_Journeys_Aggregate_Fields>;
  nodes: Array<Test_Journeys>;
};

/** aggregate fields of "test_journeys" */
export type Test_Journeys_Aggregate_Fields = {
  __typename?: 'test_journeys_aggregate_fields';
  avg?: Maybe<Test_Journeys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Test_Journeys_Max_Fields>;
  min?: Maybe<Test_Journeys_Min_Fields>;
  stddev?: Maybe<Test_Journeys_Stddev_Fields>;
  stddev_pop?: Maybe<Test_Journeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Test_Journeys_Stddev_Samp_Fields>;
  sum?: Maybe<Test_Journeys_Sum_Fields>;
  var_pop?: Maybe<Test_Journeys_Var_Pop_Fields>;
  var_samp?: Maybe<Test_Journeys_Var_Samp_Fields>;
  variance?: Maybe<Test_Journeys_Variance_Fields>;
};


/** aggregate fields of "test_journeys" */
export type Test_Journeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Journeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Test_Journeys_Avg_Fields = {
  __typename?: 'test_journeys_avg_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "test_journeys". All fields are combined with a logical 'AND'. */
export type Test_Journeys_Bool_Exp = {
  Departure?: InputMaybe<Timestamp_Comparison_Exp>;
  Return?: InputMaybe<Timestamp_Comparison_Exp>;
  _and?: InputMaybe<Array<Test_Journeys_Bool_Exp>>;
  _not?: InputMaybe<Test_Journeys_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Journeys_Bool_Exp>>;
  covered_distance_m?: InputMaybe<Float_Comparison_Exp>;
  departure_station_id?: InputMaybe<Int_Comparison_Exp>;
  departure_station_name?: InputMaybe<String_Comparison_Exp>;
  duration_sec?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  return_station_id?: InputMaybe<Int_Comparison_Exp>;
  return_station_name?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "test_journeys" */
export type Test_Journeys_Inc_Input = {
  covered_distance_m?: InputMaybe<Scalars['Float']>;
  departure_station_id?: InputMaybe<Scalars['Int']>;
  duration_sec?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  return_station_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "test_journeys" */
export type Test_Journeys_Insert_Input = {
  Departure?: InputMaybe<Scalars['timestamp']>;
  Return?: InputMaybe<Scalars['timestamp']>;
  covered_distance_m?: InputMaybe<Scalars['Float']>;
  departure_station_id?: InputMaybe<Scalars['Int']>;
  departure_station_name?: InputMaybe<Scalars['String']>;
  duration_sec?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  return_station_id?: InputMaybe<Scalars['Int']>;
  return_station_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Test_Journeys_Max_Fields = {
  __typename?: 'test_journeys_max_fields';
  Departure?: Maybe<Scalars['timestamp']>;
  Return?: Maybe<Scalars['timestamp']>;
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Int']>;
  departure_station_name?: Maybe<Scalars['String']>;
  duration_sec?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  return_station_id?: Maybe<Scalars['Int']>;
  return_station_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Test_Journeys_Min_Fields = {
  __typename?: 'test_journeys_min_fields';
  Departure?: Maybe<Scalars['timestamp']>;
  Return?: Maybe<Scalars['timestamp']>;
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Int']>;
  departure_station_name?: Maybe<Scalars['String']>;
  duration_sec?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  return_station_id?: Maybe<Scalars['Int']>;
  return_station_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "test_journeys" */
export type Test_Journeys_Mutation_Response = {
  __typename?: 'test_journeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test_Journeys>;
};

/** Ordering options when selecting data from "test_journeys". */
export type Test_Journeys_Order_By = {
  Departure?: InputMaybe<Order_By>;
  Return?: InputMaybe<Order_By>;
  covered_distance_m?: InputMaybe<Order_By>;
  departure_station_id?: InputMaybe<Order_By>;
  departure_station_name?: InputMaybe<Order_By>;
  duration_sec?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  return_station_id?: InputMaybe<Order_By>;
  return_station_name?: InputMaybe<Order_By>;
};

/** select columns of table "test_journeys" */
export enum Test_Journeys_Select_Column {
  /** column name */
  Departure = 'Departure',
  /** column name */
  Return = 'Return',
  /** column name */
  CoveredDistanceM = 'covered_distance_m',
  /** column name */
  DepartureStationId = 'departure_station_id',
  /** column name */
  DepartureStationName = 'departure_station_name',
  /** column name */
  DurationSec = 'duration_sec',
  /** column name */
  Id = 'id',
  /** column name */
  ReturnStationId = 'return_station_id',
  /** column name */
  ReturnStationName = 'return_station_name'
}

/** input type for updating data in table "test_journeys" */
export type Test_Journeys_Set_Input = {
  Departure?: InputMaybe<Scalars['timestamp']>;
  Return?: InputMaybe<Scalars['timestamp']>;
  covered_distance_m?: InputMaybe<Scalars['Float']>;
  departure_station_id?: InputMaybe<Scalars['Int']>;
  departure_station_name?: InputMaybe<Scalars['String']>;
  duration_sec?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  return_station_id?: InputMaybe<Scalars['Int']>;
  return_station_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Test_Journeys_Stddev_Fields = {
  __typename?: 'test_journeys_stddev_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Test_Journeys_Stddev_Pop_Fields = {
  __typename?: 'test_journeys_stddev_pop_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Test_Journeys_Stddev_Samp_Fields = {
  __typename?: 'test_journeys_stddev_samp_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "test_journeys" */
export type Test_Journeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Test_Journeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Test_Journeys_Stream_Cursor_Value_Input = {
  Departure?: InputMaybe<Scalars['timestamp']>;
  Return?: InputMaybe<Scalars['timestamp']>;
  covered_distance_m?: InputMaybe<Scalars['Float']>;
  departure_station_id?: InputMaybe<Scalars['Int']>;
  departure_station_name?: InputMaybe<Scalars['String']>;
  duration_sec?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  return_station_id?: InputMaybe<Scalars['Int']>;
  return_station_name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Test_Journeys_Sum_Fields = {
  __typename?: 'test_journeys_sum_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Int']>;
  duration_sec?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  return_station_id?: Maybe<Scalars['Int']>;
};

export type Test_Journeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Test_Journeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Test_Journeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: Test_Journeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Test_Journeys_Var_Pop_Fields = {
  __typename?: 'test_journeys_var_pop_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Test_Journeys_Var_Samp_Fields = {
  __typename?: 'test_journeys_var_samp_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Test_Journeys_Variance_Fields = {
  __typename?: 'test_journeys_variance_fields';
  covered_distance_m?: Maybe<Scalars['Float']>;
  departure_station_id?: Maybe<Scalars['Float']>;
  duration_sec?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  return_station_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

export type GetPaginatedOrderedJourneysQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Journeys_Order_By> | Journeys_Order_By>;
}>;


export type GetPaginatedOrderedJourneysQuery = { __typename?: 'query_root', journeys: Array<{ __typename?: 'journeys', Departure: any, Return: any, covered_distance_m: number, departure_station_name: string, duration_sec: number, id: number, return_station_name: string }> };

export type GetStationsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStationsCountQuery = { __typename?: 'query_root', stations_aggregate: { __typename?: 'stations_aggregate', aggregate?: { __typename?: 'stations_aggregate_fields', count: number } | null } };

export type GetJourneysCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJourneysCountQuery = { __typename?: 'query_root', journeys_aggregate: { __typename?: 'journeys_aggregate', aggregate?: { __typename?: 'journeys_aggregate_fields', count: number } | null } };

export type GetPaginatedOrderedStationsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stations_Order_By> | Stations_Order_By>;
}>;


export type GetPaginatedOrderedStationsQuery = { __typename?: 'query_root', stations: Array<{ __typename?: 'stations', adress?: string | null, fid: number, id: number, kapasiteetti?: number | null, kaupunki?: string | null, name?: string | null, namn?: string | null, nimi: string, operaattori?: string | null, osoite?: string | null, stad?: string | null, x?: number | null, y?: number | null, journey_departures?: number | null, journey_returns?: number | null }> };

export type GetTopDepartureStationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopDepartureStationsQuery = { __typename?: 'query_root', stations: Array<{ __typename?: 'stations', fid: number, id: number, nimi: string, journey_departures?: number | null }> };

export type GetaverageStationUsageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetaverageStationUsageQuery = { __typename?: 'query_root', stations_aggregate: { __typename?: 'stations_aggregate', aggregate?: { __typename?: 'stations_aggregate_fields', avg?: { __typename?: 'stations_avg_fields', journey_departures?: number | null } | null } | null } };

export type GetAverageJourneysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAverageJourneysQuery = { __typename?: 'query_root', journeys_aggregate: { __typename?: 'journeys_aggregate', aggregate?: { __typename?: 'journeys_aggregate_fields', avg?: { __typename?: 'journeys_avg_fields', covered_distance_m?: number | null, duration_sec?: number | null } | null } | null } };

export type GetTopReturnStationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopReturnStationsQuery = { __typename?: 'query_root', stations: Array<{ __typename?: 'stations', fid: number, id: number, nimi: string, journey_returns?: number | null }> };


export const GetPaginatedOrderedJourneysDocument = gql`
    query GetPaginatedOrderedJourneys($offset: Int, $limit: Int, $order_by: [journeys_order_by!]) {
  journeys(order_by: $order_by, limit: $limit, offset: $offset) {
    Departure
    Return
    covered_distance_m
    departure_station_name
    duration_sec
    id
    return_station_name
  }
}
    `;

/**
 * __useGetPaginatedOrderedJourneysQuery__
 *
 * To run a query within a React component, call `useGetPaginatedOrderedJourneysQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedOrderedJourneysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedOrderedJourneysQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useGetPaginatedOrderedJourneysQuery(baseOptions?: Apollo.QueryHookOptions<GetPaginatedOrderedJourneysQuery, GetPaginatedOrderedJourneysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedOrderedJourneysQuery, GetPaginatedOrderedJourneysQueryVariables>(GetPaginatedOrderedJourneysDocument, options);
      }
export function useGetPaginatedOrderedJourneysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedOrderedJourneysQuery, GetPaginatedOrderedJourneysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedOrderedJourneysQuery, GetPaginatedOrderedJourneysQueryVariables>(GetPaginatedOrderedJourneysDocument, options);
        }
export type GetPaginatedOrderedJourneysQueryHookResult = ReturnType<typeof useGetPaginatedOrderedJourneysQuery>;
export type GetPaginatedOrderedJourneysLazyQueryHookResult = ReturnType<typeof useGetPaginatedOrderedJourneysLazyQuery>;
export type GetPaginatedOrderedJourneysQueryResult = Apollo.QueryResult<GetPaginatedOrderedJourneysQuery, GetPaginatedOrderedJourneysQueryVariables>;
export const GetStationsCountDocument = gql`
    query GetStationsCount {
  stations_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetStationsCountQuery__
 *
 * To run a query within a React component, call `useGetStationsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStationsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStationsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStationsCountQuery(baseOptions?: Apollo.QueryHookOptions<GetStationsCountQuery, GetStationsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStationsCountQuery, GetStationsCountQueryVariables>(GetStationsCountDocument, options);
      }
export function useGetStationsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStationsCountQuery, GetStationsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStationsCountQuery, GetStationsCountQueryVariables>(GetStationsCountDocument, options);
        }
export type GetStationsCountQueryHookResult = ReturnType<typeof useGetStationsCountQuery>;
export type GetStationsCountLazyQueryHookResult = ReturnType<typeof useGetStationsCountLazyQuery>;
export type GetStationsCountQueryResult = Apollo.QueryResult<GetStationsCountQuery, GetStationsCountQueryVariables>;
export const GetJourneysCountDocument = gql`
    query GetJourneysCount {
  journeys_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetJourneysCountQuery__
 *
 * To run a query within a React component, call `useGetJourneysCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJourneysCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJourneysCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetJourneysCountQuery(baseOptions?: Apollo.QueryHookOptions<GetJourneysCountQuery, GetJourneysCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJourneysCountQuery, GetJourneysCountQueryVariables>(GetJourneysCountDocument, options);
      }
export function useGetJourneysCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJourneysCountQuery, GetJourneysCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJourneysCountQuery, GetJourneysCountQueryVariables>(GetJourneysCountDocument, options);
        }
export type GetJourneysCountQueryHookResult = ReturnType<typeof useGetJourneysCountQuery>;
export type GetJourneysCountLazyQueryHookResult = ReturnType<typeof useGetJourneysCountLazyQuery>;
export type GetJourneysCountQueryResult = Apollo.QueryResult<GetJourneysCountQuery, GetJourneysCountQueryVariables>;
export const GetPaginatedOrderedStationsDocument = gql`
    query GetPaginatedOrderedStations($offset: Int, $limit: Int, $order_by: [stations_order_by!]) {
  stations(order_by: $order_by, limit: $limit, offset: $offset) {
    adress
    fid
    id
    kapasiteetti
    kaupunki
    name
    namn
    nimi
    operaattori
    osoite
    stad
    x
    y
    journey_departures
    journey_returns
  }
}
    `;

/**
 * __useGetPaginatedOrderedStationsQuery__
 *
 * To run a query within a React component, call `useGetPaginatedOrderedStationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedOrderedStationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedOrderedStationsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useGetPaginatedOrderedStationsQuery(baseOptions?: Apollo.QueryHookOptions<GetPaginatedOrderedStationsQuery, GetPaginatedOrderedStationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaginatedOrderedStationsQuery, GetPaginatedOrderedStationsQueryVariables>(GetPaginatedOrderedStationsDocument, options);
      }
export function useGetPaginatedOrderedStationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedOrderedStationsQuery, GetPaginatedOrderedStationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaginatedOrderedStationsQuery, GetPaginatedOrderedStationsQueryVariables>(GetPaginatedOrderedStationsDocument, options);
        }
export type GetPaginatedOrderedStationsQueryHookResult = ReturnType<typeof useGetPaginatedOrderedStationsQuery>;
export type GetPaginatedOrderedStationsLazyQueryHookResult = ReturnType<typeof useGetPaginatedOrderedStationsLazyQuery>;
export type GetPaginatedOrderedStationsQueryResult = Apollo.QueryResult<GetPaginatedOrderedStationsQuery, GetPaginatedOrderedStationsQueryVariables>;
export const GetTopDepartureStationsDocument = gql`
    query getTopDepartureStations {
  stations(order_by: {journey_departures: desc}, limit: 5) {
    fid
    id
    nimi
    journey_departures
  }
}
    `;

/**
 * __useGetTopDepartureStationsQuery__
 *
 * To run a query within a React component, call `useGetTopDepartureStationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopDepartureStationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopDepartureStationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTopDepartureStationsQuery(baseOptions?: Apollo.QueryHookOptions<GetTopDepartureStationsQuery, GetTopDepartureStationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTopDepartureStationsQuery, GetTopDepartureStationsQueryVariables>(GetTopDepartureStationsDocument, options);
      }
export function useGetTopDepartureStationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTopDepartureStationsQuery, GetTopDepartureStationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTopDepartureStationsQuery, GetTopDepartureStationsQueryVariables>(GetTopDepartureStationsDocument, options);
        }
export type GetTopDepartureStationsQueryHookResult = ReturnType<typeof useGetTopDepartureStationsQuery>;
export type GetTopDepartureStationsLazyQueryHookResult = ReturnType<typeof useGetTopDepartureStationsLazyQuery>;
export type GetTopDepartureStationsQueryResult = Apollo.QueryResult<GetTopDepartureStationsQuery, GetTopDepartureStationsQueryVariables>;
export const GetaverageStationUsageDocument = gql`
    query getaverageStationUsage {
  stations_aggregate {
    aggregate {
      avg {
        journey_departures
      }
    }
  }
}
    `;

/**
 * __useGetaverageStationUsageQuery__
 *
 * To run a query within a React component, call `useGetaverageStationUsageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetaverageStationUsageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetaverageStationUsageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetaverageStationUsageQuery(baseOptions?: Apollo.QueryHookOptions<GetaverageStationUsageQuery, GetaverageStationUsageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetaverageStationUsageQuery, GetaverageStationUsageQueryVariables>(GetaverageStationUsageDocument, options);
      }
export function useGetaverageStationUsageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetaverageStationUsageQuery, GetaverageStationUsageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetaverageStationUsageQuery, GetaverageStationUsageQueryVariables>(GetaverageStationUsageDocument, options);
        }
export type GetaverageStationUsageQueryHookResult = ReturnType<typeof useGetaverageStationUsageQuery>;
export type GetaverageStationUsageLazyQueryHookResult = ReturnType<typeof useGetaverageStationUsageLazyQuery>;
export type GetaverageStationUsageQueryResult = Apollo.QueryResult<GetaverageStationUsageQuery, GetaverageStationUsageQueryVariables>;
export const GetAverageJourneysDocument = gql`
    query getAverageJourneys {
  journeys_aggregate {
    aggregate {
      avg {
        covered_distance_m
        duration_sec
      }
    }
  }
}
    `;

/**
 * __useGetAverageJourneysQuery__
 *
 * To run a query within a React component, call `useGetAverageJourneysQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAverageJourneysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAverageJourneysQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAverageJourneysQuery(baseOptions?: Apollo.QueryHookOptions<GetAverageJourneysQuery, GetAverageJourneysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAverageJourneysQuery, GetAverageJourneysQueryVariables>(GetAverageJourneysDocument, options);
      }
export function useGetAverageJourneysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAverageJourneysQuery, GetAverageJourneysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAverageJourneysQuery, GetAverageJourneysQueryVariables>(GetAverageJourneysDocument, options);
        }
export type GetAverageJourneysQueryHookResult = ReturnType<typeof useGetAverageJourneysQuery>;
export type GetAverageJourneysLazyQueryHookResult = ReturnType<typeof useGetAverageJourneysLazyQuery>;
export type GetAverageJourneysQueryResult = Apollo.QueryResult<GetAverageJourneysQuery, GetAverageJourneysQueryVariables>;
export const GetTopReturnStationsDocument = gql`
    query getTopReturnStations {
  stations(order_by: {journey_returns: desc}, limit: 5) {
    fid
    id
    nimi
    journey_returns
  }
}
    `;

/**
 * __useGetTopReturnStationsQuery__
 *
 * To run a query within a React component, call `useGetTopReturnStationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopReturnStationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopReturnStationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTopReturnStationsQuery(baseOptions?: Apollo.QueryHookOptions<GetTopReturnStationsQuery, GetTopReturnStationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTopReturnStationsQuery, GetTopReturnStationsQueryVariables>(GetTopReturnStationsDocument, options);
      }
export function useGetTopReturnStationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTopReturnStationsQuery, GetTopReturnStationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTopReturnStationsQuery, GetTopReturnStationsQueryVariables>(GetTopReturnStationsDocument, options);
        }
export type GetTopReturnStationsQueryHookResult = ReturnType<typeof useGetTopReturnStationsQuery>;
export type GetTopReturnStationsLazyQueryHookResult = ReturnType<typeof useGetTopReturnStationsLazyQuery>;
export type GetTopReturnStationsQueryResult = Apollo.QueryResult<GetTopReturnStationsQuery, GetTopReturnStationsQueryVariables>;