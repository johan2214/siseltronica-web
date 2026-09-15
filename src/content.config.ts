import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/products" }),
    schema: z.object({
        title: z.string(),
        shortDescription: z.string().optional(),
        description: z.string(),
        category: z.string(), // sub-category ID
        parentCategory: z.string().optional(),
        isNew: z.boolean().optional(),
        isPopular: z.boolean().optional(),
        isOffer: z.boolean().optional(),
        isWiFi: z.boolean().optional(),
        stockStatus: z.enum(['instock', 'outofstock', 'onorder']).default('instock'),
        specs: z.record(z.string()).optional(),
        iconColor: z.string().optional(),
        iconType: z.string().optional(),
        image: z.string().optional(),
        images: z.array(z.string()).optional(), // For galleries
        datasheet: z.string().optional(), // PDF link
        order: z.number().optional().default(0)
    })
});

const categories = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/categories" }),
    schema: z.object({
        name: z.string(),
        description: z.string().optional(),
        image: z.string().optional(),
        parentId: z.string().optional(), // If null, it's a parent category
        order: z.number().optional()
    })
});

export const collections = {
    'products': products,
    'categories': categories,
};
