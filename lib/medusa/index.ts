import {
  Product as MedusaProduct,
  ProductVariant as Variant,
} from "@medusajs/medusa";
import { isMedusaError } from "@lib/type-guards";

const ENDPOINT =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_API ?? "http://localhost:9000";
const MEDUSA_API_KEY = process.env.MEDUSA_API_KEY ?? "";

export default async function medusaRequest({
  cache = "force-cache",
  method,
  path,
  payload,
  tags,
}: {
  cache?: RequestCache;
  method: string;
  path: string;
  payload?: Record<string, unknown> | undefined;
  tags?: string[];
}) {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "x-publishable-key": MEDUSA_API_KEY,
    },
    cache,
    ...(tags && { next: { tags } }),
  };

  if (path.includes("/carts")) {
    options.cache = "no-cache";
  }

  if (payload) {
    options.body = JSON.stringify(payload);
  }

  try {
    console.log(`${ENDPOINT}/store${path}`);
    const result = await fetch(`${ENDPOINT}/store${path}`, options);

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    if (isMedusaError(e)) {
      throw {
        status: e.status || 500,
        message: e.message,
      };
    }

    throw {
      error: e,
    };
  }
}

export async function getProducts(): Promise<MedusaProduct[]> {
  let res;

  res = await medusaRequest({
    method: "GET",
    path: `/products?limit=100`,
    tags: ["products"],
  });

  if (!res) {
    console.error("Couldn't fetch products");
    return [];
  }

  let products: MedusaProduct[] = res?.body.products;

  return products;
}

export async function getFeaturedProducts(): Promise<MedusaProduct[]> {
  const res = await medusaRequest({
    method: "GET",
    path: `/store`,
  });

  if (!res) {
    console.error("Couldn't fetch products");
    return [];
  }

  return res?.body.products;
}
