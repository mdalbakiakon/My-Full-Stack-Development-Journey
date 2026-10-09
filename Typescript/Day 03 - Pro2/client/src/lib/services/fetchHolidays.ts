import type { Country, Holiday } from "@/types/holidays";
import { isHoliday } from "../utils/isHoliday";


// caldays api for fetching holidays
async function fetchHolidays(countryCode: Country): Promise<Holiday[]> {
    try {
        const response = await fetch(`https://caldays.com/api/holidays/${countryCode}`);

        if (!response.ok) {
            throw new Error("failed in fetching holidays");
        }

        const data = await response.json();

        const refined_data: unknown[] = data.holidays?.map((elem: Holiday) => ({
            date: new Date(elem.date).toISOString(),
            name: elem.name,
        })
        );
        return refined_data.filter(isHoliday);

    } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        throw new Error("something went wrong");
    }
}
