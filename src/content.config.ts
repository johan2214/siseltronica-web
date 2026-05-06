import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/products" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        isNew: z.boolean().optional(),
        isPopular: z.boolean().optional(),
        isOffer: z.boolean().optional(),
        isWiFi: z.boolean().optional(),
        iconColor: z.enum(['blue', 'red', 'green', 'yellow']),
        iconType: z.string(),
        order: z.number().optional()
    })
});

export const collections = {
    'products': products,
};
