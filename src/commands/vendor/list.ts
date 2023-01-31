import { Command } from '@oclif/core';
import { IoddFinderApi } from '../../logic/ioddfinder-api';

export default class World extends Command {
  static description = 'Obtain a list of available vendors.';

  static examples = [
    `<%= config.bin %> <%= command.id %> list
`,
  ];

  static flags = {};

  static args = {};

  async run(): Promise<void> {
    const vendors = await IoddFinderApi.getVendorList();
    for (const vendor of vendors) {
      this.log(vendor);
    }
  }
}
