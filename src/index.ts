import { SetupServer } from './server';
import logger from './logger';
import config from 'config';

enum ExitStatus {
  Failure = 1,
  Success = 0
}

