import { Args, Command, Flags } from '@oclif/core';
import { IoddFinderApi } from '../logic/api-models/ioddfinder-api';

export default class Download extends Command {
  static description = 'Download iodds';

  static examples = [
    `<%= config.bin %> <%= command.id %> list
`,
  ];

  static args = {
    vendor: Args.string({
      name: 'vendor',
      required: false,

      description: 'Defines the vendor for which the devices iodds shall be downloadd',
    }),
  };

  static flags = {
    all: Flags.boolean({
      char: 'a',
    }),
  };

  async run(): Promise<void> {
    const vendors = await IoddFinderApi.getVendorList();
    for (const vendor of vendors) {
      this.log(vendor);
    }
  }
}
