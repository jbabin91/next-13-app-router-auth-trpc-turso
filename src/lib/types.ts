import type { z } from 'zod';

import type { selectFrameworkSchema } from '@/lib/db/schema';

export type Framework = z.infer<typeof selectFrameworkSchema>;
