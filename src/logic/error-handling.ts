import { Command } from '@oclif/core';
import { AxiosError } from 'axios';

export function printError(e: any, cmd: Command) {
  if (e.isAxiosError) {
    const axiosError = e as AxiosError;
    cmd.log('Received network error:');
    cmd.error(axiosError);
  } else {
    cmd.log('An error occured while executing your command:');
    cmd.error(e);
  }
}
