import Firecrawl from '@mendable/firecrawl-js';

const firecrawl = new Firecrawl({ apiKey: process.env.FIRECRAWL_API_KEY });

export async function scrapeProduct(url) {
    try {
        const result = await firecrawl.extract({
            urls: [url],
            prompt:
                "Extract the product name as 'productName', current price as a number as 'currentPrice', currency code (USD, EUR, etc) as 'currencyCode', and product image URL as 'productImageUrl' if available",
            schema: {
                type: "object",
                properties: {
                    productName: { type: "string" },
                    currentPrice: { type: "number" },
                    currencyCode: { type: "string" },
                    productImageUrl: { type: "string" },
                },
                required: ["productName", "currentPrice"],
            },
        });

        console.log("Firecrawl Extract Result:", JSON.stringify(result, null, 2));

        if (!result.success || result.status === 'failed') {
            throw new Error(`Firecrawl extraction failed: ${result.error || 'Unknown error'}`);
        }

        const extractedData = result.data;

        if (!extractedData || !extractedData.productName) {
            throw new Error(`No data extracted from URL: ${JSON.stringify(result)}`);
        }

        return extractedData;
    } catch (error) {
        console.error("Firecrawl scrape error:", error);
        throw new Error(`Failed to scrape product: ${error.message}`);
    }
}