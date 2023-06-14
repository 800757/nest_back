/*import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';

@Module({
  providers: [
    {
      inject: [ConfigService],
      provide: 'REDIS_CLIENT',
      useFactory: async (config: ConfigService) => {
        const client = createClient({
          socket: {
            host: config.get<string>('REDIS_HOST'),
            port: config.get<number>('REDIS_PORT'),
          },
        });
        await client.connect();
        return client;
      },
    },
  ],
  exports: ['REDIS_CLIENT'],
})
export class RedisModule {}*/
