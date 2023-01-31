import { Args, Command, Flags } from '@oclif/core';
import { AxiosError } from 'axios';
import { printError } from '../logic/error-handling';
import { IoddFinderApi } from '../logic/ioddfinder-api';

export default class Download extends Command {
  static description = 'Download iodds';

  static examples = [
    `<%= config.bin %> <%= command.id %> list
`,
  ];

  static args = {};

  static flags = {
    vendor: Flags.string({
      char: 'v',
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(Download);
    try {
    } catch (e) {
      printError(e, this);
    }
    if (flags.vendor) {
      const vendorName = flags.vendor;

      for await (let device of IoddFinderApi.GetDevicesForVendor(vendorName)) {
        await IoddFinderApi.DownloadIoddRated('', device.vendorId, device.ioddId);
      }
    }
    const vendors = await IoddFinderApi.getVendorList();
    for (const vendor of vendors) {
      this.log(vendor);
    }
  }
}
