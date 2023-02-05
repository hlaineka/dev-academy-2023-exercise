import { Stations } from "../../generated/graphql";

export type DashboardData = {
	topDepartureStations?: Array<Stations>;
};

export type TopDeparturesProps = {
	topDepartureStations: Array<Stations> | undefined | null
};

export type TopReturnsProps = {
	topReturnStations: Array<Stations> | undefined | null
};