import { z } from "zod";

const cranVersionSchema = z.object({
  Version: z.string().optional(),
});

export async function readCranVersion(packageName: string): Promise<string> {
  const response = await fetch(`https://crandb.r-pkg.org/${packageName}`);

  if (!response.ok) {
    console.error(
      `Failed to fetch version for ${packageName}. HTTP status: ${response.status}`
    );
    return "N/A";
  }

  try {
    const data = await response.json();
    const result = cranVersionSchema.safeParse(data);

    if (!result.success) {
      console.error(
        `Validation error for ${packageName}:`,
        result.error.errors
      );
      return "N/A";
    }

    return result.data.Version || "N/A";
  } catch (error) {
    console.error(`Failed to fetch or parse data for ${packageName}:`, error);
    return "N/A";
  }
}
