import { migrate } from 'drizzle-orm/bun-sqlite/migrator';
import { db } from '@/db';
import config from '$/drizzle.config';

async function main() {
  await migrate(db, {
    migrationsFolder: config.out!
  });
}

main();