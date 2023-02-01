import { Args, Command, Flags, ux } from '@oclif/core';
import delay = require('delay');
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

    if (flags.vendor) {
      const vendorName = flags.vendor;

      for await (let device of IoddFinderApi.GetDevicesForVendor(vendorName)) {
        try {
          ux.action.start(`Downloading iodd for device Id ${device.deviceId}`, 'downloading');
          const fileName = await IoddFinderApi.DownloadIoddRated('./out', device.vendorId, device.ioddId);
          const delayMs = this.getRndDelay();

          ux.action.start(`Delaying for ${delayMs} ms`);

          await delay(delayMs);
        } catch (e) {
          printError(e, this);
        }
      }
    }
    const vendors = await IoddFinderApi.getVendorList();
    for (const vendor of vendors) {
      this.log(vendor);
    }
  }

  getRndDelay() {
    return Math.floor(Math.random() * 10000);
  }
}
