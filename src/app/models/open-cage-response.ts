import { Geometry } from "./geometry";

export interface OpenCageResponse {
    results: {
        geometry: Geometry;
    }[];
}