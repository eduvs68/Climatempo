import { Hourly } from "./hourly"

export interface WeatherData{
    latitude?: number,
    longitude?: number,
    elevation?: number,
    generationtime_ms?: number,
    utc_offset_seconds?: number,
    timezone?: string,
    timezone_abbreviation?: string,
    hourly?: Hourly,
    hourly_units?: {
        temperature_2m?: string
    }
}