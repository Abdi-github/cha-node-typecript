import dotenv from 'dotenv';
import bunyan from 'bunyan';

dotenv.config();

class Config {
  public NODE_ENV: string | undefined;
  public DATABASE_URL: string | undefined;
  public JWT_SECRET_KEY: string | undefined;
  public COOKIE_SECRET_KEY1: string | undefined;
  public COOKIE_SECRET_KEY2: string | undefined;
  public CLIENT_URL: string | undefined;

  constructor() {
    this.NODE_ENV = process.env.NODE_ENV;
    this.DATABASE_URL = process.env.DATABASE_URL;
    this.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
    this.COOKIE_SECRET_KEY1 = process.env.COOKIE_SECRET_KEY1;
    this.COOKIE_SECRET_KEY2 = process.env.COOKIE_SECRET_KEY2;
    this.CLIENT_URL = process.env.CLIENT_URL;
  }

  public createLogger(name: string): bunyan {
    return bunyan.createLogger({ name, level: 'debug' });
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }
}

export const config: Config = new Config();
